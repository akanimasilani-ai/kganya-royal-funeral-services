'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { Card, CardContent } from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Alert from '@/components/Alert';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
        <title>Contact Us - Kganya Royal Funeral Services</title>
        <meta name="description" content="Get in touch with Kganya Royal Funeral Services. We're here to help." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-50">We're here to help. Get in touch with us today.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: process.env.NEXT_PUBLIC_PHONE_NUMBER || '071 120 8918',
                subtext: 'WhatsApp Available',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'royalfuneralservice@gmail.com',
                subtext: 'We reply within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Address',
                content: 'A52, 9th Avenue, Hill Road',
                subtext: 'Burgersfort, Limpopo, 1150',
              },
              {
                icon: Clock,
                title: 'Hours',
                content: '24/7 Available',
                subtext: 'Always here when you need us',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="text-center hover:shadow-elevation-2 transition-shadow">
                  <CardContent>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-50 rounded-full">
                        <Icon size={24} className="text-brand-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="font-semibold text-brand-primary mb-1">{item.content}</p>
                    <p className="text-sm text-gray-600">{item.subtext}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <Card>
              <CardContent>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
                {submitted && (
                  <Alert
                    type="success"
                    title="Message Sent!"
                    message="Thank you for contacting us. We will get back to you soon."
                    onClose={() => setSubmitted(false)}
                  />
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
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
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                  <Button type="submit" size="lg" className="w-full" isLoading={loading}>
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-6">
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Get information about our services',
                      'Request a quote or custom package',
                      'Ask questions about funeral cover',
                      'Arrange catering services',
                      'Discuss special requirements',
                      'Provide feedback or suggestions',
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-brand-secondary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Quick Response Times</h3>
                  <p className="text-gray-600 mb-4">
                    We pride ourselves on quick response times. Our team is available 24/7 to assist you.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">Phone:</span>
                      <span className="text-brand-primary">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Email:</span>
                      <span className="text-brand-primary">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">WhatsApp:</span>
                      <span className="text-brand-primary">Immediate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Call us now. Our team is available 24/7 to help you.
          </p>
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || '0711208918'}`}>
            <Button variant="ghost" size="lg" className="text-white border border-white hover:bg-white hover:text-brand-primary">
              <Phone size={20} className="mr-2" />
              Call Now
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
