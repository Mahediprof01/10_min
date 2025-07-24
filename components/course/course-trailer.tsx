"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useState } from "react"

interface CourseTrailerProps {
  trailerUrl: string
  thumbnail: string
  title: string
}

export function CourseTrailer({ trailerUrl, thumbnail, title }: CourseTrailerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="relative aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
          {isPlaying ? (
            <iframe
              src={getYouTubeEmbedUrl(trailerUrl)}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={thumbnail || "/placeholder.svg?height=200&width=350"}
                alt={`${title} trailer thumbnail`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Button
                  size="lg"
                  className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50"
                  onClick={handlePlay}
                >
                  <Play className="h-6 w-6 ml-1 text-white" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium">Course Preview</div>
                <div className="text-xs opacity-80">Watch trailer</div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
