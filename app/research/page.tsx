"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, TrendingUp, ExternalLink, Download } from "lucide-react"

const researchStats = [
  { number: "₱45M", label: "Annual Research Funding", icon: TrendingUp },
  { number: "150+", label: "Active Research Projects", icon: BookOpen },
  { number: "85", label: "Research Faculty", icon: Users },
  { number: "25", label: "Research Centers", icon: Award },
]

const featuredResearch = [
  {
    id: 1,
    title: "Breakthrough in Cardiovascular Treatment Using AI-Powered Diagnostics",
    researchers: ["Dr. Patricia Williams", "Dr. Michael Chen", "Dr. Sarah Rodriguez"],
    college: "Medical Sciences",
    funding: "₱8.5M",
    duration: "2022-2025",
    status: "Ongoing",
    image: "/projectresearch.png",
    abstract:
      "This groundbreaking research combines artificial intelligence with traditional cardiovascular medicine to develop more accurate diagnostic tools and personalized treatment protocols. Our team has successfully created an AI model that can predict cardiac events with 94% accuracy.",
    publications: 12,
    citations: 156,
    impact: "High Impact - Clinical Trials Phase II",
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions for Rural Communities in the Philippines",
    researchers: ["Dr. Maria Garcia", "Dr. David Kim", "Prof. Lisa Thompson"],
    college: "Engineering & Technology",
    funding: "₱12.3M",
    duration: "2023-2026",
    status: "Ongoing",
    image: "/sustainalibility.png",
    abstract:
      "Developing innovative renewable energy systems specifically designed for remote Filipino communities. Our research focuses on hybrid solar-wind systems with energy storage solutions that can operate effectively in tropical climates.",
    publications: 8,
    citations: 89,
    impact: "Community Implementation - 15 Villages",
  },
  {
    id: 3,
    title: "Novel Drug Delivery Systems for Cancer Treatment",
    researchers: ["Dr. Jennifer Park", "Dr. Robert Johnson", "Dr. Emily Chen"],
    college: "Pharmacy",
    funding: "₱15.7M",
    duration: "2021-2024",
    status: "Final Phase",
    image: "/novel.png",
    abstract:
      "Revolutionary nanotechnology-based drug delivery systems that target cancer cells with unprecedented precision while minimizing side effects. Our research has shown 85% improvement in treatment efficacy compared to traditional methods.",
    publications: 18,
    citations: 234,
    impact: "Patent Filed - FDA Review Pending",
  },
]

const researchCenters = [
  {
    name: "Center for Artificial Intelligence and Machine Learning",
    director: "Dr. Robert Johnson",
    established: "2020",
    focus: "AI applications in healthcare, education, and business",
    projects: 15,
    funding: "₱18.5M",
    image: "/center.png",
  },
  {
    name: "Sustainable Development Research Institute",
    director: "Dr. Maria Garcia",
    established: "2018",
    focus: "Environmental sustainability and renewable energy",
    projects: 12,
    funding: "₱22.1M",
    image: "/sustainins.png",
  },
  {
    name: "Biomedical Innovation Laboratory",
    director: "Dr. Patricia Williams",
    established: "2019",
    focus: "Medical device development and clinical research",
    projects: 18,
    funding: "₱16.8M",
    image: "/bio.png",
  },
  {
    name: "Philippine Culture and Heritage Studies Center",
    director: "Dr. Angela Rodriguez",
    established: "2017",
    focus: "Cultural preservation and historical research",
    projects: 8,
    funding: "₱5.2M",
    image: "/philins.png",
  },
]

const publications = [
  {
    title: "AI-Enhanced Cardiac Risk Assessment: A Multi-Center Study",
    authors: "Williams, P., Chen, M., Rodriguez, S.",
    journal: "Nature Medicine",
    year: "2024",
    citations: 45,
    impact: "9.2",
    type: "Original Research",
  },
  {
    title: "Sustainable Energy Infrastructure for Developing Nations",
    authors: "Garcia, M., Kim, D., Thompson, L.",
    journal: "Renewable Energy",
    year: "2024",
    citations: 32,
    impact: "8.1",
    type: "Review Article",
  },
  {
    title: "Nanotechnology in Targeted Cancer Therapy",
    authors: "Park, J., Johnson, R., Chen, E.",
    journal: "Science Translational Medicine",
    year: "2023",
    citations: 78,
    impact: "17.2",
    type: "Original Research",
  },
  {
    title: "Digital Transformation in Higher Education",
    authors: "Johnson, S., Brown, M., Wilson, J.",
    journal: "Educational Technology Research",
    year: "2024",
    citations: 23,
    impact: "6.4",
    type: "Case Study",
  },
]

export default function ResearchPage() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
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
                Research <span className="text-maxine-amaranth">Excellence</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Discover groundbreaking research initiatives, innovative discoveries, and scholarly publications from
                our world-class faculty and research centers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300">
                  Explore Research Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                >
                  View Publications
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/researchexe.png"
                  alt="Research Excellence"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Stats with Hover Animations */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchStats.map((stat, index) => (
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

      {/* Featured Research with Image-Text Splits and Animations */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Research Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most impactful research initiatives that are shaping the future across multiple disciplines
            </p>
          </div>

          <div className="space-y-16">
            {featuredResearch.map((research, index) => (
              <Card
                key={research.id}
                className={`overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-700 group transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 lg:h-full overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={research.image || "/placeholder.svg"}
                      alt={research.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-maxine-cherry text-white">{research.college}</Badge>
                    <Badge className="absolute top-4 right-4 bg-green-600 text-white">{research.status}</Badge>
                  </div>
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-maxine-amaranth transition-colors duration-300">
                        {research.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {research.researchers.map((researcher, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-maxine-lavender text-maxine-amaranth hover:scale-105 transition-transform duration-200"
                          >
                            {researcher}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-6 leading-relaxed">{research.abstract}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-maxine-lavender/50 p-3 rounded-lg hover:bg-maxine-lavender/70 transition-colors duration-300">
                          <div className="text-sm text-gray-600">Funding</div>
                          <div className="font-bold text-maxine-amaranth">{research.funding}</div>
                        </div>
                        <div className="bg-maxine-mimi/50 p-3 rounded-lg hover:bg-maxine-mimi/70 transition-colors duration-300">
                          <div className="text-sm text-gray-600">Duration</div>
                          <div className="font-bold text-maxine-amaranth">{research.duration}</div>
                        </div>
                        <div className="bg-maxine-pink/50 p-3 rounded-lg hover:bg-maxine-pink/70 transition-colors duration-300">
                          <div className="text-sm text-gray-600">Publications</div>
                          <div className="font-bold text-maxine-amaranth">{research.publications}</div>
                        </div>
                        <div className="bg-maxine-cherry/20 p-3 rounded-lg hover:bg-maxine-cherry/30 transition-colors duration-300">
                          <div className="text-sm text-gray-600">Citations</div>
                          <div className="font-bold text-maxine-amaranth">{research.citations}</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300">
                          View Full Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                        >
                          Download Report
                          <Download className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Centers with Framed Visuals and Staggered Animations */}
      <section className="py-16 bg-white">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Centers & Institutes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized research centers drive innovation across diverse fields of study
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchCenters.map((center, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 group border-0 shadow-lg hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={center.image || "/placeholder.svg"}
                    alt={center.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-maxine-cherry text-white text-xs">
                    Est. {center.established}
                  </Badge>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-maxine-amaranth transition-colors duration-300">
                    {center.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    <strong>Director:</strong> {center.director}
                  </CardDescription>
                  <CardDescription className="text-gray-600">{center.focus}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-maxine-lavender rounded-lg hover:bg-maxine-lavender/80 transition-colors duration-300">
                      <div className="text-2xl font-bold text-maxine-amaranth">{center.projects}</div>
                      <div className="text-sm text-gray-600">Active Projects</div>
                    </div>
                    <div className="text-center p-3 bg-maxine-mimi rounded-lg hover:bg-maxine-mimi/80 transition-colors duration-300">
                      <div className="text-lg font-bold text-maxine-amaranth">{center.funding}</div>
                      <div className="text-sm text-gray-600">Total Funding</div>
                    </div>
                  </div>
                  <Button className="w-full bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300">
                    Explore Center
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section with Hover Effects */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Publications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Latest scholarly publications from our faculty researchers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-500 border-l-4 border-l-maxine-cherry hover:scale-105 transform ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-maxine-lavender text-maxine-amaranth hover:scale-105 transition-transform duration-200"
                      >
                        {pub.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{pub.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-maxine-amaranth transition-colors duration-300">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-sm text-maxine-amaranth font-medium">{pub.journal}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-maxine-amaranth">{pub.citations}</div>
                        <div className="text-gray-500">Citations</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-maxine-amaranth">{pub.impact}</div>
                        <div className="text-gray-500">Impact Factor</div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                    >
                      View Publication
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Research Community</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Collaborate with world-class researchers, access state-of-the-art facilities, and contribute to
                groundbreaking discoveries that shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth hover:scale-105 transition-all duration-300">
                  Research Opportunities
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent hover:scale-105 transition-all duration-300"
                >
                  Contact Research Office
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/researchcta.png"
                  alt="Research Community"
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
