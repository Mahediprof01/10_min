import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CourseDescriptionProps {
  description: string
}

export function CourseDescription({ description }: CourseDescriptionProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Course Description</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
    </Card>
  )
}
