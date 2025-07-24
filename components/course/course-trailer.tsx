"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface CourseTrailerProps {
  videoUrl: string
  thumbnail?: string
}

export function CourseTrailer({ videoUrl, thumbnail = '/placeholder.jpg' }: CourseTrailerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeVideoId(videoUrl)

  if (!videoId) {
    return null
  }

  if (!isPlaying) {
    return (
      <div 
        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        <Image
          src={thumbnail}
          alt="Course trailer thumbnail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-4">
            <Play className="h-8 w-8 text-gray-900" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Course Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  )
}
