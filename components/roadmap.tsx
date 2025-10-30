"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { CheckCircle2, Circle } from "lucide-react"

export function Roadmap() {
  const { t } = useLanguage()

  const phases = [
    {
      icon: "🪙",
      status: "current",
    },
    {
      icon: "🔧",
      status: "upcoming",
    },
    {
      icon: "🌐",
      status: "upcoming",
    },
  ]

  return (
    <section id="roadmap" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold mb-6 shadow-lg shadow-primary/10">
            {t.roadmap.title.toUpperCase()}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{t.roadmap.subtitle}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From meme to mission. Here's how we're building the AI automation revolution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.roadmap.phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card
                className={`p-10 transition-all duration-300 ${
                  phases[index].status === "current"
                    ? "glass-strong border-2 border-primary shadow-2xl shadow-primary/20"
                    : "glass hover:glass-strong"
                }`}
              >
                <div className="text-center mb-8">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="text-7xl mb-6 drop-shadow-lg"
                  >
                    {phases[index].icon}
                  </motion.div>
                  <div className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">{phase.phase}</div>
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>

                <ul className="space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      {phases[index].status === "current" ? (
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
            This is just the beginning. The community will shape what comes next.
          </p>
          <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            🦫 One dam at a time. 🦫
          </p>
        </motion.div>
      </div>
    </section>
  )
}
