'use client'

import Image from "next/image"
import { useState, useRef } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import React from "react"
import { Play } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Medium } from "@/app/action/type"

interface CourseCarouselProps {
  previewGallery: Medium[]
  thumbnail?: Medium
}

export function CourseCarousel({ previewGallery = [], thumbnail }: CourseCarouselProps) {
  const [activeMedia, setActiveMedia] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const videoRef = useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap()
      setActiveMedia(newIndex)
      
      if (playingVideo !== null && playingVideo !== newIndex) {
        setPlayingVideo(null)
      }
    })
  }, [api, playingVideo])

  
  const mediaItems = previewGallery.length > 0 
    ? previewGallery 
    : thumbnail 
      ? [thumbnail] 
      : [{ name: 'placeholder', resource_type: 'image' as const, resource_value: '/images/reference.png' }]

  const handleMediaClick = (media: Medium, index: number) => {
    if (api) {
      api.scrollTo(index)
      setActiveMedia(index)
    }
    
    if (media.resource_type === 'video') {
      
      if (playingVideo === index) {
        setPlayingVideo(null) 
      } else {
        setPlayingVideo(index) 
      }
    } else {
      
      setPlayingVideo(null)
    }
  }

  const isYouTubeVideo = (value: string) => {
    
    return value.length === 11 && /^[a-zA-Z0-9_-]+$/.test(value)
  }

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  const getMediaSrc = (media: Medium) => {
    if (media.resource_type === 'video') {
      if (isYouTubeVideo(media.resource_value)) {
        return media.thumbnail_url || getYouTubeThumbnail(media.resource_value)
      }
      return media.thumbnail_url || '/placeholder.jpg'
    }
    return media.resource_value
  }

  const getAltText = (media: Medium, index: number) => {
    if (media.resource_type === 'video') {
      if (isYouTubeVideo(media.resource_value)) {
        return `Course Video ${index + 1} - YouTube`
      }
      return `Course Video ${index + 1}`
    }
    return `Course Image ${index + 1}`
  }

  return (
    <div className="relative">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {mediaItems.map((media, index) => (
            <CarouselItem key={`${media.name}-${index}`}>
              <div className="relative aspect-video">
                {/* Show video player if this video is being played */}
                {media.resource_type === 'video' && playingVideo === index ? (
                  isYouTubeVideo(media.resource_value) ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${media.resource_value}?autoplay=1&rel=0&modestbranding=1&fs=1&cc_load_policy=0&iv_load_policy=3&showinfo=0`}
                      title={getAltText(media, index)}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      controls
                      className="w-full h-full object-cover"
                      src={media.resource_value}
                      onEnded={() => setPlayingVideo(null)}
                      onLoadedData={() => {
                        
                        if (videoRef.current) {
                          videoRef.current.play().catch((error) => {
                            console.error('Autoplay failed:', error);
                            
                          });
                        }
                      }}
                      onError={(e) => {
                        console.error('Video failed to load:', media.resource_value);
                        setPlayingVideo(null);
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  /* Show thumbnail with play button */
                  <div 
                    className="relative aspect-video cursor-pointer group h-full"
                    onClick={() => handleMediaClick(media, index)}
                  >
                    <Image
                      src={getMediaSrc(media)}
                      alt={getAltText(media, index)}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Play button overlay for videos */}
                    {media.resource_type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                        <div className="bg-white/90 rounded-full p-3 group-hover:bg-white transition-all">
                          <Play className="h-8 w-8 text-gray-800 fill-gray-800" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {mediaItems.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full" />
          </>
        )}
      </Carousel>

      {/* Thumbnail Strip */}
      {mediaItems.length > 1 && (
        <div className="flex gap-2 p-2 bg-white border-b overflow-hidden">
          {mediaItems.map((media, index) => (
            <button
              key={`thumb-${media.name}-${index}`}
              onClick={() => handleMediaClick(media, index)}
              className={`relative w-[60px] h-[45px] rounded overflow-hidden cursor-pointer flex-shrink-0 group ${
                index === activeMedia ? 'ring-2 ring-green-500' : ''
              }`}
            >
              <Image
                src={getMediaSrc(media)}
                alt={`Preview ${index + 1}`}
                fill
                className="object-cover"
              />
              {/* Mini play button for video thumbnails */}
              {media.resource_type === 'video' && playingVideo !== index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="bg-white/90 rounded-full p-1">
                    <Play className="h-3 w-3 text-gray-800 fill-gray-800" />
                  </div>
                </div>
              )}
              {/* Playing indicator for active video thumbnails */}
              {media.resource_type === 'video' && playingVideo === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-500/80">
                  <div className="bg-white rounded-full p-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 