'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kganya Royal</h3>
            <p className="text-gray-300 text-sm mb-4">
              Honouring lives. Supporting families. Professional funeral services across South Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/funeral-cover" className="hover:text-brand-secondary transition-colors">
                  Funeral Cover
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/packages" className="hover:text-brand-secondary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-brand-secondary transition-colors">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-brand-secondary transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>{process.env.NEXT_PUBLIC_PHONE_NUMBER || '[Add business phone]'}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>{process.env.NEXT_PUBLIC_EMAIL || 'info@kganyaroyal.co.za'}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{process.env.NEXT_PUBLIC_ADDRESS || '[Add business address]'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-blue-900 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
            <Link href="/privacy" className="hover:text-brand-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-secondary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="hover:text-brand-secondary transition-colors">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-brand-secondary transition-colors">
              Disclaimer
            </Link>
          </div>
          <div className="border-t border-blue-900 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 Kganya Royal Funeral Services (Pty) Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
