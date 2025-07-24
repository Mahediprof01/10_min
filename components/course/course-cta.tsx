"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import { useState } from "react"

interface CourseCTAProps {
  price: number
  originalPrice?: number
  ctaText: string
  discount?: number
}

export function CourseCTA({ price, originalPrice, ctaText, discount }: CourseCTAProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleEnroll = () => {
    // Handle enrollment logic
    console.log("Enrolling in course...")
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div>
            <div className="text-3xl font-bold text-gray-900">৳{price.toLocaleString()}</div>
            {originalPrice && originalPrice > price && (
              <>
                <div className="text-sm text-gray-500 line-through">৳{originalPrice.toLocaleString()}</div>
                {discount && (
                  <Badge variant="destructive" className="mt-1">
                    {discount}% OFF
                  </Badge>
                )}
              </>
            )}
          </div>
          <Button className="w-full" size="lg" onClick={handleEnroll}>
            {ctaText}
          </Button>
          <Button variant="outline" className="w-full bg-transparent" onClick={toggleWishlist}>
            <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </Button>
          <div className="text-xs text-gray-500 text-center">30-day money-back guarantee</div>
        </div>
      </CardContent>
    </Card>
  )
}
