import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"
import type { ChecklistItem } from "@/types/course"

interface CourseChecklistProps {
  checklist: ChecklistItem[]
  title?: string
}

export function CourseChecklist({ checklist, title = "This Course Includes" }: CourseChecklistProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {checklist.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              {item.included ? (
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              ) : (
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
              )}
              <span className={`text-sm ${item.included ? "text-gray-700" : "text-gray-500"}`}>{item.text}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
