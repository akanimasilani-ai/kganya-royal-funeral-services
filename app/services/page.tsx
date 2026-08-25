import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent } from '@/components/Card';
import Button from '@/components/Button';

export default function Services() {
  return (
    <>
      <Head>
        <title>Funeral Services - Kganya Royal</title>
        <meta name="description" content="Professional funeral services including arrangements, burial, cremation, transport, and more." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Funeral Services</h1>
          <p className="text-xl text-blue-50">Comprehensive professional services to honour your loved one</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Funeral Arrangements',
                description: 'Complete funeral planning and coordination with professional expertise.',
                includes: ['Planning & coordination', 'Venue arrangements', 'Ceremony management', 'Documentation handling']
              },
              {
                title: 'Burial Services',
                description: 'Professional burial coordination with dignity and respect.',
                includes: ['Grave site coordination', 'Burial arrangements', 'Cemetery liaison', 'Professional team']
              },
              {
                title: 'Cremation Assistance',
                description: 'Complete guidance and assistance with cremation services.',
                includes: ['Cremation coordination', 'Documentation', 'Ashes handling', 'Memorial options']
              },
              {
                title: 'Funeral Transport',
                description: 'Reliable and professional funeral transport services.',
                includes: ['Professional transport', 'Fleet maintenance', '24/7 availability', 'Professional drivers']
              },
              {
                title: 'Mortuary Coordination',
                description: 'Professional coordination with mortuaries and medical facilities.',
                includes: ['Mortuary liaison', 'Documentation', 'Collection services', 'Professional handling']
              },
              {
                title: 'Memorial Services',
                description: 'Meaningful memorial celebrations and remembrance services.',
                includes: ['Memorial planning', 'Venue coordination', 'Guest coordination', 'Catering liaison']
              },
              {
                title: 'Tombstone & Memorial Assistance',
                description: 'Professional guidance for tombstone selection and placement.',
                includes: [
                  'Princess Head & Base: R7,850',
                  'Majestic Head & Base: R8,350',
                  'Cathedral Head & Base: R6,300',
                  'Baron Head & Base: R4,700',
                  'Duchess Head & Base: R7,250',
                  'Name Plate: R4,250'
                ]
              },
              {
                title: 'Family Support Services',
                description: 'Comprehensive support for grieving families.',
                includes: ['Grief counselling', 'Documentation assistance', 'Financial guidance', 'Follow-up support']
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-elevation-3 transition-shadow">
                <CardContent>
                  <h3 className="text-2xl font-bold text-brand-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-brand-secondary mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/quote" className="mt-6 block">
                    <Button variant="primary" size="sm" className="w-full">
                      Enquire About This Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Contact us today for more information about our services.
          </p>
          <Link href="/quote">
            <Button variant="ghost" size="lg" className="text-white border border-white hover:bg-white hover:text-brand-primary">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
