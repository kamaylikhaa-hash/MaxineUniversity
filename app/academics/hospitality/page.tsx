import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Award, ChefHat, Utensils, Coffee } from "lucide-react"

const programs = [
  {
    name: "Hospitality Management",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Comprehensive training in hotel, restaurant, and tourism management",
    concentrations: ["Hotel Management", "Restaurant Operations", "Event Planning", "Tourism Management"],
  },
  {
    name: "Culinary Arts",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Professional culinary training with business management skills",
    concentrations: ["Executive Chef", "Pastry Arts", "Catering Management", "Food Service Operations"],
  },
  {
    name: "Nutrition Science",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Scientific study of nutrition with clinical and community applications",
    concentrations: ["Clinical Nutrition", "Sports Nutrition", "Community Nutrition", "Food Science"],
  },
  {
    name: "Dietetics",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Accredited program preparing registered dietitian nutritionists",
    concentrations: ["Clinical Dietetics", "Food Service Management", "Community Nutrition", "Research"],
  },
  {
    name: "Food Science & Technology",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Innovation in food production, safety, and technology",
    concentrations: ["Food Safety", "Product Development", "Quality Assurance", "Food Chemistry"],
  },
  {
    name: "Event Management",
    degree: "BS",
    duration: "4 years",
    credits: "120",
    description: "Specialized training in event planning and coordination",
    concentrations: ["Corporate Events", "Wedding Planning", "Festival Management", "Sports Events"],
  },
  {
    name: "Wine & Beverage Management",
    degree: "Certificate",
    duration: "1 year",
    credits: "30",
    description: "Specialized knowledge in wine, spirits, and beverage operations",
    concentrations: ["Sommelier Training", "Beverage Operations", "Wine Marketing", "Distillery Management"],
  },
]

const faculty = [
  {
    name: "Chef Maria Rodriguez",
    title: "Dean & Professor of Culinary Arts",
    education: "Culinary Institute of America, MBA Cornell University",
    specialization: "French Cuisine, Restaurant Management",
    image: "/placeholder.svg?height=200&width=200&text=Chef+Rodriguez",
    email: "m.rodriguez@maxine.edu",
    phone: "(555) 123-4630",
  },
  {
    name: "Dr. James Thompson",
    title: "Professor of Hospitality Management",
    education: "PhD Hospitality Management, University of Nevada",
    specialization: "Hotel Operations, Revenue Management",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Thompson",
    email: "j.thompson@maxine.edu",
    phone: "(555) 123-4631",
  },
  {
    name: "Dr. Sarah Kim",
    title: "Professor of Nutrition Science",
    education: "PhD Nutritional Sciences, UC Davis",
    specialization: "Clinical Nutrition, Metabolic Disorders",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Kim",
    email: "s.kim@maxine.edu",
    phone: "(555) 123-4632",
  },
  {
    name: "Chef Robert Wilson",
    title: "Professor of Pastry Arts",
    education: "Le Cordon Bleu Paris, Advanced Pastry Certificate",
    specialization: "Pastry Arts, Chocolate Work, Sugar Art",
    image: "/placeholder.svg?height=200&width=200&text=Chef+Wilson",
    email: "r.wilson@maxine.edu",
    phone: "(555) 123-4633",
  },
]

const industryPartners = [
  "Marriott International",
  "Hilton Worldwide",
  "Disney Parks & Resorts",
  "Four Seasons Hotels",
  "Ritz-Carlton Hotel Company",
  "Aramark Corporation",
  "Sodexo",
  "Compass Group",
  "Local Restaurant Group",
  "Regional Catering Companies",
]

const facilities = [
  {
    name: "Teaching Restaurant",
    description: "Full-service restaurant operated by students",
    features: ["50-seat dining room", "Professional kitchen", "Wine cellar", "Private dining rooms"],
  },
  {
    name: "Culinary Labs",
    description: "State-of-the-art cooking and baking facilities",
    features: ["12 cooking stations", "Pastry lab", "Butcher shop", "Garde manger station"],
  },
  {
    name: "Hotel Simulation Suite",
    description: "Mock hotel rooms and front desk operations",
    features: ["Guest room replicas", "Front desk system", "Housekeeping training", "Concierge services"],
  },
  {
    name: "Nutrition Research Lab",
    description: "Advanced equipment for nutrition analysis",
    features: ["Body composition analysis", "Metabolic testing", "Food analysis equipment", "Research facilities"],
  },
]

export default function HospitalityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-maxine-cherry text-white mb-4">ACEND Accredited</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">College of Hospitality & Nutrition</h1>
              <p className="text-xl text-gray-700 mb-8">
                Excellence in hospitality management and nutritional sciences with industry partnerships, hands-on
                learning, and award-winning culinary programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Apply to Programs</Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
                >
                  Tour Culinary Labs
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Hospitality+College"
                alt="Hospitality College"
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
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">680</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">22</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">95%</div>
              <div className="text-gray-600">Job Placement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-maxine-amaranth mb-2">50+</div>
              <div className="text-gray-600">Industry Partners</div>
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
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="industry">Industry Partners</TabsTrigger>
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

            <TabsContent value="facilities" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facilities.map((facility, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder-200x400.png?height=200&width=400&text=${facility.name.replace(/\s+/g, "+")}`}
                        alt={facility.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{facility.name}</CardTitle>
                      <CardDescription>{facility.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Features:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {facility.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-4 bg-maxine-cherry hover:bg-maxine-amaranth">Schedule Tour</Button>
                    </CardContent>
                  </Card>
                ))}
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

            <TabsContent value="industry" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Industry Partners</CardTitle>
                    <CardDescription>Leading companies providing internships and career opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {industryPartners.map((partner, index) => (
                        <div key={index} className="flex items-center p-3 bg-maxine-lavender rounded-lg">
                          <ChefHat className="h-5 w-5 mr-3 text-maxine-amaranth" />
                          <span className="font-medium text-gray-900">{partner}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Internship Program</CardTitle>
                    <CardDescription>Hands-on experience with industry leaders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-maxine-mimi rounded-lg">
                        <span className="font-medium">Required Internship Hours</span>
                        <span className="text-2xl font-bold text-maxine-amaranth">400</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-maxine-pink rounded-lg">
                        <span className="font-medium">Average Hourly Wage</span>
                        <span className="text-2xl font-bold text-maxine-amaranth">$15</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-maxine-cherry text-white rounded-lg">
                        <span className="font-medium">Job Offer Rate</span>
                        <span className="text-2xl font-bold">75%</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900 mb-3">Internship Locations:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Utensils className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          Fine dining restaurants
                        </div>
                        <div className="flex items-center">
                          <Coffee className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          Luxury hotels & resorts
                        </div>
                        <div className="flex items-center">
                          <ChefHat className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          Corporate food services
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2 text-maxine-amaranth" />
                          Event planning companies
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Student-Run Enterprises</CardTitle>
                    <CardDescription>Real-world business experience through campus operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-maxine-lavender rounded-lg">
                        <Utensils className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Maxine Bistro</h3>
                        <p className="text-sm text-gray-600">
                          Student-operated fine dining restaurant serving the campus community
                        </p>
                      </div>
                      <div className="text-center p-4 bg-maxine-mimi rounded-lg">
                        <Coffee className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Campus Catering</h3>
                        <p className="text-sm text-gray-600">
                          Full-service catering for university events and functions
                        </p>
                      </div>
                      <div className="text-center p-4 bg-maxine-pink rounded-lg">
                        <ChefHat className="h-12 w-12 mx-auto mb-3 text-maxine-amaranth" />
                        <h3 className="font-semibold text-gray-900 mb-2">Nutrition Clinic</h3>
                        <p className="text-sm text-gray-600">Community nutrition counseling and wellness programs</p>
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
