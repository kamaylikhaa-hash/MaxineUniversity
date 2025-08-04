"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  MapPin,
  Clock,
  Users,
  Camera,
  Maximize,
  Volume2,
  VolumeX,
  Navigation,
} from "lucide-react"

const tourLocations = [
  {
    id: "main-entrance",
    name: "Main Entrance & Welcome Center",
    description: "Begin your journey at our iconic main entrance with the Maxine University welcome center",
    image: "/placeholder.svg?height=400&width=600&text=Main+Entrance",
    duration: "3 min",
    highlights: ["University History Display", "Information Desk", "Student Services"],
    category: "Campus Landmarks",
  },
  {
    id: "academic-quad",
    name: "Academic Quadrangle",
    description: "The heart of campus life where students gather, study, and celebrate",
    image: "/placeholder.svg?height=400&width=600&text=Academic+Quad",
    duration: "5 min",
    highlights: ["Central Fountain", "Study Areas", "Event Space"],
    category: "Campus Landmarks",
  },
  {
    id: "library",
    name: "Thompson Memorial Library",
    description: "State-of-the-art research facility with over 500,000 volumes and modern study spaces",
    image: "/placeholder.svg?height=400&width=600&text=Library+Interior",
    duration: "7 min",
    highlights: ["Reading Rooms", "Digital Archives", "Group Study Pods", "24/7 Study Area"],
    category: "Academic Facilities",
  },
  {
    id: "science-labs",
    name: "Science & Research Laboratories",
    description: "Cutting-edge laboratories for chemistry, biology, physics, and engineering research",
    image: "/placeholder.svg?height=400&width=600&text=Science+Labs",
    duration: "6 min",
    highlights: ["Chemistry Labs", "Biology Research Center", "Physics Equipment", "Clean Rooms"],
    category: "Academic Facilities",
  },
  {
    id: "business-building",
    name: "Business & Accountancy Building",
    description: "Modern facilities for business education with simulation rooms and case study areas",
    image: "/placeholder.svg?height=400&width=600&text=Business+Building",
    duration: "4 min",
    highlights: ["Trading Floor Simulator", "Conference Rooms", "Student Lounge", "Faculty Offices"],
    category: "Academic Facilities",
  },
  {
    id: "medical-center",
    name: "Medical Sciences Complex",
    description: "Comprehensive medical education facilities with simulation labs and clinical training areas",
    image: "/placeholder.svg?height=400&width=600&text=Medical+Complex",
    duration: "8 min",
    highlights: ["Simulation Hospital", "Anatomy Labs", "Skills Training Center", "Research Labs"],
    category: "Academic Facilities",
  },
  {
    id: "student-union",
    name: "Student Union Building",
    description: "The social hub of campus with dining, recreation, and student organization spaces",
    image: "/placeholder.svg?height=400&width=600&text=Student+Union",
    duration: "5 min",
    highlights: ["Food Court", "Game Room", "Meeting Spaces", "Student Services"],
    category: "Student Life",
  },
  {
    id: "recreation-center",
    name: "Maxine Recreation Center",
    description: "Complete fitness and wellness facility with modern equipment and sports courts",
    image: "/placeholder.svg?height=400&width=600&text=Recreation+Center",
    duration: "6 min",
    highlights: ["Olympic Pool", "Fitness Equipment", "Basketball Courts", "Rock Climbing Wall"],
    category: "Student Life",
  },
  {
    id: "dormitories",
    name: "Campus Residence Halls",
    description: "Modern dormitory facilities providing comfortable living spaces for students",
    image: "/placeholder.svg?height=400&width=600&text=Dormitories",
    duration: "4 min",
    highlights: ["Sample Room", "Common Areas", "Study Lounges", "Laundry Facilities"],
    category: "Student Life",
  },
  {
    id: "engineering-labs",
    name: "Engineering & Technology Labs",
    description: "Advanced engineering laboratories with robotics, AI, and manufacturing equipment",
    image: "/placeholder.svg?height=400&width=600&text=Engineering+Labs",
    duration: "7 min",
    highlights: ["Robotics Lab", "3D Printing Center", "Electronics Workshop", "Computer Labs"],
    category: "Academic Facilities",
  },
]

const tourCategories = ["All", "Campus Landmarks", "Academic Facilities", "Student Life"]

const tourStats = [
  { number: "360°", label: "Virtual Reality Experience", icon: Camera },
  { number: "12", label: "Campus Locations", icon: MapPin },
  { number: "60 min", label: "Complete Tour Duration", icon: Clock },
  { number: "24/7", label: "Available Anytime", icon: Users },
]

export default function VirtualTourPage() {
  const [selectedLocation, setSelectedLocation] = React.useState(tourLocations[0])
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredLocations =
    selectedCategory === "All"
      ? tourLocations
      : tourLocations.filter((location) => location.category === selectedCategory)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
  }

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

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
                Virtual <span className="text-maxine-amaranth">Campus Tour</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Explore Maxine University from anywhere in the world with our immersive 360° virtual tour. Discover our
                beautiful campus, state-of-the-art facilities, and vibrant student life.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-maxine-cherry text-white hover:scale-105 transition-transform duration-200">
                  <Camera className="h-3 w-3 mr-1" />
                  360° Experience
                </Badge>
                <Badge
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:scale-105 transition-transform duration-200"
                >
                  Interactive Navigation
                </Badge>
                <Badge
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:scale-105 transition-transform duration-200"
                >
                  HD Quality
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300">
                  <Play className="h-4 w-4 mr-2" />
                  Start Virtual Tour
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">Schedule Live Tour</Link>
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Virtual+Tour+Preview"
                  alt="Virtual Tour Preview"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-maxine-cherry hover:bg-maxine-amaranth rounded-full w-16 h-16 p-0">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tourStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transform transition-all duration-700 hover:scale-110 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-maxine-amaranth mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Interface */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div
            className={`text-center mb-8 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Campus Tour</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate through our campus using the interactive controls below
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {tourCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-maxine-cherry hover:bg-maxine-amaranth text-white"
                    : "border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Main Tour Viewer */}
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0">
              {/* Tour Viewer */}
              <div className="relative h-96 lg:h-[500px] bg-black">
                <Image
                  src={selectedLocation.image || "/placeholder.svg"}
                  alt={selectedLocation.name}
                  fill
                  className="object-cover"
                />

                {/* Tour Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30">
                  {/* Top Controls */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <Badge className="bg-maxine-cherry text-white">{selectedLocation.category}</Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" onClick={handleMuteToggle}>
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </Button>
                      <Button size="sm" variant="secondary" onClick={handleFullscreen}>
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={handlePlayPause}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-20 h-20 p-0 border-2 border-white/50"
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8 text-white" />
                      ) : (
                        <Play className="h-8 w-8 text-white ml-1" />
                      )}
                    </Button>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">{selectedLocation.name}</h3>
                        <p className="text-white/80 text-sm">{selectedLocation.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary">
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <ZoomOut className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Navigation className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Location Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="bg-maxine-lavender text-maxine-amaranth">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Duration: {selectedLocation.duration}</span>
                    </div>
                    <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Map
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore All Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on any location to start your virtual tour from that point
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location, index) => (
              <Card
                key={location.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg ${
                  selectedLocation.id === location.id ? "ring-2 ring-maxine-cherry" : ""
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-maxine-cherry text-white text-xs">
                    {location.duration}
                  </Badge>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{location.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{location.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {location.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-maxine-lavender text-maxine-amaranth text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {location.highlights.length > 2 && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                        +{location.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-maxine-cherry hover:bg-maxine-amaranth"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedLocation(location)
                    }}
                  >
                    Start Tour Here
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Split Layout and Animations */}
      <section className="py-16 bg-gradient-to-br from-maxine-amaranth to-maxine-cherry text-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Visit in Person?</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                While our virtual tour gives you a great preview, nothing beats experiencing our campus firsthand.
                Schedule a personalized campus visit with our admissions team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">Schedule Campus Visit</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">Contact Admissions</Link>
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Campus+Visit"
                  alt="Campus Visit"
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
