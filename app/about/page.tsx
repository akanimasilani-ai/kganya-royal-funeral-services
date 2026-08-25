import React from 'react';
import Head from 'next/head';
import { Card, CardContent } from '@/components/Card';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Kganya Royal Funeral Services</title>
        <meta name="description" content="Learn about Kganya Royal Funeral Services - our mission, values, and commitment to families." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kganya Royal</h1>
          <p className="text-xl text-blue-50">Honouring Life with Dignity, Compassion & Excellence</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Kganya Royal Funeral Services is a professional funeral services company dedicated to providing compassionate, dignified, and reliable support to families during their most difficult times.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Founded on the principles of dignity, respect, and excellence, we have served families across South Africa with comprehensive funeral arrangements, professional catering services, and affordable funeral cover packages.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experienced professionals is committed to honouring your loved ones while providing the support and guidance your family needs.
              </p>
            </div>
            <Card className="bg-blue-50">
              <CardContent>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Commitment</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span>Compassionate, professional service</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span>Transparent, honest communication</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span>Reliable support every step of the way</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span>Respectful of cultural and religious traditions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-secondary text-xl font-bold">✓</span>
                    <span>Excellence in every detail</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide compassionate, professional funeral services and affordable funeral cover that honours the dignity of the departed while supporting families through their time of grief and loss.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted funeral services provider across South Africa, known for our unwavering commitment to dignity, respect, and excellence in service delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Dignity', description: 'We treat every person with respect and honour.' },
              { title: 'Compassion', description: 'We understand and support families through grief.' },
              { title: 'Integrity', description: 'We act with honesty and transparency always.' },
              { title: 'Excellence', description: 'We deliver quality in every service we provide.' },
            ].map((value, idx) => (
              <Card key={idx} className="text-center">
                <CardContent>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Families Choose Kganya Royal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Expertise',
                description: 'Our experienced team handles every detail with precision and care.'
              },
              {
                title: 'Comprehensive Services',
                description: 'From arrangements to catering to funeral cover - everything in one place.'
              },
              {
                title: 'Affordable Options',
                description: 'Quality services at prices that work for your family budget.'
              },
              {
                title: '24/7 Support',
                description: 'We\'re available when you need us most, anytime, any day.'
              },
              {
                title: 'Cultural Respect',
                description: 'We respect all cultural and religious traditions and customs.'
              },
              {
                title: 'Trusted Partner',
                description: 'Families across South Africa trust us with their most important moments.'
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

      {/* Business Info */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Registration</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Business Name:</span> Kganya Royal Funeral Services (Pty) Ltd
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Company Registration:</span> [Add verified company registration information]
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Tax ID:</span> [Add verified tax identification number]
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Licensing & Compliance</h3>
                <p className="text-gray-600 mb-2">
                  We operate in accordance with all relevant South African regulations and best practices for funeral services.
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Insurance:</span> [Add verified insurance information]
                </p>
                <p className="text-gray-600">
                  Our funeral cover is administered by [Add verified underwriter information].
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
