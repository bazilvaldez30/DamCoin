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
      link: "https://x.com/CoinDam61637",
    },
    {
      name: "Telegram",
      icon: "✈️",
      color: "hover:border-accent hover:shadow-accent/20",
      link: "#",
      comingSoon: true,
    },
    {
      name: "Discord",
      icon: "💬",
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
          className='object-cover opacity-30'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95' />
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
                <div className='text-center'>
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
                    href='#'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Whitepaper
                  </a>
                </li>
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
                <button
                  onClick={() =>
                    setComingSoonModal({ isOpen: true, platform: "Telegram" })
                  }
                  className='w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer'
                >
                  <span className='text-primary'>✈️</span>
                </button>
                <a
                  href='https://x.com/CoinDam61637'
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
                  <span className='text-primary'>💬</span>
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
