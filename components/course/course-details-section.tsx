import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface AboutItem {
  id: string
  title: string
  description: string
}

interface CourseDetailsSectionProps {
  aboutItems: AboutItem[]
}

export function CourseDetailsSection({ aboutItems }: CourseDetailsSectionProps) {
  return (
    <section id="course-details">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Course details</h2>
      <Card className="border-0 shadow-sm rounded-sm border">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {aboutItems.map((item, index) => (
              <AccordionItem key={item.id} value={item.id} className="border-0">
                <AccordionTrigger className="flex items-center justify-between w-full p-6 hover:bg-gray-50 no-underline [&[data-state=open]]:no-underline hover:no-underline">
                  <span 
                    className="font-medium text-left" 
                    dangerouslySetInnerHTML={{ __html: item.title || '' }} 
                  />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div 
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: item.description || '' }}
                  />
                </AccordionContent>
                {index < aboutItems.length - 1 && (
                  <div className="border-b border-dotted border-gray-300 mx-6"></div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}