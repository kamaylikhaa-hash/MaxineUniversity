"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react"

const featuredPost = {
  id: 1,
  title: "The Future of Higher Education: Embracing Digital Transformation",
  excerpt:
    "How Maxine University is leading the charge in educational innovation through technology integration and student-centered learning approaches.",
  author: "Dr. Sarah Johnson",
  authorRole: "President",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "Innovation",
  image: "/placeholder.svg?height=400&width=800&text=Digital+Transformation",
  featured: true,
}

const blogPosts = [
  {
    id: 2,
    title: "Breakthrough Research in Medical Sciences: New Treatment Protocols",
    excerpt:
      "Our medical faculty's groundbreaking research in cardiovascular treatment shows promising results in clinical trials.",
    author: "Dr. Patricia Williams",
    authorRole: "Dean of Medical Sciences",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Research",
    image: "/placeholder.svg?height=300&width=500&text=Medical+Research",
  },
  {
    id: 3,
    title: "Student Entrepreneurship: From Classroom to Startup Success",
    excerpt:
      "Meet the business students who turned their capstone project into a thriving tech startup with ₱2M in funding.",
    author: "Prof. Michael Chen",
    authorRole: "Business Faculty",
    date: "March 10, 2024",
    readTime: "5 min read",
    category: "Student Success",
    image: "/placeholder.svg?height=300&width=500&text=Student+Startup",
  },
  {
    id: 4,
    title: "Sustainable Campus Initiative: Going Carbon Neutral by 2030",
    excerpt:
      "Our comprehensive sustainability plan includes renewable energy, waste reduction, and green building practices.",
    author: "James Wilson",
    authorRole: "VP of Operations",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/placeholder.svg?height=300&width=500&text=Sustainability",
  },
  {
    id: 5,
    title: "International Partnerships: Expanding Global Learning Opportunities",
    excerpt:
      "New exchange programs with universities in Asia, Europe, and South America open doors for student mobility.",
    author: "Dr. Emily Rodriguez",
    authorRole: "VP of International Affairs",
    date: "March 5, 2024",
    readTime: "4 min read",
    category: "Global",
    image: "/placeholder.svg?height=300&width=500&text=International+Programs",
  },
  {
    id: 6,
    title: "Alumni Spotlight: Engineering Graduate Leads Space Mission",
    excerpt:
      "Maxine University alumna Dr. Lisa Chen appointed as lead engineer for NASA's upcoming Mars exploration project.",
    author: "Alumni Relations",
    authorRole: "Communications Team",
    date: "March 3, 2024",
    readTime: "6 min read",
    category: "Alumni",
    image: "/placeholder.svg?height=300&width=500&text=Space+Mission",
  },
  {
    id: 7,
    title: "Mental Health Support: New Wellness Center Opens on Campus",
    excerpt:
      "State-of-the-art facility provides comprehensive mental health services and wellness programs for students.",
    author: "Dr. Robert Garcia",
    authorRole: "Director of Student Health",
    date: "March 1, 2024",
    readTime: "5 min read",
    category: "Student Life",
    image: "/placeholder.svg?height=300&width=500&text=Wellness+Center",
  },
  {
    id: 8,
    title: "Faculty Excellence: Three Professors Receive National Awards",
    excerpt:
      "Recognition for outstanding contributions to research, teaching, and community service across multiple disciplines.",
    author: "Academic Affairs",
    authorRole: "Communications Team",
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "Faculty",
    image: "/placeholder.svg?height=300&width=500&text=Faculty+Awards",
  },
  {
    id: 9,
    title: "Technology Integration: AI-Powered Learning Management System",
    excerpt: "New LMS uses artificial intelligence to personalize learning experiences and improve student outcomes.",
    author: "Dr. David Kim",
    authorRole: "Director of Educational Technology",
    date: "February 25, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=500&text=AI+Learning",
  },
]

const categories = [
  "All",
  "Research",
  "Student Success",
  "Innovation",
  "Sustainability",
  "Global",
  "Alumni",
  "Faculty",
  "Technology",
  "Student Life",
]

const trendingTopics = [
  "Digital Transformation",
  "Sustainability",
  "Student Success",
  "Research Excellence",
  "Global Partnerships",
  "Alumni Achievements",
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col">
      {/* Hero Section with Split Layout and Animations */}
      <section className="py-20 bg-gradient-to-br from-maxine-lavender via-maxine-mimi to-maxine-pink overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                University <span className="text-maxine-amaranth">Blog</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Discover the latest news, research breakthroughs, student achievements, and thought leadership from the
                Maxine University community.
              </p>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/80 text-maxine-amaranth hover:scale-105 transition-transform duration-200 cursor-pointer"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=University+Blog"
                  alt="University Blog"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section with Slide-in Animation */}
      <section className="py-12 bg-white">
        <div className="container">
          <div
            className={`max-w-4xl mx-auto space-y-6 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles, topics, or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-maxine-mimi focus:border-maxine-amaranth transition-colors duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-maxine-cherry hover:bg-maxine-amaranth text-white"
                      : "border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article with Image-Text Split and Hover Effects */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Badge className="bg-maxine-cherry text-white mb-4">Featured Article</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Insights</h2>
            </div>

            <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-maxine-cherry text-white">{featuredPost.category}</Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-maxine-amaranth transition-colors duration-300">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 mt-4">{featuredPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-maxine-amaranth" />
                        <span className="text-sm font-medium">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-maxine-amaranth" />
                        <span className="text-sm text-gray-600">{featuredPost.date}</span>
                      </div>
                    </div>
                    <Button className="bg-maxine-cherry hover:bg-maxine-amaranth group/btn hover:scale-105 transition-all duration-300">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid with Framed Visuals and Staggered Animations */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 group border-0 shadow-lg hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-maxine-cherry text-white text-xs">{post.category}</Badge>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-maxine-amaranth transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3 mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-maxine-amaranth font-medium">{post.readTime}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-maxine-amaranth hover:text-maxine-cherry p-0 hover:scale-105 transition-all duration-200"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription with Split Layout and Animations */}
      <section className="py-16 bg-gradient-to-br from-maxine-amaranth to-maxine-cherry text-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Subscribe to our newsletter and never miss the latest news, research updates, and student achievements
                from Maxine University.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
                />
                <Button className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth hover:scale-105 transition-all duration-300">
                  Subscribe Now
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Newsletter+Signup"
                  alt="Newsletter"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
