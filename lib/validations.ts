import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const customerDetailsSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  surname: z.string().min(2, 'Surname is required'),
  idNumber: z.string().min(10, 'ID number is required'),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date'),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  phone: z.string().min(10, 'Valid phone number required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  province: z.string().min(2, 'Province is required'),
  postalCode: z.string().min(4, 'Postal code is required'),
});

export const applicationSchema = z.object({
  packageId: z.string().min(1, 'Package selection is required'),
});

export const dependantSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  relationship: z.string().min(2, 'Relationship is required'),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date'),
  idNumber: z.string().optional(),
});

export const quoteRequestSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Invalid email address'),
  serviceRequired: z.string().min(2, 'Service is required'),
  preferredPackage: z.string().optional(),
  estimatedGuests: z.number().optional(),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export const cateringRequestSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Invalid email address'),
  category: z.enum(['FUNERAL_CATERING', 'FAMILY_CATERING', 'EVENT_CATERING', 'REFRESHMENTS', 'CUSTOM']),
  numberOfGuests: z.number().min(1, 'Number of guests is required'),
  preferredDate: z.string().optional(),
  specialRequests: z.string().optional(),
});
