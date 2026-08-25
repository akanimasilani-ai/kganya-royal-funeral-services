import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent } from '@/components/Card';
import Button from '@/components/Button';

export default function Catering() {
  return (
    <>
      <Head>
        <title>Catering Services - Kganya Royal Funeral Services</title>
        <meta name="description" content="Professional catering for funerals, memorials, and family gatherings. Quality food. Great service." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catering Services</h1>
          <p className="text-xl text-blue-50">Quality catering for all occasions. Great food. Great service. Made with care.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Professional Catering Services</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Kganya Royal, we understand that quality food and excellent service are essential parts of honouring your loved one and supporting your family during important moments.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our catering services are perfect for funerals, memorial services, family gatherings, weddings, corporate events, and celebrations.
              </p>
              <ul className="space-y-3">
                {[
                  'Professional food preparation',
                  'Quality ingredients and hygiene standards',
                  'Experienced catering team',
                  'Flexible package options',
                  'Custom menu arrangements',
                  'Setup and cleanup included',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-brand-secondary text-xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-blue-50">
              <CardContent>
                <h3 className="text-2xl font-bold text-brand-primary mb-6">Perfect For</h3>
                <div className="space-y-4">
                  {[
                    'Funerals & Memorials',
                    'Family Gatherings',
                    'Weddings & Celebrations',
                    'Corporate Events',
                    'Traditional Ceremonies',
                    'Any Special Occasion'
                  ].map((category, idx) => (
                    <div key={idx} className="flex items-center gap-2 pb-3 border-b border-gray-200 last:border-b-0">
                      <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Catering Packages</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: 'BASIC',
                serves: '100 People',
                price: 'R100',
                description: 'Great for intimate gatherings',
                items: [
                  '1x Starch (e.g. rice, pap)',
                  '1x Protein (e.g. chicken)',
                  '1x Vegetable',
                  'Roll & Butter',
                  'Serving Equipment & Service'
                ]
              },
              {
                name: 'STANDARD',
                serves: '100 People',
                price: 'R150',
                description: 'Perfect for most occasions',
                items: [
                  '1x Starch',
                  '2x Proteins',
                  '2x Vegetables',
                  'Roll & Butter',
                  'Salad',
                  'Serving Equipment & Service'
                ]
              },
              {
                name: 'DELUXE',
                serves: '100 People',
                price: 'R200',
                description: 'Premium selection',
                items: [
                  '2x Starch',
                  '2x Proteins',
                  '2x Vegetables',
                  'Salad',
                  'Dessert',
                  'Rolls & Butter',
                  'Serving Equipment & Service'
                ]
              },
              {
                name: 'PREMIUM',
                serves: '100 People',
                price: 'R250',
                description: 'Complete experience',
                items: [
                  '2x Starch',
                  '3x Proteins',
                  '3x Vegetables',
                  'Salad',
                  'Dessert',
                  'Rolls & Butter',
                  'Juice',
                  'Setup & Professional Cleanup'
                ]
              },
            ].map((pkg, idx) => (
              <Card key={idx} className="hover:shadow-elevation-3 transition-shadow">
                <CardContent>
                  <h3 className="text-lg font-bold text-brand-secondary mb-1 uppercase">{pkg.name}</h3>
                  <p className="text-xs text-gray-600 mb-3">{pkg.serves}</p>
                  <p className="text-sm text-gray-600 mb-4 italic">{pkg.description}</p>
                  <div className="border-t border-b py-4 my-4">
                    <p className="text-3xl font-bold text-brand-primary">{pkg.price}</p>
                  </div>
                  <h4 className="font-semibold text-xs text-gray-700 mb-3 uppercase">Includes:</h4>
                  <ul className="space-y-2 mb-6 text-xs text-gray-600">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-secondary flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="block">
                    <Button size="sm" className="w-full">Request Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Kganya Royal Catering?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Quality You Can Trust',
                description: 'We use only quality ingredients prepared with care and attention to detail.'
              },
              {
                title: 'Professional Service',
                description: 'Our experienced catering team ensures excellent service from setup to cleanup.'
              },
              {
                title: 'Flexible Options',
                description: 'From preset packages to custom menus - we adapt to your specific needs.'
              },
              {
                title: 'Affordable Pricing',
                description: 'Quality catering at prices that work for your budget and guest count.'
              },
              {
                title: 'Timely Delivery',
                description: 'We ensure food is prepared and served at the perfect temperature and time.'
              },
              {
                title: 'Cultural Respect',
                description: 'We respect dietary requirements and cultural food traditions.'
              },
            ].map((reason, idx) => (
              <Card key={idx} className="bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20">
                <CardContent>
                  <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                  <p className="text-blue-50">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">How to Order</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Request Quote', desc: 'Fill in your catering needs and guest count' },
              { step: '2', title: 'Confirm Details', desc: 'Confirm date, time, and menu preferences' },
              { step: '3', title: 'Finalize Order', desc: 'Confirm final arrangements and payment' },
              { step: '4', title: 'Enjoy Service', desc: 'We deliver and serve your event' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center">
                <CardContent>
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let Us Handle the Catering</h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Great food. Great service. Made with care. Request a catering quote today.
          </p>
          <Link href="/quote">
            <Button variant="ghost" size="lg" className="text-white border border-white hover:bg-white hover:text-brand-primary">
              Request Catering Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
