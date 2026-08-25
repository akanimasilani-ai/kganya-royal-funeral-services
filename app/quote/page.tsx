'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { Card, CardContent } from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Textarea from '@/components/Textarea';
import Alert from '@/components/Alert';

export default function Quote() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    numberOfGuests: '',
    preferredDate: '',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          numberOfGuests: '',
          preferredDate: '',
          specialRequests: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Get a Quote - Kganya Royal Funeral Services</title>
        <meta name="description" content="Request a quote for our funeral services, catering, or funeral cover packages." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Quote</h1>
          <p className="text-xl text-blue-50">Tell us about your needs and we'll provide a personalized quote.</p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Request a Quote</h2>
              {submitted && (
                <Alert
                  type="success"
                  title="Quote Request Submitted!"
                  message="Thank you for your request. We will contact you shortly with a detailed quote."
                  onClose={() => setSubmitted(false)}
                />
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                  <Select
                    label="Service Type"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    options={[
                      { value: 'funeral_arrangements', label: 'Funeral Arrangements' },
                      { value: 'burial_services', label: 'Burial Services' },
                      { value: 'cremation', label: 'Cremation Assistance' },
                      { value: 'transport', label: 'Funeral Transport' },
                      { value: 'catering', label: 'Catering Services' },
                      { value: 'tombstone', label: 'Tombstone & Memorial' },
                      { value: 'funeral_cover', label: 'Funeral Cover' },
                      { value: 'other', label: 'Other Services' },
                    ]}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Number of Guests (if applicable)"
                    type="number"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    placeholder="e.g., 100"
                  />
                  <Input
                    label="Preferred Date"
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <Textarea
                  label="Special Requests or Additional Details"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Tell us more about your needs or any special requirements..."
                  rows={5}
                />

                <div className="bg-blue-50 p-4 rounded border-l-4 border-brand-primary">
                  <p className="text-sm text-gray-700">
                    <strong>Privacy Note:</strong> Your information is confidential and will only be used to provide you with a quote and follow-up communication.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full" isLoading={loading}>
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to receive a quote?',
                a: 'We aim to provide quotes within 24 hours of receiving your request. For urgent requests, we can provide quotes over the phone.',
              },
              {
                q: 'Are there any hidden costs?',
                a: 'No, we believe in transparent pricing. Our quotes include all services mentioned and there are no hidden costs.',
              },
              {
                q: 'Can I customize a package?',
                a: 'Yes, absolutely. We can customize packages to meet your specific needs and budget. Contact us with your requirements.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept EFT, debit orders, mobile banking, cash, and other payment methods. We can discuss payment options when we provide your quote.',
              },
              {
                q: 'Do you offer 24/7 service?',
                a: 'Yes, our team is available 24/7 to assist you. You can call us anytime for immediate assistance.',
              },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardContent>
                  <h3 className="font-bold text-brand-primary mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
