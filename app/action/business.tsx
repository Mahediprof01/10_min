'use client'

import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useCourse, useCourseInstructor, useCourseFeatures, useCourseLearningPoints, useCourseTestimonials, useCourseFeatureExplanations, useCourseGroupJoinEngagement, useCourseAbout, useCourseChecklist, useCourseChecklistVisible, useCourseMedia, useCourseVideoMedia, useCourseImageMedia } from './store'
import type { CourseData, InstructorValue, FeatureValue, PointerValue, TestimonialValue, FeatureExplanationValue, GroupJoinValue, AboutValue, Checklist, Medium } from './type'

// Course Data Provider Component
export function CourseDataProvider({ 
  children, 
  initialLanguage = 'en' 
}: { 
  children: React.ReactNode
  initialLanguage?: 'en' | 'bn'
}) {
  const { fetchCourseData, isLoading, error, courseData } = useCourse()


  useEffect(() => {
    if (!courseData) {
      fetchCourseData(initialLanguage)
    }
  }, [courseData, fetchCourseData, initialLanguage])

  if (isLoading) {
    return <CourseLoadingState />
  }

  if (error) {
    return <CourseErrorState error={error} onRetry={() => fetchCourseData(initialLanguage)} />
  }
  return <>{children}</>
}

// Loading State Component
export function CourseLoadingState() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
    </div>
  )
}

// Error State Component
export function CourseErrorState({ 
  error, 
  onRetry 
}: { 
  error: string
  onRetry: () => void 
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          onClick={onRetry}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

// Language Switcher Component
export function LanguageSwitcher() {
  const { language, setLanguage, isLoading } = useCourse()

  return (
    <div className="flex items-center space-x-1.5 border rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-gray-50">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
      </svg>
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value as 'en' | 'bn')}
        disabled={isLoading}
        className="text-sm bg-transparent border-none outline-none cursor-pointer"
      >
        <option value="en">EN</option>
        <option value="bn">বাং</option>
      </select>
    </div>
  )
}

// Course Instructor Business Logic
export function useCourseInstructorLogic() {
  const instructor = useCourseInstructor() as InstructorValue | null

  const getInstructorInfo = useMemo(() => {
    if (!instructor) return null

    return {
      name: instructor.name,
      description: instructor.description,
      image: instructor.image,
      shortDescription: instructor.short_description,
      slug: instructor.slug,
      hasInstructorPage: instructor.has_instructor_page,
    }
  }, [instructor])

  const hasInstructor = useMemo(() => !!instructor, [instructor])

  return {
    instructor,
    getInstructorInfo,
    hasInstructor,
  }
}

// Course Features Business Logic
export function useCourseFeaturesLogic() {
  const features = useCourseFeatures() as FeatureValue[]

  const getFormattedFeatures = useMemo(() => {
    return features.map(feature => ({
      id: feature.id,
      title: feature.title,
      subtitle: feature.subtitle,
      icon: feature.icon,
    }))
  }, [features])

  const hasFeatures = useMemo(() => features.length > 0, [features.length])
  const featuresCount = useMemo(() => features.length, [features.length])

  return {
    features,
    getFormattedFeatures,
    hasFeatures,
    featuresCount,
  }
}

// Course Learning Points Business Logic
export function useCourseLearningPointsLogic() {
  const learningPoints = useCourseLearningPoints() as PointerValue[]

  const getFormattedLearningPoints = useMemo(() => {
    return learningPoints.map(point => ({
      id: point.id,
      text: point.text,
      color: point.color,
      icon: point.icon,
    }))
  }, [learningPoints])

  const hasLearningPoints = useMemo(() => learningPoints.length > 0, [learningPoints.length])
  const learningPointsCount = useMemo(() => learningPoints.length, [learningPoints.length])

  return {
    learningPoints,
    getFormattedLearningPoints,
    hasLearningPoints,
    learningPointsCount,
  }
}

// Course Testimonials Business Logic
export function useCourseTestimonialsLogic() {
  const testimonials = useCourseTestimonials() as TestimonialValue[]

  const getFormattedTestimonials = useMemo(() => {
    return testimonials.map(testimonial => ({
      id: testimonial.id,
      name: testimonial.name,
      description: testimonial.description,
      testimonial: testimonial.testimonial,
      profileImage: testimonial.profile_image,
      thumb: testimonial.thumb,
      videoType: testimonial.video_type,
      videoUrl: testimonial.video_url,
    }))
  }, [testimonials])

  const getTestimonialsByScore = useCallback((scorePrefix: string) => {
    return testimonials.filter(testimonial => 
      testimonial.description.toLowerCase().includes(scorePrefix.toLowerCase())
    )
  }, [testimonials])

  const hasTestimonials = useMemo(() => testimonials.length > 0, [testimonials.length])
  const testimonialsCount = useMemo(() => testimonials.length, [testimonials.length])

  return {
    testimonials,
    getFormattedTestimonials,
    getTestimonialsByScore,
    hasTestimonials,
    testimonialsCount,
  }
}


// Course Feature Explanations Business Logic
export function useCourseFeatureExplanationsLogic() {
  const featureExplanations = useCourseFeatureExplanations() as FeatureExplanationValue[]

  const getFormattedFeatureExplanations = useMemo(() => {
    return featureExplanations.map(explanation => ({
      id: explanation.id,
      title: explanation.title,
      checklist: explanation.checklist,
      fileType: explanation.file_type,
      fileUrl: explanation.file_url,
      videoThumbnail: explanation.video_thumbnail,
    }))
  }, [featureExplanations])

  const hasFeatureExplanations = useMemo(() => featureExplanations.length > 0, [featureExplanations.length])
  const featureExplanationsCount = useMemo(() => featureExplanations.length, [featureExplanations.length])

  return {
    featureExplanations,
    getFormattedFeatureExplanations,
    hasFeatureExplanations,
    featureExplanationsCount,
  }
}

// Course Group Join Engagement Business Logic
export function useCourseGroupJoinEngagementLogic() {
  const groupJoinEngagement = useCourseGroupJoinEngagement() as GroupJoinValue[]

  const getFormattedGroupJoinEngagement = useMemo(() => {
    return groupJoinEngagement.map(engagement => ({
      id: engagement.id,
      title: engagement.title,
      description: engagement.description,
      titleColor: engagement.title_color,
      descriptionColor: engagement.description_color,
      thumbnail: engagement.thumbnail || engagement.thuumbnail,  // Handle both correct and legacy spelling
      topLeftIconImg: engagement.top_left_icon_img,
      background: engagement.background,
      cta: engagement.cta,
    }))
  }, [groupJoinEngagement])

  const hasGroupJoinEngagement = useMemo(() => groupJoinEngagement.length > 0, [groupJoinEngagement.length])
  const groupJoinEngagementCount = useMemo(() => groupJoinEngagement.length, [groupJoinEngagement.length])

  return {
    groupJoinEngagement,
    getFormattedGroupJoinEngagement,
    hasGroupJoinEngagement,
    groupJoinEngagementCount,
  }
}

// Course About Business Logic
export function useCourseAboutLogic() {
  const about = useCourseAbout() as AboutValue[]

  const getFormattedAbout = useMemo(() => {
    return about.map(aboutItem => ({
      id: aboutItem.id,
      title: aboutItem.title,
      description: aboutItem.description,
      icon: aboutItem.icon,
    }))
  }, [about])

  const hasAbout = useMemo(() => about.length > 0, [about.length])
  const aboutCount = useMemo(() => about.length, [about.length])

  return {
    about,
    getFormattedAbout,
    hasAbout,
    aboutCount,
  }
}

// Course Checklist Business Logic
export function useCourseChecklistLogic() {
  const checklist = useCourseChecklist()
  const visibleChecklist = useCourseChecklistVisible()

  const getFormattedChecklist = useMemo(() => {
    return (onlyVisible = false) => {
      const targetList = onlyVisible ? visibleChecklist : checklist
      return targetList.map(item => ({
        id: item.id,
        text: item.text,
        icon: item.icon,
        color: item.color,
        listPageVisibility: item.list_page_visibility,
      }))
    }
  }, [checklist, visibleChecklist])

  const getChecklistStats = useMemo(() => {
    return {
      total: checklist.length,
      visible: visibleChecklist.length,
      hidden: checklist.length - visibleChecklist.length,
    }
  }, [checklist.length, visibleChecklist.length])

  const hasChecklist = useMemo(() => checklist.length > 0, [checklist.length])

  return {
    checklist,
    visibleChecklist,
    getFormattedChecklist,
    getChecklistStats,
    hasChecklist,
  }
}

// Course Media Business Logic
export function useCourseMediaLogic() {
  const allMedia = useCourseMedia()
  const videoMedia = useCourseVideoMedia()
  const imageMedia = useCourseImageMedia()

  const getPreviewGallery = useMemo(() => {
    return allMedia.filter(media => media.name === 'preview_gallery')
  }, [allMedia])

  const getThumbnail = useMemo(() => {
    return allMedia.find(media => media.name === 'thumbnail')
  }, [allMedia])

  const getSquareImage = useMemo(() => {
    return allMedia.find(media => media.name === 'sqr_img')
  }, [allMedia])

  const getBookPreview = useMemo(() => {
    return allMedia.find(media => media.name === 'book_preview')
  }, [allMedia])

  const getMediaStats = useMemo(() => {
    return {
      total: allMedia.length,
      videos: videoMedia.length,
      images: imageMedia.length,
    }
  }, [allMedia.length, videoMedia.length, imageMedia.length])

  const hasMedia = useMemo(() => allMedia.length > 0, [allMedia.length])

  return {
    allMedia,
    videoMedia,
    imageMedia,
    getPreviewGallery,
    getThumbnail,
    getSquareImage,
    getBookPreview,
    getMediaStats,
    hasMedia,
  }
}

// Course SEO Business Logic
export function useCourseSeoLogic() {
  const { courseData } = useCourse()

  const getSeoMetaTags = useMemo(() => {
    if (!courseData?.seo) return []
    
    return courseData.seo.defaultMeta.map(meta => ({
      type: meta.type,
      value: meta.value,
      content: meta.content,
    }))
  }, [courseData?.seo])

  const getSeoSchema = useMemo(() => {
    if (!courseData?.seo) return []
    
    return courseData.seo.schema.map(schema => ({
      metaName: schema.meta_name,
      metaValue: schema.meta_value,
      type: schema.type,
    }))
  }, [courseData?.seo])

  const getSeoInfo = useMemo(() => {
    if (!courseData?.seo) return null
    
    return {
      title: courseData.seo.title,
      description: courseData.seo.description,
      keywords: courseData.seo.keywords,
    }
  }, [courseData?.seo])

  const hasSeo = useMemo(() => !!courseData?.seo, [courseData?.seo])

  return {
    getSeoMetaTags,
    getSeoSchema,
    getSeoInfo,
    hasSeo,
  }
}

// Course Price Business Logic (Mock - since pricing isn't in the API response)
export function useCoursePriceLogic() {
  const [price] = useState({
    current: 1000,
    original: 1500,
    discount: 500,
    currency: '৳',
  })

  const getDiscountPercentage = useMemo(() => {
    return Math.round(((price.original - price.current) / price.original) * 100)
  }, [price.original, price.current])

  const getFormattedPrice = useCallback((amount: number) => {
    return `${price.currency}${amount.toLocaleString()}`
  }, [price.currency])

  const currentPrice = useMemo(() => getFormattedPrice(price.current), [getFormattedPrice, price.current])
  const originalPrice = useMemo(() => getFormattedPrice(price.original), [getFormattedPrice, price.original])
  const discountAmount = useMemo(() => getFormattedPrice(price.discount), [getFormattedPrice, price.discount])
  const discountPercentage = useMemo(() => getDiscountPercentage, [getDiscountPercentage])

  return {
    price,
    getDiscountPercentage,
    getFormattedPrice,
    currentPrice,
    originalPrice,
    discountAmount,
    discountPercentage,
  }
}

// Master Course Business Logic Hook
export function useCourseBusinessLogic() {
  const course = useCourse()
  const instructor = useCourseInstructorLogic()
  const features = useCourseFeaturesLogic()
  const learningPoints = useCourseLearningPointsLogic()
  const testimonials = useCourseTestimonialsLogic()
  const featureExplanations = useCourseFeatureExplanationsLogic()
  const groupJoinEngagement = useCourseGroupJoinEngagementLogic()
  const about = useCourseAboutLogic()
  const checklist = useCourseChecklistLogic()
  const media = useCourseMediaLogic()
  const seo = useCourseSeoLogic()
  const pricing = useCoursePriceLogic()

  return {
    course,
    instructor,
    features,
    learningPoints,
    testimonials,
    featureExplanations,
    groupJoinEngagement,
    about,
    checklist,
    media,
    seo,
    pricing,
  }
}
