"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      <div className='absolute inset-0 gradient-mesh' />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background' />

      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className='absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]'
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]'
        />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left space-y-8 pt-12'
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold mb-4 shadow-lg shadow-primary/10'
            >
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
              </span>
              {t.hero.badge}
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance'
            >
              {t.hero.title}
              <br />
              <span className='bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>
                {t.hero.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
            >
              {t.hero.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed'
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4'
            >
              <Link
                href='https://pump.fun/coin/3r6JFFnSnPYUXn84nhYWEeDNyTXafuzx94ZKFGztpump'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  size='lg'
                  className='gradient-primary text-white hover:opacity-90 font-bold text-lg px-10 py-7 shadow-2xl shadow-primary/30 transition-all hover:shadow-primary/40 hover:scale-105 cursor-pointer'
                >
                  {t.hero.buyButton}
                </Button>
              </Link>

              <Link
                href='https://x.com/damcoinsolana'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  size='lg'
                  variant='outline'
                  className='border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:text-foreground font-bold text-lg px-10 py-7 hover:border-primary transition-all hover:scale-105 bg-transparent cursor-pointer'
                >
                  {t.hero.joinButton}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className='grid grid-cols-3 gap-4 pt-8'
            >
              {[
                { label: t.hero.stats.token, value: "$DAM" },
                { label: t.hero.stats.chain, value: "Solana" },
                { label: t.hero.stats.powered, value: "AI+Meme" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className='glass rounded-xl p-4 text-center lg:text-left hover:bg-card/60 transition-all'
                >
                  <div className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative flex items-center justify-center'
          >
            <div className='relative w-full max-w-lg aspect-square'>
              {/* <div className='absolute inset-0 glass-strong rounded-full' /> */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className='relative w-full h-full'
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className='absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 rounded-full blur-[100px]'
                />
                <div className='relative w-full h-full flex items-center justify-center p-8'>
                  <Image
                    src='/damcoin.png'
                    alt='DamCoin'
                    width={500}
                    height={500}
                    className='object-contain drop-shadow-2xl'
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
