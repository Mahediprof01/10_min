import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, BookOpen } from "lucide-react"
import type { Instructor } from "@/types/course"

interface InstructorSectionProps {
  instructors: Instructor[]
}

export function InstructorSection({ instructors }: InstructorSectionProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{instructors.length > 1 ? "Course Instructors" : "Course Instructor"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="flex flex-col sm:flex-row items-start gap-4">
              <Avatar className="h-16 w-16 flex-shrink-0">
                <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
                <AvatarFallback>
                  {instructor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-gray-900">{instructor.name}</h3>
                <p className="text-gray-600 mb-2">{instructor.title}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" /> {instructor.rating} Rating
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> {instructor.students.toLocaleString()}+ Students
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" /> {instructor.courses}+ Courses
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
