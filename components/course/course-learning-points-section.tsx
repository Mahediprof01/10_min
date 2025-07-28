interface LearningPoint {
  id: string
  text: string
}

interface CourseLearningPointsSectionProps {
  learningPoints: LearningPoint[]
}

export function CourseLearningPointsSection({ learningPoints }: CourseLearningPointsSectionProps) {
  return (
    <section id="what-you-learn">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">What you will learn by doing the course</h3>
      <div className="bg-white rounded-sm border p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {learningPoints.map((point) => (
            <div key={point.id} className="flex items-start gap-3">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-gray-700 text-[15px]">
                {point.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}