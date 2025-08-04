"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  Bell,
  Settings,
  TrendingUp,
  Download,
  Eye,
  EyeOff,
} from "lucide-react"

// Mock student data
const studentData = {
  id: "2024-001234",
  name: "Juan Carlos Santos",
  email: "jc.santos@student.maxine.edu",
  program: "BS Computer Science",
  year: "3rd Year",
  semester: "1st Semester",
  gpa: "3.75",
  units: "21",
  avatar: "/placeholder.svg?height=100&width=100&text=JCS",
}

const currentCourses = [
  {
    code: "CS301",
    title: "Data Structures and Algorithms",
    instructor: "Dr. Maria Garcia",
    schedule: "MWF 10:00-11:30 AM",
    room: "CCS Lab 1",
    units: 3,
    grade: "A-",
  },
  {
    code: "CS302",
    title: "Database Management Systems",
    instructor: "Prof. Robert Kim",
    schedule: "TTh 2:00-3:30 PM",
    room: "CCS Lab 2",
    units: 3,
    grade: "B+",
  },
  {
    code: "MATH301",
    title: "Discrete Mathematics",
    instructor: "Dr. Lisa Chen",
    schedule: "MWF 8:00-9:30 AM",
    room: "Math Building 201",
    units: 3,
    grade: "A",
  },
  {
    code: "ENG301",
    title: "Technical Writing",
    instructor: "Prof. Sarah Wilson",
    schedule: "TTh 10:00-11:30 AM",
    room: "Liberal Arts 105",
    units: 3,
    grade: "B+",
  },
]

const upcomingEvents = [
  {
    title: "Midterm Examinations",
    date: "March 25-29, 2024",
    type: "Academic",
    color: "bg-red-100 text-red-800",
  },
  {
    title: "CS Department Seminar",
    date: "March 22, 2024",
    type: "Event",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Registration for Summer Classes",
    date: "April 1-15, 2024",
    type: "Registration",
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Career Fair",
    date: "April 10, 2024",
    type: "Career",
    color: "bg-purple-100 text-purple-800",
  },
]

const financialSummary = {
  tuition: 50000,
  miscFees: 5000,
  totalDue: 55000,
  paid: 30000,
  balance: 25000,
  dueDate: "April 15, 2024",
}

const notifications = [
  {
    id: 1,
    title: "Grade Posted: CS301 - Midterm Exam",
    message: "Your midterm exam grade has been posted. Check your grades tab for details.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    title: "Payment Reminder",
    message: "Your tuition balance of ₱25,000 is due on April 15, 2024.",
    time: "1 day ago",
    read: false,
  },
  {
    id: 3,
    title: "Class Schedule Update",
    message: "CS302 class on March 20 has been moved to CCS Lab 3.",
    time: "2 days ago",
    read: true,
  },
]

export default function StudentPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [loginData, setLoginData] = React.useState({
    studentId: "",
    password: "",
  })
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - in real app, this would validate credentials
    if (loginData.studentId === "2024-001234" && loginData.password === "password") {
      setIsLoggedIn(true)
    } else {
      alert("Invalid Student ID or Password")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginData({ studentId: "", password: "" })
  }

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Login Hero Section with Split Layout and Animations */}
        <section className="flex-1 py-20 bg-gradient-to-br from-maxine-lavender via-maxine-mimi to-maxine-pink overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
              <div
                className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                  Student <span className="text-maxine-amaranth">Portal</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Access your academic information, course materials, grades, and university services all in one secure
                  location.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-maxine-cherry text-white hover:scale-105 transition-transform duration-200">
                    24/7 Access
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-maxine-amaranth text-maxine-amaranth hover:scale-105 transition-transform duration-200"
                  >
                    Mobile Friendly
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-maxine-amaranth text-maxine-amaranth hover:scale-105 transition-transform duration-200"
                  >
                    Secure Login
                  </Badge>
                </div>
              </div>
              <div
                className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                  <Card className="shadow-2xl border-0">
                    <CardHeader className="bg-gradient-to-r from-maxine-cherry to-maxine-amaranth text-white">
                      <CardTitle className="text-2xl text-center">Student Login</CardTitle>
                      <CardDescription className="text-white/90 text-center">
                        Enter your credentials to access your portal
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                      <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                          <Label htmlFor="studentId">Student ID</Label>
                          <Input
                            id="studentId"
                            type="text"
                            placeholder="e.g., 2024-001234"
                            value={loginData.studentId}
                            onChange={(e) => setLoginData((prev) => ({ ...prev, studentId: e.target.value }))}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              value={loginData.password}
                              onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                              className="mt-1 pr-10"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-1 h-8 w-8 p-0"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                        <Button type="submit" className="w-full bg-maxine-cherry hover:bg-maxine-amaranth">
                          Login to Portal
                        </Button>
                        <div className="text-center space-y-2">
                          <Button asChild variant="link" className="text-maxine-amaranth p-0">
                            <Link href="#">Forgot Password?</Link>
                          </Button>
                          <div className="text-sm text-gray-600">
                            Need help? Contact{" "}
                            <Link href="/contact" className="text-maxine-amaranth hover:underline">
                              IT Support
                            </Link>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div
              className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portal Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage your academic journey at Maxine University
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: "Course Management", desc: "View schedules, materials, and assignments" },
                { icon: TrendingUp, title: "Grade Tracking", desc: "Monitor your academic progress and GPA" },
                { icon: CreditCard, title: "Financial Services", desc: "Pay tuition and view account balance" },
                { icon: Calendar, title: "Academic Calendar", desc: "Stay updated with important dates" },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className={`text-center hover:shadow-lg transition-shadow border-0 shadow-md transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center hover:scale-110 transition-transform">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Dashboard Header */}
      <section className="py-8 bg-gradient-to-r from-maxine-cherry to-maxine-amaranth text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src={studentData.avatar || "/placeholder.svg"}
                  alt={studentData.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {studentData.name}!</h1>
                <p className="text-white/90">
                  {studentData.program} • {studentData.year}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-white/80">Current GPA</div>
                <div className="text-2xl font-bold">{studentData.gpa}</div>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-maxine-amaranth">{studentData.units}</div>
              <div className="text-sm text-gray-600">Current Units</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-maxine-amaranth">{currentCourses.length}</div>
              <div className="text-sm text-gray-600">Enrolled Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-maxine-amaranth">
                ₱{financialSummary.balance.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Outstanding Balance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-maxine-amaranth">
                {notifications.filter((n) => !n.read).length}
              </div>
              <div className="text-sm text-gray-600">New Notifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="grades">Grades</TabsTrigger>
              <TabsTrigger value="finances">Finances</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Current Courses */}
                <div className="lg:col-span-2">
                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-maxine-amaranth" />
                        Current Courses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentCourses.map((course, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-maxine-lavender/20 rounded-lg"
                          >
                            <div>
                              <div className="font-medium">
                                {course.code} - {course.title}
                              </div>
                              <div className="text-sm text-gray-600">{course.instructor}</div>
                              <div className="text-sm text-gray-600">
                                {course.schedule} • {course.room}
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-maxine-cherry text-white mb-1">{course.grade}</Badge>
                              <div className="text-sm text-gray-600">{course.units} units</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Notifications & Events */}
                <div className="space-y-6">
                  {/* Notifications */}
                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-maxine-amaranth" />
                        Notifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {notifications.slice(0, 3).map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-3 rounded-lg ${notification.read ? "bg-gray-50" : "bg-maxine-lavender/20"}`}
                          >
                            <div className="font-medium text-sm">{notification.title}</div>
                            <div className="text-xs text-gray-600 mt-1">{notification.time}</div>
                          </div>
                        ))}
                      </div>
                      <Button variant="link" className="text-maxine-amaranth p-0 mt-3">
                        View All Notifications
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Upcoming Events */}
                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-maxine-amaranth" />
                        Upcoming Events
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {upcomingEvents.slice(0, 3).map((event, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Badge className={event.color}>{event.type}</Badge>
                            <div>
                              <div className="font-medium text-sm">{event.title}</div>
                              <div className="text-xs text-gray-600">{event.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>
                    Course Enrollment - {studentData.semester} {studentData.year}
                  </CardTitle>
                  <CardDescription>Manage your current course enrollment and access course materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {currentCourses.map((course, index) => (
                      <Card key={index} className="border-l-4 border-l-maxine-cherry">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">
                                {course.code} - {course.title}
                              </CardTitle>
                              <CardDescription>
                                {course.instructor} • {course.units} units
                              </CardDescription>
                            </div>
                            <Badge className="bg-maxine-cherry text-white">{course.grade}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="text-sm font-medium text-gray-700">Schedule</div>
                              <div className="text-sm text-gray-600">{course.schedule}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-700">Room</div>
                              <div className="text-sm text-gray-600">{course.room}</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-maxine-cherry hover:bg-maxine-amaranth">
                              Course Materials
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-maxine-amaranth text-maxine-amaranth bg-transparent"
                            >
                              Assignments
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-maxine-amaranth text-maxine-amaranth bg-transparent"
                            >
                              Grades
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Grades Tab */}
            <TabsContent value="grades">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Academic Records</CardTitle>
                  <CardDescription>View your grades and academic performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 p-4 bg-maxine-lavender/20 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-maxine-amaranth">{studentData.gpa}</div>
                        <div className="text-sm text-gray-600">Current GPA</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-maxine-amaranth">3.68</div>
                        <div className="text-sm text-gray-600">Cumulative GPA</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-maxine-amaranth">87</div>
                        <div className="text-sm text-gray-600">Total Units</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-maxine-amaranth">Dean's List</div>
                        <div className="text-sm text-gray-600">Academic Standing</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Current Semester Grades</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3">Course Code</th>
                            <th className="text-left p-3">Course Title</th>
                            <th className="text-center p-3">Units</th>
                            <th className="text-center p-3">Grade</th>
                            <th className="text-center p-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentCourses.map((course, index) => (
                            <tr key={index} className="border-b hover:bg-maxine-lavender/10">
                              <td className="p-3 font-medium">{course.code}</td>
                              <td className="p-3">{course.title}</td>
                              <td className="p-3 text-center">{course.units}</td>
                              <td className="p-3 text-center">
                                <Badge className="bg-maxine-cherry text-white">{course.grade}</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge variant="outline" className="border-green-500 text-green-700">
                                  Enrolled
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">
                      <Download className="h-4 w-4 mr-2" />
                      Download Transcript
                    </Button>
                    <Button variant="outline" className="border-maxine-amaranth text-maxine-amaranth bg-transparent">
                      View Grade History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Finances Tab */}
            <TabsContent value="finances">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-maxine-amaranth" />
                      Account Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-maxine-lavender/20 rounded-lg">
                        <span>Tuition Fee</span>
                        <span className="font-medium">₱{financialSummary.tuition.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-maxine-mimi/20 rounded-lg">
                        <span>Miscellaneous Fees</span>
                        <span className="font-medium">₱{financialSummary.miscFees.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-maxine-pink/20 rounded-lg">
                        <span>Total Amount Due</span>
                        <span className="font-bold text-lg">₱{financialSummary.totalDue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Amount Paid</span>
                        <span className="font-medium text-green-700">₱{financialSummary.paid.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <span>Outstanding Balance</span>
                        <span className="font-bold text-lg text-red-700">
                          ₱{financialSummary.balance.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-center text-sm text-gray-600">
                        Due Date: <span className="font-medium text-red-600">{financialSummary.dueDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Payment Options</CardTitle>
                    <CardDescription>Choose your preferred payment method</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full bg-maxine-cherry hover:bg-maxine-amaranth justify-start">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pay Online (GCash, PayMaya, Bank Transfer)
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-maxine-amaranth text-maxine-amaranth justify-start bg-transparent"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Request Payment Plan
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-maxine-amaranth text-maxine-amaranth justify-start bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Statement of Account
                      </Button>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-900 mb-2">Payment Reminders</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Payment deadline: {financialSummary.dueDate}</li>
                        <li>• Late payment fee: ₱1,000</li>
                        <li>• Payment plans available for balances over ₱20,000</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Calendar Tab */}
            <TabsContent value="calendar">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-maxine-amaranth" />
                    Academic Calendar
                  </CardTitle>
                  <CardDescription>Important dates and events for the current semester</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 border rounded-lg hover:bg-maxine-lavender/10"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-gray-600">{event.date}</div>
                        </div>
                        <Badge className={event.color}>{event.type}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-maxine-amaranth" />
                    Student Profile
                  </CardTitle>
                  <CardDescription>Manage your personal information and account settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-maxine-cherry">
                        <Image
                          src={studentData.avatar || "/placeholder.svg"}
                          alt={studentData.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-maxine-amaranth text-maxine-amaranth bg-transparent"
                      >
                        Change Photo
                      </Button>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Student ID</Label>
                          <Input value={studentData.id} disabled className="mt-1" />
                        </div>
                        <div>
                          <Label>Full Name</Label>
                          <Input value={studentData.name} className="mt-1" />
                        </div>
                        <div>
                          <Label>Email Address</Label>
                          <Input value={studentData.email} className="mt-1" />
                        </div>
                        <div>
                          <Label>Program</Label>
                          <Input value={studentData.program} disabled className="mt-1" />
                        </div>
                        <div>
                          <Label>Year Level</Label>
                          <Input value={studentData.year} disabled className="mt-1" />
                        </div>
                        <div>
                          <Label>Current Semester</Label>
                          <Input value={studentData.semester} disabled className="mt-1" />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="bg-maxine-cherry hover:bg-maxine-amaranth">Update Profile</Button>
                        <Button
                          variant="outline"
                          className="border-maxine-amaranth text-maxine-amaranth bg-transparent"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Account Settings
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
