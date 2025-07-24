export interface CourseData {
  id: string
  title: string
  description: string
  price: number
  cta_text: string
  media: {
    trailer_url: string
    thumbnail: string
  }
  sections: Section[]
  checklist: ChecklistItem[]
  seo: SEOData
}

export interface Section {
  id: string
  type: "instructor" | "features" | "pointers" | "about"
  title: string
  content: any
}

export interface ChecklistItem {
  id: string
  text: string
  included: boolean
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  og_image: string
}

export interface Instructor {
  id: string
  name: string
  title: string
  avatar: string
  rating: number
  students: number
  courses: number
  bio: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

export interface LearningPoint {
  id: string
  text: string
}
