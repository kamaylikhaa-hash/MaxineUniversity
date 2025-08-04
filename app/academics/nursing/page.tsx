import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award, Heart, Stethoscope, Activity } from "lucide-react"

const programs = [
  {
    name: "Bachelor of Science in Nursing",
    degree: "BSN",
    duration: "4 years",
    credits: "120",
    description: "Comprehensive nursing education preparing compassionate, skilled registered nurses",
    specializations: ["Medical-Surgical", "Pediatrics", "Mental Health", "Community Health"],
  },
  {
    name: "Accelerated BSN",
    degree: "ABSN",
    duration: "16 months",
    credits: "75",
    description: "Intensive program for students with previous bachelor's degree",
    specializations: ["Critical Care", "Emergency Nursing", "Perioperative", "Oncology"],
  },
  {
    name: "Master of Science in Nursing",
    degree: "MSN",
    duration: "2 years",
    credits: "42",
    description: "Advanced practice nursing with leadership and clinical specialization",
    specializations: ["Nurse Practitioner", "Nurse Educator", "Nurse Administrator", "Clinical Specialist"],
  },
  {
    name: "Doctor of Nursing Practice",
    degree: "DNP",
    duration: "3 years",
    credits: "75",
    description: "Terminal practice degree for advanced nursing leadership",
    specializations: ["Executive Leadership", "Clinical Practice", "Population Health", "Healthcare Innovation"],
  },
  {
    name: "RN to BSN",
    degree: "BSN",
    duration: "2 years",
    credits: "60",
    description: "Bridge program for registered nurses seeking bachelor's degree",
    specializations: ["Leadership", "Research", "Community Health", "Quality Improvement"],
  },
]

const faculty = [
  {
    name: "Dr. Mary Johnson",
    title: "Dean & Professor of Nursing",
    education: "PhD Nursing, Johns Hopkins University",
    specialization: "Critical Care, Nursing Education",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Johnson",
    email: "m.johnson@maxine.edu",
    phone: "(555) 123-4620",
  },
  {
    name: "Dr. Patricia Lee",
    title: "Professor of Pediatric Nursing",
    education: "PhD Nursing, University of Pennsylvania",
    specialization: "Pediatric Critical Care, Family Nursing",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Lee",
    email: "p.lee@maxine.edu",
    phone: "(555) 123-4621",
  },
  {
    name: "Dr. Robert Garcia",
    title: "Professor of Mental Health Nursing",
    education: "PhD Psychiatric Nursing, UCSF",
    specialization: "Psychiatric Nursing, Substance Abuse",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Garcia",
    email: "r.garcia@maxine.edu",
    phone: "(555) 123-4622",
  },
  {
    name: "Dr. Linda Chen",
    title: "Professor of Community Health Nursing",
    education: "PhD Public Health Nursing, University of Michigan",
    specialization: "Community Health, Health Promotion",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Chen",
    email: "l.chen@maxine.edu",
    phone: "(555) 123-4623",
  },
]

const clinicalRotations = [
  { specialty: "Medical-Surgical", hours: 180, semester: "Junior Fall" },
  { specialty: "Pediatrics", hours: 120, semester: "Junior Spring" },
  { specialty: "Maternity/OB", hours: 120, semester: "Junior Spring" },
  { specialty: "Mental Health", hours: 120, semester: "Senior Fall" },
  { specialty: "Community Health", hours: 90, semester: "Senior Fall" },
  { specialty: "Critical Care", hours: 150, semester: "Senior Spring" },
  { specialty: "Leadership/Management", hours: 90, semester: "Senior Spring" },
]

const nclex = {
  passRate: "98%",
  nationalAverage: "88%",
  firstTimePass: "96%",
  jobPlacement: "100%",
}

export default function NursingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">CCNE Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Nursing</h1>
              <p className="text-xl text-gray-700 mb-8">
                Preparing compassionate, competent nurses through evidence-based education, innovative simulation, and
                comprehensive clinical experiences in diverse healthcare settings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply to Nursing</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Tour Simulation Lab
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Nursing+College"
                alt="Nursing College"
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
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">950</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">38</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">98%</div>
              <div className="text-gray-600">NCLEX Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">100%</div>
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
              <TabsTrigger value="clinical">Clinical Experience</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
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
                        <div className="flex flex-wrap gap-1 mt-2">
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

            <TabsContent value="clinical" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Clinical Rotations</CardTitle>
                    <CardDescription>Comprehensive hands-on experience across nursing specialties</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {clinicalRotations.map((rotation, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-maxine-lavender rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-gray-900">{rotation.specialty}</div>
                            <div className="text-sm text-gray-600">{rotation.semester}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-maxine-amaranth">{rotation.hours}</div>
                            <div className="text-sm text-gray-600">hours</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-maxine-mimi rounded-lg">
                      <div className="font-semibold text-gray-900 mb-2">Total Clinical Hours</div>
                      <div className="text-3xl font-bold text-maxine-amaranth">870 Hours</div>
                      <div className="text-sm text-gray-600">Exceeds CCNE requirements</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Clinical Partners</CardTitle>
                    <CardDescription>Premier healthcare facilities for student placements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Heart className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">University Medical Center</div>
                          <div className="text-sm text-gray-600">Level 1 Trauma Center, 500 beds</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Stethoscope className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">Children's Hospital</div>
                          <div className="text-sm text-gray-600">Pediatric specialty care, 200 beds</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Activity className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">Regional Mental Health Center</div>
                          <div className="text-sm text-gray-600">Psychiatric and behavioral health</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg border">
                        <Heart className="h-6 w-6 mr-3 text-maxine-amaranth" />
                        <div>
                          <div className="font-medium">Community Health Clinics</div>
                          <div className="text-sm text-gray-600">Primary care and prevention</div>
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

            <TabsContent value="outcomes" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">NCLEX-RN Performance</CardTitle>
                    <CardDescription>Outstanding licensure examination results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-maxine-lavender rounded-lg">
                        <div className="text-3xl font-bold text-maxine-amaranth mb-2">{nclex.passRate}</div>
                        <div className="text-sm text-gray-600">Overall Pass Rate</div>
                      </div>
                      <div className="text-center p-4 bg-maxine-mimi rounded-lg">
                        <div className="text-3xl font-bold text-maxine-amaranth mb-2">{nclex.firstTimePass}</div>
                        <div className="text-sm text-gray-600">First-Time Pass Rate</div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-800">Above National Average</div>
                        <div className="text-sm text-green-600">National average: {nclex.nationalAverage}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Graduate Outcomes</CardTitle>
                    <CardDescription>Career success and professional advancement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-maxine-lavender rounded-lg">
                        <span className="font-medium">Job Placement Rate</span>
                        <span className="text-2xl font-bold text-maxine-amaranth">{nclex.jobPlacement}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-maxine-mimi rounded-lg">
                        <span className="font-medium">Employment within 6 months</span>
                        <span className="text-2xl font-bold text-maxine-amaranth">95%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-maxine-pink rounded-lg">
                        <span className="font-medium">Pursuing Advanced Degrees</span>
                        <span className="text-2xl font-bold text-maxine-amaranth">25%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-maxine-cherry text-white rounded-lg">
                        <span className="font-medium">Leadership Positions</span>
                        <span className="text-2xl font-bold">40%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Simulation & Skills Labs</CardTitle>
                    <CardDescription>State-of-the-art learning environments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center">
                          <Heart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">High-Fidelity Simulators</h3>
                        <p className="text-sm text-gray-600">
                          Advanced patient simulators for realistic clinical scenarios
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center">
                          <Stethoscope className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Skills Practice Labs</h3>
                        <p className="text-sm text-gray-600">Dedicated spaces for nursing procedure practice</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center">
                          <Activity className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Virtual Reality Training</h3>
                        <p className="text-sm text-gray-600">Immersive learning experiences with VR technology</p>
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
