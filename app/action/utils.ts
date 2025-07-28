import type { CourseData } from './type'

/**
 * Validates if the API response has the required fields
 * @param data - Course data to validate
 * @returns boolean
 */
export function validateCourseData(data: any): data is CourseData {
  return (
    data &&
    typeof data === 'object' &&
    typeof data.id === 'number' &&
    typeof data.title === 'string' &&
    typeof data.slug === 'string' &&
    Array.isArray(data.media) &&
    Array.isArray(data.checklist) &&
    Array.isArray(data.sections) &&
    data.seo &&
    data.cta_text
  )
}

/**
 * Gets the course instructor information from sections
 * @param sections - Course sections array
 * @returns InstructorValue | null
 */
export function getCourseInstructor(sections: CourseData['sections']) {
  const instructorSection = sections.find(section => section.type === 'instructors')
  return instructorSection?.values?.[0] || null
}

/**
 * Gets course features from sections
 * @param sections - Course sections array
 * @returns FeatureValue[]
 */
export function getCourseFeatures(sections: CourseData['sections']) {
  const featuresSection = sections.find(section => section.type === 'features')
  return featuresSection?.values || []
}

/**
 * Gets course learning points from sections
 * @param sections - Course sections array
 * @returns PointerValue[]
 */
export function getCourseLearningPoints(sections: CourseData['sections']) {
  const pointersSection = sections.find(section => section.type === 'pointers')
  return pointersSection?.values || []
}

/**
 * Gets course testimonials from sections
 * @param sections - Course sections array
 * @returns TestimonialValue[]
 */
export function getCourseTestimonials(sections: CourseData['sections']) {
  const testimonialsSection = sections.find(section => section.type === 'testimonials')
  return testimonialsSection?.values || []
}


/**
 * Gets course feature explanations from sections
 * @param sections - Course sections array
 * @returns FeatureExplanationValue[]
 */
export function getCourseFeatureExplanations(sections: CourseData['sections']) {
  const featureExplanationsSection = sections.find(section => section.type === 'feature_explanations')
  return featureExplanationsSection?.values || []
}

/**
 * Gets course group join engagement from sections
 * @param sections - Course sections array
 * @returns GroupJoinValue[]
 */
export function getCourseGroupJoinEngagement(sections: CourseData['sections']) {
  const groupJoinSection = sections.find(section => section.type === 'group_join_engagement')
  return groupJoinSection?.values || []
}

/**
 * Gets course about information from sections
 * @param sections - Course sections array
 * @returns AboutValue[]
 */
export function getCourseAbout(sections: CourseData['sections']) {
  const aboutSection = sections.find(section => section.type === 'about')
  return aboutSection?.values || []
} 