"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Phone, ChevronDown, Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="bg-white border-b relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Image 
              src="/10mslogo-svg.svg" 
              alt="10 Minute School" 
              width={120} 
              height={32} 
              priority 
              className="h-8 w-auto"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600 transition-colors">
                <span>Class 6-12</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600 transition-colors">
                <span>Skills</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <span className="cursor-pointer hover:text-gray-600 transition-colors">Admission</span>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600 transition-colors">
                <span>Online Batch</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600 transition-colors">
                <Globe className="h-4 w-4" />
                <span>English Centre</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600 transition-colors">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </nav>

            {/* Right Side Items */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-1.5 border rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors">
                <Globe className="h-4 w-4" />
                <span className="text-sm">EN</span>
                <ChevronDown className="h-3 w-3" />
              </div>

              {/* Desktop Phone and Login */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-1.5 text-sm">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">16910</span>
                </div>
                
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                  লগ-ইন
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileMenu} />
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <Image 
                src="/10mslogo-svg.svg" 
                alt="10 Minute School" 
                width={120} 
                height={32} 
                priority 
                className="h-8 w-auto"
              />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="p-4 space-y-4">
              <div className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-50 px-2 rounded-md transition-colors">
                <span className="font-medium">Class 6-12</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-50 px-2 rounded-md transition-colors">
                <span className="font-medium">Skills</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="py-3 border-b cursor-pointer hover:bg-gray-50 px-2 rounded-md transition-colors">
                <span className="font-medium">Admission</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-50 px-2 rounded-md transition-colors">
                <span className="font-medium">Online Batch</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-50 px-2 rounded-md transition-colors">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">English Centre</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-50 px-2 rounded-md transition-colors">
                <span className="font-medium">More</span>
                <ChevronDown className="h-4 w-4" />
              </div>

              {/* Mobile Contact and Login */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center space-x-2 py-3 px-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-600">16910</span>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition-colors">
                  লগ-ইন
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}