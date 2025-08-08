"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Users, BookOpen, Award, Globe, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const announcements = [
  {
    id: 1,
    title: "Fall 2024 Registration Now Open",
    description: "Register for fall semester classes. Early registration ends July 15th.",
    image: "/registration.jpg",
    cta: "Register Now",
    ctaLink: "/apply",
  },
  {
    id: 2,
    title: "New Medical Sciences Building Opens",
    description: "State-of-the-art facilities for our medical and nursing programs.",
    image: "/medical-building.jpg",
    cta: "Take a Tour",
    ctaLink: "/virtual-tour",
  },
  {
    id: 3,
    title: "Research Excellence Awards 2024",
    description: "Celebrating our faculty's groundbreaking research achievements.",
    image: "/research-awards.jpg",
    cta: "Learn More",
    ctaLink: "/blog",
  },
]

const newsUpdates = [
  {
    id: 1,
    title: "Maxine University Ranks #1 in Regional Excellence",
    excerpt: "Our commitment to academic excellence has been recognized nationally...",
    date: "March 15, 2024",
    category: "Achievement",
    image: "/number1.png",
    link: "/blog",
  },
  {
    id: 2,
    title: "New Partnership with Tech Industry Leaders",
    excerpt: "Engineering students gain access to cutting-edge internship programs...",
    date: "March 12, 2024",
    category: "Partnership",
    image: "/tech-partnership.jpg",
    link: "/blog",
  },
  {
    id: 3,
    title: "Student Research Published in Nature Journal",
    excerpt: "Undergraduate biology student's research makes international impact...",
    date: "March 10, 2024",
    category: "Research",
    image: "/journal.png",
    link: "/blog",
  },
  {
    id: 4,
    title: "Campus Sustainability Initiative Launched",
    excerpt: "New green energy program reduces campus carbon footprint by 40%...",
    date: "March 8, 2024",
    category: "Sustainability",
    image: "/sustain.png",
    link: "/blog",
  },
]

const campuses = [
  {
    name: "Main Campus",
    location: "Academic City",
    students: "15,000+",
    programs: "50+",
    image: "/manila campus.png",
    link: "/virtual-tour",
  },
  {
    name: "Medical Campus",
    location: "Health District",
    students: "3,000+",
    programs: "12+",
    image: "/healthdistrictcampus.png",
    link: "/virtual-tour",
  },
  {
    name: "Technology Campus",
    location: "Innovation Park",
    students: "5,000+",
    programs: "20+",
    image: "/techcampus.png",
    link: "/virtual-tour",
  },
]

const highlights = [
  {
    icon: BookOpen,
    title: "Innovative Learning Systems",
    description: "State-of-the-art digital learning platforms and interactive classrooms",
    color: "from-maxine-cherry to-maxine-amaranth",
  },
  {
    icon: Users,
    title: "Maxine Traditions",
    description: "Rich heritage of academic excellence and community engagement",
    color: "from-maxine-pink to-maxine-cherry",
  },
  {
    icon: Award,
    title: "Research Excellence",
    description: "Leading research initiatives across all academic disciplines",
    color: "from-maxine-mimi to-maxine-pink",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description: "International collaborations and study abroad opportunities",
    color: "from-maxine-lavender to-maxine-mimi",
  },
]

const successStats = [
  { number: "96%", label: "Graduate Employment Rate", icon: TrendingUp },
  { number: "₱85,000", label: "Average Starting Salary", icon: Award },
  { number: "23,000+", label: "Students Enrolled", icon: Users },
  { number: "15,000+", label: "Alumni Network", icon: Globe },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % announcements.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length)
  }

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section with Split Layout and Animations */}
      <section className="py-20 bg-gradient-to-br from-maxine-lavender via-maxine-mimi to-maxine-pink overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Welcome to <span className="text-maxine-amaranth">Maxine University</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Excellence in Education, Innovation in Research, Commitment to Community. Join thousands of students who
                are shaping the future at the Philippines' premier university.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300"
                >
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-white hover:scale-105 transition-all duration-300"
                >
                  <Link href="/virtual-tour">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/hero-image.jpg"
                  alt="University Campus"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-maxine-amaranth mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Announcements with Image-Text Split */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest news and events at Maxine University</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={announcements[currentSlide].image || "/placeholder.svg"}
                    alt={announcements[currentSlide].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {announcements[currentSlide].title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 mt-4">
                      {announcements[currentSlide].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Button asChild className="bg-maxine-cherry hover:bg-maxine-amaranth">
                      <Link href={announcements[currentSlide].ctaLink}>{announcements[currentSlide].cta}</Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-maxine-amaranth" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Updates with Framed Visuals */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent News</h2>
            <p className="text-lg text-gray-600">Discover what's happening at Maxine University</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsUpdates.map((news) => (
              <Card
                key={news.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-maxine-cherry text-white text-xs">{news.category}</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-maxine-amaranth transition-colors">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-3 mt-2">{news.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{news.date}</span>
                    <Link href={news.link} className="text-maxine-amaranth hover:text-maxine-cherry font-medium">
                      Read more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Locations with Split Layouts */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Campuses</h2>
            <p className="text-lg text-gray-600">Explore our state-of-the-art facilities across multiple locations</p>
          </div>

          <div className="space-y-16">
            {campuses.map((campus, index) => (
              <Card key={campus.name} className="overflow-hidden shadow-2xl border-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image src={campus.image || "/placeholder.svg"} alt={campus.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">{campus.name}</CardTitle>
                      <CardDescription className="text-lg text-gray-600 flex items-center mt-4">
                        <MapPin className="h-5 w-5 mr-2 text-maxine-amaranth" />
                        {campus.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="text-center p-4 bg-maxine-lavender/50 rounded-lg">
                          <div className="text-2xl font-bold text-maxine-amaranth">{campus.students}</div>
                          <div className="text-sm text-gray-600">Students</div>
                        </div>
                        <div className="text-center p-4 bg-maxine-mimi/50 rounded-lg">
                          <div className="text-2xl font-bold text-maxine-amaranth">{campus.programs}</div>
                          <div className="text-sm text-gray-600">Programs</div>
                        </div>
                      </div>
                      <Button asChild className="bg-maxine-cherry hover:bg-maxine-amaranth">
                        <Link href={campus.link}>Explore Campus</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Highlights with Framed Visuals */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Maxine?</h2>
            <p className="text-lg text-gray-600">Discover what makes us a leader in higher education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
              >
                <CardHeader className="p-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-maxine-amaranth transition-colors">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Split Layout */}
      <section className="py-16 bg-gradient-to-br from-maxine-amaranth to-maxine-cherry text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join thousands of students who have chosen excellence at Maxine University. Your future starts here with
                world-class education and endless opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth"
                >
                  <Link href="/apply">Apply for Admission</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent"
                >
                  <Link href="/contact">Request Information</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Start+Your+Journey"
                  alt="Start Your Journey"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
