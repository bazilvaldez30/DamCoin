"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Zap, Users, Brain, TrendingUp } from "lucide-react"
import Image from "next/image"

const iconMap = [Zap, Users, Brain, TrendingUp]

export function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {t.features.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {t.features.items.map((feature, i) => {
            const Icon = iconMap[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-strong rounded-2xl p-8 hover:bg-card/60 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-10 md:p-16 shadow-2xl shadow-primary/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md mx-auto"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <Image
                  src="/beaver.png"
                  alt="AI Automation"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-2xl rounded-2xl relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 60px rgba(6, 182, 212, 0.4))",
                  }}
                />
              </div>
            </motion.div>
            <div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI-Powered Automation
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                DamCoin combines the power of artificial intelligence with the relentless work ethic of a beaver. Our
                platform enables you to automate complex workflows, build intelligent agents, and create value through
                innovation.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Join thousands of builders who are already using $DAM to power their AI automation dreams.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
