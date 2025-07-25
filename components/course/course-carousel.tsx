'use client'

import Image from "next/image"
import { useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CourseCarousel() {
  const [activeImage, setActiveImage] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setActiveImage(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <CarouselItem key={i}>
              <div className="relative aspect-video">
                <Image
                  src="/images/reference.png"
                  alt={`IELTS Course Preview ${i}`}
                  fill
                  className="object-cover"
                  priority={i === 1}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full" />
      </Carousel>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 p-2 bg-white border-b overflow-x-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <button
            key={i}
            onClick={() => {
              if (api) {
                api.scrollTo(i - 1)
                setActiveImage(i - 1)
              }
            }}
            className={`relative w-[60px] h-[45px] rounded overflow-hidden cursor-pointer flex-shrink-0 ${
              i - 1 === activeImage ? 'ring-2 ring-green-500' : ''
            }`}
          >
            <Image
              src="/images/reference.png"
              alt={`Preview ${i}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
} 