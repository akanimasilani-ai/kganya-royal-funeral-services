'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-elevation-1 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-brand-primary">
              Kganya Royal
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-primary transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-primary transition-colors">
              Services
            </Link>
            <Link href="/funeral-cover" className="text-gray-700 hover:text-brand-primary transition-colors">
              Funeral Cover
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-brand-primary transition-colors">
              Packages
            </Link>
            <Link href="/catering" className="text-gray-700 hover:text-brand-primary transition-colors">
              Catering
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <button className="px-4 py-2 text-brand-primary hover:text-blue-900 font-medium">
                Login
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="px-6 py-2.5 bg-brand-primary text-white rounded-lg hover:bg-blue-900 transition-colors font-medium">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
              About Us
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
              Services
            </Link>
            <Link href="/funeral-cover" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
              Funeral Cover
            </Link>
            <Link href="/packages" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
              Packages
            </Link>
            <Link href="/catering" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
              Catering
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 px-4 pt-2">
              <Link href="/auth/login">
                <button className="w-full px-4 py-2 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-light">
                  Login
                </button>
              </Link>
              <Link href="/auth/register">
                <button className="w-full px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-blue-900">
                  Get Started
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
