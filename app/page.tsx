import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heart, Shield, Phone, CheckCircle } from 'lucide-react';
import Button from '@/components/Button';
import { Card, CardContent } from '@/components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kganya Royal Funeral Services - Honouring Lives with Dignity</title>
        <meta name="description" content="Professional funeral services, funeral cover, and catering in South Africa. Compassionate support for your family." />
        <meta property="og:title" content="Kganya Royal Funeral Services" />
        <meta property="og:description" content="Honouring lives with dignity, compassion and excellence." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Honouring Lives.<br />Supporting Families.
            </h1>
            <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Compassionate, dignified funeral services and comprehensive funeral cover to protect your family during their most difficult time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/funeral-cover">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white border border-white hover:bg-white hover:text-brand-primary">
                  Join Funeral Cover
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Kganya Royal
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Compassionate Service', description: 'We understand your pain and provide caring, respectful support every step of the way.' },
              { icon: Shield, title: 'Reliable Support', description: 'Professional team dedicated to handling all arrangements with dignity and excellence.' },
              { icon: CheckCircle, title: 'Transparent Packages', description: 'Clear pricing and comprehensive services. No hidden costs. Full transparency guaranteed.' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="text-center hover:shadow-elevation-3 transition-shadow">
                  <CardContent>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-50 rounded-full">
                        <Icon size={32} className="text-brand-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Funeral Arrangements', description: 'Complete funeral planning and coordination.' },
              { title: 'Burial Services', description: 'Professional burial coordination.' },
              { title: 'Cremation Assistance', description: 'Cremation services and guidance.' },
              { title: 'Funeral Transport', description: 'Reliable transport services.' },
              { title: 'Mortuary Coordination', description: 'Professional mortuary arrangements.' },
              { title: 'Memorial Services', description: 'Meaningful memorial celebrations.' },
              { title: 'Tombstone Services', description: 'Professional tombstone selection and placement.' },
              { title: 'Catering Services', description: 'Quality catering for all occasions.' },
              { title: 'Family Support', description: 'Comprehensive family support services.' },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-elevation-2 transition-shadow">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2 text-brand-primary">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funeral Cover */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Funeral Cover Packages</h2>
              <p className="text-lg text-blue-50 mb-6">
                Give your family the financial support they need during the most difficult time. Choose a plan that suits your budget and needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Immediate cash payout to your family</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Affordable monthly premiums</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Quick and reliable claims process</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Peace of mind for you and your family</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/funeral-cover">
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white border border-white hover:bg-white hover:text-brand-primary">
                    View All Packages
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="lg" className="w-full sm:w-auto bg-brand-secondary text-brand-primary hover:bg-yellow-400">
                    Apply Online
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-gray-900">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Sample Packages</h3>
              <div className="space-y-4">
                {[
                  { cover: 'R5,000', premium: 'R65' },
                  { cover: 'R10,000', premium: 'R120' },
                  { cover: 'R20,000', premium: 'R220' },
                  { cover: 'R30,000', premium: 'R320' },
                  { cover: 'R40,000', premium: 'R420' },
                ].map((pkg, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-semibold">{pkg.cover}</span>
                    <span className="text-brand-secondary font-bold">{pkg.premium}/month</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6">*Prices include funeral assistance and family support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Catering Packages</h3>
              <div className="space-y-4">
                {[
                  { name: 'BASIC', people: '100 People', price: 'R100', items: ['1x Starch', '1x Protein', '1x Vegetable', 'Roll & Butter', 'Serving Equipment'] },
                  { name: 'STANDARD', people: '100 People', price: 'R150', items: ['1x Starch', '2x Proteins', '2x Vegetables', 'Roll & Butter', 'Salad', 'Serving Equipment'] },
                  { name: 'DELUXE', people: '100 People', price: 'R200', items: ['2x Starch', '2x Proteins', '2x Vegetables', 'Salad', 'Dessert', 'Rolls & Butter', 'Serving Equipment'] },
                  { name: 'PREMIUM', people: '100 People', price: 'R250', items: ['2x Starch', '3x Proteins', '3x Vegetables', 'Salad', 'Dessert', 'Rolls & Butter', 'Juice', 'Full Setup & Clean-up'] },
                ].map((pkg, idx) => (
                  <div key={idx} className="bg-white p-4 rounded border-l-4 border-brand-secondary">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-brand-primary">{pkg.name}</h4>
                        <p className="text-sm text-gray-600">{pkg.people}</p>
                      </div>
                      <span className="text-xl font-bold text-brand-secondary">{pkg.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Quality Catering Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                Quality catering for all occasions. Prepared with care. Served with excellence.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're planning a funeral reception, family gathering, or corporate event, our catering services are designed to provide quality food and professional service.
              </p>
              <Link href="/catering">
                <Button size="lg">Request Catering Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          <div className="grid md:grid-cols-5 gap-4 md:gap-2">
            {[
              { step: '1', title: 'Contact Us', description: 'Reach out to our team' },
              { step: '2', title: 'Choose Service', description: 'Select your service or package' },
              { step: '3', title: 'Apply/Submit', description: 'Complete your application' },
              { step: '4', title: 'Confirmation', description: 'Receive confirmation' },
              { step: '5', title: 'Support', description: 'We assist your family' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let us help you honour your loved one with dignity.
          </h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Contact Kganya Royal Funeral Services today for compassionate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || '0768560303'}`}>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white border border-white hover:bg-white hover:text-brand-primary">
                <Phone size={20} className="mr-2" />
                Call Us
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white border border-white hover:bg-white hover:text-brand-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
