"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Zap, Wrench, Users, Rocket } from "lucide-react"
import Image from "next/image"

export function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      title: t.about.features[0].title,
      description: t.about.features[0].description,
    },
    {
      icon: Wrench,
      title: "Builder Tools",
      description: "Access community-built AI tools and automation workflows powered by $DAM.",
    },
    {
      icon: Users,
      title: t.about.features[1].title,
      description: t.about.features[1].description,
    },
    {
      icon: Rocket,
      title: t.about.features[2].title,
      description: t.about.features[2].description,
    },
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold mb-6 shadow-lg shadow-primary/10">
            ABOUT US
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.about.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all"
                >
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image src="/beaver-ai-workspace.png" alt="DamCoin AI Workspace" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 lg:p-20">
            <div className="max-w-2xl">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              >
                The Vision
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed"
              >
                While $DAM launches as a meme token, the vision is to evolve into an AI builder ecosystem where the
                community creates, shares, and monetizes AI automations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-strong rounded-2xl p-6 border border-primary/20"
              >
                <p className="text-base md:text-lg text-muted-foreground mb-2">Think of it as:</p>
                <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  "If ChatGPT and a Beaver had a baby that automates your to-do list."
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mt-8"
              >
                Build like a beaver. Think like an AI.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
