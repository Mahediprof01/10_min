import { Star } from "lucide-react"

interface CourseHeroSectionProps {
  title: string
  description: string
  hasTestimonials: boolean
  testimonialsCount: number
}

export function CourseHeroSection({ 
  title, 
  description, 
  hasTestimonials, 
  testimonialsCount 
}: CourseHeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-[#001529] to-[#003152] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {title || 'Course Title'}
            </h1>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-medium text-sm">
                {hasTestimonials 
                  ? `${testimonialsCount}+ students rated this course` 
                  : '5 star rating'
                }
              </span>
            </div>
            <div 
              className="text-gray-300 text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: description || '' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}