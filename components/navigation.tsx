"use client"

import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/damcoin_logo.png"
                alt="DamCoin Logo"
                width={48}
                height={48}
                className="object-contain drop-shadow-lg"
              />
            </div>
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DamCoin</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-lg font-semibold hover:text-primary transition-colors">
              {t.nav.about}
            </Link>
            <Link href="#features" className="text-lg font-semibold hover:text-primary transition-colors">
              {t.nav.features}
            </Link>
            <Link href="#tokenomics" className="text-lg font-semibold hover:text-primary transition-colors">
              {t.nav.tokenomics}
            </Link>
            <Link href="#roadmap" className="text-lg font-semibold hover:text-primary transition-colors">
              {t.nav.roadmap}
            </Link>
            <Link href="#team" className="text-lg font-semibold hover:text-primary transition-colors">
              {t.nav.team}
            </Link>
            <Link href="#community" className="text-lg font-semibold hover:text-primary transition-colors">
              {t.nav.community}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Button className="gradient-primary text-primary-foreground hover:opacity-90 font-bold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
              {t.nav.buy}
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
