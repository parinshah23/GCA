"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Footer } from "@/components/footer";
import { IconHome, IconUser, IconMessage, IconBriefcase, IconTool, IconDroplet, IconBuilding, IconFlame, IconPhone, IconSparkles } from "@tabler/icons-react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import Link from "next/link";

const services = [
  {
    title: "Plumbing Installation",
    description: "Efficient setup for residential and commercial properties with expert assessment and premium materials.",
    link: "#",
    icon: <IconDroplet className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Pipefitting Services",
    description: "Expert design and installation of durable, industry-standard piping systems for any scale.",
    link: "#",
    icon: <IconBuilding className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Welding Solutions",
    description: "High-quality welding to ensure the integrity, strength, and longevity of your systems.",
    link: "#",
    icon: <IconFlame className="w-8 h-8 text-blue-500" />,
  },
];

const testimonials = [
  {
    quote: "GCA Construction provided exceptional service. Their attention to detail in our office plumbing overhaul was remarkable.",
    name: "Francis Collier",
    title: "Business Owner",
  },
  {
    quote: "Professional, timely, and skilled. The welding work was flawless. Highly recommended.",
    name: "Sylvia Reese",
    title: "Project Manager",
  },
  {
    quote: "They transformed our plumbing system efficiently. Great communication throughout the project.",
    name: "Samuel Baker",
    title: "Homeowner",
  },
  {
    quote: "Top notch pipefitting services. They really know their craft.",
    name: "Jasmine Holland",
    title: "Site Supervisor",
  },
];

export default function Home() {
  const navItems = [
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <IconTool className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: <IconTool className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <main className="relative bg-white dark:bg-black min-h-screen w-full overflow-hidden pt-32">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section id="home">
        <ImagesSlider className="h-[40rem]" images={[
          "/hero-main.jpg",
          "/gallery/IMG-20260103-WA0030.jpg",
          "/gallery/IMG-20260103-WA0050.jpg",
          "/gallery/IMG-20260103-WA0075.jpg",
          "/gallery/IMG-20260103-WA0100.jpg",
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3270&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505798577917-a651a5d40318?q=80&w=3272&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581094794329-cd1096d47250?q=80&w=3000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2670&auto=format&fit=crop"
        ]}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-7xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto ">
                GCA Construction Ltd <br />
                <span className="text-blue-400">
                  Your ideal plumbing system
                </span>
              </h1>
              <p className="mt-4 font-normal text-base md:text-lg text-neutral-200 max-w-lg mx-auto">
                Welcome to GCA Construction Ltd: Your trusted partner in plumbing, pipefitting, and welding solutions.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link href="#services" className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                  Our Services
                </Link>
                <a href="tel:+4407424304664" className="px-8 py-2 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition duration-200">
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        </ImagesSlider>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900 border-b dark:border-white/[0.1]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400 mb-6">
              About Us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-6">
              GCA Construction Ltd specializes in delivering top-tier plumbing, pipefitting, and welding services. Whether for residential renovations or large-scale commercial infrastructures, we bring precision, expertise, and a commitment to quality.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
              Values of integrity and close client collaboration drive us. We tailor every solution—from complex pipe installations to intricate welding repairs—to meet your specific needs and exceed industry standards.
            </p>
          </div>
          {/* Placeholder for About Image if we had one, or a stylized graphic */}
          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-1 opacity-25 bg-gradient-to-r from-blue-600 to-cyan-600 blur rounded-2xl group-hover:opacity-50 transition duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2668&auto=format&fit=crop"
              alt="GCA Construction Team at work"
              className="relative rounded-2xl w-full h-80 object-cover shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="py-2 bg-neutral-900 dark:bg-neutral-100 overflow-hidden">
        <InfiniteMarquee
          items={[
            "GCA Construction Ltd",
            "Excellence in Plumbing",
            "Certified Welding",
            "Professional Pipefitting",
            "Safety First",
            "Quality Guaranteed"
          ]}
          separator={<IconSparkles className="w-10 h-10 text-yellow-500" />}
          direction="right"
          speed="slow"
          className="w-full"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white">Our Services</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Comprehensive solutions for your water and piping infrastructure needs.
            </p>
          </div>
          <HoverEffect items={services} />
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section id="projects" className="py-20 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-neutral-800 dark:text-white mb-10">Featured Projects</h2>
        <div className="h-screen py-20 w-full">
          <LayoutGrid cards={[
            {
              id: 1,
              content: <div className="font-bold text-4xl text-white">Office Complex Piping</div>,
              className: "md:col-span-2",
              thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3270&auto=format&fit=crop"
            },
            {
              id: 2,
              content: <div className="font-bold text-4xl text-white">Industrial Installation</div>,
              className: "col-span-1",
              thumbnail: "https://images.unsplash.com/photo-1505798577917-a651a5d40318?q=80&w=3272&auto=format&fit=crop"
            },
            {
              id: 3,
              content: <div className="font-bold text-4xl text-white">Residential Renovation</div>,
              className: "col-span-1",
              thumbnail: "https://images.unsplash.com/photo-1581094794329-cd1096d47250?q=80&w=3000&auto=format&fit=crop"
            },
            {
              id: 4,
              content: <div className="font-bold text-4xl text-white">Welding Repair</div>,
              className: "md:col-span-2",
              thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
            },
          ]} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-10 relative z-20">What our clients say</h2>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black p-10 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-6">Ready to start your project?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We are available to discuss your plumbing, pipefitting, and welding needs.
          </p>
          <a
            href="tel:+4407424304664"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition duration-200 shadow-lg hover:shadow-blue-500/50"
          >
            <IconPhone className="w-6 h-6" />
            <span>Call +44 07424304664</span>
          </a>
        </div>
      </section>

      <Footer />


    </main>
  );
}
