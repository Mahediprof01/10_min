"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

interface CourseHeaderProps {
  title: string
  rating: number
  reviewCount: number
  studentCount: number
  badges?: string[]
}

export function CourseHeader({ title, rating, reviewCount, studentCount, badges = [] }: CourseHeaderProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {badges.map((badge, index) => (
            <Badge key={index} variant={index === 0 ? "default" : "outline"} className="text-xs">
              {badge}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{title}</CardTitle>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {rating} ({reviewCount.toLocaleString()} reviews)
            </span>
          </div>
          <span className="text-sm text-gray-500">{studentCount.toLocaleString()} students</span>
        </div>
      </CardHeader>
    </Card>
  )
}
