import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface InstructorInfo {
  name: string
  description: string
  image: string
}

interface CourseInstructorSectionProps {
  instructorInfo: InstructorInfo
}

export function CourseInstructorSection({ instructorInfo }: CourseInstructorSectionProps) {
  return (
    <section id="course-instructor">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Course instructor</h2>
      <Card className="border-0 shadow-sm rounded-sm border">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage 
                src={instructorInfo.image}
                alt={instructorInfo.name}
                width={64}
                height={64}
              />
              <AvatarFallback>
                {instructorInfo.name?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'IN'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{instructorInfo.name}</h3>
              <div 
                className="text-gray-600 text-sm mb-2"
                dangerouslySetInnerHTML={{ __html: instructorInfo.description || '' }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}