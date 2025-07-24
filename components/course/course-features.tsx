import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Clock, Award } from "lucide-react"
import type { Feature } from "@/types/course"

interface CourseFeaturesProps {
  features: Feature[]
  title?: string
}

const iconMap = {
  book: BookOpen,
  users: Users,
  clock: Clock,
  award: Award,
}

export function CourseFeatures({ features, title = "How the Course is Structured" }: CourseFeaturesProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || BookOpen

            return (
              <div key={feature.id} className={`flex items-center space-x-3 p-4 rounded-lg ${feature.color}`}>
                <div className={`p-2 rounded-full text-white ${feature.color.replace("50", "500")}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
