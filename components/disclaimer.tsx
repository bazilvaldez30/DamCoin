"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export function Disclaimer() {
  const { t } = useLanguage()

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-md border-2 border-red-500/30 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-4">{t.disclaimer.title}</h2>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">{t.disclaimer.content}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
