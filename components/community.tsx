"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ComingSoonModal } from "./coming-soon-modal";

export function Community() {
  const { t } = useLanguage();
  const [comingSoonModal, setComingSoonModal] = useState<{
    isOpen: boolean;
    platform: string;
  }>({
    isOpen: false,
    platform: "",
  });

  const socials = [
    {
      name: "Twitter/X",
      icon: "𝕏",
      color: "hover:border-primary hover:shadow-primary/20",
      link: "https://x.com/damcoinsolana",
    },
    {
      name: "Telegram",
      icon: (
        <svg viewBox='0 0 24 24' fill='currentColor' className='w-16 h-16'>
          <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z' />
        </svg>
      ),
      color: "hover:border-accent hover:shadow-accent/20",
      link: "https://t.me/damcoinonpump",
    },
    {
      name: "Discord",
      icon: (
        <svg viewBox='0 0 24 24' fill='currentColor' className='w-16 h-16'>
          <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z' />
        </svg>
      ),
      color: "hover:border-secondary hover:shadow-secondary/20",
      link: "#",
      comingSoon: true,
    },
  ];

  const handleSocialClick = (
    e: React.MouseEvent,
    social: (typeof socials)[0]
  ) => {
    if (social.comingSoon) {
      e.preventDefault();
      setComingSoonModal({ isOpen: true, platform: social.name });
    }
  };

  return (
    <section id='community' className='py-32 relative'>
      <ComingSoonModal
        isOpen={comingSoonModal.isOpen}
        onClose={() => setComingSoonModal({ isOpen: false, platform: "" })}
        platform={comingSoonModal.platform}
      />

      <div className='absolute inset-0 z-0'>
        <Image
          src='/beaver-team-collaboration.png'
          alt='Beaver Team Collaboration'
          fill
          className='object-cover opacity-60'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-background/98 via-background/90 to-background/85' />
      </div>

      <div className='container mx-auto px-4 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'
        >
          <div className='inline-block px-5 py-2.5 glass rounded-full text-primary text-sm font-semibold mb-6 shadow-lg shadow-primary/10'>
            {t.community.title.toUpperCase()}
          </div>
          <h2 className='text-4xl md:text-6xl font-bold mb-6 text-balance'>
            {t.community.title}
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            {t.community.description}
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto'>
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => handleSocialClick(e, social)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Card
                className={`p-10 glass cursor-pointer transition-all duration-300 hover:glass-strong hover:shadow-xl ${social.color} relative`}
              >
                {social.comingSoon && (
                  <div className='absolute top-3 right-3 px-2 py-1 bg-primary/20 rounded-full text-xs font-semibold text-primary'>
                    Coming Soon
                  </div>
                )}
                <div className='text-center flex flex-col items-center'>
                  <div className='text-6xl mb-6 drop-shadow-lg'>
                    {social.icon}
                  </div>
                  <h3 className='text-xl font-bold'>{social.name}</h3>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-5xl mx-auto'
        >
          <Card className='relative overflow-hidden p-16 text-center shadow-2xl shadow-primary/10 border-primary/20'>
            <div className='relative z-10'>
              <h3 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                Ready to Build?
              </h3>
              <p className='text-xl text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium'>
                Get $DAM now and become part of the AI automation revolution.
                Work smart. Dam hard. Build the future.
              </p>
              <div className='flex flex-col sm:flex-row gap-5 justify-center'>
                <Link
                  href='https://pump.fun/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button
                    size='lg'
                    className='gradient-primary text-white hover:opacity-90 font-bold text-lg px-14 py-7 shadow-2xl shadow-primary/30 transition-all hover:shadow-primary/40 hover:scale-105 cursor-pointer'
                  >
                    BUY $DAM
                  </Button>
                </Link>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:text-foreground font-bold text-lg px-14 py-7 hover:border-primary transition-all hover:scale-105 bg-background/50 backdrop-blur-sm cursor-pointer"
                >
                  READ WHITEPAPER
                </Button> */}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-32 pt-16 border-t border-border/50'
        >
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
            <div className='flex flex-col items-start'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='relative w-12 h-12'>
                  <Image
                    src='/damcoin_logo.png'
                    alt='DamCoin Logo'
                    width={48}
                    height={48}
                    className='object-contain'
                  />
                </div>
                <span className='text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                  DamCoin
                </span>
              </div>
              <p className='text-sm text-muted-foreground'>
                Work smart. Dam hard.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-foreground mb-4'>Navigation</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#about'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#features'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href='#tokenomics'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a
                    href='#roadmap'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href='#faq'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-foreground mb-4'>Resources</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#community'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href='https://pump.fun/'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Buy $DAM
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-foreground mb-4'>Legal</h4>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/terms-of-service'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-foreground mb-4'>Follow Us On</h4>
              <div className='flex gap-3 mb-6'>
                <a
                  href='https://t.me/damcoinonpump'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer'
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5 text-primary'
                  >
                    <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z' />
                  </svg>
                </a>
                <a
                  href='https://x.com/damcoinsolana'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer'
                >
                  <span className='text-primary'>𝕏</span>
                </a>
                <button
                  onClick={() =>
                    setComingSoonModal({ isOpen: true, platform: "Discord" })
                  }
                  className='w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer'
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5 text-primary'
                  >
                    <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z' />
                  </svg>
                </button>
              </div>
              <div className='text-sm'>
                <p className='text-muted-foreground mb-1'>Contact Us</p>
                <a
                  href='mailto:contact@damcoin.io'
                  className='text-primary hover:underline'
                >
                  contact@damcoin.io
                </a>
              </div>
            </div>
          </div>

          <div className='py-6 border-t border-border/30'>
            <p className='text-xs text-muted-foreground leading-relaxed mb-4'>
              DAMCOIN IS A WEB3-BASED MEME PROJECT CREATED FOR ENTERTAINMENT AND
              COMMUNITY ENGAGEMENT PURPOSES ONLY. PARTICIPATION IN ANY
              TOKEN-RELATED ACTIVITY, INCLUDING HOLDING, SWAPPING, OR ENGAGING
              WITH $DAM TOKENS, CARRIES INHERENT RISK. DAMCOIN AND ITS TEAM DO
              NOT PROVIDE FINANCIAL, INVESTMENT, OR LEGAL ADVICE. NOTHING ON
              THIS WEBSITE CONSTITUTES AN OFFER TO SELL OR A SOLICITATION OF AN
              OFFER TO BUY ANY SECURITY, COMMODITY, OR OTHER FINANCIAL PRODUCT.
              USERS ARE FULLY RESPONSIBLE FOR COMPLYING WITH LOCAL LAWS AND
              REGULATIONS IN THEIR JURISDICTION BEFORE ENGAGING WITH THE DAMCOIN
              ECOSYSTEM. BY INTERACTING WITH THIS WEBSITE, YOU AGREE TO OUR
              TERMS OF USE AND PRIVACY POLICY.
            </p>
            <p className='text-xs text-muted-foreground text-center'>
              All rights reserved DamCoin.io {new Date().getFullYear()}
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
