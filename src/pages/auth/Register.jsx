import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SITE_INFO, COURSE_OPTIONS } from '../../data/mockData';

const registerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Valid 10-digit mobile number required'),
  course: z.string().min(1, 'Please select a course'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const calculateStrength = (password) => {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 6) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return score; // 0 to 4
};

const Register = () => {
  const { signup, user, role } = useAuth();
  const navigate = useNavigate();
  const [authMsg, setAuthMsg] = useState('');

  React.useEffect(() => {
    if (user && role) {
      if (role === 'admin') {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/portal/dashboard', { replace: true });
      }
    }
  }, [user, role, navigate]);
  
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const passwordVal = watch('password', '');
  const strength = calculateStrength(passwordVal);

  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];

  const onSubmit = async (data) => {
    setAuthMsg('');
    try {
      await signup(data.email, data.password, data.name, data.phone, data.course);
      // Navigation is handled by the useEffect above once role is loaded
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        setAuthMsg('An account with this email already exists.');
      } else if (error.code === 'auth/weak-password') {
        setAuthMsg('Password is too weak.');
      } else {
        setAuthMsg('Failed to create an account. Please try again.');
      }
    }
  };

  return (
    <main className="bg-bg-primary min-h-screen flex flex-col items-center justify-center p-6 py-12">
      <Helmet>
        <title>Register | Singh Commerce Classes Student Portal</title>
      </Helmet>

      <div className="w-full max-w-md">
        <Link to="/" className="block text-center mb-8 hover:opacity-80 transition">
          <span className="font-playfair text-2xl font-bold text-navy block">{SITE_INFO.name}</span>
          <span className="text-sm text-gray-500 italic">Student Portal</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
          <h1 className="text-2xl font-bold text-navy text-center mb-2">Create Your Account</h1>
          <p className="text-sm text-gray-500 text-center mb-8">Join our digital learning platform</p>

          {authMsg && (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 text-sm px-4 py-3 rounded-lg mb-6 text-center">
              {authMsg}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Full Name</label>
              <input type="text" {...register('name')} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none text-sm" />
              {errors.name && <p className="text-error text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">Email Address</label>
              <input type="email" {...register('email')} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none text-sm" />
              {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">Phone Number</label>
              <input type="tel" {...register('phone')} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none text-sm" />
              {errors.phone && <p className="text-error text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">Course Enrolled In</label>
              <select {...register('course')} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none text-sm bg-white">
                <option value="">Select a course</option>
                {COURSE_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.course && <p className="text-error text-xs mt-1">{errors.course.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">Password</label>
              <input type="password" {...register('password')} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none text-sm" />
              {errors.password && <p className="text-error text-xs mt-1">{errors.password.message}</p>}
              
              {/* Strength Indicator */}
              {passwordVal.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1 h-1.5 mb-1">
                    {[0, 1, 2, 3].map(i => (
                      <div key={i} className={`flex-1 rounded-full ${i < strength ? strengthColors[strength - 1] : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                  <p className={`text-xs ${strength > 0 ? strengthColors[strength-1].replace('bg-', 'text-') : 'text-gray-400'}`}>
                    {strength > 0 ? strengthLabels[strength - 1] : 'Too short'}
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">Confirm Password</label>
              <input type="password" {...register('confirmPassword')} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none text-sm" />
              {errors.confirmPassword && <p className="text-error text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" id="terms" required className="mt-1 accent-brand-orange" />
              <label htmlFor="terms" className="text-xs text-gray-500">
                I agree to the Terms & Conditions and Privacy Policy.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-orange text-white rounded-lg py-3 font-bold hover:bg-brand-orange-dark transition disabled:opacity-70 mt-4 flex justify-center items-center"
            >
              {isSubmitting ? 'Processing...' : 'Create My Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already registered?{' '}
              <Link to="/login" className="text-brand-orange font-bold hover:underline">
                Login here →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
