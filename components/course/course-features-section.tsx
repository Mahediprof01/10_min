import Image from "next/image"

interface FeatureExplanation {
  id: string
  title: string
  fileUrl?: string
  checklist?: string[]
}

interface CourseFeaturesSectionProps {
  featureExplanations: FeatureExplanation[]
}

export function CourseFeaturesSection({ featureExplanations }: CourseFeaturesSectionProps) {
  return (
    <section id="course-features">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Exclusive Feature</h2>
      <div className="space-y-6 bg-white rounded-sm border p-6">
        {featureExplanations.map((explanation, index) => (
          <div key={explanation.id}>
            <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-6 md:gap-4">
              <div className="space-y-4 w-full">
                <h3 className="text-lg font-semibold">{explanation.title}</h3>
                <ul className="space-y-3">
                  {explanation.checklist?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  )) || []}
                </ul>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="relative w-full md:w-[180px] h-[180px]">
                  <Image
                    src={explanation.fileUrl || "/placeholder.jpg"}
                    alt={explanation.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            {index < featureExplanations.length - 1 && (
              <div className="border-t my-6"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}