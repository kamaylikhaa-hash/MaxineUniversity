"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const searchData = [
  { title: "Business Administration Program", type: "Academic Program", url: "/academics/business" },
  { title: "Medical Sciences Admissions", type: "Admissions", url: "/admissions" },
  { title: "Campus Life Events", type: "Campus Life", url: "/campus-life" },
  { title: "Career Services", type: "Services", url: "/careers" },
  { title: "Student Housing", type: "Services", url: "/campus-life" },
  { title: "Financial Aid", type: "Admissions", url: "/admissions" },
  { title: "Engineering Programs", type: "Academic Program", url: "/academics/engineering" },
  { title: "Library Services", type: "Services", url: "/campus-life" },
  { title: "Alumni Network", type: "Alumni", url: "/careers" },
  { title: "Contact Information", type: "Contact", url: "/contact" },
]

export function SearchComponent() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState<typeof searchData>([])

  React.useEffect(() => {
    if (query.length > 2) {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search Maxine University..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => {
              setQuery("")
              setIsOpen(false)
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {results.map((result, index) => (
              <div
                key={index}
                className="p-3 hover:bg-maxine-lavender cursor-pointer border-b last:border-b-0"
                onClick={() => {
                  setQuery("")
                  setIsOpen(false)
                  window.location.href = result.url
                }}
              >
                <div className="font-medium text-gray-900">{result.title}</div>
                <div className="text-sm text-maxine-amaranth">{result.type}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
