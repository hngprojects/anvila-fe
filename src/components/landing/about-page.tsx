'use client'

import React, { useState } from 'react'
import myPicture from '../../picures/girl.png'
import myPicture2 from '../../picures/staff.png'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { User, X, LucideBook, LucideStar, LucideLink, Menu } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

export const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Pricing', href: '/pricing' },

  ]

  const footerLinks = {
    'Our Services': [
      { name: 'Create Package', href: '#' },
      { name: 'Browse Registry', href: '#' },
      { name: 'GitHub Publishing', href: '#' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Early Access', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '#' },
      { name: 'Press', href: '#' },
    ],
    'Support & Legal': [
      { name: 'GitHub', href: '#' },
      { name: 'Twitter / X', href: '#' },
      { name: 'Linkedin', href: '#' },
      { name: 'Discord', href: '#' },
      { name: 'Product Hunt', href: '#' },
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A] overflow-x-hidden">
      {/* Header */}
      <header className="w-full relative z-50">
        <div className="mx-auto flex h-20 md:h-24 max-w-[1440px] items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-8 lg:gap-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#004D40]">
                <LucideBook className="h-5 w-5 fill-white text-white" />
              </div>
              <span className="text-xl md:text-2xl font-[900] tracking-[0.05em] text-[#004D40]">
                ANVILA
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-semibold text-[#1A1A1A] transition-colors hover:text-[#004D40]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden h-auto rounded-lg border-gray-200 px-10 py-3.5 text-sm font-bold text-[#1A1A1A] shadow-sm sm:flex"
            >
              Login
            </Button>
            <Button className="h-auto rounded-lg bg-[#004D40] px-6 md:px-10 py-3 md:py-3.5 text-sm font-bold text-white shadow-lg shadow-[#004D40]/20 hover:bg-[#003632]">
              Get Started
            </Button>
            {/* Mobile Toggle */}
            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-white border-b px-6 py-8 shadow-xl lg:hidden"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg font-bold" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                ))}
                <hr />
                <Button variant="outline" className="w-full py-6">Login</Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 pt-12 md:pt-20 pb-10">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 md:mb-10 font-[600] text-[#000000]">
                <span className="text-4xl md:text-5xl">About Us</span>
              </div>
              <h1 className="mb-6 md:mb-10 text-3xl md:text-5xl leading-[1.1] font-medium">
                The Standard for Portable Intelligence
              </h1>
              <div className="max-w-xl space-y-6 md:space-y-8">
                <p className="text-base md:text-[18px] leading-relaxed text-[#000000]">
                  In the rapidly evolving world of AI, consistency is often the
                  missing piece. Most AI interactions are ephemeral temporary
                  conversations lost in a chat history.
                </p>
                <p className="text-base md:text-[18px] leading-relaxed text-[#000000]">
                  At Anvila, we believe that an AI&apos;s persona, logic, and
                  skill-set should be more than just a fleeting prompt. They
                  should be permanent, structured, and reusable assets.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square w-full lg:w-[579px] lg:h-[563px] overflow-hidden rounded-[8px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]"
            >
              <Image
                src={myPicture}
                alt="Portrait"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="overflow-hidden bg-[#F8FAFB] py-20 md:py-32 lg:py-48">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <div className="grid items-center gap-12 md:gap-24 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square w-full lg:w-[540px] lg:h-[445px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] order-2 lg:order-1"
              >
                <Image
                  src={myPicture2}
                  alt="Staff"
                  fill
                  className="object-cover lg:object-fill"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:py-20 order-1 lg:order-2"
              >
                <h2 className="mb-6 md:mb-10 text-4xl md:text-5xl font-[600] tracking-tight lg:text-6xl">
                  Our Mission
                </h2>
                <p className="text-base md:text-[18px] leading-relaxed font-[400] text-[#000000]">
                  Our mission is to provide the distribution layer for the
                  next generation of AI Agents. We&apos;ve built the
                  &quot;Forge&quot; that transforms natural language
                  descriptions into a standardized architecture.
                  <br /><br />
                  By packaging an agent&apos;s Identity, Soul, and DNA into a
                  portable file system, we enable developers and creators to
                  build AI that is version controlled, shareable, and ready
                  for deployment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Build Section */}
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-32 lg:py-48">
          <div className="mb-12 md:mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-[600] tracking-tight lg:text-6xl">
              Why we Build
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {[
              { title: "From Chaos to Structure", desc: "We replace messy, inconsistent prompts with a clean, GitHub ready file protocol.", bg: "bg-[#F8FAFB]", text: "text-[#000000]", sub: "" },
              { title: "Collaborative Innovation", desc: "Through our Public Registry, we empower a global community to share and build upon the world's best AI blueprints.", bg: "bg-[#004D40]", text: "text-white", sub: "shadow-2xl shadow-[#004D40]/30" },
              { title: "Professional Reliability", desc: "We treat AI Agents as digital employees. By standardizing their 'Instruction Manuals,' we ensure they remain reliable tools.", bg: "bg-[#F8FAFB]", text: "text-[#637381]", sub: "" }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col rounded-[12px] p-8 md:p-12 shadow-sm min-h-[194px] lg:w-[410px] ${card.bg} ${card.text} ${card.sub}`}
              >
                <h3 className="mb-4 md:mb-6 text-xl font-[600]">{card.title}</h3>
                <p className="text-sm md:text-[16px] leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0C5D56] pt-20 md:pt-32 pb-16 text-[#E7E7E7]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mb-16 md:mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link href="/" className="mb-6 md:mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                  <User className="h-5 w-5 fill-white text-[#E7E7E7]" />
                </div>
                <span className="text-xl md:text-[24px] font-[700] tracking-[0.05em]">ANVILA</span>
              </Link>
              <p className="mb-8 md:mb-10 max-w-sm text-sm md:text-[16px] leading-relaxed text-[#E7E7E7]">
                Builders use Anvila to turn plain descriptions into reusable AI
                agent packages that can be cloned, adapted, published, or kept
                private.
              </p>
            <div className="flex gap-4 md:gap-6">
  {[
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-6 md:w-6">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-6 md:w-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-6 md:w-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ].map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-[#0C5D56] transition-all hover:scale-110 active:scale-95 shadow-md"
      aria-label={social.name}
    >
      {social.svg}
    </a>
  ))}
</div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-7">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="mb-4 md:mb-5 text-sm md:text-[16px] font-[700] text-[#E7E7E7]">{title}</h4>
                  <ul className="space-y-3 md:space-y-5">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-xs md:text-[16px] text-[#E7E7E7] transition-colors hover:text-white">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 h-px bg-[#E7E7E7]" />

          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row text-xs md:text-[16px]">
            <p className="font-medium">&copy; {new Date().getFullYear()} Anvila. All rights reserved.</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of service</Link>
              <Link href="#" className="hover:text-white">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}