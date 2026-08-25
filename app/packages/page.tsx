import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent } from '@/components/Card';
import Button from '@/components/Button';

export default function Packages() {
  return (
    <>
      <Head>
        <title>Packages - Kganya Royal Funeral Services</title>
        <meta name="description" content="Browse our comprehensive funeral service and funeral cover packages." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h1>
          <p className="text-xl text-blue-50">Comprehensive solutions designed for every family</p>
        </div>
      </section>

      {/* Funeral Cover Packages */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Funeral Cover Packages</h2>
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              { name: 'SILVER', cover: 'R5,000', premium: 'R65' },
              { name: 'GOLD', cover: 'R10,000', premium: 'R120' },
              { name: 'PLATINUM', cover: 'R20,000', premium: 'R220' },
              { name: 'DIAMOND', cover: 'R30,000', premium: 'R320' },
              { name: 'ROYAL', cover: 'R40,000', premium: 'R420' },
            ].map((pkg, idx) => (
              <Card key={idx} className="hover:shadow-elevation-3 transition-shadow">
                <CardContent className="text-center">
                  <h3 className="text-sm font-bold text-brand-secondary mb-3 uppercase tracking-wider">{pkg.name}</h3>
                  <div className="border-t border-b py-4 my-4">
                    <p className="text-2xl font-bold text-gray-900">{pkg.cover}</p>
                    <p className="text-xs text-gray-600 mt-1">Cover Amount</p>
                  </div>
                  <p className="text-lg font-bold text-brand-primary mb-4">{pkg.premium}<span className="text-sm text-gray-600">/month</span></p>
                  <Link href="/auth/register" className="block">
                    <Button size="sm" className="w-full">Select Package</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-brand-primary">
            <p className="text-gray-700">
              <strong>All Funeral Cover Packages Include:</strong> Immediate cash payout to your family, Professional funeral services support, 24/7 claims support, Professional guidance for your family
            </p>
          </div>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Catering Packages</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: 'BASIC',
                serves: '100 People',
                price: 'R100',
                items: [
                  '1x Starch',
                  '1x Protein',
                  '1x Vegetable',
                  'Roll & Butter',
                  'Serving Equipment'
                ]
              },
              {
                name: 'STANDARD',
                serves: '100 People',
                price: 'R150',
                items: [
                  '1x Starch',
                  '2x Proteins',
                  '2x Vegetables',
                  'Roll & Butter',
                  'Salad',
                  'Serving Equipment'
                ]
              },
              {
                name: 'DELUXE',
                serves: '100 People',
                price: 'R200',
                items: [
                  '2x Starch',
                  '2x Proteins',
                  '2x Vegetables',
                  'Salad',
                  'Dessert',
                  'Rolls & Butter',
                  'Serving Equipment'
                ]
              },
              {
                name: 'PREMIUM',
                serves: '100 People',
                price: 'R250',
                items: [
                  '2x Starch',
                  '3x Proteins',
                  '3x Vegetables',
                  'Salad',
                  'Dessert',
                  'Rolls & Butter',
                  'Juice',
                  'Setup & Clean-up'
                ]
              },
            ].map((pkg, idx) => (
              <Card key={idx} className="hover:shadow-elevation-3 transition-shadow">
                <CardContent>
                  <h3 className="text-lg font-bold text-brand-secondary mb-2 uppercase">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{pkg.serves}</p>
                  <div className="border-t border-b py-4 my-4">
                    <p className="text-3xl font-bold text-brand-primary">{pkg.price}</p>
                  </div>
                  <h4 className="font-semibold text-xs text-gray-700 mb-3 uppercase">Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start">
                        <span className="text-brand-secondary mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/catering" className="block">
                    <Button size="sm" className="w-full">Request Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-brand-secondary">
            <p className="text-gray-700">
              <strong>Note:</strong> Additional guests will be charged accordingly. All prices are per 100 people. Contact us for custom packages.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Find the Right Package for Your Needs</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you need help choosing the right package or want a customized solution, our team is here to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Contact Us for Help</Button>
            </Link>
            <Link href="/quote">
              <Button variant="secondary" size="lg">Get a Custom Quote</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
