'use server'

import { API_PATHS, API_HEADERS, LANGUAGE_OPTIONS } from '@/constant/api-path'
import type { ApiResponse, CourseData } from './type'

/**
 * Fetches IELTS course data from the API
 * @param language - Language preference ('en' | 'bn')
 * @returns Promise<CourseData>
 */
export async function fetchCourseData(language: 'en' | 'bn' = LANGUAGE_OPTIONS.ENGLISH): Promise<CourseData> {
  try {
    const url = new URL(API_PATHS.IELTS_COURSE)
    url.searchParams.append('lang', language)


    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        [API_HEADERS.SOURCE_PLATFORM]: 'web',
        [API_HEADERS.ACCEPT]: 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'force-cache', // Cache for better performance
      next: {
        revalidate: 3600, // Revalidate every hour
      },
    })

    if (!response.ok) {
      console.error('❌ API Response Failed:', response.status, response.statusText)
      throw new ApiError(
        `Failed to fetch course data: ${response.status} ${response.statusText}`,
        response.status,
        'FETCH_ERROR'
      )
    }

    const apiResponse: ApiResponse<CourseData> = await response.json()


    if (apiResponse.code !== 200) {
      console.error('❌ API Error Code:', apiResponse.code)
      throw new ApiError(
        `API returned error code: ${apiResponse.code}`,
        apiResponse.code,
        'API_ERROR'
      )
    }


    return apiResponse.data
  } catch (error) {
    console.error('💥 Error fetching course data:', error)
    
    if (error instanceof ApiError) {
      throw error
    }

    // Handle network or other errors
    throw new ApiError(
      'Failed to fetch course data. Please try again later.',
      500,
      'UNKNOWN_ERROR'
    )
  }
}

/**
 * Fetches course data with retry logic
 * @param language - Language preference ('en' | 'bn')
 * @param maxRetries - Maximum number of retries (default: 3)
 * @returns Promise<CourseData>
 */
export async function fetchCourseDataWithRetry(
  language: 'en' | 'bn' = LANGUAGE_OPTIONS.ENGLISH,
  maxRetries: number = 3
): Promise<CourseData> {
  let lastError: ApiError

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fetchCourseData(language)
    } catch (error) {
      lastError = error as ApiError
      
      if (attempt === maxRetries) {
        break
      }

      // Wait before retrying (exponential backoff)
      const delay = Math.pow(2, attempt) * 1000
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }

  throw lastError!
}



/**
 * Custom ApiError class for better error handling
 */
class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}
