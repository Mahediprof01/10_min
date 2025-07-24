export interface Instructor {
  name: string;
  image: string;
  qualifications: string[];
  description?: string;
}

export interface Section {
  type: 'instructor' | 'features' | 'pointers' | 'about';
  title: string;
  content: string | string[];
}

export interface Media {
  type: 'youtube';
  url: string;
  thumbnail?: string;
}

export interface Checklist {
  title: string;
  items: string[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  price: number;
  cta_text: string;
  sections: Section[];
  media: Media[];
  checklist: Checklist;
  seo?: SEOData;
  rating?: number;
  reviews?: string;
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
