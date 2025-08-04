"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, User, GraduationCap, FileText, CreditCard, Upload, Calendar } from "lucide-react"

const applicationSteps = [
  { id: 1, title: "Personal Information", icon: User, completed: false },
  { id: 2, title: "Academic Background", icon: GraduationCap, completed: false },
  { id: 3, title: "Program Selection", icon: FileText, completed: false },
  { id: 4, title: "Documents Upload", icon: Upload, completed: false },
  { id: 5, title: "Application Fee", icon: CreditCard, completed: false },
]

const programs = [
  {
    value: "business-bs",
    label: "BS Business Administration",
    college: "Business & Accountancy",
    tuition: "₱45,000/semester",
  },
  {
    value: "computer-science-bs",
    label: "BS Computer Science",
    college: "Engineering & Technology",
    tuition: "₱50,000/semester",
  },
  { value: "nursing-bsn", label: "Bachelor of Science in Nursing", college: "Nursing", tuition: "₱55,000/semester" },
  { value: "medicine-md", label: "Doctor of Medicine", college: "Medical Sciences", tuition: "₱120,000/semester" },
  { value: "education-bs", label: "BS Elementary Education", college: "Education", tuition: "₱40,000/semester" },
  {
    value: "engineering-bs",
    label: "BS Civil Engineering",
    college: "Engineering & Technology",
    tuition: "₱52,000/semester",
  },
]

const requirements = [
  { id: "transcript", label: "Official Transcript of Records", required: true, uploaded: false },
  { id: "diploma", label: "High School Diploma/College Diploma", required: true, uploaded: false },
  { id: "birth-cert", label: "Birth Certificate (PSA)", required: true, uploaded: false },
  { id: "id-photo", label: "2x2 ID Photos (4 pieces)", required: true, uploaded: false },
  { id: "medical", label: "Medical Certificate", required: true, uploaded: false },
  { id: "recommendation", label: "Letters of Recommendation (2)", required: false, uploaded: false },
  { id: "essay", label: "Personal Statement/Essay", required: false, uploaded: false },
]

export default function ApplicationPage() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [isVisible, setIsVisible] = React.useState(false)
  const [formData, setFormData] = React.useState({
    // Personal Information
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    civilStatus: "",
    nationality: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",

    // Academic Background
    lastSchool: "",
    graduationYear: "",
    gpa: "",
    academicHonors: "",

    // Program Selection
    selectedProgram: "",
    intakeYear: "",
    intakeSemester: "",

    // Additional Information
    extracurriculars: "",
    workExperience: "",
    personalStatement: "",
  })

  const [uploadedFiles, setUploadedFiles] = React.useState<Record<string, boolean>>({})
  const [applicationFee, setApplicationFee] = React.useState(2500) // ₱2,500 application fee

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const progress = (currentStep / applicationSteps.length) * 100

  const handleNext = () => {
    if (currentStep < applicationSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (requirementId: string) => {
    setUploadedFiles((prev) => ({ ...prev, [requirementId]: true }))
  }

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
                Apply to <span className="text-maxine-amaranth">Maxine University</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Take the first step towards your future. Our streamlined application process makes it easy to join the
                Maxine University community and pursue your academic dreams.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-maxine-cherry text-white hover:scale-105 transition-transform duration-200">
                  Application Fee: ₱2,500
                </Badge>
                <Badge
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:scale-105 transition-transform duration-200"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Deadline: June 30, 2024
                </Badge>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Online+Application"
                  alt="Online Application"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Progress with Animations */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div
            className={`max-w-4xl mx-auto transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Application Progress</h2>
              <span className="text-sm text-gray-600">
                Step {currentStep} of {applicationSteps.length}
              </span>
            </div>
            <Progress value={progress} className="mb-6 h-3" />
            <div className="flex justify-between">
              {applicationSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-500 hover:scale-110 ${
                      currentStep > step.id
                        ? "bg-green-500 text-white"
                        : currentStep === step.id
                          ? "bg-maxine-cherry text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                  </div>
                  <span
                    className={`text-xs text-center transition-colors duration-300 ${
                      currentStep >= step.id ? "text-gray-900 font-medium" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form with Animations */}
      <section className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card
              className={`shadow-2xl border-0 transform transition-all duration-700 hover:shadow-3xl ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
              <CardHeader className="bg-gradient-to-r from-maxine-cherry to-maxine-amaranth text-white">
                <CardTitle className="text-2xl">{applicationSteps[currentStep - 1]?.title}</CardTitle>
                <CardDescription className="text-white/90">
                  {currentStep === 1 && "Please provide your personal information"}
                  {currentStep === 2 && "Tell us about your academic background"}
                  {currentStep === 3 && "Select your preferred program"}
                  {currentStep === 4 && "Upload required documents"}
                  {currentStep === 5 && "Complete your application with payment"}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div
                    className={`space-y-6 transform transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="middleName">Middle Name</Label>
                        <Input
                          id="middleName"
                          value={formData.middleName}
                          onChange={(e) => handleInputChange("middleName", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="birthDate">Date of Birth *</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange("birthDate", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label>Gender *</Label>
                        <Select onValueChange={(value) => handleInputChange("gender", value)}>
                          <SelectTrigger className="mt-1 transition-all duration-300 hover:scale-105">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Civil Status *</Label>
                        <Select onValueChange={(value) => handleInputChange("civilStatus", value)}>
                          <SelectTrigger className="mt-1 transition-all duration-300 hover:scale-105">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Single</SelectItem>
                            <SelectItem value="married">Married</SelectItem>
                            <SelectItem value="divorced">Divorced</SelectItem>
                            <SelectItem value="widowed">Widowed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Complete Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="mt-1 transition-all duration-300 focus:scale-105"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="province">Province *</Label>
                        <Input
                          id="province"
                          value={formData.province}
                          onChange={(e) => handleInputChange("province", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Academic Background */}
                {currentStep === 2 && (
                  <div
                    className={`space-y-6 transform transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="lastSchool">Last School Attended *</Label>
                        <Input
                          id="lastSchool"
                          value={formData.lastSchool}
                          onChange={(e) => handleInputChange("lastSchool", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <Label htmlFor="graduationYear">Year Graduated *</Label>
                        <Input
                          id="graduationYear"
                          type="number"
                          min="1990"
                          max="2024"
                          value={formData.graduationYear}
                          onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="gpa">GPA/General Average *</Label>
                        <Input
                          id="gpa"
                          value={formData.gpa}
                          onChange={(e) => handleInputChange("gpa", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                          placeholder="e.g., 3.5 or 85%"
                        />
                      </div>
                      <div>
                        <Label htmlFor="academicHonors">Academic Honors/Awards</Label>
                        <Input
                          id="academicHonors"
                          value={formData.academicHonors}
                          onChange={(e) => handleInputChange("academicHonors", e.target.value)}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                          placeholder="e.g., Magna Cum Laude, Dean's List"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="extracurriculars">Extracurricular Activities</Label>
                      <Textarea
                        id="extracurriculars"
                        value={formData.extracurriculars}
                        onChange={(e) => handleInputChange("extracurriculars", e.target.value)}
                        className="mt-1 transition-all duration-300 focus:scale-105"
                        rows={4}
                        placeholder="List your involvement in clubs, sports, volunteer work, etc."
                      />
                    </div>

                    <div>
                      <Label htmlFor="workExperience">Work Experience (if any)</Label>
                      <Textarea
                        id="workExperience"
                        value={formData.workExperience}
                        onChange={(e) => handleInputChange("workExperience", e.target.value)}
                        className="mt-1 transition-all duration-300 focus:scale-105"
                        rows={4}
                        placeholder="Describe any relevant work experience"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Program Selection */}
                {currentStep === 3 && (
                  <div
                    className={`space-y-6 transform transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  >
                    <div>
                      <Label>Select Program *</Label>
                      <div className="mt-4 space-y-4">
                        <RadioGroup
                          value={formData.selectedProgram}
                          onValueChange={(value) => handleInputChange("selectedProgram", value)}
                        >
                          {programs.map((program) => (
                            <div
                              key={program.value}
                              className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-maxine-lavender/20 transition-all duration-300 hover:scale-105"
                            >
                              <RadioGroupItem value={program.value} id={program.value} className="mt-1" />
                              <div className="flex-1">
                                <Label htmlFor={program.value} className="text-base font-medium cursor-pointer">
                                  {program.label}
                                </Label>
                                <div className="text-sm text-gray-600 mt-1">College of {program.college}</div>
                                <div className="text-sm text-maxine-amaranth font-medium mt-1">
                                  Tuition: {program.tuition}
                                </div>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Preferred Intake Year *</Label>
                        <Select onValueChange={(value) => handleInputChange("intakeYear", value)}>
                          <SelectTrigger className="mt-1 transition-all duration-300 hover:scale-105">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Preferred Semester *</Label>
                        <Select onValueChange={(value) => handleInputChange("intakeSemester", value)}>
                          <SelectTrigger className="mt-1 transition-all duration-300 hover:scale-105">
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="first">First Semester (August)</SelectItem>
                            <SelectItem value="second">Second Semester (January)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="personalStatement">Personal Statement</Label>
                      <Textarea
                        id="personalStatement"
                        value={formData.personalStatement}
                        onChange={(e) => handleInputChange("personalStatement", e.target.value)}
                        className="mt-1 transition-all duration-300 focus:scale-105"
                        rows={6}
                        placeholder="Tell us why you want to study at Maxine University and how this program aligns with your goals..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Document Upload */}
                {currentStep === 4 && (
                  <div
                    className={`space-y-6 transform transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  >
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-medium text-blue-900 mb-2">Document Requirements</h3>
                      <p className="text-sm text-blue-700">
                        Please upload clear, legible copies of all required documents. Accepted formats: PDF, JPG, PNG
                        (Max 5MB per file)
                      </p>
                    </div>

                    <div className="space-y-4">
                      {requirements.map((req, index) => (
                        <div
                          key={req.id}
                          className={`flex items-center justify-between p-4 border rounded-lg hover:bg-maxine-lavender/10 transition-all duration-300 hover:scale-105 transform ${
                            isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id={req.id}
                              checked={uploadedFiles[req.id] || false}
                              onCheckedChange={() => handleFileUpload(req.id)}
                            />
                            <div>
                              <Label htmlFor={req.id} className="text-base font-medium cursor-pointer">
                                {req.label}
                                {req.required && <span className="text-red-500 ml-1">*</span>}
                              </Label>
                              {!req.required && <div className="text-sm text-gray-500">Optional</div>}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {uploadedFiles[req.id] ? (
                              <Badge className="bg-green-100 text-green-800">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Uploaded
                              </Badge>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleFileUpload(req.id)}
                                className="hover:scale-105 transition-all duration-300"
                              >
                                <Upload className="h-4 w-4 mr-2" />
                                Upload
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Application Fee */}
                {currentStep === 5 && (
                  <div
                    className={`space-y-6 transform transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Summary</h3>
                      <p className="text-gray-600">Review your application details before payment</p>
                    </div>

                    <Card className="bg-maxine-lavender/20 border-maxine-cherry hover:scale-105 transition-transform duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">Application Details</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Applicant Name:</span>
                            <span>
                              {formData.firstName} {formData.lastName}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Email:</span>
                            <span>{formData.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Selected Program:</span>
                            <span>
                              {programs.find((p) => p.value === formData.selectedProgram)?.label || "Not selected"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Intake:</span>
                            <span>
                              {formData.intakeSemester} Semester {formData.intakeYear}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-maxine-cherry hover:scale-105 transition-transform duration-300">
                      <CardHeader className="bg-maxine-cherry text-white">
                        <CardTitle className="text-lg">Payment Information</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-lg font-medium">Application Fee:</span>
                          <span className="text-2xl font-bold text-maxine-amaranth">
                            ₱{applicationFee.toLocaleString()}
                          </span>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label>Payment Method</Label>
                            <Select>
                              <SelectTrigger className="mt-1 transition-all duration-300 hover:scale-105">
                                <SelectValue placeholder="Select payment method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="gcash">GCash</SelectItem>
                                <SelectItem value="paymaya">PayMaya</SelectItem>
                                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                                <SelectItem value="credit-card">Credit/Debit Card</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h4 className="font-medium text-yellow-900 mb-2">Important Notes:</h4>
                            <ul className="text-sm text-yellow-800 space-y-1">
                              <li>• Application fee is non-refundable</li>
                              <li>• Payment confirmation will be sent to your email</li>
                              <li>• Application will be processed within 5-7 business days</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Navigation Buttons with Animations */}
                <div className="flex justify-between pt-8 border-t">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    Previous
                  </Button>

                  {currentStep < applicationSteps.length ? (
                    <Button
                      onClick={handleNext}
                      className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button className="bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-300">
                      Submit Application & Pay
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section with Split Layout and Animations */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`relative transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
              <div className="bg-maxine-lavender/20 rounded-2xl p-8 border border-maxine-mimi hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Application+Help"
                  alt="Application Help"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div
              className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Need Help?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our admissions team is here to assist you throughout the application process. Don't hesitate to reach
                out if you have any questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-maxine-cherry flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Admissions Office</div>
                    <div className="text-sm text-gray-600">admissions@maxineuniversity.edu</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-maxine-amaranth flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Technical Support</div>
                    <div className="text-sm text-gray-600">(555) 123-4567</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300">
                  Contact Admissions
                </Button>
                <Button
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                >
                  Download Application Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
