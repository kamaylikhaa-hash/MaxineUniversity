import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award, Eye, Glasses, Microscope } from "lucide-react"

const programs = [
  {
    name: "Doctor of Optometry",
    degree: "OD",
    duration: "4 years",
    credits: "144",
    description: "Comprehensive optometric education preparing primary eye care professionals",
    specializations: ["Primary Care", "Pediatric Optometry", "Low Vision", "Contact Lenses"],
  },
  {
    name: "Vision Science",
    degree: "MS",
    duration: "2 years",
    credits: "36",
    description: "Advanced research in vision science and ocular health",
    specializations: ["Vision Research", "Ocular Disease", "Visual Perception", "Optics"],
  },
  {
    name: "Optometric Residency",
    degree: "Certificate",
    duration: "1 year",
    credits: "48",
    description: "Post-graduate specialty training in advanced optometric care",
    specializations: ["Ocular Disease", "Pediatric Optometry", "Low Vision Rehabilitation", "Cornea & Contact Lenses"],
  },
]

const faculty = [
  {
    name: "Dr. Elizabeth Chen",
    title: "Dean & Professor of Optometry",
    education: "OD Pacific University, PhD Vision Science",
    specialization: "Ocular Disease, Glaucoma Management",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Chen",
    email: "e.chen@maxine.edu",
    phone: "(555) 123-4640",
  },
  {
    name: "Dr. Michael Rodriguez",
    title: "Professor of Pediatric Optometry",
    education: "OD Southern California College, Residency Children's Hospital",
    specialization: "Pediatric Eye Care, Vision Development",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Rodriguez",
    email: "m.rodriguez@maxine.edu",
    phone: "(555) 123-4641",
  },
  {
    name: "Dr. Sarah Johnson",
    title: "Professor of Contact Lens Sciences",
    education: "OD University of Houston, Fellowship Contact Lens",
    specialization: "Contact Lens Fitting, Corneal Health",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Johnson",
    email: "s.johnson@maxine.edu",
    phone: "(555) 123-4642",
  },
  {
    name: "Dr. David Kim",
    title: "Professor of Low Vision Rehabilitation",
    education: "OD Illinois College, MS Rehabilitation Sciences",
    specialization: "Low Vision, Vision Rehabilitation",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Kim",
    email: "d.kim@maxine.edu",
    phone: "(555) 123-4643",
  },
]

const clinicalCompetencies = [
  { area: "Comprehensive Eye Examinations", patients: 150, description: "Complete primary care evaluations" },
  { area: "Contact Lens Fittings", patients: 75, description: "Soft and rigid contact lens services" },
  { area: "Ocular Disease Management", patients: 100, description: "Diagnosis and treatment of eye diseases" },
  { area: "Pediatric Examinations", patients: 50, description: "Specialized care for children" },
  { area: "Low Vision Evaluations", patients: 25, description: "Vision rehabilitation services" },
  { area: "Surgical Co-management", patients: 40, description: "Pre and post-operative care" },
]

const clinicServices = [
  {
    name: "Primary Care Clinic",
    description: "Comprehensive eye examinations and vision care",
    hours: "Mon-Fri 8AM-5PM",
    phone: "(555) 123-4650",
  },
  {
    name: "Pediatric Eye Care",
    description: "Specialized services for infants, children, and teens",
    hours: "Mon-Fri 9AM-4PM",
    phone: "(555) 123-4651",
  },
  {
    name: "Contact Lens Clinic",
    description: "Fitting and follow-up care for all contact lens types",
    hours: "Mon-Fri 8AM-5PM",
    phone: "(555) 123-4652",
  },
  {
    name: "Low Vision Clinic",
    description: "Rehabilitation services for vision impairment",
    hours: "Tue, Thu 9AM-3PM",
    phone: "(555) 123-4653",
  },
]

export default function OptometryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">ACOE Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Optometry</h1>
              <p className="text-xl text-gray-700 mb-8">
                Leading optometric education with comprehensive eye care training, advanced research opportunities, and
                state-of-the-art clinical facilities serving the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply to Optometry</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Schedule Eye Exam
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Optometry+College"
                alt="Optometry College"
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
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">240</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">18</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">98%</div>
              <div className="text-gray-600">Board Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">8,000+</div>
              <div className="text-gray-600">Patients Served</div>
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
              <TabsTrigger value="clinical">Clinical Training</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="clinics">Eye Care Clinics</TabsTrigger>
            </TabsList>

            <TabsContent value="programs" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <span className="font-medium">Specializations:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {program.specializations.map((spec, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-maxine-lavender text-maxine-amaranth">
                              {spec}
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

            <TabsContent value="clinical" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Clinical Competency Requirements</CardTitle>
                    <CardDescription>Minimum patient encounters required for graduation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {clinicalCompetencies.map((comp, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-maxine-lavender rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-gray-900">{comp.area}</div>
                            <div className="text-sm text-gray-600">{comp.description}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-maxine-amaranth">{comp.patients}</div>
                            <div className="text-sm text-gray-600">patients</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-maxine-mimi rounded-lg">
                      <div className="font-semibold text-gray-900 mb-2">Total Patient Encounters</div>
                      <div className="text-3xl font-bold text-maxine-amaranth">440+ Patients</div>
                      <div className="text-sm text-gray-600">Exceeds ACOE requirements</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Clinical Rotations</CardTitle>
                    <CardDescription>Diverse training experiences across specialties</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Eye className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">Primary Care Clinic</div>
                          <div className="text-sm text-gray-600">Comprehensive eye examinations</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Glasses className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">Contact Lens Clinic</div>
                          <div className="text-sm text-gray-600">Specialty contact lens fittings</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Microscope className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">Ocular Disease Clinic</div>
                          <div className="text-sm text-gray-600">Advanced disease management</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Eye className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">Pediatric Eye Care</div>
                          <div className="text-sm text-gray-600">Children's vision services</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Glasses className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">Low Vision Clinic</div>
                          <div className="text-sm text-gray-600">Vision rehabilitation services</div>
                        </div>
                      </div>
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

            <TabsContent value="clinics" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {clinicServices.map((clinic, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder-200x400.png?height=200&width=400&text=${clinic.name.replace(/\s+/g, "+")}`}
                        alt={clinic.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{clinic.name}</CardTitle>
                      <CardDescription>{clinic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          {clinic.phone}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          {clinic.hours}
                        </div>
                      </div>
                      <Button className="w-full bg-maxine-cherry hover:bg-maxine-amaranth">Schedule Appointment</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Advanced Equipment & Technology</CardTitle>
                    <CardDescription>State-of-the-art diagnostic and treatment equipment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-maxine-lavender rounded-lg">
                        <Eye className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">OCT Imaging</h3>
                        <p className="text-sm text-gray-600">
                          Optical coherence tomography for detailed retinal imaging
                        </p>
                      </div>
                      <div className="text-center p-4 bg-maxine-mimi rounded-lg">
                        <Glasses className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Visual Field Testing</h3>
                        <p className="text-sm text-gray-600">
                          Advanced perimetry for glaucoma and neurological assessment
                        </p>
                      </div>
                      <div className="text-center p-4 bg-maxine-pink rounded-lg">
                        <Microscope className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Fundus Photography</h3>
                        <p className="text-sm text-gray-600">High-resolution retinal photography and documentation</p>
                      </div>
                    </div>
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
