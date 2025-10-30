"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import Image from "next/image"

export function Team() {
  const { t } = useLanguage()

  const teamMembers = [
    { emoji: "🦫", role: "Chief Builder" },
    { emoji: "🤖", role: "AI Architect" },
    { emoji: "🎨", role: "Meme Master" },
    { emoji: "🚀", role: "Growth Lead" },
  ]

  return (
    <section id="team" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/beaver-team-collaboration.png"
          alt="Beaver team collaboration"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {t.team.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">{t.team.subtitle}</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.team.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="glass-strong rounded-2xl p-8 text-center hover:bg-card/60 transition-all"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="text-8xl mb-6"
              >
                {member.emoji}
              </motion.div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {member.role}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
