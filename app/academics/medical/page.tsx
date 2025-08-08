import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award } from "lucide-react"

const programs = [
  {
    name: "Doctor of Medicine",
    degree: "MD",
    duration: "4 years",
    credits: "180",
    description: "Comprehensive medical education preparing future physicians",
    specializations: ["Internal Medicine", "Surgery", "Pediatrics", "Emergency Medicine"],
  },
  {
    name: "Master of Public Health",
    degree: "MPH",
    duration: "2 years",
    credits: "48",
    description: "Advanced training in population health and disease prevention",
    specializations: ["Epidemiology", "Health Policy", "Environmental Health", "Biostatistics"],
  },
  {
    name: "Bachelor of Science in Medical Technology",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Laboratory science and diagnostic technology training",
    specializations: ["Clinical Chemistry", "Microbiology", "Hematology", "Immunology"],
  },
]

const faculty = [
  {
    name: "Dr. Patricia Williams",
    title: "Dean & Professor of Internal Medicine",
    education: "MD Harvard Medical School, Residency Johns Hopkins",
    specialization: "Cardiology, Medical Education",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Williams",
    email: "p.williams@maxine.edu",
    phone: "(555) 123-4580",
  },
  {
    name: "Dr. James Anderson",
    title: "Professor of Surgery",
    education: "MD Mayo Medical School, Fellowship Cleveland Clinic",
    specialization: "Cardiac Surgery, Minimally Invasive Procedures",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Anderson",
    email: "j.anderson@maxine.edu",
    phone: "(555) 123-4581",
  },
  {
    name: "Dr. Maria Rodriguez",
    title: "Professor of Pediatrics",
    education: "MD Stanford University, Residency UCSF",
    specialization: "Pediatric Oncology, Child Development",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Rodriguez",
    email: "m.rodriguez@maxine.edu",
    phone: "(555) 123-4582",
  },
]

export default function MedicalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">LCME Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Medical Sciences</h1>
              <p className="text-xl text-gray-700 mb-8">
                Training compassionate, skilled physicians and healthcare professionals through innovative medical
                education and cutting-edge research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply to Medical School</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Schedule Campus Tour
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/medsci.png"
                alt="College of Medical Sciences"
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
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">1,200+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">65</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">98%</div>
              <div className="text-gray-600">Board Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">95%</div>
              <div className="text-gray-600">Residency Match</div>
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
              <TabsTrigger value="admissions">Admissions</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
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
                        <span className="font-medium">Specializations:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {program.specializations.map((spec, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-maxine-lavender text-maxine-amaranth text-xs"
                            >
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

            <TabsContent value="admissions" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Medical School Admissions</CardTitle>
                  <CardDescription>Highly competitive program with rigorous admission requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-maxine-amaranth mb-4">Prerequisites</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Bachelor's degree from accredited institution</li>
                        <li>• Minimum GPA of 3.5</li>
                        <li>• MCAT score of 510 or higher</li>
                        <li>• Completion of prerequisite courses</li>
                        <li>• Clinical experience (minimum 100 hours)</li>
                        <li>• Research experience preferred</li>
                        <li>• Letters of recommendation (3 required)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-maxine-amaranth mb-4">Application Timeline</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • <strong>May 1:</strong> AMCAS application opens
                        </li>
                        <li>
                          • <strong>June 1:</strong> Application deadline
                        </li>
                        <li>
                          • <strong>July-August:</strong> Secondary applications
                        </li>
                        <li>
                          • <strong>September-March:</strong> Interviews
                        </li>
                        <li>
                          • <strong>October 15:</strong> First acceptance offers
                        </li>
                        <li>
                          • <strong>April 30:</strong> Final decision deadline
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faculty" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <TabsContent value="facilities" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Simulation+Center"
                      alt="Medical Simulation Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Medical Simulation Center</CardTitle>
                    <CardDescription>State-of-the-art training facility with high-fidelity simulators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 20 simulation rooms</li>
                      <li>• Advanced patient simulators</li>
                      <li>• Standardized patient program</li>
                      <li>• Video recording capabilities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Research+Labs"
                      alt="Research Laboratories"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Research Laboratories</CardTitle>
                    <CardDescription>Cutting-edge research facilities for medical innovation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Molecular biology labs</li>
                      <li>• Cell culture facilities</li>
                      <li>• Imaging equipment</li>
                      <li>• Biosafety level 2 labs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Teaching+Hospital"
                      alt="Teaching Hospital"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>University Teaching Hospital</CardTitle>
                    <CardDescription>300-bed hospital providing clinical training opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Emergency department</li>
                      <li>• Operating suites</li>
                      <li>• ICU and specialty units</li>
                      <li>• Outpatient clinics</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Anatomy+Lab"
                      alt="Anatomy Laboratory"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Anatomy Laboratory</CardTitle>
                    <CardDescription>Modern anatomy lab with digital learning tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cadaveric specimens</li>
                      <li>• 3D anatomy models</li>
                      <li>• Virtual dissection tables</li>
                      <li>• Histology lab</li>
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
