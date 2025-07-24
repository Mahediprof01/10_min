type Locale = 'en' | 'bn'

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    'course.enroll': 'Enroll Now',
    'course.preview': 'Watch Preview',
    'course.instructor': 'Course Instructor',
    'course.layout': 'How the course is laid out',
    'course.learn': 'What you will learn',
    'course.features': 'Course Features',
    'course.details': 'Course Details',
    'course.price': 'Price',
    'course.discount': 'Discount',
    'course.support': 'For support, call',
  },
  bn: {
    'course.enroll': 'এনরোল করুন',
    'course.preview': 'প্রিভিউ দেখুন',
    'course.instructor': 'কোর্স ইন্সট্রাক্টর',
    'course.layout': 'কোর্সটি কিভাবে সাজানো হয়েছে',
    'course.learn': 'আপনি যা শিখবেন',
    'course.features': 'কোর্সের বৈশিষ্ট্য',
    'course.details': 'কোর্সের বিস্তারিত',
    'course.price': 'মূল্য',
    'course.discount': 'ছাড়',
    'course.support': 'সাপোর্টের জন্য কল করুন',
  }
}

export function useTranslation(locale: Locale = 'en') {
  const t = (key: string) => {
    return translations[locale][key] || key
  }

  return { t }
} 