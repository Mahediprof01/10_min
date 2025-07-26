'use client'

import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { useCallback } from 'react'
import { fetchCourseDataWithRetry } from './server-action'
import { getCourseInstructor, getCourseFeatures, getCourseLearningPoints, getCourseTestimonials, getCourseFaqs, getCourseFeatureExplanations, getCourseGroupJoinEngagement } from './utils'
import type { CourseStoreType, CourseData } from './type'
import { LANGUAGE_OPTIONS } from '@/constant/api-path'
import { shallow } from 'zustand/shallow'

// Create empty arrays as constants to avoid creating new references
const EMPTY_ARRAY: never[] = []

// Initial state
const initialState = {
  courseData: null,
  isLoading: false,
  error: null,
  language: LANGUAGE_OPTIONS.ENGLISH as 'en' | 'bn',
}

// Create cached references for filtered arrays
let cachedVisibleChecklist: any[] = EMPTY_ARRAY
let cachedHiddenChecklist: any[] = EMPTY_ARRAY  
let cachedVideoMedia: any[] = EMPTY_ARRAY
let cachedImageMedia: any[] = EMPTY_ARRAY
let lastChecklistData: any[] | null = null
let lastMediaData: any[] | null = null

// Create the store
export const useCourseStore = create<CourseStoreType>()(
  devtools(
    subscribeWithSelector(
      persist(
        (set, get) => ({
          ...initialState,

                  // Fetch course data
        fetchCourseData: async (language?: 'en' | 'bn') => {
          const currentLanguage = language || get().language
          
          console.log('🏪 Store: Starting course data fetch...', { language: currentLanguage })
          set({ isLoading: true, error: null }, false, 'fetchCourseData/start')

          try {
            const courseData = await fetchCourseDataWithRetry(currentLanguage)
            
            console.log('🏪 Store: Course data received successfully', {
              title: courseData.title,
              slug: courseData.slug,
              sectionsCount: courseData.sections.length,
              mediaCount: courseData.media.length,
              checklistCount: courseData.checklist.length
            })
            
            // Reset cached arrays when new data is loaded
            cachedVisibleChecklist = EMPTY_ARRAY
            cachedHiddenChecklist = EMPTY_ARRAY
            cachedVideoMedia = EMPTY_ARRAY
            cachedImageMedia = EMPTY_ARRAY
            lastChecklistData = null
            lastMediaData = null
            
            console.log('🏪 Store: Cache cleared, storing new data...')
            
            set(
              { 
                courseData, 
                isLoading: false, 
                error: null,
                language: currentLanguage 
              },
              false,
              'fetchCourseData/success'
            )
            
            console.log('🏪 Store: Data stored successfully!')
          } catch (error) {
            const errorMessage = error instanceof Error 
              ? error.message 
              : 'Failed to fetch course data'
            
            console.error('🏪 Store: Error storing course data:', {
              error: errorMessage,
              errorType: error instanceof Error ? error.constructor.name : typeof error
            })
            
            set(
              { 
                isLoading: false, 
                error: errorMessage,
                courseData: null 
              },
              false,
              'fetchCourseData/error'
            )
          }
        },

          // Set language preference
          setLanguage: (language: 'en' | 'bn') => {
            set({ language }, false, 'setLanguage')
            // Optionally refetch data with new language
            if (get().courseData) {
              get().fetchCourseData(language)
            }
          },

          // Clear error
          clearError: () => {
            set({ error: null }, false, 'clearError')
          },

          // Reset store to initial state
          reset: () => {
            // Reset cached arrays
            cachedVisibleChecklist = EMPTY_ARRAY
            cachedHiddenChecklist = EMPTY_ARRAY
            cachedVideoMedia = EMPTY_ARRAY
            cachedImageMedia = EMPTY_ARRAY
            lastChecklistData = null
            lastMediaData = null
            
            set(initialState, false, 'reset')
          },
        }),
        {
          name: 'course-store', // unique name for localStorage key
          partialize: (state) => ({
            language: state.language,
            courseData: state.courseData,
          }), // Only persist certain fields
          version: 1, // version for data migration
        }
      )
    ),
    {
      name: 'course-store', // DevTools name
    }
  )
)

// Selector hooks for better performance
export const useCourseData = () => useCourseStore((state) => state.courseData)
export const useIsLoading = () => useCourseStore((state) => state.isLoading)
export const useError = () => useCourseStore((state) => state.error)
export const useLanguage = () => useCourseStore((state) => state.language)

// Action hooks - each action separately to avoid object recreation
export const useFetchCourseData = () => useCourseStore((state) => state.fetchCourseData)
export const useSetLanguage = () => useCourseStore((state) => state.setLanguage)
export const useClearError = () => useCourseStore((state) => state.clearError)
export const useReset = () => useCourseStore((state) => state.reset)

// Combined hook for convenience
export const useCourse = () => {
  const courseData = useCourseData()
  const isLoading = useIsLoading()
  const error = useError()
  const language = useLanguage()
  const fetchCourseData = useFetchCourseData()
  const setLanguage = useSetLanguage()
  const clearError = useClearError()
  const reset = useReset()

  return {
    courseData,
    isLoading,
    error,
    language,
    fetchCourseData,
    setLanguage,
    clearError,
    reset,
  }
}

// Selector for specific course sections
export const useCourseSection = (sectionType: string) => 
  useCourseStore((state) => 
    state.courseData?.sections.find(section => section.type === sectionType)
  )

// Selector for course instructor  
export const useCourseInstructor = () => 
  useCourseStore((state) => {
    if (!state.courseData) return null
    return getCourseInstructor(state.courseData.sections)
  })

// Selector for course features
export const useCourseFeatures = () => 
  useCourseStore((state) => {
    if (!state.courseData) return EMPTY_ARRAY
    return getCourseFeatures(state.courseData.sections)
  })

// Selector for course learning points
export const useCourseLearningPoints = () => 
  useCourseStore((state) => {
    if (!state.courseData) return EMPTY_ARRAY
    return getCourseLearningPoints(state.courseData.sections)
  })

// Selector for course testimonials
export const useCourseTestimonials = () => 
  useCourseStore((state) => {
    if (!state.courseData) return EMPTY_ARRAY
    return getCourseTestimonials(state.courseData.sections)
  })

// Selector for course FAQs
export const useCourseFaqs = () => 
  useCourseStore((state) => {
    if (!state.courseData) return EMPTY_ARRAY
    return getCourseFaqs(state.courseData.sections)
  })

// Selector for course feature explanations
export const useCourseFeatureExplanations = () => 
  useCourseStore((state) => {
    if (!state.courseData) return EMPTY_ARRAY
    return getCourseFeatureExplanations(state.courseData.sections)
  })

// Selector for course group join engagement
export const useCourseGroupJoinEngagement = () => 
  useCourseStore((state) => {
    if (!state.courseData) return EMPTY_ARRAY
    return getCourseGroupJoinEngagement(state.courseData.sections)
  })

// Selector for course checklist (all items)
export const useCourseChecklist = () => 
  useCourseStore((state) => {
    if (!state.courseData?.checklist) return EMPTY_ARRAY
    return state.courseData.checklist
  })

// Selector for visible course checklist items
export const useCourseChecklistVisible = () => 
  useCourseStore((state) => {
    if (!state.courseData?.checklist) return EMPTY_ARRAY
    
    // Use cached result if data hasn't changed
    if (lastChecklistData === state.courseData.checklist && cachedVisibleChecklist !== EMPTY_ARRAY) {
      return cachedVisibleChecklist
    }
    
    // Update cache
    lastChecklistData = state.courseData.checklist
    cachedVisibleChecklist = state.courseData.checklist.filter(
      item => item.list_page_visibility === true
    )
    
    return cachedVisibleChecklist
  })

// Selector for hidden course checklist items  
export const useCourseChecklistHidden = () => 
  useCourseStore((state) => {
    if (!state.courseData?.checklist) return EMPTY_ARRAY
    
    // Use cached result if data hasn't changed
    if (lastChecklistData === state.courseData.checklist && cachedHiddenChecklist !== EMPTY_ARRAY) {
      return cachedHiddenChecklist
    }
    
    // Update cache  
    lastChecklistData = state.courseData.checklist
    cachedHiddenChecklist = state.courseData.checklist.filter(
      item => item.list_page_visibility === false
    )
    
    return cachedHiddenChecklist
  })

// Selector for course media (all items)
export const useCourseMedia = () => 
  useCourseStore((state) => {
    if (!state.courseData?.media) return EMPTY_ARRAY
    return state.courseData.media
  })

// Selector for course video media
export const useCourseVideoMedia = () => 
  useCourseStore((state) => {
    if (!state.courseData?.media) return EMPTY_ARRAY
    
    // Use cached result if data hasn't changed
    if (lastMediaData === state.courseData.media && cachedVideoMedia !== EMPTY_ARRAY) {
      return cachedVideoMedia
    }
    
    // Update cache
    lastMediaData = state.courseData.media
    cachedVideoMedia = state.courseData.media.filter(
      media => media.resource_type === 'video'
    )
    
    return cachedVideoMedia
  })

// Selector for course image media
export const useCourseImageMedia = () => 
  useCourseStore((state) => {
    if (!state.courseData?.media) return EMPTY_ARRAY
    
    // Use cached result if data hasn't changed
    if (lastMediaData === state.courseData.media && cachedImageMedia !== EMPTY_ARRAY) {
      return cachedImageMedia
    }
    
    // Update cache
    lastMediaData = state.courseData.media
    cachedImageMedia = state.courseData.media.filter(
      media => media.resource_type === 'image'
    )
    
    return cachedImageMedia
  })

// Hook to initialize store (call this in app initialization)
export const useInitializeCourseStore = () => {
  const { fetchCourseData, courseData, language } = useCourse()

  const initialize = async (preferredLanguage?: 'en' | 'bn') => {
    if (!courseData) {
      await fetchCourseData(preferredLanguage || language)
    }
  }

  return { initialize }
}
