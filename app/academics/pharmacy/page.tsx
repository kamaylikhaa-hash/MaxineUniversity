import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award, Pill, FlaskConical, Microscope } from "lucide-react"

const programs = [
  {
    name: "Doctor of Pharmacy",
    degree: "PharmD",
    duration: "4 years",
    credits: "144",
    description: "Comprehensive pharmaceutical education preparing clinical pharmacists",
    specializations: ["Clinical Pharmacy", "Hospital Pharmacy", "Community Pharmacy", "Industrial Pharmacy"],
  },
  {
    name: "Pharmaceutical Sciences",
    degree: "MS",
    duration: "2 years",
    credits: "36",
    description: "Advanced research in drug development and pharmaceutical sciences",
    specializations: ["Medicinal Chemistry", "Pharmacology", "Pharmaceutics", "Pharmacokinetics"],
  },
  {
    name: "Pharmacy Residency",
    degree: "Certificate",
    duration: "1-2 years",
    credits: "48-96",
    description: "Post-graduate specialty training in advanced pharmacy practice",
    specializations: ["Clinical Pharmacy", "Ambulatory Care", "Critical Care", "Oncology Pharmacy"],
  },
]

const faculty = [
  {
    name: "Dr. Jennifer Park",
    title: "Dean & Professor of Clinical Pharmacy",
    education: "PharmD University of California, PhD Pharmacology",
    specialization: "Clinical Pharmacology, Drug Interactions",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Park",
    email: "j.park@maxine.edu",
    phone: "(555) 123-4660",
  },
  {
    name: "Dr. Michael Thompson",
    title: "Professor of Medicinal Chemistry",
    education: "PhD Medicinal Chemistry, University of Michigan",
    specialization: "Drug Design, Synthetic Chemistry",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Thompson",
    email: "m.thompson@maxine.edu",
    phone: "(555) 123-4661",
  },
  {
    name: "Dr. Sarah Rodriguez",
    title: "Professor of Pharmacology",
    education: "PharmD, PhD Pharmacology, Johns Hopkins",
    specialization: "Cardiovascular Pharmacology, Clinical Trials",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Rodriguez",
    email: "s.rodriguez@maxine.edu",
    phone: "(555) 123-4662",
  },
  {
    name: "Dr. David Chen",
    title: "Professor of Pharmaceutics",
    education: "PhD Pharmaceutics, University of Wisconsin",
    specialization: "Drug Delivery Systems, Nanotechnology",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Chen",
    email: "d.chen@maxine.edu",
    phone: "(555) 123-4663",
  },
]

const rotationSites = [
  { site: "University Medical Center", type: "Hospital", specialties: ["Internal Medicine", "Surgery", "ICU"] },
  { site: "Children's Hospital", type: "Pediatric", specialties: ["Pediatrics", "NICU", "Oncology"] },
  { site: "Community Pharmacy Chain", type: "Retail", specialties: ["Community Practice", "MTM", "Immunizations"] },
  { site: "Ambulatory Care Clinics", type: "Outpatient", specialties: ["Diabetes Care", "Anticoagulation", "HTN"] },
  {
    site: "Pharmaceutical Industry",
    type: "Industry",
    specialties: ["Drug Development", "Regulatory Affairs", "Medical Affairs"],
  },
  { site: "Long-term Care Facilities", type: "Geriatric", specialties: ["Geriatric Pharmacy", "Consultant Services"] },
]

const researchAreas = [
  {
    area: "Drug Discovery & Development",
    description: "Novel therapeutic compounds and drug delivery systems",
    projects: 12,
    funding: "$2.5M",
  },
  {
    area: "Clinical Pharmacy Research",
    description: "Medication therapy optimization and patient outcomes",
    projects: 8,
    funding: "$1.8M",
  },
  {
    area: "Pharmacoeconomics",
    description: "Cost-effectiveness analysis of pharmaceutical interventions",
    projects: 6,
    funding: "$1.2M",
  },
  {
    area: "Precision Medicine",
    description: "Pharmacogenomics and personalized drug therapy",
    projects: 10,
    funding: "$2.1M",
  },
]

export default function PharmacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">ACPE Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Pharmacy</h1>
              <p className="text-xl text-gray-700 mb-8">
                Pharmaceutical excellence through innovative curriculum, cutting-edge research, and comprehensive
                clinical practice integration preparing tomorrow's pharmacy leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply to Pharmacy</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Tour Research Labs
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Pharmacy+College"
                alt="Pharmacy College"
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
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">420</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">28</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">97%</div>
              <div className="text-gray-600">NAPLEX Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">$7.6M</div>
              <div className="text-gray-600">Research Funding</div>
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
              <TabsTrigger value="rotations">Clinical Rotations</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
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

            <TabsContent value="rotations" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Advanced Pharmacy Practice Experiences</CardTitle>
                    <CardDescription>Required rotations in diverse pharmacy practice settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {rotationSites.map((site, index) => (
                        <div key={index} className="p-3 bg-maxine-lavender rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium text-gray-900">{site.site}</div>
                            <Badge variant="outline" className="text-maxine-amaranth border-maxine-amaranth text-xs">
                              {site.type}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {site.specialties.map((specialty, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-maxine-mimi text-maxine-amaranth text-xs"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Rotation Requirements</CardTitle>
                    <CardDescription>Comprehensive clinical experience across pharmacy practice</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-maxine-mimi rounded-lg">
                        <span className="font-medium">Total APPE Hours</span>
                        <span className="text-2xl font-bold text-maxine-amaranth">1,440</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-maxine-pink rounded-lg">
                        <span className="font-medium">Required Rotations</span>
                        <span className="text-2xl font-bold text-maxine-amaranth">6</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-maxine-cherry text-white rounded-lg">
                        <span className="font-medium">Elective Rotations</span>
                        <span className="text-2xl font-bold">3</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900 mb-3">Core Rotation Areas:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Pill className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          Community Pharmacy Practice
                        </div>
                        <div className="flex items-center">
                          <FlaskConical className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          Hospital/Health System Pharmacy
                        </div>
                        <div className="flex items-center">
                          <Microscope className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          Ambulatory Care Pharmacy
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          General Medicine/Internal Medicine
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchAreas.map((area, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{area.area}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-maxine-lavender rounded-lg">
                          <div className="text-2xl font-bold text-maxine-amaranth">{area.projects}</div>
                          <div className="text-sm text-gray-600">Active Projects</div>
                        </div>
                        <div className="text-center p-3 bg-maxine-mimi rounded-lg">
                          <div className="text-2xl font-bold text-maxine-amaranth">{area.funding}</div>
                          <div className="text-sm text-gray-600">Research Funding</div>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">View Projects</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Research Facilities</CardTitle>
                    <CardDescription>State-of-the-art laboratories and equipment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-maxine-lavender rounded-lg">
                        <FlaskConical className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Medicinal Chemistry Labs</h3>
                        <p className="text-sm text-gray-600">Synthetic chemistry and drug design facilities</p>
                      </div>
                      <div className="text-center p-4 bg-maxine-mimi rounded-lg">
                        <Microscope className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Pharmacology Labs</h3>
                        <p className="text-sm text-gray-600">Cell culture and molecular biology research</p>
                      </div>
                      <div className="text-center p-4 bg-maxine-pink rounded-lg">
                        <Pill className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Pharmaceutics Labs</h3>
                        <p className="text-sm text-gray-600">Drug formulation and delivery systems</p>
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
          </Tabs>
        </div>
      </section>
    </div>
  )
}
