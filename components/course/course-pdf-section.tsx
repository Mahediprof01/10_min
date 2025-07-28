import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface GroupJoinEngagement {
  title: string
  description: string
  titleColor: string
  descriptionColor: string
  thumbnail?: string
  cta: {
    text: string
    clicked_url: string
  }
}

interface CoursePdfSectionProps {
  groupJoinEngagement: GroupJoinEngagement
}

export function CoursePdfSection({ groupJoinEngagement }: CoursePdfSectionProps) {
  return (
    <Card className="bg-gradient-to-r from-[#001529] to-[#003152] text-white border-0 overflow-hidden min-h-[200px] md:h-[340px] rounded-sm">
      <CardContent className="p-6 md:p-8 h-full">
        <div className="flex gap-8 h-full">
          {/* Left Column */}
          <div className="flex-1">
            <div className="flex flex-col space-y-4">
              <div className="pb-2">
                <Image
                  src="/images/pdflogo.jpeg"
                  alt="PDF Logo"
                  width={190}
                  height={40}
                  priority
                />
              </div>
              <div className="space-y-4">
                <h4 
                  className="font-bold text-2xl md:text-3xl leading-tight" 
                  style={{ color: groupJoinEngagement.titleColor }}
                >
                  {groupJoinEngagement.title}
                </h4>
                <p 
                  className="text-base md:text-lg pb-4" 
                  style={{ color: groupJoinEngagement.descriptionColor }}
                >
                  {groupJoinEngagement.description}
                </p>
                <a 
                  href={groupJoinEngagement.cta.clicked_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#00A651] hover:bg-[#008C44] text-white px-6 md:px-8 py-3 text-base font-medium w-full md:w-auto">
                    {groupJoinEngagement.cta.text}
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Hidden on mobile */}
          <div className="hidden md:flex w-[300px] items-center">
            {groupJoinEngagement.thumbnail ? (
              <div className="relative w-full h-[220px]">
                <Image
                  src={groupJoinEngagement.thumbnail}
                  alt={groupJoinEngagement.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2 w-full">
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="relative aspect-square">
                    <Image
                      src="/placeholder-user.jpg"
                      alt={`IELTS Expert ${i + 1}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}