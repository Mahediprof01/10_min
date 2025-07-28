'use client'
import { useCourseBusinessLogic } from "@/app/action/business"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/ui/header"
import Image from "next/image"
import { CourseCarousel } from "@/components/course/course-carousel"
import { CourseNavigation } from "@/components/course/course-navigation"
import {
  Star,
  Play,
  Users,
  BookOpen,
  FileText,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CoursePageContent() {
  const {
    course: { courseData, isLoading, error },
    instructor: { getInstructorInfo, hasInstructor },
    features: { getFormattedFeatures, hasFeatures },
    learningPoints: { getFormattedLearningPoints, hasLearningPoints },
    testimonials: { getFormattedTestimonials, hasTestimonials },
    featureExplanations: { getFormattedFeatureExplanations, hasFeatureExplanations },
    groupJoinEngagement: { getFormattedGroupJoinEngagement, hasGroupJoinEngagement },
    about: { getFormattedAbout, hasAbout },
    checklist: { getFormattedChecklist },
    media: { getPreviewGallery, getThumbnail },
    pricing: { currentPrice, originalPrice, discountAmount, discountPercentage }
  } = useCourseBusinessLogic()

  const sections = [
    { id: "course-instructor", label: "Course instructor" },
    { id: "course-layout", label: "How the course is laid out" },
    { id: "what-you-learn", label: "What you will learn by doing the course" },
    { id: "course-features", label: "Course Exclusive Feature" },
    { id: "course-details", label: "Course details" }
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
        </div>
      </div>
    )
  }

  if (!courseData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">No course data found</h2>
        </div>
      </div>
    )
  }

  const instructorInfo = getInstructorInfo
  const features = getFormattedFeatures
  const learningPoints = getFormattedLearningPoints
  const aboutItems = getFormattedAbout
  const checklist = getFormattedChecklist()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1.5 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">{courseData.title}</h1>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-medium text-sm">
                  ({hasTestimonials ? `${getFormattedTestimonials.length}+ students rated this course` : '5 star rating'})
                </span>
              </div>
              <div 
                className="text-gray-300 text-lg leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: courseData.description }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs - Hidden on mobile */}
      <div className="hidden md:block">
        <CourseNavigation sections={sections} />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mobile Sidebar - Only visible on mobile */}
          <div className="lg:hidden mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border w-full">
              <CourseCarousel 
                previewGallery={getPreviewGallery} 
                thumbnail={getThumbnail}
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
                  {courseData.cta_text?.name || 'Enroll'}
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
          </div>

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Instructor */}
            {hasInstructor && instructorInfo && (
              <section id="course-instructor">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course instructor</h2>
                <Card className="border-0 shadow-sm rounded-lg border ">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage 
                          src={instructorInfo.image}
                          alt={instructorInfo.name}
                          width={64}
                          height={64}
                        />
                        <AvatarFallback>
                          {instructorInfo.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{instructorInfo.name}</h3>
                        <div 
                          className="text-gray-600 text-sm mb-2"
                          dangerouslySetInnerHTML={{ __html: instructorInfo.description }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* How the course is laid out */}
            {hasFeatures && features.length > 0 && (
              <section id="course-layout">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How the course is laid out</h2>
                <div className="bg-[#0F172A] rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => {
                      const colors = [
                        'bg-[#22C55E]',
                        'bg-[#3B82F6]', 
                        'bg-[#F97316]',
                        'bg-[#EF4444]'
                      ]
                      const icons = [
                        <Play key="play" className="h-6 w-6 text-white" />,
                        <FileText key="file" className="h-6 w-6 text-white" />,
                        <BookOpen key="book" className="h-6 w-6 text-white" />,
                        <Users key="users" className="h-6 w-6 text-white" />
                      ]
                      
                      return (
                        <div key={feature.id} className="flex items-start gap-4">
                          <div className={`${colors[index % colors.length]} rounded-full p-3 flex-shrink-0`}>
                            {feature.icon ? (
                              <Image 
                                src={feature.icon} 
                                alt="" 
                                width={24} 
                                height={24} 
                                className="text-white"
                              />
                            ) : (
                              icons[index % icons.length]
                            )}
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {feature.subtitle}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Free PDF Section */}
            {hasGroupJoinEngagement && getFormattedGroupJoinEngagement.length > 0 && (
              <Card className="bg-gradient-to-r from-[#001529] to-[#003152] text-white border-0 overflow-hidden min-h-[200px] md:h-[340px]">
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
                          <h4 className="font-bold text-2xl md:text-3xl leading-tight" style={{ color: getFormattedGroupJoinEngagement[0]?.titleColor || '#ffffff' }}>
                            {getFormattedGroupJoinEngagement[0]?.title || 'IELTS Confirm 7+ Score (Guideline)'}
                          </h4>
                          <p className="text-base md:text-lg pb-4" style={{ color: getFormattedGroupJoinEngagement[0]?.descriptionColor || '#94A3B8' }}>
                            {getFormattedGroupJoinEngagement[0]?.description || 'IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।'}
                          </p>
                          <a href={getFormattedGroupJoinEngagement[0]?.cta.clicked_url} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-[#00A651] hover:bg-[#008C44] text-white px-6 md:px-8 py-3 text-base font-medium w-full md:w-auto">
                              {getFormattedGroupJoinEngagement[0]?.cta.text || 'ফ্রি PDF Download করুন'}
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Hidden on mobile */}
                    <div className="hidden md:flex w-[300px] items-center">
                      {getFormattedGroupJoinEngagement[0]?.thumbnail ? (
                        <div className="relative w-full h-[220px]">
                          <Image
                            src={getFormattedGroupJoinEngagement[0].thumbnail}
                            alt={getFormattedGroupJoinEngagement[0].title}
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
            )}

            {/* What you will learn */}
            {hasLearningPoints && learningPoints.length > 0 && (
              <section id="what-you-learn">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What you will learn by doing the course</h3>
                <div className="bg-white rounded-lg border p-6 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                    {learningPoints.map((point) => (
                      <div key={point.id} className="flex items-start gap-3">
                        <div className="text-blue-500 flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-[15px]">
                          {point.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
           
            {/* Course Exclusive Feature */}
            {hasFeatureExplanations && getFormattedFeatureExplanations.length > 0 && (
              <section id="course-features">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Exclusive Feature</h2>
                <div className="space-y-6 bg-white rounded-lg border p-6">
                  {getFormattedFeatureExplanations.map((explanation, index) => (
                    <div key={explanation.id}>
                      <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-6 md:gap-4">
                        <div className="space-y-4 w-full">
                          <h3 className="text-lg font-semibold">{explanation.title}</h3>
                          <ul className="space-y-3">
                            {explanation.checklist.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center gap-2">
                                <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-auto">
                          <div className="relative w-full md:w-[180px] h-[180px]">
                            <Image
                              src={explanation.fileUrl || "/placeholder.jpg"}
                              alt={explanation.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                      {index < getFormattedFeatureExplanations.length - 1 && (
                        <div className="border-t my-6"></div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

             {/* Course details */}
             {hasAbout && aboutItems.length > 0 && (
               <section id="course-details">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course details</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {aboutItems.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-0">
                      <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                        <span 
                          className="font-medium text-left" 
                          dangerouslySetInnerHTML={{ __html: item.title }} 
                        />
                      </AccordionTrigger>
                      <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                        <div 
                          className="text-gray-600"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
             )}

          </div>

          {/* Right Sidebar - Only visible on desktop */}
          <div className="hidden lg:block sticky relative -top-100 z-30">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border w-[430px]">
              <CourseCarousel 
                previewGallery={getPreviewGallery} 
                thumbnail={getThumbnail}
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
                  {courseData.cta_text?.name || 'Enroll'}
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
          </div>
          
        </div>

      </main>

      <Footer />
    </div>
  )
}