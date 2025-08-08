import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Mail, Phone, MapPin, Award, BookOpen } from "lucide-react"

const programs = [
  {
    name: "Bachelor of Business Administration",
    degree: "BBA",
    duration: "4 years",
    credits: "120",
    description: "Comprehensive business education covering all major business disciplines",
    concentrations: ["Marketing", "Finance", "Management", "International Business"],
  },
  {
    name: "Master of Business Administration",
    degree: "MBA",
    duration: "2 years",
    credits: "48",
    description: "Advanced business leadership program for working professionals",
    concentrations: ["Executive Leadership", "Healthcare Management", "Technology Management"],
  },
  {
    name: "Bachelor of Science in Accounting",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Prepare for CPA certification and accounting careers",
    concentrations: ["Public Accounting", "Corporate Accounting", "Forensic Accounting"],
  },
  {
    name: "Master of Accountancy",
    degree: "MAcc",
    duration: "1 year",
    credits: "30",
    description: "Advanced accounting program meeting CPA requirements",
    concentrations: ["Taxation", "Auditing", "Financial Reporting"],
  },
]

const faculty = [
  {
    name: "Dr. Robert Martinez",
    title: "Dean & Professor of Finance",
    education: "PhD Finance, Harvard Business School",
    specialization: "Corporate Finance, Investment Banking",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Martinez",
    email: "r.martinez@maxine.edu",
    phone: "(555) 123-4567",
  },
  {
    name: "Dr. Sarah Chen",
    title: "Professor of Marketing",
    education: "PhD Marketing, Stanford University",
    specialization: "Digital Marketing, Consumer Behavior",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Chen",
    email: "s.chen@maxine.edu",
    phone: "(555) 123-4568",
  },
  {
    name: "Dr. Michael Johnson",
    title: "Professor of Accounting",
    education: "PhD Accounting, University of Chicago",
    specialization: "Financial Reporting, Auditing",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Johnson",
    email: "m.johnson@maxine.edu",
    phone: "(555) 123-4569",
  },
  {
    name: "Dr. Lisa Thompson",
    title: "Associate Professor of Management",
    education: "PhD Management, MIT Sloan",
    specialization: "Organizational Behavior, Leadership",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Thompson",
    email: "l.thompson@maxine.edu",
    phone: "(555) 123-4570",
  },
]

const curriculum = {
  BBA: {
    "Year 1": [
      "Principles of Management",
      "Financial Accounting",
      "Business Statistics",
      "Microeconomics",
      "Business Communication",
      "Marketing Fundamentals",
    ],
    "Year 2": [
      "Managerial Accounting",
      "Macroeconomics",
      "Business Law",
      "Operations Management",
      "Organizational Behavior",
      "Business Ethics",
    ],
    "Year 3": [
      "Corporate Finance",
      "Strategic Management",
      "International Business",
      "Concentration Courses",
      "Business Research Methods",
      "Electives",
    ],
    "Year 4": [
      "Advanced Concentration Courses",
      "Capstone Project",
      "Internship",
      "Leadership Seminar",
      "Electives",
      "Senior Portfolio",
    ],
  },
}

const resources = [
  {
    name: "Business Program Handbook",
    type: "PDF",
    size: "2.3 MB",
    description: "Complete guide to business programs and requirements",
  },
  {
    name: "MBA Application Guide",
    type: "PDF",
    size: "1.8 MB",
    description: "Step-by-step MBA application process",
  },
  {
    name: "Internship Opportunities",
    type: "PDF",
    size: "1.2 MB",
    description: "Current internship and co-op opportunities",
  },
  {
    name: "Career Services Guide",
    type: "PDF",
    size: "950 KB",
    description: "Career planning and job search resources",
  },
]

export default function BusinessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">AACSB Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Business & Accountancy</h1>
              <p className="text-xl text-gray-700 mb-8">
                Preparing future business leaders through innovative education, practical experience, and ethical
                leadership development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply Now</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Schedule Visit
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/cba.png"
                alt="College of Business & Accountancy"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">3,200+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">45</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">12</div>
              <div className="text-gray-600">Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">96%</div>
              <div className="text-gray-600">Job Placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 gradient-section">
        <div className="container">
          <Tabs defaultValue="programs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="programs" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{program.name}</CardTitle>
                        <Badge variant="outline" className="text-maxine-amaranth border-maxine-amaranth">
                          {program.degree}
                        </Badge>
                      </div>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="font-medium">Duration:</span>
                          <span className="ml-2 text-maxine-amaranth">{program.duration}</span>
                        </div>
                        <div>
                          <span className="font-medium">Credits:</span>
                          <span className="ml-2 text-maxine-amaranth">{program.credits}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="font-medium">Concentrations:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {program.concentrations.map((concentration, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-maxine-lavender text-maxine-amaranth">
                              {concentration}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-maxine-cherry hover:bg-maxine-amaranth">Learn More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Bachelor of Business Administration Curriculum</CardTitle>
                  <CardDescription>
                    Comprehensive 4-year program structure designed to build business expertise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(curriculum.BBA).map(([year, courses]) => (
                      <div key={year}>
                        <h3 className="text-lg font-semibold text-maxine-amaranth mb-3">{year}</h3>
                        <ul className="space-y-2">
                          {courses.map((course, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <BookOpen className="h-4 w-4 mr-2 mt-0.5 text-maxine-cherry flex-shrink-0" />
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faculty" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {faculty.map((member, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-maxine-amaranth font-medium">{member.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div>
                          <Award className="h-4 w-4 inline mr-2 text-maxine-cherry" />
                          {member.education}
                        </div>
                        <div className="text-gray-600">{member.specialization}</div>
                        <div className="pt-2 space-y-1">
                          <div className="flex items-center justify-center text-xs">
                            <Mail className="h-3 w-3 mr-1 text-maxine-amaranth" />
                            {member.email}
                          </div>
                          <div className="flex items-center justify-center text-xs">
                            <Phone className="h-3 w-3 mr-1 text-maxine-amaranth" />
                            {member.phone}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{resource.name}</CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-maxine-amaranth border-maxine-amaranth">
                          {resource.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{resource.size}</span>
                        <Button size="sm" className="bg-maxine-cherry hover:bg-maxine-amaranth">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Ready to start your business education journey?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 mx-auto text-maxine-amaranth mb-2" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Business Building, Room 200
                  <br />
                  123 University Ave
                  <br />
                  Academic City, AC 12345
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto text-maxine-amaranth mb-2" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Main Office: (555) 123-4500
                  <br />
                  Admissions: (555) 123-4501
                  <br />
                  Student Services: (555) 123-4502
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto text-maxine-amaranth mb-2" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  General: business@maxine.edu
                  <br />
                  Admissions: busadmit@maxine.edu
                  <br />
                  Advising: busadvise@maxine.edu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
