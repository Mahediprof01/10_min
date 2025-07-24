import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import type { LearningPoint } from "@/types/course"

interface LearningPointsProps {
  points: LearningPoint[]
  title?: string
}

export function LearningPoints({ points, title = "What You Will Learn" }: LearningPointsProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((point) => (
            <div key={point.id} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm leading-relaxed">{point.text}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
