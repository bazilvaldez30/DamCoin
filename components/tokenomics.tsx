"use client";

import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";

export function Tokenomics() {
  const { t } = useLanguage();

  const tokenInfo = [
    { label: "Token Name", value: "DamCoin" },
    { label: "Ticker", value: "$DAM" },
    { label: "Chain", value: "Solana" },
    { label: "Platform", value: "Pump.fun" },
  ];

  const distribution = [
    {
      label: "Bonding Curve / Liquidity",
      percentage: "100%",
      amount: "1B",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const utilities = [
    "Early access to DamCoin automation tools",
    "Governance and voting rights on dam projects",
    "Rewards for building or sharing AI automations",
    "Used in Dam Builder marketplace for micro-AI tasks",
    "Community contests and hackathon prizes",
  ];

  return (
    <section id='tokenomics' className='py-32 relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent' />

      <div className='container mx-auto px-4 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'
        >
          <div className='inline-block px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold mb-6 shadow-lg shadow-primary/10'>
            {t.tokenomics.title.toUpperCase()}
          </div>
          <h2 className='text-4xl md:text-6xl font-bold mb-6 text-balance'>
            {t.tokenomics.title}{" "}
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Details
            </span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            {t.tokenomics.subtitle}
          </p>
        </motion.div>

        <div className='max-w-2xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='p-10 glass-strong hover:shadow-2xl hover:shadow-primary/10 transition-all'>
              <h3 className='text-3xl font-bold mb-8 flex items-center gap-3 justify-center'>
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className='text-4xl'
                >
                  🪙
                </motion.span>{" "}
                Token Info
              </h3>
              <div className='space-y-5'>
                {tokenInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className='flex justify-between items-center py-4 border-b border-border/50 last:border-0'
                  >
                    <span className='text-muted-foreground text-lg'>
                      {item.label}
                    </span>
                    <span className='font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <Card className='p-10 glass-strong hover:shadow-2xl hover:shadow-primary/10 transition-all'>
            <h3 className='text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3'>
              <span className='text-4xl'>🎯</span> Token Distribution
            </h3>
            <div className='max-w-2xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className='glass rounded-xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all'
              >
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-xl text-foreground'>
                    {distribution[0].label}
                  </h4>
                  <span
                    className={`text-3xl font-bold bg-gradient-to-r ${distribution[0].color} bg-clip-text text-transparent`}
                  >
                    {distribution[0].percentage}
                  </span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-muted-foreground'>Amount</span>
                  <span className='text-foreground font-medium text-lg'>
                    {distribution[0].amount} $DAM
                  </span>
                </div>
                <div className='mt-6 h-3 bg-muted/30 rounded-full overflow-hidden'>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className={`h-full bg-gradient-to-r ${distribution[0].color} rounded-full`}
                  />
                </div>
                <p className='text-sm text-muted-foreground mt-4 text-center'>
                  Fair launch on Pump.fun - No team allocation, no presale, 100%
                  community-owned
                </p>
                <div className='mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20'>
                  <p className='text-sm text-foreground leading-relaxed'>
                    <span className='font-semibold text-primary'>
                      💡 Creator Rewards:
                    </span>{" "}
                    Funds from creator rewards on Pump.fun will be used to
                    continue development of the DamCoin ecosystem, including
                    building automation tools, community features, and ongoing
                    platform improvements.
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='p-10 glass-strong hover:shadow-2xl hover:shadow-primary/10 transition-all h-full'>
              <h3 className='text-3xl font-bold mb-8 flex items-center gap-3'>
                <span className='text-4xl'>⚙️</span> Utility
              </h3>
              <ul className='space-y-4'>
                {utilities.map((utility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className='flex items-start gap-4'
                  >
                    <span className='text-primary text-2xl mt-0.5 flex-shrink-0'>
                      ✓
                    </span>
                    <span className='text-muted-foreground leading-relaxed'>
                      {utility}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='p-10 glass-strong hover:shadow-2xl hover:shadow-primary/10 transition-all h-full'>
              <h3 className='text-3xl font-bold mb-8 flex items-center gap-3'>
                <span className='text-4xl'>💎</span> Tax & Fees
              </h3>
              <div className='space-y-6'>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className='glass rounded-xl p-6'
                >
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-muted-foreground'>Buy Tax</span>
                    <span className='text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                      0%
                    </span>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    No fees on purchases
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className='glass rounded-xl p-6'
                >
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-muted-foreground'>Sell Tax</span>
                    <span className='text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                      0%
                    </span>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    No fees on sales
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className='glass rounded-xl p-6 border border-primary/30'
                >
                  <div className='flex items-center gap-3 mb-2'>
                    <span className='text-2xl'>🔒</span>
                    <span className='font-semibold text-foreground'>
                      Liquidity Locked
                    </span>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    LP tokens locked for 1 year
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center glass-strong rounded-3xl p-12 shadow-2xl shadow-primary/10'
        >
          <p className='text-3xl font-bold mb-3'>
            <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Automation
            </span>{" "}
            with{" "}
            <span className='bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent'>
              Attitude
            </span>
          </p>
          <p className='text-lg text-muted-foreground'>
            Join the dam builders and build the future of AI automation, one dam
            at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
