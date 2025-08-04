import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award, MapPin, Clock } from "lucide-react"

const programs = [
  {
    name: "Doctor of Dental Surgery",
    degree: "DDS",
    duration: "4 years",
    credits: "160",
    description: "Comprehensive dental education preparing skilled general dentists",
    specializations: ["General Dentistry", "Oral Surgery", "Orthodontics", "Periodontics"],
  },
  {
    name: "Dental Hygiene",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Professional training in preventive dental care and patient education",
    specializations: ["Clinical Practice", "Public Health", "Education", "Research"],
  },
  {
    name: "Dental Assisting",
    degree: "Certificate",
    duration: "1 year",
    credits: "36",
    description: "Essential skills for supporting dental practice operations",
    specializations: ["Chairside Assisting", "Radiology", "Practice Management", "Expanded Functions"],
  },
  {
    name: "Advanced Education in General Dentistry",
    degree: "Certificate",
    duration: "1 year",
    credits: "48",
    description: "Post-graduate training for enhanced clinical skills",
    specializations: ["Complex Restorations", "Oral Surgery", "Endodontics", "Prosthodontics"],
  },
]

const faculty = [
  {
    name: "Dr. Jennifer Martinez",
    title: "Dean & Professor of Oral Surgery",
    education: "DDS University of Pennsylvania, Residency UCSF",
    specialization: "Oral & Maxillofacial Surgery, Dental Implants",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Martinez",
    email: "j.martinez@maxine.edu",
    phone: "(555) 123-4590",
  },
  {
    name: "Dr. Robert Kim",
    title: "Professor of Orthodontics",
    education: "DDS Harvard School of Dental Medicine, MS Orthodontics",
    specialization: "Orthodontics, Craniofacial Development",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Kim",
    email: "r.kim@maxine.edu",
    phone: "(555) 123-4591",
  },
  {
    name: "Dr. Lisa Thompson",
    title: "Professor of Periodontics",
    education: "DDS University of Michigan, Residency Mayo Clinic",
    specialization: "Periodontics, Dental Implantology",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Thompson",
    email: "l.thompson@maxine.edu",
    phone: "(555) 123-4592",
  },
  {
    name: "Dr. Mark Wilson",
    title: "Professor of Restorative Dentistry",
    education: "DDS Northwestern University, Fellowship in Prosthodontics",
    specialization: "Prosthodontics, Cosmetic Dentistry",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Wilson",
    email: "m.wilson@maxine.edu",
    phone: "(555) 123-4593",
  },
]

const clinicalRequirements = [
  { procedure: "Amalgam Restorations", required: 25, description: "Posterior composite and amalgam fillings" },
  { procedure: "Composite Restorations", required: 30, description: "Anterior and posterior composite restorations" },
  { procedure: "Crown Preparations", required: 15, description: "Full coverage crown preparations" },
  { procedure: "Extractions", required: 20, description: "Simple and surgical tooth extractions" },
  { procedure: "Root Canal Therapy", required: 8, description: "Endodontic treatment procedures" },
  { procedure: "Periodontal Therapy", required: 12, description: "Scaling, root planing, and maintenance" },
]

export default function DentistryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">ADA Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Dentistry</h1>
              <p className="text-xl text-gray-700 mb-8">
                Excellence in dental education with comprehensive clinical training, state-of-the-art facilities, and a
                commitment to oral health care for all communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply to Dental School</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Schedule Clinic Visit
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Dental+College"
                alt="Dental College"
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
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">280</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">32</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">95%</div>
              <div className="text-gray-600">Board Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">5,000+</div>
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
              <TabsTrigger value="admissions">Admissions</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="clinics">Clinics</TabsTrigger>
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
                        <span className="font-medium">Focus Areas:</span>
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

            <TabsContent value="admissions" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">DDS Admissions Requirements</CardTitle>
                    <CardDescription>Competitive program with comprehensive evaluation process</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-maxine-amaranth mb-2">Academic Requirements</h3>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Bachelor's degree (minimum 90 credit hours)</li>
                          <li>• Minimum GPA of 3.0 (3.5 preferred)</li>
                          <li>• DAT score of 18 or higher</li>
                          <li>• Prerequisite courses completed</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-maxine-amaranth mb-2">Experience Requirements</h3>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Dental shadowing (minimum 100 hours)</li>
                          <li>• Healthcare experience preferred</li>
                          <li>• Community service involvement</li>
                          <li>• Leadership experience</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Clinical Requirements</CardTitle>
                    <CardDescription>Hands-on experience requirements for graduation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {clinicalRequirements.map((req, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-maxine-lavender rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-gray-900">{req.procedure}</div>
                            <div className="text-sm text-gray-600">{req.description}</div>
                          </div>
                          <div className="text-2xl font-bold text-maxine-amaranth">{req.required}</div>
                        </div>
                      ))}
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
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=General+Dentistry+Clinic"
                      alt="General Dentistry Clinic"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>General Dentistry Clinic</CardTitle>
                    <CardDescription>Comprehensive dental care provided by supervised students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-maxine-amaranth" />
                        Mon-Fri: 8:00 AM - 5:00 PM
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-maxine-amaranth" />
                        (555) 123-4600
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-maxine-amaranth" />
                        Dental Building, Floor 2
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">
                      Schedule Appointment
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Specialty+Clinic"
                      alt="Specialty Clinic"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Specialty Clinics</CardTitle>
                    <CardDescription>Advanced treatments in specialized areas of dentistry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>• Orthodontics</div>
                      <div>• Oral Surgery</div>
                      <div>• Periodontics</div>
                      <div>• Prosthodontics</div>
                      <div>• Pediatric Dentistry</div>
                    </div>
                    <Button className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">View Specialties</Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Emergency+Clinic"
                      alt="Emergency Clinic"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Emergency Clinic</CardTitle>
                    <CardDescription>Urgent dental care for acute conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-maxine-amaranth" />
                        24/7 Emergency Line
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-maxine-amaranth" />
                        (555) 123-4911
                      </div>
                      <div className="text-red-600 font-medium">For dental emergencies only</div>
                    </div>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">Emergency Contact</Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Community+Outreach"
                      alt="Community Outreach"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Community Outreach</CardTitle>
                    <CardDescription>Free dental screenings and education programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>• School visit programs</div>
                      <div>• Senior center screenings</div>
                      <div>• Health fair participation</div>
                      <div>• Oral health education</div>
                    </div>
                    <Button className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">Get Involved</Button>
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
