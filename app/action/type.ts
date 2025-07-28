// API Response Types
export interface ApiResponse<T> {
  code: number
  data: T
}

// Media Types
export interface Medium {
  name: string
  resource_type: 'video' | 'image'
  resource_value: string
  thumbnail_url?: string
}

// Checklist Types
export interface Checklist {
  color: string
  icon: string
  id: string
  list_page_visibility: boolean
  text: string
}

// SEO Types
export interface SeoMeta {
  content: string
  type: string
  value: string
}

export interface SeoSchema {
  meta_name: string
  meta_value: string
  type: string
}

export interface Seo {
  defaultMeta: SeoMeta[]
  description: string
  keywords: string[]
  schema: SeoSchema[]
  title: string
}

// CTA Types
export interface CtaText {
  name: string
  value: string
}

// Section Value Types
export interface OfferValue {
  background_color: string
  background_img: string
  checklist_text_color: string
  end_at: string
  id: string
  start_at: string
  template: string
  text: string
}

export interface InstructorValue {
  description: string
  has_instructor_page: boolean
  image: string
  name: string
  short_description: string
  slug: string
}

export interface FeatureValue {
  icon: string
  id: string
  subtitle: string
  title: string
}

export interface GroupJoinValue {
  background: {
    image: string
    primary_color: string
    secondary_color: string
  }
  cta: {
    clicked_url: string
    color: string
    text: string
  }
  description: string
  description_color: string
  id: string
  thumbnail: string
  thuumbnail?: string  // Keeping for backward compatibility
  title: string
  title_color: string
  top_left_icon_img: string
}

export interface PointerValue {
  color: string
  icon: string
  id: string
  text: string
}

export interface AboutValue {
  description: string
  icon: string
  id: string
  title: string
}

export interface FeatureExplanationValue {
  checklist: string[]
  file_type: string
  file_url: string
  id: string
  title: string
  video_thumbnail: string
}

export interface TestimonialValue {
  description: string
  id: string
  name: string
  profile_image: string
  testimonial: string
  thumb: string
  video_type: string
  video_url: string
}


// Section Types
export interface Section {
  type: 'bundle_items' | 'offers' | 'instructors' | 'features' | 'group_join_engagement' | 'pointers' | 'content_preview' | 'about' | 'feature_explanations' | 'free_items' | 'certificate' | 'bundle_certificate' | 'testimonials' | 'requirements' | 'how_to_pay'
  name: string
  description: string
  bg_color: string
  order_idx: number
  values: (OfferValue | InstructorValue | FeatureValue | GroupJoinValue | PointerValue | AboutValue | FeatureExplanationValue | TestimonialValue)[]
}

// Old Info Types
export interface OldInfo {
  cat_id: number
  course_id: number
  platform: string
  skills_cat_id: number
  slug: string
}

// Main Data Interface
export interface CourseData {
  slug: string
  id: number
  title: string
  description: string
  platform: string
  type: string
  modality: string
  old_info: OldInfo
  start_at: string
  media: Medium[]
  checklist: Checklist[]
  seo: Seo
  cta_text: CtaText
  sections: Section[]
  is_cohort_based_course: boolean
  secondary_cta_gro?: string
}

// Store State Types
export interface CourseStore {
  courseData: CourseData | null
  isLoading: boolean
  error: string | null
  language: 'en' | 'bn'
}

// Action Types
export interface CourseActions {
  fetchCourseData: (language?: 'en' | 'bn') => Promise<void>
  setLanguage: (language: 'en' | 'bn') => void
  clearError: () => void
  reset: () => void
}

// Combined Store Type
export type CourseStoreType = CourseStore & CourseActions

// API Error Type
export interface ApiError {
  message: string
  status?: number
  code?: string
}
