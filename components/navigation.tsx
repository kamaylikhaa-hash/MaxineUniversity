"use client"

import * as React from "react"
import Link from "next/link"
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
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-maxine-cherry to-maxine-amaranth"></div>
          <span className="text-xl font-bold bg-gradient-to-r from-maxine-amaranth to-maxine-cherry bg-clip-text text-transparent">
            Maxine University
          </span>
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
                <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  {academicDepartments.map((dept) => (
                    <NavigationMenuLink key={dept.name} asChild>
                      <Link
                        href={dept.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-maxine-lavender hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{dept.name}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-maxine-lavender">Campus Life</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {campusLifeLinks.map((link) => (
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
              <NavigationMenuTrigger className="hover:bg-maxine-lavender">Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {discoverLinks.map((link) => (
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
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-maxine-amaranth"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-maxine-amaranth"
              >
                About Maxine
              </Link>
              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-maxine-amaranth"
              >
                Admissions
              </Link>

              <div className="space-y-2">
                <div className="text-lg font-medium">Academics</div>
                <div className="ml-4 space-y-2">
                  {academicDepartments.map((dept) => (
                    <Link
                      key={dept.name}
                      href={dept.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm hover:text-maxine-amaranth"
                    >
                      {dept.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-lg font-medium">Campus Life</div>
                <div className="ml-4 space-y-2">
                  {campusLifeLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm hover:text-maxine-amaranth"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-lg font-medium">Discover</div>
                <div className="ml-4 space-y-2">
                  {discoverLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm hover:text-maxine-amaranth"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-lg font-medium">Student Hub</div>
                <div className="ml-4 space-y-2">
                  {studentHubLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm hover:text-maxine-amaranth"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/careers"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-maxine-amaranth"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-maxine-amaranth"
              >
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
