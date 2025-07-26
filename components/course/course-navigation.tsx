"use client"

import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface CourseNavigationProps {
  sections: Array<{
    id: string
    label: string
  }>
}

export function CourseNavigation({ sections }: CourseNavigationProps) {
  const [activeTab, setActiveTab] = useState("course-instructor")

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Account for sticky header
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Container to match left column width (2/3 of grid) */}
        <div className="w-full lg:w-2/3">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {sections.map((section) => (
                <CarouselItem key={section.id} className="pl-2 md:pl-4 basis-auto">
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`py-4 px-4 border-b-2 font-medium whitespace-nowrap transition-colors ${
                      activeTab === section.id
                        ? "border-green-600 text-green-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {section.label}
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
} 