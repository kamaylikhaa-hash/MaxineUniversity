"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    title: "Admissions Office",
    email: "admissions@maxineuniversity.edu",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    description: "For inquiries about application, programs, and enrollment.",
    icon: Mail,
  },
  {
    title: "General Inquiries",
    email: "info@maxineuniversity.edu",
    phone: "+1 (555) 987-6543",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    description: "For general questions about the university, events, and partnerships.",
    icon: Phone,
  },
  {
    title: "Technical Support",
    email: "support@maxineuniversity.edu",
    phone: "+1 (555) 246-8100",
    hours: "24/7 Online Support",
    description: "For assistance with student portal, online systems, and technical issues.",
    icon: Clock,
  },
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

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
                Get in <span className="text-maxine-amaranth">Touch</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We're here to help! Whether you have questions about admissions, programs, or campus life, our team is
                ready to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-maxine-cherry hover:bg-maxine-amaranth hover:scale-105 transition-all duration-300"
                >
                  <Link href="#contact-form">Send Us a Message</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-maxine-amaranth text-maxine-amaranth hover:bg-maxine-amaranth hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Link href="/virtual-tour">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Contact+Us"
                  alt="Contact Us"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reach out to the relevant department for specific inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-500 group border-0 shadow-lg hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-maxine-amaranth transition-colors duration-300">
                    {info.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{info.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Mail className="h-4 w-4" />
                    <span>{info.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Phone className="h-4 w-4" />
                    <span>{info.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Clock className="h-4 w-4" />
                    <span>{info.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-r from-maxine-lavender to-maxine-mimi">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card
              className={`shadow-2xl border-0 transform transition-all duration-700 hover:shadow-3xl ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
              <CardHeader className="bg-gradient-to-r from-maxine-cherry to-maxine-amaranth text-white">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-white/90">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Inquiry about Admissions" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} placeholder="Your message here..." className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full bg-maxine-cherry hover:bg-maxine-amaranth">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Location Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div
            className={`text-center mb-12 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our main campus located in the heart of Academic City.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Maxine+University+Map"
                  alt="Maxine University Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white">
                    <MapPin className="h-5 w-5 mr-2" />
                    View on Google Maps
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maxine University Main Campus</h3>
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-maxine-amaranth" />
                  123 University Avenue, Academic City, Philippines
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action with Split Layout and Animations */}
      <section className="py-16 bg-gradient-to-br from-maxine-amaranth to-maxine-cherry text-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience Maxine?</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Schedule a campus visit or take a virtual tour to see our vibrant community firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-white text-maxine-amaranth hover:bg-maxine-lavender hover:text-maxine-amaranth hover:scale-105 transition-all duration-300"
                >
                  <Link href="/virtual-tour">Schedule a Visit</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-maxine-amaranth bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Link href="/virtual-tour">Take a Virtual Tour</Link>
                </Button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Campus+Experience"
                  alt="Campus Experience"
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
