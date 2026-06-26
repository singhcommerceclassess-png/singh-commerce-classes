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
  const { signup, user, role, googleSignIn } = useAuth();
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

  const handleGoogleSignIn = async () => {
    setAuthMsg('');
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
      setAuthMsg('Failed to sign up with Google. Please try again.');
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

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">OR</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full mt-6 bg-white border border-gray-200 text-charcoal rounded-lg py-3 font-bold hover:bg-gray-50 transition flex justify-center items-center gap-3 shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign up with Google
          </button>


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
