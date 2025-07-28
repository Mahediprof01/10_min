import Image from "next/image"
import { Play, FileText, BookOpen, Users } from "lucide-react"

interface Feature {
  id: string
  title: string
  subtitle: string
  icon?: string
}

interface CourseLayoutSectionProps {
  features: Feature[]
}

export function CourseLayoutSection({ features }: CourseLayoutSectionProps) {
  const colors = [
    'bg-[#22C55E]',
    'bg-[#3B82F6]', 
    'bg-[#F97316]',
    'bg-[#EF4444]'
  ]
  
  const icons = [
    <Play key="play" className="h-6 w-6 text-white" />,
    <FileText key="file" className="h-6 w-6 text-white" />,
    <BookOpen key="book" className="h-6 w-6 text-white" />,
    <Users key="users" className="h-6 w-6 text-white" />
  ]

  return (
    <section id="course-layout">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">How the course is laid out</h2>
      <div className="bg-gradient-to-r from-[#001529] to-[#003152] rounded-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={feature.id} className="flex items-start gap-4">
              <div className={`${colors[index % colors.length]} rounded-full p-3 flex-shrink-0`}>
                {feature.icon ? (
                  <Image 
                    src={feature.icon} 
                    alt="" 
                    width={24} 
                    height={24} 
                    className="text-white"
                  />
                ) : (
                  icons[index % icons.length]
                )}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}