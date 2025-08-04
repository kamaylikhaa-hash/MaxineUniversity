import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-maxine-amaranth to-maxine-cherry text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-white/20"></div>
              <span className="text-xl font-bold">Maxine University</span>
            </div>
            <p className="text-white/80 text-sm">
              Excellence in education, innovation in research, and commitment to community service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-maxine-lavender cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-maxine-lavender cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-maxine-lavender cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-maxine-lavender cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-maxine-lavender transition-colors">
                About Maxine
              </Link>
              <Link href="/admissions" className="block hover:text-maxine-lavender transition-colors">
                Admissions
              </Link>
              <Link href="/academics" className="block hover:text-maxine-lavender transition-colors">
                Academics
              </Link>
              <Link href="/campus-life" className="block hover:text-maxine-lavender transition-colors">
                Campus Life
              </Link>
              <Link href="/blog" className="block hover:text-maxine-lavender transition-colors">
                University Blog
              </Link>
              <Link href="/research" className="block hover:text-maxine-lavender transition-colors">
                Research
              </Link>
              <Link href="/student-success" className="block hover:text-maxine-lavender transition-colors">
                Student Success
              </Link>
              <Link href="/apply" className="block hover:text-maxine-lavender transition-colors">
                Apply Online
              </Link>
              <Link href="/student-portal" className="block hover:text-maxine-lavender transition-colors">
                Student Portal
              </Link>
              <Link href="/virtual-tour" className="block hover:text-maxine-lavender transition-colors">
                Virtual Tour
              </Link>
            </div>
          </div>

          {/* Academics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Colleges</h3>
            <div className="space-y-2 text-sm">
              <Link href="/academics/business" className="block hover:text-maxine-lavender transition-colors">
                Business & Accountancy
              </Link>
              <Link href="/academics/medical" className="block hover:text-maxine-lavender transition-colors">
                Medical Sciences
              </Link>
              <Link href="/academics/engineering" className="block hover:text-maxine-lavender transition-colors">
                Engineering & Technology
              </Link>
              <Link href="/academics/nursing" className="block hover:text-maxine-lavender transition-colors">
                Nursing
              </Link>
              <Link href="/academics/dentistry" className="block hover:text-maxine-lavender transition-colors">
                Dentistry
              </Link>
              <Link href="/academics/education" className="block hover:text-maxine-lavender transition-colors">
                Education
              </Link>
              <Link href="/academics/hospitality" className="block hover:text-maxine-lavender transition-colors">
                Hospitality & Nutrition
              </Link>
              <Link href="/academics/optometry" className="block hover:text-maxine-lavender transition-colors">
                Optometry
              </Link>
              <Link href="/academics/pharmacy" className="block hover:text-maxine-lavender transition-colors">
                Pharmacy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 University Ave, Academic City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@maxineuniversity.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; 2024 Maxine University. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
