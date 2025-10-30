"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
                <p className="leading-relaxed">
                  DamCoin ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you visit our website or interact
                  with our services. Please read this policy carefully to understand our practices regarding your
                  personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3 text-primary/80">2.1 Information You Provide</h3>
                <p className="leading-relaxed mb-4">
                  We may collect information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Email addresses when you subscribe to our newsletter or contact us</li>
                  <li>Social media handles when you interact with our community</li>
                  <li>Feedback, comments, or messages you send to us</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-primary/80">2.2 Automatically Collected Information</h3>
                <p className="leading-relaxed mb-4">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Blockchain Data</h2>
                <p className="leading-relaxed">
                  When you interact with $DAM tokens on the blockchain, certain information becomes publicly available
                  on the Solana blockchain, including your wallet address, transaction amounts, and timestamps. This
                  information is not collected by us but is inherent to blockchain technology and cannot be deleted or
                  modified.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">4. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To operate and maintain our website</li>
                  <li>To improve user experience and website functionality</li>
                  <li>To send newsletters and updates (with your consent)</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To detect and prevent fraud or security issues</li>
                  <li>To analyze website usage and trends</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies
                  are small data files stored on your device. You can control cookie settings through your browser, but
                  disabling cookies may affect website functionality.
                </p>
                <p className="leading-relaxed">Types of cookies we use:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Essential Cookies:</strong> Required for website operation
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Information Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who assist with website hosting, analytics,
                    and email services
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly agree to share information
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Third-Party Services</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites and services, including social media platforms,
                  exchanges, and wallets. We are not responsible for the privacy practices of these third parties. We
                  encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Data Security</h2>
                <p className="leading-relaxed">
                  We implement reasonable security measures to protect your information from unauthorized access,
                  alteration, disclosure, or destruction. However, no method of transmission over the internet or
                  electronic storage is 100% secure. We cannot guarantee absolute security of your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, unless a longer retention period is required by law. When information is no
                  longer needed, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">10. Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Access:</strong> Request access to your personal information
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing communications
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request a copy of your data in a portable format
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@damcoin.io" className="text-primary hover:underline">
                    privacy@damcoin.io
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">11. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children. If you believe we have collected information from a child, please
                  contact us immediately, and we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">12. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of
                  residence. These countries may have different data protection laws. By using our services, you consent
                  to the transfer of your information to these countries.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">13. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                  requirements. We will notify you of any material changes by posting the updated policy on our website
                  with a new "Last Updated" date. Your continued use of our services after changes constitutes
                  acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">14. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us at:
                </p>
                <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="font-semibold">DamCoin Privacy Team</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:privacy@damcoin.io" className="text-primary hover:underline">
                      privacy@damcoin.io
                    </a>
                  </p>
                </div>
              </section>

              <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm font-bold text-primary mb-2">🔒 Your Privacy Matters</p>
                <p className="text-sm leading-relaxed">
                  We are committed to protecting your privacy and handling your data responsibly. If you have any
                  concerns about how your information is being used, please don't hesitate to reach out to us.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
