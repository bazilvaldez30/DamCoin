"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"
import { motion, AnimatePresence } from "framer-motion"

const languages: { code: Language; label: string }[] = [
  { code: "EN", label: "EN" },
  { code: "TR", label: "TR" },
  { code: "PT", label: "PT" },
  { code: "ES", label: "ES" },
  { code: "FR", label: "FR" },
  { code: "RU", label: "RU" },
  { code: "UA", label: "UA" },
  { code: "JP", label: "JP" },
  { code: "CN", label: "CN" },
]

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass px-4 py-2 rounded-lg font-bold text-sm hover:bg-card/60 transition-all border border-primary/30 hover:border-primary/50"
      >
        {language}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 glass-strong rounded-lg overflow-hidden shadow-2xl border border-primary/20 z-50 min-w-[80px]"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-2.5 text-left font-bold text-sm transition-all hover:bg-primary/20 ${
                    language === lang.code ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
