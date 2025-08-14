"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Wrench,
  Sparkles,
  ShowerHead,
  AlignJustify,
} from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium relative">
          <Link href="#home" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-secondary transition-colors"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              className="flex items-center gap-1 hover:text-secondary transition-colors"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
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
                        <Link
                          href="#"
                          className="block hover:text-secondary transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </PopoverContent>
          </Popover>

          <Link
            href="#blogs"
            className="hover:text-secondary transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="#contact"
            className="hover:text-secondary transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <Button href="#book">Book a Service</Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <AlignJustify />
        </div>
      </div>
    </header>
  );
}
