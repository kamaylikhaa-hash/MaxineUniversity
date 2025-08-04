import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award, BookOpen } from "lucide-react"

const programs = [
  {
    name: "Elementary Education",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Prepare to teach grades K-6 with comprehensive pedagogical training",
    certifications: ["K-6 Teaching License", "Reading Specialist", "ESL Endorsement", "Special Education"],
  },
  {
    name: "Secondary Education",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Subject-specific teaching preparation for grades 7-12",
    certifications: [
      "7-12 Teaching License",
      "Subject Area Endorsement",
      "Coaching Certification",
      "Technology Integration",
    ],
  },
  {
    name: "Special Education",
    degree: "BS",
    duration: "4 years",
    credits: "126",
    description: "Specialized training for students with diverse learning needs",
    certifications: ["Special Education License", "Behavior Specialist", "Autism Specialist", "Assistive Technology"],
  },
  {
    name: "Educational Leadership",
    degree: "MEd",
    duration: "2 years",
    credits: "36",
    description: "Advanced preparation for school administration and leadership roles",
    certifications: ["Principal License", "Superintendent License", "Curriculum Director", "Instructional Coach"],
  },
  {
    name: "Counseling Psychology",
    degree: "MS",
    duration: "2 years",
    credits: "48",
    description: "School counseling and mental health support training",
    certifications: ["School Counselor License", "Mental Health Counselor", "Career Counselor", "Crisis Intervention"],
  },
  {
    name: "Curriculum & Instruction",
    degree: "MEd",
    duration: "2 years",
    credits: "33",
    description: "Advanced study in curriculum development and instructional design",
    certifications: [
      "Curriculum Specialist",
      "Instructional Designer",
      "Assessment Specialist",
      "Professional Development",
    ],
  },
]

const faculty = [
  {
    name: "Dr. Susan Davis",
    title: "Dean & Professor of Educational Leadership",
    education: "PhD Educational Administration, Columbia Teachers College",
    specialization: "School Leadership, Policy Analysis",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Davis",
    email: "s.davis@maxine.edu",
    phone: "(555) 123-4610",
  },
  {
    name: "Dr. Michael Brown",
    title: "Professor of Elementary Education",
    education: "PhD Curriculum & Instruction, Stanford University",
    specialization: "Literacy Development, Classroom Management",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Brown",
    email: "m.brown@maxine.edu",
    phone: "(555) 123-4611",
  },
  {
    name: "Dr. Angela Rodriguez",
    title: "Professor of Special Education",
    education: "PhD Special Education, University of Kansas",
    specialization: "Autism Spectrum Disorders, Inclusive Education",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Rodriguez",
    email: "a.rodriguez@maxine.edu",
    phone: "(555) 123-4612",
  },
  {
    name: "Dr. James Wilson",
    title: "Professor of Educational Psychology",
    education: "PhD Educational Psychology, University of Wisconsin",
    specialization: "Learning Theory, Assessment & Evaluation",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Wilson",
    email: "j.wilson@maxine.edu",
    phone: "(555) 123-4613",
  },
]

const fieldExperience = [
  { level: "Freshman", hours: 40, description: "Classroom observation and tutoring" },
  { level: "Sophomore", hours: 60, description: "Small group instruction and lesson planning" },
  { level: "Junior", hours: 100, description: "Co-teaching and curriculum development" },
  { level: "Senior", hours: 480, description: "Student teaching (full semester)" },
]

const partnerSchools = [
  "Lincoln Elementary School",
  "Roosevelt Middle School",
  "Washington High School",
  "Jefferson STEM Academy",
  "Madison Arts Magnet",
  "Hamilton International School",
  "Adams Special Education Center",
  "Monroe Early Childhood Center",
]

export default function EducationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">CAEP Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Education</h1>
              <p className="text-xl text-gray-700 mb-8">
                Shaping tomorrow's educators through innovative teaching methods, hands-on classroom experience, and a
                commitment to educational excellence for all learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply to Education Programs</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Visit Teaching Labs
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Education+College"
                alt="Education College"
                fill
                className="object-cover rounded-lg"
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
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">1,800</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">28</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">100%</div>
              <div className="text-gray-600">Job Placement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">50+</div>
              <div className="text-gray-600">Partner Schools</div>
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
              <TabsTrigger value="field-experience">Field Experience</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="programs" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{program.name}</CardTitle>
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
                        <span className="font-medium">Certifications:</span>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {program.certifications.map((cert, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-maxine-lavender text-maxine-amaranth text-xs"
                            >
                              {cert}
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

            <TabsContent value="field-experience" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Field Experience Requirements</CardTitle>
                    <CardDescription>Progressive hands-on experience throughout your program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {fieldExperience.map((exp, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-maxine-lavender rounded-lg"
                        >
                          <div>
                            <div className="font-semibold text-gray-900">{exp.level} Year</div>
                            <div className="text-sm text-gray-600">{exp.description}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-maxine-amaranth">{exp.hours}</div>
                            <div className="text-sm text-gray-600">hours</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-maxine-mimi rounded-lg">
                      <div className="font-semibold text-gray-900 mb-2">Total Field Experience</div>
                      <div className="text-3xl font-bold text-maxine-amaranth">680 Hours</div>
                      <div className="text-sm text-gray-600">Exceeds state requirements</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Partner Schools</CardTitle>
                    <CardDescription>Diverse placement opportunities across the region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {partnerSchools.map((school, index) => (
                        <div key={index} className="flex items-center p-3 bg-white rounded-lg border">
                          <BookOpen className="h-5 w-5 mr-3 text-maxine-amaranth" />
                          <span className="text-gray-700">{school}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">View All Partners</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Teaching+Lab"
                      alt="Teaching Laboratory"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Teaching Laboratories</CardTitle>
                    <CardDescription>Simulated classroom environments for practice teaching</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Smart board technology</li>
                      <li>• Video recording capabilities</li>
                      <li>• Flexible seating arrangements</li>
                      <li>• Educational resource library</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Curriculum+Library"
                      alt="Curriculum Library"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Curriculum Resource Center</CardTitle>
                    <CardDescription>Extensive collection of teaching materials and resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• K-12 textbook collection</li>
                      <li>• Educational games & manipulatives</li>
                      <li>• Digital learning tools</li>
                      <li>• Assessment instruments</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Technology+Center"
                      alt="Educational Technology Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Educational Technology Center</CardTitle>
                    <CardDescription>Latest educational technology and training</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• iPad and tablet integration</li>
                      <li>• Learning management systems</li>
                      <li>• Virtual reality applications</li>
                      <li>• Coding and robotics tools</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Special+Ed+Lab"
                      alt="Special Education Lab"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Special Education Laboratory</CardTitle>
                    <CardDescription>Specialized equipment for diverse learning needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Assistive technology devices</li>
                      <li>• Sensory learning tools</li>
                      <li>• Communication aids</li>
                      <li>• Adaptive furniture</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Reading+Clinic"
                      alt="Reading Clinic"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Reading & Literacy Clinic</CardTitle>
                    <CardDescription>Diagnostic and intervention services for reading difficulties</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Reading assessment tools</li>
                      <li>• Intervention programs</li>
                      <li>• Family literacy support</li>
                      <li>• Tutoring services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Career+Services"
                      alt="Education Career Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Education Career Services</CardTitle>
                    <CardDescription>Dedicated support for education career placement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Teaching job fairs</li>
                      <li>• Interview preparation</li>
                      <li>• Portfolio development</li>
                      <li>• Certification assistance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
