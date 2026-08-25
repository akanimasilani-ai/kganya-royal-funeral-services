import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent } from '@/components/Card';
import Button from '@/components/Button';
import Badge from '@/components/Badge';

export default function FuneralCover() {
  return (
    <>
      <Head>
        <title>Funeral Cover - Kganya Royal Funeral Services</title>
        <meta name="description" content="Affordable funeral cover packages with cash payout. Protect your family today." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Funeral Cover</h1>
          <p className="text-xl text-blue-50">Give your family the financial protection they deserve</p>
        </div>
      </section>

      {/* What is Funeral Cover? */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What is Funeral Cover?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Funeral cover is a financial protection plan that provides your family with immediate cash when you pass away. This money helps cover funeral expenses and provides financial support during a difficult time.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Instead of burdening your family with large funeral costs, funeral cover ensures they have the financial resources they need to honour you with dignity.
              </p>
              <p className="text-lg text-gray-600">
                With Kganya Royal Funeral Cover, you get peace of mind knowing your family is protected.
              </p>
            </div>
            <Card className="bg-blue-50">
              <CardContent>
                <h3 className="text-2xl font-bold text-brand-primary mb-6">Benefits of Funeral Cover</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span><strong>Immediate Cash Payout</strong> - Money paid directly to your family</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span><strong>Affordable Premiums</strong> - Payment plans to suit your budget</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span><strong>Quick Claims</strong> - Fast and efficient processing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span><strong>Family Protection</strong> - Peace of mind for your loved ones</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span><strong>Professional Support</strong> - We guide your family through the process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Packages */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Our Funeral Cover Packages</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the coverage amount that best protects your family.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { cover: 'R5,000', premium: 'R65/month', icon: '🛡️' },
              { cover: 'R10,000', premium: 'R120/month', icon: '🛡️' },
              { cover: 'R20,000', premium: 'R220/month', icon: '🛡️' },
              { cover: 'R30,000', premium: 'R320/month', icon: '🛡️' },
              { cover: 'R40,000', premium: 'R420/month', icon: '🛡️' },
            ].map((pkg, idx) => (
              <Card key={idx} className="text-center hover:shadow-elevation-3 transition-shadow">
                <CardContent>
                  <div className="text-4xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-brand-secondary mb-2">{pkg.cover}</h3>
                  <p className="text-sm text-gray-600 mb-4">Cover Amount</p>
                  <div className="border-t pt-4">
                    <p className="text-lg font-bold text-brand-primary mb-4">{pkg.premium}</p>
                    <Link href="/auth/register">
                      <Button size="sm" className="w-full">Apply Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-brand-primary">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Prices shown are sample monthly premiums. Actual premiums may vary based on age, health profile, and underwriting assessment. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">How Funeral Cover Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply Online', description: 'Fill in your details and choose your coverage amount.' },
              { step: '2', title: 'Get Approved', description: 'Quick underwriting and approval process.' },
              { step: '3', title: 'Start Coverage', description: 'Your cover becomes active when you pay your first premium.' },
              { step: '4', title: 'Family Protected', description: 'Your family receives cash payout when needed.' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center">
                <CardContent>
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Kganya Royal Funeral Cover?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Transparent', description: 'No hidden fees or surprise costs. Clear terms and conditions.' },
              { title: 'Reliable', description: 'Fast claims processing and professional support for your family.' },
              { title: 'Affordable', description: 'Coverage plans to fit any budget, starting from R65/month.' },
            ].map((reason, idx) => (
              <Card key={idx} className="bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20">
                <CardContent className="text-center">
                  <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                  <p className="text-blue-50">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Protect Your Family Today</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't leave your family with the burden of funeral costs. Apply for funeral cover today and give them peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg">Apply for Funeral Cover</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">Have Questions? Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
