"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Wrench, Sparkles, ShowerHead } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const servicesData = [
    {
      icon: <Wrench className="w-5 h-5 text-[var(--secondary)]" />,
      category: "Home Maintenance",
      items: [
        "Electrician",
        "Plumber",
        "AC Technician",
        "Carpenter",
        "Handyman",
        "Painter/Wallpaper",
        "Furniture Polisher",
        "Geyser Technician",
        "Pest Control",
      ],
    },
    {
      icon: <ShowerHead className="w-5 h-5 text-[var(--accent)]" />,
      category: "Cleaning Services",
      items: [
        "Carpet Cleaning",
        "Curtain Cleaning",
        "Sofa Cleaning",
        "Mattress Cleaning",
        "House Cleaning",
      ],
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[var(--primary)]" />,
      category: "Beauty & Self-Care",
      items: [
        "Makeup",
        "Waxing / Threading",
        "Facial",
        "Hair Care & Treatment",
        "Nail Care & Mani/Pedi",
        "Hair Cut & Hair Styling",
      ],
    },
  ];

  return (
    <header className="bg-background text-foreground shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} priority />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium relative">
          <a href="#home" className="hover:text-secondary transition-colors">Home</a>
          <a href="#about" className="hover:text-secondary transition-colors">About Us</a>

          {/* Services Dropdown */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              className="flex items-center gap-1 hover:text-secondary transition-colors"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </PopoverTrigger>
            <PopoverContent
              className="w-[900px] p-6 grid grid-cols-3 gap-8 bg-popover text-popover-foreground shadow-lg border rounded-lg"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              align="center"
            >
              {servicesData.map((section, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-3">
                    {section.icon}
                    <h3 className="font-semibold">{section.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="block hover:text-secondary transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </PopoverContent>
          </Popover>

          <a href="#blogs" className="hover:text-secondary transition-colors">Blogs</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#book"
          className="hidden md:inline-block hover:bg-primary bg-secondary text-secondary-foreground px-5 py-2 rounded-lg shadow transition-all"
        >
          Book a Service
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-muted transition-colors" aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
