"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const academicDepartments = [
  { name: "Business & Accountancy", href: "/academics/business" },
  { name: "Dentistry", href: "/academics/dentistry" },
  { name: "Education", href: "/academics/education" },
  { name: "Medical Sciences", href: "/academics/medical" },
  { name: "Nursing", href: "/academics/nursing" },
  { name: "Hospitality & Nutrition", href: "/academics/hospitality" },
  { name: "Optometry", href: "/academics/optometry" },
  { name: "Pharmacy", href: "/academics/pharmacy" },
  { name: "Engineering & Technology", href: "/academics/engineering" },
]

const campusLifeLinks = [
  { name: "Student Services", href: "/campus-life#services" },
  { name: "Events Calendar", href: "/campus-life#events" },
  { name: "Traditions", href: "/campus-life#traditions" },
  { name: "Facilities", href: "/campus-life#facilities" },
]

const discoverLinks = [
  { name: "University Blog", href: "/blog" },
  { name: "Research Publications", href: "/research" },
  { name: "Student Success Stories", href: "/student-success" },
  { name: "Virtual Campus Tours", href: "/virtual-tour" },
]

const studentHubLinks = [
  { name: "Online Application", href: "/apply" },
  { name: "Student Portal", href: "/student-portal" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-12 w-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/Ugh.png"
              alt="Maxine University Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold bg-gradient-to-r from-maxine-amaranth to-maxine-cherry bg-clip-text text-transparent transition-colors duration-300">
              Maxine University
            </span>
            <span className="text-xs text-gray-600 font-medium">Excellence in Education</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-maxine-lavender hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-maxine-lavender hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  About Maxine
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/admissions"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-maxine-lavender hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Admissions
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-maxine-lavender">Academics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[600px] p-6 bg-white rounded-xl shadow-lg animate-in slide-in-from-top-5 duration-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    {academicDepartments.map((dept) => (
                      <NavigationMenuLink key={dept.name} asChild>
                        <Link
                          href={dept.href}
                          className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth hover:shadow-md"
                        >
                          <div className="text-sm font-medium">{dept.name}</div>
                          <p className="mt-1 text-xs text-gray-500">Explore our programs</p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-maxine-lavender">Campus Life</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-6 bg-white rounded-xl shadow-lg animate-in slide-in-from-top-5 duration-200">
                  <div className="grid gap-3">
                    {campusLifeLinks.map((link) => (
                      <NavigationMenuLink key={link.name} asChild>
                        <Link
                          href={link.href}
                          className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth hover:shadow-md group"
                        >
                          <div className="text-sm font-medium group-hover:translate-x-1 transition-transform">{link.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-maxine-lavender">Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-6 bg-white rounded-xl shadow-lg animate-in slide-in-from-top-5 duration-200">
                  <div className="grid gap-3">
                    {discoverLinks.map((link) => (
                      <NavigationMenuLink key={link.name} asChild>
                        <Link
                          href={link.href}
                          className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth hover:shadow-md group"
                        >
                          <div className="text-sm font-medium group-hover:translate-x-1 transition-transform">{link.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-maxine-lavender">Student Hub</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {studentHubLinks.map((link) => (
                    <NavigationMenuLink key={link.name} asChild>
                      <Link
                        href={link.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-maxine-lavender hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{link.name}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/careers"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-maxine-lavender hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Careers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-maxine-lavender hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative h-10 w-10">
                <Image
                  src="/Ugh.png"
                  alt="Maxine University Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-maxine-amaranth">Maxine University</span>
            </div>
            <nav className="flex flex-col">
              {/* Main Navigation Links */}
              <div className="space-y-1 mb-6">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Maxine" },
                  { href: "/admissions", label: "Admissions" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Academics Section */}
              <div className="mb-6">
                <div className="px-3 mb-2 text-sm font-semibold text-gray-500">ACADEMICS</div>
                <div className="space-y-1">
                  {academicDepartments.map((dept) => (
                    <Link
                      key={dept.name}
                      href={dept.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 text-sm rounded-lg transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth"
                    >
                      {dept.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Campus Life Section */}
              <div className="mb-6">
                <div className="px-3 mb-2 text-sm font-semibold text-gray-500">CAMPUS LIFE</div>
                <div className="space-y-1">
                  {campusLifeLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 text-sm rounded-lg transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Discover Section */}
              <div className="mb-6">
                <div className="px-3 mb-2 text-sm font-semibold text-gray-500">DISCOVER</div>
                <div className="space-y-1">
                  {discoverLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 text-sm rounded-lg transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Student Hub Section */}
              <div className="mb-6">
                <div className="px-3 mb-2 text-sm font-semibold text-gray-500">STUDENT HUB</div>
                <div className="space-y-1">
                  {studentHubLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 text-sm rounded-lg transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Additional Links */}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <Link
                  href="/careers"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-maxine-lavender hover:text-maxine-amaranth"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
