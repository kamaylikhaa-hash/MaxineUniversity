"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Quote, Award, TrendingUp, Users, Star, MapPin } from "lucide-react"

const successStats = [
  { number: "96%", label: "Graduate Employment Rate", icon: TrendingUp },
  { number: "₱85,000", label: "Average Starting Salary", icon: Award },
  { number: "500+", label: "Industry Partners", icon: Users },
  { number: "15,000+", label: "Alumni Network", icon: Star },
]

const featuredStories = [
  {
    id: 1,
    name: "Maria Santos",
    degree: "BS Computer Science",
    graduationYear: "2022",
    currentRole: "Senior Software Engineer",
    company: "Google Philippines",
    location: "Manila, Philippines",
    salary: "₱120,000/month",
    image: "/placeholder.svg?height=400&width=400&text=Maria+Santos",
    story:
      "From a small town in Mindanao to working at one of the world's largest tech companies, my journey at Maxine University transformed my life. The computer science program didn't just teach me coding – it taught me how to think critically, solve complex problems, and work collaboratively with diverse teams.",
    achievements: [
      "Led development of AI-powered search features",
      "Mentored 15+ junior developers",
      "Speaker at 3 international tech conferences",
      "Published 2 research papers on machine learning",
    ],
    quote:
      "Maxine University gave me the foundation to dream big and the skills to make those dreams reality. The faculty believed in me even when I didn't believe in myself.",
    category: "Technology",
  },
  {
    id: 2,
    name: "Dr. Carlos Mendoza",
    degree: "Doctor of Medicine",
    graduationYear: "2018",
    currentRole: "Chief Resident, Cardiology",
    company: "Philippine Heart Center",
    location: "Quezon City, Philippines",
    salary: "₱180,000/month",
    image: "/placeholder.svg?height=400&width=400&text=Dr.+Carlos+Mendoza",
    story:
      "My path to becoming a cardiologist began in the halls of Maxine University's Medical College. The rigorous training, compassionate mentorship, and hands-on clinical experience prepared me not just to be a doctor, but to be a healer who truly understands the human condition.",
    achievements: [
      "Performed 200+ cardiac procedures",
      "Reduced patient mortality rate by 15%",
      "Established free cardiac screening program",
      "Trained 25+ medical residents",
    ],
    quote:
      "Every life I save carries the lessons I learned at Maxine. The university taught me that medicine is not just about treating diseases, but about treating people with dignity and compassion.",
    category: "Healthcare",
  },
  {
    id: 3,
    name: "Isabella Rodriguez",
    degree: "MBA",
    graduationYear: "2020",
    currentRole: "Founder & CEO",
    company: "EcoTech Solutions",
    location: "Cebu City, Philippines",
    salary: "₱250,000/month",
    image: "/placeholder.svg?height=400&width=400&text=Isabella+Rodriguez",
    story:
      "The MBA program at Maxine University equipped me with the strategic thinking and leadership skills needed to launch my own sustainable technology company. We've now raised ₱50 million in funding and employ over 100 people across the Philippines.",
    achievements: [
      "Raised ₱50M in Series A funding",
      "Created 100+ green jobs",
      "Reduced carbon emissions by 30% for clients",
      "Named Forbes 30 Under 30 Philippines",
    ],
    quote:
      "Maxine University taught me that business success and social impact aren't mutually exclusive. My professors challenged me to think beyond profit and consider how business can be a force for good.",
    category: "Business",
  },
]

const alumniSpotlight = [
  {
    name: "Engineer Jose Reyes",
    degree: "BS Civil Engineering '2019",
    achievement: "Led construction of Philippines' first smart city infrastructure project",
    company: "Ayala Land",
    image: "/placeholder.svg?height=200&width=200&text=Jose+Reyes",
  },
  {
    name: "Chef Anna Lim",
    degree: "BS Culinary Arts '2021",
    achievement: "Opened award-winning restaurant featured in Michelin Guide",
    company: "Lim's Kitchen",
    image: "/placeholder.svg?height=200&width=200&text=Anna+Lim",
  },
  {
    name: "Nurse Patricia Cruz",
    degree: "BSN '2020",
    achievement: "Pioneered telemedicine program serving rural communities",
    company: "Department of Health",
    image: "/placeholder.svg?height=200&width=200&text=Patricia+Cruz",
  },
  {
    name: "Teacher Miguel Santos",
    degree: "BS Education '2019",
    achievement: "Developed innovative STEM curriculum adopted nationwide",
    company: "Department of Education",
    image: "/placeholder.svg?height=200&width=200&text=Miguel+Santos",
  },
]

const careerOutcomes = [
  {
    college: "Business & Accountancy",
    employmentRate: "98%",
    averageSalary: "₱75,000",
    topEmployers: ["Ayala Corporation", "SM Group", "BDO", "Jollibee Foods Corporation"],
  },
  {
    college: "Medical Sciences",
    employmentRate: "100%",
    averageSalary: "₱150,000",
    topEmployers: ["Philippine General Hospital", "St. Luke's", "Makati Medical Center", "Asian Hospital"],
  },
  {
    college: "Engineering & Technology",
    employmentRate: "95%",
    averageSalary: "₱85,000",
    topEmployers: ["Globe Telecom", "PLDT", "Aboitiz Power", "Meralco"],
  },
  {
    college: "Nursing",
    employmentRate: "100%",
    averageSalary: "₱65,000",
    topEmployers: ["Philippine Heart Center", "National Kidney Institute", "Veterans Memorial", "Cardinal Santos"],
  },
]

export default function StudentSuccessPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ["All", "Technology", "Healthcare", "Business", "Education", "Engineering"]

  const filteredStories =
    selectedCategory === "All"
      ? featuredStories
      : featuredStories.filter((story) => story.category === selectedCategory)

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
                Student <span className="text-maxine-amaranth">Success Stories</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Discover how Maxine University graduates are making their mark across industries, from tech startups to
                medical breakthroughs, transforming communities and leading innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300">
                  Read Success Stories
                </Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                >
                  Share Your Story
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Student+Success"
                  alt="Student Success"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats with Hover Animations */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
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

      {/* Category Filter with Animations */}
      <section className="py-8 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div
            className={`flex flex-wrap gap-2 justify-center transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-maxine-cherry hover:bg-maxine-amaranth text-white"
                    : "border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories with Image-Text Splits and Animations */}
      <section className="py-16 bg-white">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our outstanding graduates who are making a difference in their fields and communities
            </p>
          </div>

          <div className="space-y-16">
            {filteredStories.map((story, index) => (
              <Card
                key={story.id}
                className={`overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-700 group transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 lg:h-full overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-maxine-cherry text-white">{story.category}</Badge>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-90">Class of {story.graduationYear}</div>
                      <div className="text-lg font-bold">{story.degree}</div>
                    </div>
                  </div>
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                          <Quote className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-maxine-amaranth transition-colors duration-300">
                            {story.name}
                          </CardTitle>
                          <CardDescription className="text-maxine-amaranth font-medium">
                            {story.currentRole} at {story.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {story.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {story.salary}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed border-l-4 border-maxine-cherry pl-4 hover:border-l-maxine-amaranth transition-colors duration-300">
                        "{story.quote}"
                      </blockquote>

                      <p className="text-gray-600 mb-6 leading-relaxed">{story.story}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {story.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 hover:translate-x-2 transition-transform duration-200"
                            >
                              <Star className="h-4 w-4 text-maxine-amaranth mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300">
                        Read Full Story
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Spotlight with Framed Visuals and Staggered Animations */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alumni Spotlight</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick highlights of our graduates making waves in their respective fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniSpotlight.map((alumni, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 group border-0 shadow-lg hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={alumni.image || "/placeholder.svg"}
                    alt={alumni.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-bold text-sm">{alumni.name}</div>
                    <div className="text-xs opacity-90">{alumni.degree}</div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700 mb-2 line-clamp-3">{alumni.achievement}</p>
                  <div className="text-xs text-maxine-amaranth font-medium">{alumni.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes by College with Hover Effects */}
      <section className="py-16 bg-white">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Outcomes by College</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our graduates perform in the job market across different fields of study
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerOutcomes.map((outcome, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-500 border-l-4 border-l-maxine-cherry hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl text-gray-900 hover:text-maxine-amaranth transition-colors duration-300">
                    {outcome.college}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-maxine-lavender rounded-lg hover:bg-maxine-lavender/80 transition-colors duration-300">
                      <div className="text-2xl font-bold text-maxine-amaranth">{outcome.employmentRate}</div>
                      <div className="text-sm text-gray-600">Employment Rate</div>
                    </div>
                    <div className="text-center p-3 bg-maxine-mimi rounded-lg hover:bg-maxine-mimi/80 transition-colors duration-300">
                      <div className="text-xl font-bold text-maxine-amaranth">{outcome.averageSalary}</div>
                      <div className="text-sm text-gray-600">Avg. Starting Salary</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Top Employers:</h4>
                    <div className="flex flex-wrap gap-1">
                      {outcome.topEmployers.map((employer, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-maxine-pink text-maxine-amaranth text-xs hover:scale-105 transition-transform duration-200"
                        >
                          {employer}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold">Write Your Success Story</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join thousands of Maxine University graduates who are making their mark in the world. Your journey to
                success starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth hover:scale-105 transition-all duration-300">
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent hover:scale-105 transition-all duration-300"
                >
                  Connect with Alumni
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Your+Success+Story"
                  alt="Your Success Story"
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
