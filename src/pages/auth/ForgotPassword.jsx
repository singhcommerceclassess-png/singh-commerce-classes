import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { SITE_INFO } from '../../data/mockData';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email) return;
    setLoading(true);
    try {
      await resetPassword(email);
      setStep(2);
    } catch (error) {
      console.error(error);
      setStep(2); // For security, always show success even if email not found
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-bg-primary min-h-screen flex flex-col items-center justify-center p-6">
      <Helmet>
        <title>Reset Password | Singh Commerce Classes</title>
      </Helmet>

      <div className="w-full max-w-md">
        <Link to="/" className="block text-center mb-8 hover:opacity-80 transition">
          <span className="font-playfair text-2xl font-bold text-navy block">{SITE_INFO.name}</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
          
          {step === 1 ? (
            <>
              <h1 className="text-2xl font-bold text-navy text-center mb-2">Reset Your Password</h1>
              <p className="text-sm text-gray-500 text-center mb-8">Enter your registered email or phone number and we'll send you a link to reset your password.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1" htmlFor="email">Email or Phone Number</label>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition bg-white"
                    placeholder="student@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-orange text-white rounded-lg py-3.5 font-bold hover:bg-brand-orange-dark transition disabled:opacity-70 flex justify-center items-center"
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-2xl font-bold text-navy mb-2">Link Sent!</h1>
              <p className="text-sm text-gray-500 mb-8 max-w-[250px] mx-auto">
                If an account exists with {email}, you will receive a password reset link shortly.
              </p>

              <Link
                to="/login"
                className="w-full block bg-navy text-white rounded-lg py-3.5 font-bold hover:bg-navy-light transition"
              >
                Back to Login
              </Link>
            </div>
          )}

          {step === 1 && (
            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm text-gray-500 hover:text-brand-orange font-medium transition">
                ← Back to Login
              </Link>
            </div>
          )}

        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
