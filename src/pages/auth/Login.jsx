import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SITE_INFO } from '../../data/mockData';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const Login = () => {
  const { login, user, role } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  React.useEffect(() => {
    if (user && role) {
      if (role === 'admin') {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/portal/dashboard', { replace: true });
      }
    }
  }, [user, role, navigate]);

  const onSubmit = async (data) => {
    setAuthError('');
    try {
      await login(data.email, data.password);
      // Navigation is handled by the useEffect above once role is loaded
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setAuthError('Invalid email or password.');
      } else if (error.code === 'auth/too-many-requests') {
        setAuthError('Too many failed attempts. Please try again later.');
      } else {
        setAuthError('Failed to log in. Please try again.');
      }
    }
  };

  return (
    <main className="bg-bg-primary min-h-screen flex flex-col items-center justify-center p-6">
      <Helmet>
        <title>Login | Singh Commerce Classes Student Portal</title>
      </Helmet>

      <div className="w-full max-w-md">
        <Link to="/" className="block text-center mb-8 hover:opacity-80 transition">
          <span className="font-playfair text-2xl font-bold text-navy block">{SITE_INFO.name}</span>
          <span className="text-sm text-gray-500 italic">Student Portal</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
          <h1 className="text-2xl font-bold text-navy text-center mb-2">Student Login</h1>
          <p className="text-sm text-gray-500 text-center mb-8">Access your notes, lectures, and study material</p>

          {authError && (
            <div className="bg-red-50 border border-red-200 text-error text-sm px-4 py-3 rounded-lg mb-6 text-center">
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                <input
                  type="email"
                  {...register('email')}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-error' : 'border-gray-200'} focus:border-brand-orange focus:ring-2 focus:ring-brand-orange-light outline-none transition`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
              </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-navy" htmlFor="password">Password</label>
                <Link to="/forgot-password" className="text-xs text-brand-orange font-medium hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition bg-white pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0a10.05 10.05 0 015.188-1.583c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0l-3.29-3.29" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-error text-xs mt-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-orange text-white rounded-lg py-3.5 font-bold hover:bg-brand-orange-dark transition disabled:opacity-70 mt-6 flex justify-center items-center"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Login to Portal'
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">OR</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-brand-orange font-bold hover:underline">
                Register Now →
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          Your data is secure and encrypted
        </div>
      </div>
    </main>
  );
};

export default Login;
