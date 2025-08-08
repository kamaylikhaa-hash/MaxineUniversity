"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Clock, Heart, BookOpen, Dumbbell, Coffee } from "lucide-react"

const studentServices = [
  {
    name: "Academic Advising",
    description: "Personalized guidance for course selection and career planning",
    icon: BookOpen,
    location: "Student Success Center",
    hours: "Mon-Fri 8AM-5PM",
  },
  {
    name: "Health & Wellness Center",
    description: "Comprehensive healthcare services and wellness programs",
    icon: Heart,
    location: "Health Services Building",
    hours: "Mon-Fri 8AM-6PM",
  },
  {
    name: "Career Services",
    description: "Job placement assistance, resume help, and interview prep",
    icon: Users,
    location: "Career Development Center",
    hours: "Mon-Fri 9AM-5PM",
  },
  {
    name: "Counseling Services",
    description: "Mental health support and personal counseling",
    icon: Heart,
    location: "Counseling Center",
    hours: "Mon-Fri 8AM-5PM",
  },
]

const upcomingEvents = [
  {
    title: "Fall Festival",
    date: "October 15, 2024",
    time: "2:00 PM - 8:00 PM",
    location: "Main Quad",
    category: "Campus Event",
    description: "Annual celebration with food, music, and student activities",
    image: "/fallfestival.png",
  },
  {
    title: "Homecoming Weekend",
    date: "October 22-24, 2024",
    time: "All Weekend",
    location: "Various Locations",
    category: "Alumni Event",
    description: "Welcome back alumni with games, reunions, and celebrations",
    image: "/homecoming.png",
  },
  {
    title: "Research Symposium",
    date: "November 5, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Science Building",
    category: "Academic",
    description: "Student and faculty research presentations",
    image: "/research.png",
  },
  {
    title: "International Food Fair",
    date: "November 12, 2024",
    time: "11:00 AM - 3:00 PM",
    location: "Student Union",
    category: "Cultural",
    description: "Taste cuisines from around the world",
    image: "/foodfair].png",
  },
  {
    title: "Winter Concert Series",
    date: "December 3-5, 2024",
    time: "7:00 PM",
    location: "Performing Arts Center",
    category: "Arts",
    description: "Three nights of musical performances by student groups",
    image: "/winter.png",
  },
  {
    title: "Career Fair",
    date: "February 14, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Recreation Center",
    category: "Career",
    description: "Meet with employers and explore job opportunities",
    image: "/careerfair.png",
  },
]

const traditions = [
  {
    name: "Maxine Day",
    description:
      "Annual celebration honoring our founder with campus-wide festivities, service projects, and the traditional lighting of the Maxine Torch.",
    image: "/maxineday.png",
    established: "1952",
  },
  {
    name: "Ring Ceremony",
    description:
      "Juniors receive their class rings in a formal ceremony, symbolizing their commitment to Maxine University values.",
    image: "/ringceremony.png",
    established: "1965",
  },
  {
    name: "Midnight Breakfast",
    description:
      "Faculty and staff serve breakfast to students during finals week, providing comfort and encouragement.",
    image: "/midnightbf.png",
    established: "1978",
  },
  {
    name: "Senior Walk",
    description: "Graduating seniors walk through campus one final time, greeted by faculty, staff, and underclassmen.",
    image: "/walkday.png",
    established: "1985",
  },
]

const facilities = [
  {
    name: "Thompson Memorial Library",
    type: "Library",
    description: "State-of-the-art research facility with over 500,000 volumes and 24/7 study spaces",
    features: ["24/7 Access", "Group Study Rooms", "Digital Archives", "Research Assistance"],
    image: "/lib.png",
    icon: BookOpen,
  },
  {
    name: "Maxine Recreation Center",
    type: "Fitness",
    description: "Complete fitness facility with modern equipment, courts, and wellness programs",
    features: ["Olympic Pool", "Rock Climbing Wall", "Basketball Courts", "Fitness Classes"],
    image: "/gym.png",
    icon: Dumbbell,
  },
  {
    name: "University Hotel & Conference Center",
    type: "Hospitality",
    description: "On-campus hotel providing accommodations for visitors and event hosting",
    features: ["150 Guest Rooms", "Conference Facilities", "Restaurant", "Event Planning"],
    image: "/hotel.png",
    icon: Coffee,
  },
  {
    name: "Innovation Technology Labs",
    type: "Technology",
    description: "Cutting-edge technology spaces for research, development, and learning",
    features: ["3D Printing", "VR/AR Labs", "Maker Spaces", "Computer Labs"],
    image: "/labs.png",
    icon: Users,
  },
]

const studentOrganizations = [
  { name: "Student Government Association", members: 45, category: "Leadership" },
  { name: "International Student Association", members: 230, category: "Cultural" },
  { name: "Pre-Med Society", members: 180, category: "Academic" },
  { name: "Business Club", members: 150, category: "Professional" },
  { name: "Drama Society", members: 85, category: "Arts" },
  { name: "Environmental Club", members: 120, category: "Service" },
  { name: "Greek Life Organizations", members: 800, category: "Social" },
  { name: "Intramural Sports", members: 1200, category: "Recreation" },
]

export default function CampusLifePage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ["All", "Campus Event", "Academic", "Cultural", "Arts", "Career", "Alumni Event"]

  const filteredEvents =
    selectedCategory === "All" ? upcomingEvents : upcomingEvents.filter((event) => event.category === selectedCategory)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero overflow-hidden">
        <div className="container text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Campus Life
          </h1>
          <p
            className={`text-xl text-gray-700 max-w-3xl mx-auto mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Experience a vibrant campus community where learning extends beyond the classroom through traditions,
            activities, and lifelong friendships.
          </p>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-white">
        <div className="container">
          <Tabs defaultValue="services" className="w-full">
            <TabsList
              className={`grid w-full grid-cols-4 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <TabsTrigger value="services">Student Services</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="traditions">Traditions</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Services</h2>
                <p className="text-lg text-gray-600">Comprehensive support services to help you succeed</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {studentServices.map((service, index) => (
                  <Card
                    key={index}
                    className={`text-center hover:shadow-lg transition-shadow transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center hover:scale-110 transition-transform">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-center">
                          <MapPin className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          {service.location}
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          {service.hours}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Student Organizations */}
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Organizations</h3>
                  <p className="text-lg text-gray-600">Join one of our 150+ student organizations</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {studentOrganizations.map((org, index) => (
                    <Card
                      key={index}
                      className={`text-center hover:shadow-lg transition-shadow transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">{org.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-maxine-amaranth mb-1">{org.members}</div>
                        <Badge variant="secondary" className="bg-maxine-lavender text-maxine-amaranth text-xs">
                          {org.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Events Calendar</h2>
                <p className="text-lg text-gray-600">Stay connected with campus happenings</p>
              </div>

              {/* Event Filters */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-maxine-cherry hover:bg-maxine-amaranth"
                        : "border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden hover:shadow-lg transition-shadow transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-maxine-cherry text-white">{event.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          {event.location}
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">Learn More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="traditions" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Maxine Traditions</h2>
                <p className="text-lg text-gray-600">Celebrating our rich heritage and community spirit</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {traditions.map((tradition, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden hover:shadow-lg transition-shadow transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-64">
                      <Image
                        src={tradition.image || "/placeholder.svg"}
                        alt={tradition.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-maxine-cherry text-white">Est. {tradition.established}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{tradition.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{tradition.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="facilities" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
                <p className="text-lg text-gray-600">
                  World-class facilities supporting your academic and personal growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facilities.map((facility, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden hover:shadow-lg transition-shadow transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-64">
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <facility.icon className="h-6 w-6 mr-2 text-maxine-amaranth" />
                        <Badge variant="outline" className="text-maxine-amaranth border-maxine-amaranth">
                          {facility.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{facility.name}</CardTitle>
                      <CardDescription>{facility.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {facility.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-maxine-lavender text-maxine-amaranth">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button asChild className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">
                        <Link href="/virtual-tour">Virtual Tour</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-maxine-amaranth to-maxine-cherry text-white overflow-hidden">
        <div className="container text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Get Involved
          </h2>
          <p
            className={`text-xl mb-8 text-white/90 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Your Maxine University experience awaits. Join our vibrant campus community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth hover:scale-105 transition-all duration-300"
            >
              <Link href="/virtual-tour">Schedule Campus Visit</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent hover:scale-105 transition-all duration-300"
            >
              Join Student Organizations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
