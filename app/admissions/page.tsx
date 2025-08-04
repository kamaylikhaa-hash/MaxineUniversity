import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, DollarSign, FileText, Users, Award } from "lucide-react"

const applicationSteps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete our online application form with personal and academic information",
    icon: FileText,
  },
  {
    step: 2,
    title: "Academic Records",
    description: "Submit official transcripts from all previously attended institutions",
    icon: Award,
  },
  {
    step: 3,
    title: "Test Scores",
    description: "Provide SAT, ACT, or other required standardized test scores",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Letters of Recommendation",
    description: "Submit 2-3 letters from teachers, counselors, or employers",
    icon: Users,
  },
  {
    step: 5,
    title: "Personal Statement",
    description: "Write an essay describing your goals and why you chose Maxine University",
    icon: FileText,
  },
  {
    step: 6,
    title: "Application Review",
    description: "Our admissions committee will review your complete application",
    icon: CheckCircle,
  },
]

const scholarships = [
  {
    name: "Presidential Scholarship",
    amount: "Full Tuition",
    criteria: "GPA 3.8+, SAT 1400+, Leadership experience",
    renewable: true,
  },
  {
    name: "Dean's Excellence Award",
    amount: "$15,000/year",
    criteria: "GPA 3.5+, SAT 1300+, Community service",
    renewable: true,
  },
  {
    name: "Maxine Merit Scholarship",
    amount: "$10,000/year",
    criteria: "GPA 3.2+, SAT 1200+, Academic achievement",
    renewable: true,
  },
  {
    name: "First-Generation Grant",
    amount: "$5,000/year",
    criteria: "First in family to attend college, financial need",
    renewable: true,
  },
  {
    name: "STEM Innovation Award",
    amount: "$12,000/year",
    criteria: "STEM major, research experience, GPA 3.4+",
    renewable: true,
  },
  {
    name: "Arts & Humanities Grant",
    amount: "$8,000/year",
    criteria: "Arts/Humanities major, portfolio submission",
    renewable: true,
  },
]

const tuitionInfo = [
  {
    category: "Undergraduate Tuition",
    inState: "$12,500",
    outOfState: "$28,000",
    description: "Per academic year (Fall & Spring semesters)",
  },
  {
    category: "Graduate Tuition",
    inState: "$15,000",
    outOfState: "$32,000",
    description: "Per academic year, varies by program",
  },
  {
    category: "Room & Board",
    inState: "$11,500",
    outOfState: "$11,500",
    description: "Average cost for on-campus housing and meal plan",
  },
  {
    category: "Books & Supplies",
    inState: "$1,200",
    outOfState: "$1,200",
    description: "Estimated annual cost for textbooks and materials",
  },
]

const campusRequirements = [
  {
    campus: "Main Campus",
    programs: "Liberal Arts, Business, Education",
    gpaMin: "2.5",
    testScore: "SAT 1100+ or ACT 22+",
    special: "Portfolio required for Art programs",
  },
  {
    campus: "Medical Campus",
    programs: "Medicine, Nursing, Dentistry, Pharmacy",
    gpaMin: "3.5",
    testScore: "SAT 1300+ or ACT 28+",
    special: "MCAT/DAT required for professional programs",
  },
  {
    campus: "Technology Campus",
    programs: "Engineering, Computer Science, Technology",
    gpaMin: "3.0",
    testScore: "SAT 1200+ or ACT 25+",
    special: "Strong math and science background required",
  },
]

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Admissions</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Begin your journey at Maxine University. We're here to guide you through every step of the application
            process and help you achieve your academic goals.
          </p>
          <Button size="lg" className="bg-maxine-cherry hover:bg-maxine-amaranth">
            Start Your Application
          </Button>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">Follow these simple steps to apply to Maxine University</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationSteps.map((step) => (
              <Card key={step.step} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <step.icon className="h-6 w-6 text-maxine-amaranth" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships & Grants */}
      <section className="py-16 gradient-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid</h2>
            <p className="text-lg text-gray-600">
              We believe education should be accessible. Explore our scholarship opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                    <Badge className="bg-maxine-cherry text-white">{scholarship.amount}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{scholarship.criteria}</p>
                  <div className="flex items-center text-sm text-maxine-amaranth">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {scholarship.renewable ? "Renewable annually" : "One-time award"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-maxine-amaranth hover:bg-maxine-cherry">Apply for Financial Aid</Button>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tuition & Fees</h2>
            <p className="text-lg text-gray-600">Transparent pricing for your educational investment</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {tuitionInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-maxine-amaranth" />
                      {info.category}
                    </CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-maxine-lavender rounded-lg">
                        <div className="text-2xl font-bold text-maxine-amaranth">{info.inState}</div>
                        <div className="text-sm text-gray-600">In-State Students</div>
                      </div>
                      <div className="text-center p-4 bg-maxine-mimi rounded-lg">
                        <div className="text-2xl font-bold text-maxine-amaranth">{info.outOfState}</div>
                        <div className="text-sm text-gray-600">Out-of-State Students</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent"
              >
                Calculate Your Costs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus-Specific Requirements */}
      <section className="py-16 gradient-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus-Specific Requirements</h2>
            <p className="text-lg text-gray-600">Different programs may have additional admission requirements</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {campusRequirements.map((campus, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-maxine-amaranth">{campus.campus}</CardTitle>
                  <CardDescription>{campus.programs}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium">Minimum GPA:</span>
                    <span className="ml-2 text-maxine-amaranth">{campus.gpaMin}</span>
                  </div>
                  <div>
                    <span className="font-medium">Test Scores:</span>
                    <span className="ml-2 text-maxine-amaranth">{campus.testScore}</span>
                  </div>
                  <div>
                    <span className="font-medium">Special Requirements:</span>
                    <span className="ml-2 text-gray-600">{campus.special}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-maxine-amaranth to-maxine-cherry text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-white/90">Take the first step toward your future at Maxine University</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth"
            >
              Start Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent"
            >
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
