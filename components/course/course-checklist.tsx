import { CheckCircle } from 'lucide-react'
import { Checklist } from '@/types/course'

interface CourseChecklistProps {
  checklist: Checklist
}

export function CourseChecklist({ checklist }: CourseChecklistProps) {
  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{checklist.title}</h3>
      <div className="space-y-4">
        {checklist.items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="text-green-500 flex-shrink-0 mt-1">
              <CheckCircle className="h-5 w-5" />
            </div>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
