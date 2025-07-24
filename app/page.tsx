import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Play, Clock, Users, BookOpen, CheckCircle, Award, Download } from "lucide-react"
import { redirect } from "next/navigation"

export default function CoursePage() {
  redirect("/course/ielts-course")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header (Not Mandatory) */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">10 Minute School</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Courses
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Skills
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Admission
              </a>
              <Button variant="outline">Login</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">IELTS Preparation</Badge>
                  <Badge variant="outline">Bestseller</Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Complete IELTS Course by Munzereen Shahid
                </CardTitle>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm text-gray-600">4.9 (2,847 reviews)</span>
                  </div>
                  <span className="text-sm text-gray-500">15,234 students</span>
                </div>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Course Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Master IELTS with our comprehensive course designed by Munzereen Shahid, one of Bangladesh's most
                  experienced IELTS instructors. This course covers all four skills - Reading, Writing, Listening, and
                  Speaking - with proven strategies and techniques to achieve your target band score.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Whether you're aiming for academic or general training IELTS, this course provides you with everything
                  you need to succeed, including practice tests, detailed feedback, and personalized guidance.
                </p>
              </CardContent>
            </Card>

            {/* Instructors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Course Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">Munzereen Shahid</h3>
                    <p className="text-gray-600">IELTS Expert & English Language Specialist</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1" /> 4.9 Rating
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" /> 25,000+ Students
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" /> 15+ Courses
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How the course is laid out */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How the Course is Structured</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Reading Module</h4>
                      <p className="text-sm text-gray-600">12 comprehensive lessons</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-500 text-white p-2 rounded-full">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Speaking Module</h4>
                      <p className="text-sm text-gray-600">10 interactive sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <div className="bg-purple-500 text-white p-2 rounded-full">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Listening Module</h4>
                      <p className="text-sm text-gray-600">8 practice sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                    <div className="bg-orange-500 text-white p-2 rounded-full">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Writing Module</h4>
                      <p className="text-sm text-gray-600">15 writing tasks</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What you will learn by doing the course */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What You Will Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Master all four IELTS skills with proven strategies</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Understand IELTS test format and question types</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Improve vocabulary and grammar for higher band scores</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Practice with authentic IELTS materials</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Develop time management skills for the exam</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Get personalized feedback on your performance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Access to mock tests and practice materials</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Build confidence for exam day success</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Exclusive Feature */}
            <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">Course Exclusive Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-500 text-white p-2 rounded-full">
                        <Download className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800">Free PDF Resources</h4>
                        <p className="text-sm text-red-600">Downloadable study materials and practice sheets</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-500 text-white p-2 rounded-full">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800">Live Q&A Sessions</h4>
                        <p className="text-sm text-red-600">Weekly interactive sessions with the instructor</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-500 text-white p-2 rounded-full">
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800">Certificate of Completion</h4>
                        <p className="text-sm text-red-600">Official certificate upon course completion</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-500 text-white p-2 rounded-full">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800">Lifetime Access</h4>
                        <p className="text-sm text-red-600">Access course materials anytime, anywhere</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Course Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <div className="font-semibold">Duration</div>
                    <div className="text-sm text-gray-600">8 Weeks</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <div className="font-semibold">Lessons</div>
                    <div className="text-sm text-gray-600">45 Videos</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <div className="font-semibold">Students</div>
                    <div className="text-sm text-gray-600">15,234</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Award className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                    <div className="font-semibold">Level</div>
                    <div className="text-sm text-gray-600">All Levels</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Trailer */}
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=350"
                    alt="Course trailer thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">Course Preview</div>
                    <div className="text-xs opacity-80">2:30 minutes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">৳2,500</div>
                    <div className="text-sm text-gray-500 line-through">৳5,000</div>
                    <Badge variant="destructive" className="mt-1">
                      50% OFF
                    </Badge>
                  </div>
                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add to Wishlist
                  </Button>
                  <div className="text-xs text-gray-500 text-center">30-day money-back guarantee</div>
                </div>
              </CardContent>
            </Card>

            {/* Check Lists */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">This Course Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">45 hours of video content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Downloadable resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Mobile and TV access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Practice tests included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Community access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Instructor support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
