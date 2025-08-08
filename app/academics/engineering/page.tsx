import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award, Cpu, Zap, Cog, Wrench } from "lucide-react"

const programs = [
  {
    name: "Computer Science",
    degree: "BS",
    duration: "4 years",
    credits: "128",
    description: "Comprehensive computer science education with software development focus",
    concentrations: ["Software Engineering", "Artificial Intelligence", "Cybersecurity", "Data Science"],
  },
  {
    name: "Electrical Engineering",
    degree: "BS",
    duration: "4 years",
    credits: "132",
    description: "Electrical systems design and power engineering fundamentals",
    concentrations: ["Power Systems", "Electronics", "Communications", "Control Systems"],
  },
  {
    name: "Mechanical Engineering",
    degree: "BS",
    duration: "4 years",
    credits: "130",
    description: "Mechanical systems design and manufacturing engineering",
    concentrations: ["Automotive", "Aerospace", "Manufacturing", "Robotics"],
  },
  {
    name: "Civil Engineering",
    degree: "BS",
    duration: "4 years",
    credits: "128",
    description: "Infrastructure design and construction management",
    concentrations: ["Structural", "Transportation", "Environmental", "Geotechnical"],
  },
  {
    name: "Chemical Engineering",
    degree: "BS",
    duration: "4 years",
    credits: "130",
    description: "Process design and chemical manufacturing systems",
    concentrations: ["Process Engineering", "Materials", "Biotechnology", "Environmental"],
  },
  {
    name: "Biomedical Engineering",
    degree: "BS",
    duration: "4 years",
    credits: "128",
    description: "Engineering solutions for healthcare and medical devices",
    concentrations: ["Medical Devices", "Biomaterials", "Bioinformatics", "Tissue Engineering"],
  },
  {
    name: "Information Technology",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Information systems and technology management",
    concentrations: ["Network Administration", "Database Systems", "Web Development", "IT Management"],
  },
  {
    name: "Engineering Management",
    degree: "MS",
    duration: "2 years",
    credits: "36",
    description: "Advanced management skills for engineering professionals",
    concentrations: ["Project Management", "Operations", "Quality Management", "Innovation Management"],
  },
]

const faculty = [
  {
    name: "Dr. Robert Johnson",
    title: "Dean & Professor of Computer Science",
    education: "PhD Computer Science, MIT",
    specialization: "Artificial Intelligence, Machine Learning",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Johnson",
    email: "r.johnson@maxine.edu",
    phone: "(555) 123-4670",
  },
  {
    name: "Dr. Maria Garcia",
    title: "Professor of Electrical Engineering",
    education: "PhD Electrical Engineering, Stanford University",
    specialization: "Power Systems, Renewable Energy",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Garcia",
    email: "m.garcia@maxine.edu",
    phone: "(555) 123-4671",
  },
  {
    name: "Dr. David Kim",
    title: "Professor of Mechanical Engineering",
    education: "PhD Mechanical Engineering, UC Berkeley",
    specialization: "Robotics, Manufacturing Systems",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Kim",
    email: "d.kim@maxine.edu",
    phone: "(555) 123-4672",
  },
  {
    name: "Dr. Sarah Wilson",
    title: "Professor of Biomedical Engineering",
    education: "PhD Biomedical Engineering, Johns Hopkins",
    specialization: "Medical Devices, Biomaterials",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Wilson",
    email: "s.wilson@maxine.edu",
    phone: "(555) 123-4673",
  },
]

const labs = [
  {
    name: "Advanced Computing Lab",
    description: "High-performance computing and AI research facility",
    equipment: ["GPU Clusters", "Quantum Simulators", "VR/AR Systems", "3D Printing"],
  },
  {
    name: "Electronics & Circuits Lab",
    description: "Circuit design and testing with industry-standard equipment",
    equipment: ["Oscilloscopes", "Signal Generators", "PCB Fabrication", "Component Testing"],
  },
  {
    name: "Robotics & Automation Lab",
    description: "Robotic systems development and testing facility",
    equipment: ["Industrial Robots", "Sensors & Actuators", "Control Systems", "Vision Systems"],
  },
  {
    name: "Materials Testing Lab",
    description: "Mechanical and chemical properties testing facility",
    equipment: ["Tensile Testing", "Fatigue Testing", "Microscopy", "Spectroscopy"],
  },
]

const industryPartners = [
  "Microsoft Corporation",
  "General Electric",
  "Boeing Company",
  "Tesla Inc.",
  "Intel Corporation",
  "Siemens AG",
  "Lockheed Martin",
  "Ford Motor Company",
  "IBM Corporation",
  "Amazon Web Services",
]

const seniorProjects = [
  {
    title: "Autonomous Drone Navigation System",
    team: "Computer Science & Electrical Engineering",
    sponsor: "Defense Technology Corp",
    description: "AI-powered navigation system for autonomous aerial vehicles",
  },
  {
    title: "Smart Grid Energy Management",
    team: "Electrical Engineering",
    sponsor: "Regional Power Authority",
    description: "Intelligent power distribution and load balancing system",
  },
  {
    title: "Biomedical Implant Design",
    team: "Biomedical & Mechanical Engineering",
    sponsor: "Medical Devices Inc",
    description: "Next-generation orthopedic implant with smart monitoring",
  },
  {
    title: "Sustainable Manufacturing Process",
    team: "Chemical & Mechanical Engineering",
    sponsor: "Green Manufacturing Solutions",
    description: "Eco-friendly production methods for industrial applications",
  },
]

export default function EngineeringPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">ABET Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Engineering & Technology</h1>
              <p className="text-xl text-gray-700 mb-8">
                Innovation-driven engineering education preparing students for technological advancement through
                hands-on learning, cutting-edge research, and industry partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply to Engineering</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Tour Innovation Labs
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/engineering.png"
                alt="College of Engineering & Technology"
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
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">2,800</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">52</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">94%</div>
              <div className="text-gray-600">Job Placement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">$12M</div>
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
              <TabsTrigger value="labs">Labs & Facilities</TabsTrigger>
              <TabsTrigger value="projects">Senior Projects</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
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
                        <span className="font-medium">Concentrations:</span>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {program.concentrations.map((conc, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-maxine-lavender text-maxine-amaranth text-xs"
                            >
                              {conc}
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

            <TabsContent value="labs" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {labs.map((lab, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder-200x400.png?height=200&width=400&text=${lab.name.replace(/\s+/g, "+")}`}
                        alt={lab.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{lab.name}</CardTitle>
                      <CardDescription>{lab.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Equipment:</h4>
                        <div className="flex flex-wrap gap-2">
                          {lab.equipment.map((item, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-maxine-lavender text-maxine-amaranth">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">
                        Schedule Lab Tour
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Industry Partnerships</CardTitle>
                    <CardDescription>
                      Leading technology companies providing internships and career opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {industryPartners.map((partner, index) => (
                        <div key={index} className="text-center p-3 bg-maxine-lavender rounded-lg">
                          <Cpu className="h-8 w-8 mx-auto mb-2 text-maxine-amaranth" />
                          <div className="text-sm font-medium text-gray-900">{partner}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {seniorProjects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Cog className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          <span className="text-sm">
                            <strong>Team:</strong> {project.team}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Wrench className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          <span className="text-sm">
                            <strong>Sponsor:</strong> {project.sponsor}
                          </span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">
                        View Project Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Capstone Design Program</CardTitle>
                    <CardDescription>Real-world engineering challenges with industry sponsors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-maxine-lavender rounded-lg">
                        <Cpu className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Industry Sponsored</h3>
                        <p className="text-sm text-gray-600">Real projects from leading technology companies</p>
                      </div>
                      <div className="text-center p-4 bg-maxine-mimi rounded-lg">
                        <Zap className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Multidisciplinary Teams</h3>
                        <p className="text-sm text-gray-600">Collaborative projects across engineering disciplines</p>
                      </div>
                      <div className="text-center p-4 bg-maxine-pink rounded-lg">
                        <Award className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Competition Ready</h3>
                        <p className="text-sm text-gray-600">Projects compete in national engineering competitions</p>
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
