"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Briefcase, MapPin, Clock, DollarSign, ExternalLink, Download, Users, FileText } from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tech Innovators Inc.",
    location: "Makati City",
    type: "Internship",
    salary: "₱20,000/month",
    posted: "2 days ago",
    description: "Develop and maintain web applications using modern frameworks. Collaborate with senior engineers.",
    requirements: ["BS Computer Science", "Proficiency in React/Node.js", "Strong problem-solving skills"],
  },
  {
    id: 2,
    title: "Junior Accountant",
    company: "Global Finance Solutions",
    location: "Taguig City",
    type: "Full-time",
    salary: "₱30,000/month",
    posted: "5 days ago",
    description: "Assist in preparing financial statements, managing ledgers, and conducting audits.",
    requirements: ["BS Accountancy", "CPA preferred", "Attention to detail"],
  },
  {
    id: 3,
    title: "Research Assistant (Medical)",
    company: "Maxine University Hospital",
    location: "Quezon City",
    type: "Part-time",
    salary: "₱15,000/month",
    posted: "1 week ago",
    description: "Support medical research projects, data collection, and laboratory experiments.",
    requirements: ["BS Medical Technology/Biology", "Laboratory experience", "Strong analytical skills"],
  },
  {
    id: 4,
    title: "Marketing Specialist",
    company: "Brand Builders Co.",
    location: "Pasig City",
    type: "Full-time",
    salary: "₱35,000/month",
    posted: "3 days ago",
    description: "Develop and execute marketing campaigns, manage social media, and analyze market trends.",
    requirements: ["BS Marketing/Communications", "Experience with digital marketing tools", "Creative thinking"],
  },
  {
    id: 5,
    title: "Civil Engineer",
    company: "MegaStructures Corp.",
    location: "Cebu City",
    type: "Full-time",
    salary: "₱40,000/month",
    posted: "1 day ago",
    description: "Design, plan, and oversee construction projects. Ensure compliance with safety standards.",
    requirements: ["BS Civil Engineering", "Licensed Engineer", "Project management experience"],
  },
]

const careerServices = [
  {
    name: "Resume & Cover Letter Review",
    description: "Get personalized feedback to perfect your application documents.",
    icon: FileText,
  },
  {
    name: "Interview Preparation",
    description: "Practice mock interviews and receive tips for success.",
    icon: Users,
  },
  {
    name: "Career Counseling",
    description: "Explore career paths, set goals, and develop a job search strategy.",
    icon: Briefcase,
  },
  {
    name: "Networking Events",
    description: "Connect with industry professionals and potential employers.",
    icon: Users,
  },
]

const careerResources = [
  { title: "Job Search Strategies Guide", type: "PDF", link: "#" },
  { title: "Interview Success Handbook", type: "PDF", link: "#" },
  { title: "Resume Template Pack", type: "ZIP", link: "#" },
  { title: "Internship Opportunities List", type: "XLSX", link: "#" },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [jobType, setJobType] = React.useState("All")
  const [location, setLocation] = React.useState("All")
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = jobType === "All" || job.type === jobType
    const matchesLocation = location === "All" || job.location === location
    return matchesSearch && matchesType && matchesLocation
  })

  const jobTypes = ["All", "Full-time", "Part-time", "Internship"]
  const locations = ["All", "Makati City", "Taguig City", "Quezon City", "Pasig City", "Cebu City"]

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
                Your Career <span className="text-maxine-amaranth">Starts Here</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Maxine University's Career Services connects students and alumni with top employers, providing resources
                and opportunities for professional growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300"
                >
                  <Link href="/careers#job-board">Explore Job Openings</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Link href="/careers#services">Career Services</Link>
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Career+Success"
                  alt="Career Success"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Board Section */}
      <section id="job-board" className="py-16 bg-white">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse the latest job and internship opportunities from our industry partners
            </p>
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto space-y-6 mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search by title, company, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-maxine-mimi focus:border-maxine-amaranth transition-colors duration-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select onValueChange={setJobType} value={jobType}>
                <SelectTrigger className="h-12 text-lg border-2 border-maxine-mimi focus:border-maxine-amaranth transition-colors duration-300">
                  <SelectValue placeholder="Filter by Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setLocation} value={location}>
                <SelectTrigger className="h-12 text-lg border-2 border-maxine-mimi focus:border-maxine-amaranth transition-colors duration-300">
                  <SelectValue placeholder="Filter by Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <Card
                key={job.id}
                className={`p-6 hover:shadow-xl transition-all duration-500 border-l-4 border-l-maxine-cherry hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0 mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900 hover:text-maxine-amaranth transition-colors duration-300">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">{job.company}</CardDescription>
                    </div>
                    <Badge className="bg-maxine-cherry text-white">{job.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.requirements.map((req, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-maxine-lavender text-maxine-amaranth text-xs"
                        >
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-maxine-cherry hover:bg-maxine-amaranth">
                    Apply Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Services Section */}
      <section id="services" className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Career Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to help you navigate your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerServices.map((service, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-500 group border-0 shadow-lg hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-maxine-amaranth transition-colors duration-300">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">Schedule an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Career Resources Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download helpful guides and templates to boost your job search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerResources.map((resource, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-500 border-l-4 border-l-maxine-cherry hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 hover:text-maxine-amaranth transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <Badge variant="secondary" className="bg-maxine-lavender text-maxine-amaranth text-xs mt-1">
                      {resource.type}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-maxine-amaranth text-maxine-amaranth bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
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
              <h2 className="text-3xl md:text-4xl font-bold">Ready for Your Next Step?</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Let Maxine University's Career Services guide you to your dream job. Connect with us today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth hover:scale-105 transition-all duration-300"
                >
                  <Link href="/careers#job-board">View All Opportunities</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">Contact Career Services</Link>
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Career+Guidance"
                  alt="Career Guidance"
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
