'use client'
import { useState, useEffect } from "react"
import { useCourseBusinessLogic } from "@/app/action/business"
import { Footer } from "@/components/course/footer"
import { Header } from "@/components/course/header"
import { CourseNavigation } from "@/components/course/course-navigation"
import { CourseHeroSection } from "@/components/course/course-hero-section"
import { CourseSidebar } from "@/components/course/course-sidebar"
import { CourseInstructorSection } from "@/components/course/course-instructor-section"
import { CourseLayoutSection } from "@/components/course/course-layout-section"
import { CoursePdfSection } from "@/components/course/course-pdf-section"
import { CourseLearningPointsSection } from "@/components/course/course-learning-points-section"
import { CourseFeaturesSection } from "@/components/course/course-features-section"
import { CourseDetailsSection } from "@/components/course/course-details-section"
import Preloader from "@/components/ui/preloader"

export function CoursePageContent() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  
  const {
    course: { courseData, isLoading, error, fetchCourseData },
    instructor: { getInstructorInfo, hasInstructor },
    features: { getFormattedFeatures, hasFeatures },
    learningPoints: { getFormattedLearningPoints, hasLearningPoints },
    testimonials: { getFormattedTestimonials, hasTestimonials },
    featureExplanations: { getFormattedFeatureExplanations, hasFeatureExplanations },
    groupJoinEngagement: { getFormattedGroupJoinEngagement, hasGroupJoinEngagement },
    about: { getFormattedAbout, hasAbout },
    checklist: { getFormattedChecklist },
    media: { getPreviewGallery, getThumbnail },
    pricing: { currentPrice, originalPrice, discountAmount, discountPercentage }
  } = useCourseBusinessLogic()

  const sections = [
    { id: "course-instructor", label: "Course instructor" },
    { id: "course-layout", label: "How the course is laid out" },
    { id: "what-you-learn", label: "What you will learn by doing the course" },
    { id: "course-features", label: "Course Exclusive Feature" },
    { id: "course-details", label: "Course details" }
  ]

  useEffect(() => {
    if (!courseData && !isLoading && !error) {
      fetchCourseData()
    }
  }, [courseData, isLoading, error, fetchCourseData])

  useEffect(() => {
    if (courseData || error) {
      const timer = setTimeout(() => {
        setIsInitialLoading(false)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [courseData, error])

  if (isInitialLoading || isLoading || (!courseData && !error)) {
    return <Preloader />
  }

  if (error) {
    return <Preloader />
  }

  if (!courseData) {
    return <Preloader />
  }

  // Extract data with proper variable names to avoid conflicts
  const instructorData = getInstructorInfo
  const featuresData = getFormattedFeatures
  const learningPointsData = getFormattedLearningPoints
  const aboutItemsData = getFormattedAbout
  const checklistData = getFormattedChecklist()
  
  // Handle media data properly 
  const thumbnailUrl = getThumbnail?.resource_value || getThumbnail?.thumbnail_url || ''
  const previewGalleryData = getPreviewGallery || []

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <CourseHeroSection
        title={courseData?.title || 'Course Title'}
        description={courseData?.description || ''}
        hasTestimonials={hasTestimonials}
        testimonialsCount={getFormattedTestimonials?.length || 0}
      />

      {/* Navigation Tabs - Hidden on mobile */}
      <div className="hidden md:block">
        <CourseNavigation sections={sections} />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mobile Sidebar - Only visible on mobile */}
          <div className="lg:hidden mb-8">
            <CourseSidebar
              previewGallery={previewGalleryData}
              thumbnail={thumbnailUrl}
              currentPrice={currentPrice}
              originalPrice={originalPrice}
              discountAmount={discountAmount}
              ctaText={courseData?.cta_text?.name || 'Enroll'}
              checklist={checklistData}
              className="w-full rounded-lg"
            />
          </div>

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Instructor */}
            {hasInstructor && instructorData && (
              <CourseInstructorSection instructorInfo={instructorData} />
            )}

            {/* How the course is laid out */}
            {hasFeatures && featuresData?.length > 0 && (
              <CourseLayoutSection features={featuresData} />
            )}

            {/* Free PDF Section */}
            {hasGroupJoinEngagement && getFormattedGroupJoinEngagement?.length > 0 && (
              <CoursePdfSection groupJoinEngagement={getFormattedGroupJoinEngagement[0]} />
            )}

            {/* What you will learn */}
            {hasLearningPoints && learningPointsData?.length > 0 && (
              <CourseLearningPointsSection learningPoints={learningPointsData} />
            )}
           
            {/* Course Exclusive Feature */}
            {hasFeatureExplanations && getFormattedFeatureExplanations?.length > 0 && (
              <CourseFeaturesSection featureExplanations={getFormattedFeatureExplanations} />
            )}

            {/* Course details */}
            {hasAbout && aboutItemsData?.length > 0 && (
              <CourseDetailsSection aboutItems={aboutItemsData} />
            )}
          </div>

          {/* Right Sidebar - Only visible on desktop */}
          <div className="hidden lg:block sticky relative -top-100 z-30">
            <CourseSidebar
              previewGallery={previewGalleryData}
              thumbnail={thumbnailUrl}
              currentPrice={currentPrice}
              originalPrice={originalPrice}
              discountAmount={discountAmount}
              ctaText={courseData?.cta_text?.name || 'Enroll'}
              checklist={checklistData}
              className="w-full max-w-[430px]"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}