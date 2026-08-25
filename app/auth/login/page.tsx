'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Alert from '@/components/Alert';
import { Mail } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        const data = await response.json();
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary to-blue-900 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Kganya Royal</h1>
          <p className="text-blue-100">Funeral Services Portal</p>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
            <p className="text-center text-gray-600 mt-2">Access your account</p>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert
                type="error"
                message={error}
                onClose={() => setError('')}
              />
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your password"
                required
              />

              <Button type="submit" size="lg" className="w-full" isLoading={loading}>
                Login
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <Link href="/auth/forgot-password">
                <p className="text-center text-sm text-brand-primary hover:text-blue-900 transition-colors">
                  Forgot your password?
                </p>
              </Link>

              <div className="border-t pt-4">
                <p className="text-center text-sm text-gray-600 mb-3">
                  Don't have an account?
                </p>
                <Link href="/auth/register">
                  <Button variant="secondary" size="lg" className="w-full">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 bg-white bg-opacity-10 backdrop-blur rounded-lg p-4 text-center">
          <p className="text-white text-sm">
            Need help? <a href="/contact" className="underline hover:text-blue-200">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
