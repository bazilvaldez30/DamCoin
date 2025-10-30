"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              ← Back to Home
            </Button>
          </Link>

          <Card className="p-8 md:p-12 glass">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using the DamCoin website, purchasing $DAM tokens, or participating in any
                  DamCoin-related activities, you agree to be bound by these Terms of Service. If you do not agree to
                  these terms, please do not use our services or purchase $DAM tokens.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Nature of $DAM Token</h2>
                <p className="leading-relaxed mb-4">
                  $DAM is a meme token created for entertainment and community engagement purposes only. By purchasing
                  or holding $DAM tokens, you acknowledge and agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>$DAM is NOT an investment, security, or financial product</li>
                  <li>$DAM has no intrinsic value and may become worthless</li>
                  <li>There are no guarantees, promises, or expectations of financial returns</li>
                  <li>The value of $DAM may fluctuate dramatically and unpredictably</li>
                  <li>You may lose all funds invested in $DAM tokens</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">3. No Financial Advice</h2>
                <p className="leading-relaxed">
                  Nothing on the DamCoin website or in any DamCoin communications constitutes financial, investment,
                  legal, or tax advice. You should consult with qualified professionals before making any financial
                  decisions. DamCoin and its team members are not financial advisors and do not provide investment
                  recommendations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Risks</h2>
                <p className="leading-relaxed mb-4">
                  Cryptocurrency transactions and holdings involve substantial risks, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Extreme price volatility and potential total loss of value</li>
                  <li>Regulatory uncertainty and potential legal restrictions</li>
                  <li>Technical vulnerabilities and smart contract risks</li>
                  <li>Market manipulation and liquidity risks</li>
                  <li>Cybersecurity threats and hacking attempts</li>
                  <li>Loss of access to wallets or private keys</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">5. User Responsibilities</h2>
                <p className="leading-relaxed mb-4">You are solely responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Conducting your own research (DYOR) before purchasing $DAM</li>
                  <li>Understanding the risks associated with cryptocurrency</li>
                  <li>Complying with all applicable laws and regulations in your jurisdiction</li>
                  <li>Securing your wallet and private keys</li>
                  <li>Paying any applicable taxes on cryptocurrency transactions</li>
                  <li>Verifying the authenticity of DamCoin communications and contracts</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, DamCoin, its creators, developers, team members, and
                  affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or
                  punitive damages arising from your use of the website, purchase of $DAM tokens, or participation in
                  DamCoin activities. This includes, but is not limited to, loss of profits, data, or other intangible
                  losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">7. No Guarantees</h2>
                <p className="leading-relaxed">
                  DamCoin makes no guarantees regarding the development, implementation, or success of any features,
                  roadmap items, or future plans. The roadmap is aspirational and subject to change without notice. Any
                  statements about future developments are forward-looking and should not be relied upon.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Prohibited Activities</h2>
                <p className="leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use DamCoin services for any illegal activities</li>
                  <li>Attempt to manipulate the market or engage in fraudulent activities</li>
                  <li>Impersonate DamCoin or create fake accounts/websites</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Interfere with the operation of DamCoin services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on the DamCoin website, including logos, graphics, text, and code, is the property of
                  DamCoin or its licensors and is protected by copyright and other intellectual property laws. You may
                  not use, reproduce, or distribute any content without express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">10. Modifications</h2>
                <p className="leading-relaxed">
                  DamCoin reserves the right to modify these Terms of Service at any time without prior notice. Your
                  continued use of DamCoin services after any modifications constitutes acceptance of the updated terms.
                  It is your responsibility to review these terms periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">11. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the
                  jurisdiction in which DamCoin operates, without regard to its conflict of law provisions. Any disputes
                  shall be resolved through binding arbitration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">12. Severability</h2>
                <p className="leading-relaxed">
                  If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining
                  provisions shall continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">13. Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at:{" "}
                  <a href="mailto:legal@damcoin.io" className="text-primary hover:underline">
                    legal@damcoin.io
                  </a>
                </p>
              </section>

              <div className="mt-12 p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm font-bold text-destructive mb-2">⚠️ IMPORTANT DISCLAIMER</p>
                <p className="text-sm leading-relaxed">
                  BY PURCHASING OR HOLDING $DAM TOKENS, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO
                  THESE TERMS OF SERVICE. YOU ACCEPT ALL RISKS ASSOCIATED WITH CRYPTOCURRENCY AND UNDERSTAND THAT YOU
                  MAY LOSE YOUR ENTIRE INVESTMENT. DAMCOIN IS NOT RESPONSIBLE FOR ANY LOSSES YOU MAY INCUR.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
