import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Metadata } from "next"
import {
  Star,
  Play,
  Clock,
  Users,
  BookOpen,
  Globe,
  Phone,
  ChevronDown,
  ChevronRight,
  Download,
  CheckCircle,
  FileText,
  Video,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Define metadata for the page
export const metadata: Metadata = {
  title: 'IELTS Course by Munzereen Shahid | 10 Minute School',
  description: 'Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score.',
  openGraph: {
    title: 'IELTS Course by Munzereen Shahid',
    description: 'Complete IELTS preparation course with Academic and General Training modules',
    images: ['/placeholder.jpg'],
  },
}

// Course data could be fetched from an API
async function getCourseData(id: string) {
  // This would typically be an API call
  return {
    title: "IELTS Course by Munzereen Shahid",
    rating: 4.9,
    reviews: "62.2k+",
    description: "Get complete preparation of Academic IELTS and General Training IELTS in one course!",
    // ... other course data
  }
}

export default async function CoursePage({ params }: { params: { id: string } }) {
  // Fetch course data
  const courseData = await getCourseData(params.id)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Image 
              src="/10mslogo-svg.svg" 
              alt="10 Minute School" 
              width={120} 
              height={32} 
              priority 
              className="h-8 w-auto"
            />
            <nav className="hidden lg:flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600">
                <span>Class 6-12</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600">
                <span>Skills</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <span className="cursor-pointer hover:text-gray-600">Admission</span>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600">
                <span>Online Batch</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600">
                <Globe className="h-4 w-4" />
                <span>English Centre</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>৳৳ 16910</span>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm">লগ-ইন</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-yellow-400 font-medium">{courseData.rating}</span>
                <span className="text-gray-300">({courseData.reviews} রিভিউ)</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{courseData.title}</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{courseData.description}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            <button className="py-4 px-2 border-b-2 border-green-600 text-green-600 font-medium whitespace-nowrap">
              Course Instructor
            </button>
            <button className="py-4 px-2 text-gray-600 hover:text-gray-900 whitespace-nowrap">
              How the course is laid out
            </button>
            <button className="py-4 px-2 text-gray-600 hover:text-gray-900 whitespace-nowrap">
              What you will learn by doing the course
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Instructor */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course instructor</h2>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage 
                        src="/placeholder-user.jpg"
                        alt="Munzereen Shahid"
                        width={64}
                        height={64}
                      />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Munzereen Shahid &gt;</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        MSc (English), University of Oxford (UK)
                        <br />
                        BA, MA (English), University of Dhaka
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* How the course is laid out */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How the course is laid out</h2>
              <div className="bg-[#0F172A] rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#22C55E] rounded-full p-3 flex-shrink-0">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">৫০+ ভিডিও লেকচার</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        IELTS Academic ও General Training এর Overview, Format ও প্রয়ের ধরন নিয়ে in-depth আলোচনা
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#3B82F6] rounded-full p-3 flex-shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">৩৮টি লেকচার শিট</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্রাটেজি এবং ৬০০+ Vocabulary
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#F97316] rounded-full p-3 flex-shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">রিডিং এন্ড লিসেনিং মক টেস্ট</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        ১০ Reading ও ১০ Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#EF4444] rounded-full p-3 flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">ডাউট সলভিং লাইভ ক্লাস</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রশ্নের সলিউশন এর সুযোগ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Free PDF Section */}
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-400 text-black p-3 rounded-full">
                      <Download className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Free PDF</h4>
                      <p className="text-gray-300 text-sm">
                        IELTS Confirm 7+ Score
                        <br />
                        (Guideline)
                        <br />
                        IELTS ভালো score করার সেরা Strategies
                        <br />
                        জানুন সেরাদের গাইডলাইনে ।
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700 text-white mt-3">ফ্রি PDF Download করুন</Button>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="grid grid-cols-3 gap-1">
                      {Array.from({ length: 15 }, (_, i) => (
                        <div key={i} className="w-12 h-12 relative">
                          <Image
                            src="/placeholder-user.jpg"
                            alt={`Student ${i + 1}`}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What you will learn */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What you will learn by doing the course</h2>
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-[15px]">
                      Detailed rules and regulations of each module of the IELTS test
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-[15px]">
                      Formats and strategies to ace the IELTS test
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-[15px]">
                      Proper structure and essay type for scoring well in IELTS writing task 1 and 2
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-[15px]">
                      Speaking accurately on any topic in the IELTS speaking test
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-[15px]">
                      Time management strategy to get a good band score in the IELTS test
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-[15px]">
                      Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Content preview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Content preview</h2>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <span className="font-medium">Introduction</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                    <p className="text-gray-600">Course introduction and overview</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-0">
                  <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <span className="font-medium">IELTS Course by Munzereen Shahid | Complete Support Group</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                    <p className="text-gray-600">Complete support group details and resources</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-0">
                  <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <span className="font-medium">Academic Writing</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                    <p className="text-gray-600">Academic writing modules and practice materials</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-0">
                  <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <span className="font-medium">Academic Reading Mock Test</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                    <p className="text-gray-600">Practice tests and sample reading materials</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-0">
                  <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <span className="font-medium">Speaking</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                    <p className="text-gray-600">Speaking practice materials and guidelines</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

           
            {/* Course Exclusive Feature */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Exclusive Feature</h2>
              <div className="space-y-6 bg-white rounded-lg border p-6">
                {/* Video Lectures Section */}
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">ভিডিও লেকচার</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                        </svg>
                        <span>IELTS Academic ও General Training নিয়ে আলোচনা</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                        </svg>
                        <span>Reading, Writing, Listening ও Speaking এর Overview & Format</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                        </svg>
                        <span>প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                        </svg>
                        <span>ভিডিওর সাথে এক্সক্লুসিভ সুযোগ</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="relative w-[180px] h-[180px]">
                      <Image
                        src="/placeholder.jpg"
                        alt="50+ Video lectures"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t my-6"></div>

                {/* Mock Tests Section */}
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Reading ও Listening Mock Tests</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                        </svg>
                        <span>10 Reading & 10 Listening Mock Tests</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                        </svg>
                        <span>Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                        </svg>
                        <span>উত্তর যাচাইয়ের সাথে সাথেই রেজাল্ট</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00012 16.1698L4.83012 11.9998L3.41012 13.4098L9.00012 18.9998L21.0001 6.99984L19.5901 5.58984L9.00012 16.1698Z" fill="currentColor"/>
                        </svg>
                        <span>যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="relative w-[180px] h-[180px]">
                      <Image
                        src="/placeholder.jpg"
                        alt="IELTS Mock Tests"
                        fill
                        className="object-cover rounded-lg bg-red-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>


             {/* Course details */}
             <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course details</h2>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="details-1" className="border-0">
                  <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <span className="font-medium">This IELTS course is for</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Those who want to get admitted to any higher education</li>
                      <li>• Those who want to work for government employee abroad</li>
                      <li>• Those who have applied for PR in Canada and want to get more points</li>
                      <li>• Those who want to migrate to Australia, Canada, New Zealand and other countries</li>
                      <li>• Those who want to improve their English skills</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="details-2" className="border-0">
                  <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <span className="font-medium">
                      What are the benefits of studying online with you instead of choosing offline courses?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                    <p className="text-gray-600">Learn at your own pace with lifetime access to course materials and expert support.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="details-3" className="border-0">
                  <AccordionTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <span className="font-medium">How long will it take to complete the course?</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 border-l-2 border-gray-200 ml-4">
                    <p className="text-gray-600">The course is designed to be completed in 50 hours, but you can learn at your own pace.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="sticky top-24">
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Main Carousel Image */}
              <div className="relative aspect-video">
                <Image
                  src="/images/reference.png"
                  alt="IELTS Course Preview"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Navigation Arrows */}
                <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center z-10">
                  <ChevronRight className="h-5 w-5 rotate-180" />
                </button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center z-10">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 p-2 bg-white border-b">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className={`relative w-[60px] h-[45px] rounded overflow-hidden cursor-pointer ${i === 1 ? 'ring-2 ring-green-500' : ''}`}
                  >
                    <Image
                      src={`/images/reference.png`}
                      alt={`Preview ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Price and Enrollment Section */}
              <div className="p-4">
                {/* Price Section */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold">৳3850</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through">৳5000</span>
                    <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-sm text-sm whitespace-nowrap">1150 ৳ ছাড়</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-[#00A651] hover:bg-[#008C44] text-white font-medium py-3 rounded mb-6">
                  Enroll
                </button>

                {/* Course Features */}
                <div>
                  <h3 className="font-medium mb-4">এই কোর্সে যা থাকছে</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Total Enrolled 32995</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Time Required 50 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">54 Videos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">10 Reading & 10 Listening Mocktests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">38 Lecture Sheets</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">25 Video Lectures</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">1 Free Hardcopy Book Delivered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Facebook Support Group</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Course Validity Lifetime</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-1">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
                  <a href="tel:16910" className="text-green-600 font-medium">�� ফোন করুন (16910)</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-gray-400 text-sm">দেশের সবচেয়ে বড় অনলাইন শিক্ষা প্ল্যাটফর্ম</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Refund policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & condition
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Others</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Book Store
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Free Notes & Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Job Preparation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Keep up with us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 10 Minute School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
