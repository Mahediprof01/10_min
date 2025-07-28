import Image from "next/image"
import { CourseCarousel } from "@/components/course/course-carousel"

interface ChecklistItem {
  id: string
  text: string
  icon?: string
}

interface CourseSidebarProps {
  previewGallery: any[]
  thumbnail: string
  currentPrice: string
  originalPrice: string
  discountAmount: string
  ctaText: string
  checklist: ChecklistItem[]
  className?: string
}

export function CourseSidebar({
  previewGallery,
  thumbnail,
  currentPrice,
  originalPrice,
  discountAmount,
  ctaText,
  checklist,
  className = ""
}: CourseSidebarProps) {
  return (
    <div className={`bg-white rounded-sm overflow-hidden shadow-lg border ${className}`}>
      <CourseCarousel 
        previewGallery={previewGallery} 
        thumbnail={thumbnail}
      />

      {/* Price and Enrollment Section */}
      <div className="p-4">
        {/* Price Section */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold">{currentPrice}</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 line-through">{originalPrice}</span>
            <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-sm text-sm whitespace-nowrap">
              {discountAmount} ছাড়
            </span>
          </div>
        </div>

        {/* Enroll Button */}
        <button className="w-full bg-[#00A651] hover:bg-[#008C44] text-white font-medium py-3 rounded mb-6">
          {ctaText || 'Enroll'}
        </button>

        {/* Course Features */}
        <div>
          <h3 className="text-[15px] font-medium mb-5">এই কোর্সে যা থাকছে</h3>
          <div className="space-y-[14px]">
            {checklist.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-5 opacity-70">
                  {item.icon && item.icon.startsWith('http') ? (
                    <Image 
                      src={item.icon} 
                      alt="" 
                      width={20} 
                      height={20} 
                      className="w-5 h-5"
                    />
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#292D32"/>
                    </svg>
                  )}
                </div>
                <span className="text-[15px] text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center border-t pt-4">
          <p className="text-[15px] text-gray-600 mb-2">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
          <a href="tel:16910" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
              <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
            </svg>
            ফোন করুন (16910)
          </a>
        </div>
      </div>
    </div>
  )
}