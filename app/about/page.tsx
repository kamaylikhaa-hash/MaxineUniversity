import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, BookOpen } from "lucide-react"

const leadership = [
  {
    name: "Dr. Sarah Johnson",
    title: "President",
    image: "/placeholder.svg?height=300&width=300&text=President",
    bio: "Leading Maxine University with over 20 years of experience in higher education administration.",
  },
  {
    name: "Dr. Michael Chen",
    title: "Vice President of Academic Affairs",
    image: "/placeholder.svg?height=300&width=300&text=VP+Academic",
    bio: "Overseeing academic excellence and curriculum development across all colleges.",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Vice President of Research",
    image: "/placeholder.svg?height=300&width=300&text=VP+Research",
    bio: "Driving innovation and research initiatives that impact our community and beyond.",
  },
  {
    name: "James Wilson",
    title: "Vice President of Student Affairs",
    image: "/placeholder.svg?height=300&width=300&text=VP+Student",
    bio: "Ensuring exceptional student experience and support services.",
  },
]

const accreditations = [
  "Middle States Commission on Higher Education",
  "AACSB International (Business Programs)",
  "Commission on Collegiate Nursing Education",
  "Accreditation Council for Pharmacy Education",
  "ABET (Engineering Programs)",
  "American Dental Association",
]

const stats = [
  { number: "23,000+", label: "Students", icon: Users },
  { number: "1,200+", label: "Faculty", icon: BookOpen },
  { number: "82+", label: "Programs", icon: Award },
  { number: "50+", label: "Countries", icon: Globe },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Maxine University</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            For over 75 years, Maxine University has been a beacon of academic excellence, innovation, and community
            service, shaping leaders who make a difference in the world.
          </p>
        </div>
      </section>

      {/* University Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-maxine-amaranth mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 gradient-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Rich History</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 1949, Maxine University began as a small college with a vision to provide accessible,
                  high-quality education to students from all backgrounds. Named after philanthropist Maxine Thompson,
                  who donated the original campus grounds, our institution has grown from 200 students to over 23,000.
                </p>
                <p>
                  Throughout the decades, we've expanded our academic offerings, built state-of-the-art facilities, and
                  established ourselves as a leader in research and innovation. Our commitment to excellence has earned
                  us recognition as one of the top universities in the region.
                </p>
                <p>
                  Today, Maxine University continues to honor its founding principles while embracing the future,
                  preparing students for careers in an ever-evolving global landscape.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=University+History"
                alt="University History"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-maxine-cherry">
              <CardHeader>
                <CardTitle className="text-2xl text-maxine-amaranth">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  To be a globally recognized university that transforms lives through innovative education,
                  groundbreaking research, and meaningful community engagement, creating leaders who shape a better
                  future for all.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-maxine-amaranth">
              <CardHeader>
                <CardTitle className="text-2xl text-maxine-cherry">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  Maxine University is committed to providing exceptional educational experiences that foster critical
                  thinking, creativity, and ethical leadership. We advance knowledge through research and scholarship
                  while serving our diverse communities with integrity and compassion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 gradient-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the visionary leaders guiding Maxine University</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-maxine-amaranth font-medium">{leader.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accreditations & Recognition</h2>
            <p className="text-lg text-gray-600">
              Our commitment to quality is recognized by leading accrediting bodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accreditations.map((accreditation, index) => (
              <Card key={index} className="text-center p-6">
                <Badge variant="outline" className="text-maxine-amaranth border-maxine-amaranth">
                  {accreditation}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
