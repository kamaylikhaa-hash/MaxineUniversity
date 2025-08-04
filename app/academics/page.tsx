import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, GraduationCap } from "lucide-react"

const colleges = [
  {
    name: "Business & Accountancy",
    slug: "business",
    description:
      "Preparing future business leaders with comprehensive programs in business administration, accounting, and entrepreneurship.",
    programs: 12,
    students: 3200,
    faculty: 45,
    image: "/placeholder.svg?height=300&width=400&text=Business+College",
    accreditation: "AACSB Accredited",
    featured: "MBA Program ranked #15 nationally",
  },
  {
    name: "Dentistry",
    slug: "dentistry",
    description:
      "Excellence in dental education with state-of-the-art clinics and comprehensive patient care training.",
    programs: 4,
    students: 280,
    faculty: 32,
    image: "/placeholder.svg?height=300&width=400&text=Dentistry+College",
    accreditation: "ADA Accredited",
    featured: "95% board exam pass rate",
  },
  {
    name: "Education",
    slug: "education",
    description: "Shaping tomorrow's educators through innovative teaching methods and hands-on classroom experience.",
    programs: 8,
    students: 1800,
    faculty: 28,
    image: "/placeholder.svg?height=300&width=400&text=Education+College",
    accreditation: "CAEP Accredited",
    featured: "100% job placement rate",
  },
  {
    name: "Medical Sciences",
    slug: "medical",
    description: "Training the next generation of healthcare professionals with cutting-edge medical education.",
    programs: 6,
    students: 1200,
    faculty: 65,
    image: "/placeholder.svg?height=300&width=400&text=Medical+College",
    accreditation: "LCME Accredited",
    featured: "Top 10 medical school in region",
  },
  {
    name: "Nursing",
    slug: "nursing",
    description: "Comprehensive nursing education preparing compassionate and skilled healthcare professionals.",
    programs: 5,
    students: 950,
    faculty: 38,
    image: "/placeholder.svg?height=300&width=400&text=Nursing+College",
    accreditation: "CCNE Accredited",
    featured: "98% NCLEX pass rate",
  },
  {
    name: "Hospitality & Nutrition",
    slug: "hospitality",
    description: "Excellence in hospitality management and nutritional sciences with industry partnerships.",
    programs: 7,
    students: 680,
    faculty: 22,
    image: "/placeholder.svg?height=300&width=400&text=Hospitality+College",
    accreditation: "ACEND Accredited",
    featured: "Award-winning culinary program",
  },
  {
    name: "Optometry",
    slug: "optometry",
    description: "Leading optometric education with comprehensive eye care training and research opportunities.",
    programs: 3,
    students: 240,
    faculty: 18,
    image: "/placeholder.svg?height=300&width=400&text=Optometry+College",
    accreditation: "ACOE Accredited",
    featured: "State-of-the-art eye clinic",
  },
  {
    name: "Pharmacy",
    slug: "pharmacy",
    description: "Pharmaceutical excellence through innovative curriculum and clinical practice integration.",
    programs: 4,
    students: 420,
    faculty: 28,
    image: "/placeholder.svg?height=300&width=400&text=Pharmacy+College",
    accreditation: "ACPE Accredited",
    featured: "Leading research in drug development",
  },
  {
    name: "Engineering & Technology",
    slug: "engineering",
    description: "Innovation-driven engineering education preparing students for technological advancement.",
    programs: 15,
    students: 2800,
    faculty: 52,
    image: "/placeholder.svg?height=300&width=400&text=Engineering+College",
    accreditation: "ABET Accredited",
    featured: "Industry partnership program",
  },
]

const academicStats = [
  { number: "82+", label: "Degree Programs", icon: BookOpen },
  { number: "23,000+", label: "Students", icon: Users },
  { number: "328", label: "Faculty Members", icon: GraduationCap },
  { number: "95%", label: "Employment Rate", icon: Award },
]

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Academics</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Discover world-class education across nine distinguished colleges, each committed to excellence in teaching,
            research, and professional preparation.
          </p>
        </div>
      </section>

      {/* Academic Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {academicStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-maxine-amaranth mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colleges Grid */}
      <section className="py-16 gradient-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Colleges</h2>
            <p className="text-lg text-gray-600">Explore our comprehensive range of academic programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colleges.map((college) => (
              <Card key={college.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={college.image || "/placeholder.svg"} alt={college.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-maxine-cherry text-white">{college.accreditation}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{college.name}</CardTitle>
                  <CardDescription>{college.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-maxine-amaranth">{college.programs}</div>
                      <div className="text-xs text-gray-600">Programs</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-maxine-amaranth">{college.students}</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-maxine-amaranth">{college.faculty}</div>
                      <div className="text-xs text-gray-600">Faculty</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-maxine-amaranth border-maxine-amaranth text-xs">
                      {college.featured}
                    </Badge>
                  </div>
                  <Button asChild className="w-full bg-maxine-cherry hover:bg-maxine-amaranth">
                    <Link href={`/academics/${college.slug}`}>Explore Programs</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Academic Excellence</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At Maxine University, we are committed to providing transformative educational experiences that
                  prepare students for successful careers and meaningful lives. Our faculty are renowned scholars and
                  practitioners who bring real-world expertise to the classroom.
                </p>
                <p>
                  With small class sizes, personalized attention, and cutting-edge facilities, we ensure that every
                  student receives the support they need to excel academically and professionally.
                </p>
                <p>
                  Our graduates are leaders in their fields, making significant contributions to their communities and
                  industries worldwide.
                </p>
              </div>
              <div className="mt-6">
                <Button className="bg-maxine-amaranth hover:bg-maxine-cherry">View Academic Catalog</Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Academic+Excellence"
                alt="Academic Excellence"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
