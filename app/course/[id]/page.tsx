import { CourseDataProvider } from "@/app/action/business"
import { fetchCourseData } from "@/app/action/server-action"
import { Metadata } from "next"
import { CoursePageContent } from "@/components/course/course-page-content"

// Define metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  
  try {
    const courseData = await fetchCourseData('en')
    
    return {
      title: courseData.seo?.title || courseData.title,
      description: courseData.seo?.description || courseData.description,
      openGraph: {
        title: courseData.seo?.title || courseData.title,
        description: courseData.seo?.description || courseData.description,
        images: [courseData.media?.find(m => m.name === 'thumbnail')?.resource_value || '/placeholder.jpg'],
      },
    }
  } catch (error) {
    // Fallback metadata
    return {
      title: "IELTS Course by Munzereen Shahid",
      description: "Get complete preparation of Academic IELTS and General Training IELTS in one course!",
    }
  }
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <CourseDataProvider initialLanguage="en">
      <CoursePageContent />
    </CourseDataProvider>
  )
}
