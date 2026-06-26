import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PREMIUM_FEATURES, PREMIUM_CURRICULUM, SITE_INFO } from '../../data/mockData';

const enrollSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Valid 10-digit mobile number required'),
  email: z.string().email('Valid email is required'),
  classLevel: z.string().min(1, 'Please select your class'),
  paymentMethod: z.string().min(1, 'Please select a payment method')
});

const Enroll = () => {
  const [activeTab, setActiveTab] = useState('Accountancy');
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(enrollSchema),
    defaultValues: { paymentMethod: 'online' }
  });

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSuccess(true);
  };

  return (
    <main className="bg-bg-primary min-h-screen">
      <Helmet>
        <title>Enroll Now | Commerce Premium Batch — ₹999 | Singh Commerce Classes</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-t-[8px] border-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-brand-orange-light text-brand-orange px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Digital Batch Enrollment
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            Commerce Premium Batch
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Your complete digital learning package. Get unlimited access to lectures, notes, and doubt support until your exams.
          </p>
          <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm w-fit mx-auto px-8 py-4 rounded-2xl border border-white/20">
            <span className="text-gray-400 line-through text-2xl font-medium">₹2,999</span>
            <span className="text-5xl md:text-6xl font-bold text-brand-orange font-playfair">₹999</span>
            <span className="text-white text-sm bg-success px-2 py-1 rounded">66% OFF</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {PREMIUM_FEATURES.map((feat, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-bg-section-alt rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                {feat.icon}
              </div>
              <h3 className="font-bold text-navy text-xl mb-3">{feat.title}</h3>
              <p className="text-charcoal leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 pb-24">
        
        {/* Curriculum Preview */}
        <div className="bg-bg-section-alt rounded-3xl p-8 border border-brand-orange/20">
          <h2 className="font-playfair text-3xl font-bold text-navy mb-2">What's Included?</h2>
          <p className="text-gray-600 mb-8">Preview the complete syllabus coverage.</p>
          
          <div className="flex overflow-x-auto gap-2 mb-6 hide-scrollbar pb-2">
            {Object.keys(PREMIUM_CURRICULUM).map(subject => (
              <button
                key={subject}
                onClick={() => setActiveTab(subject)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === subject ? 'bg-navy text-white' : 'bg-white text-navy shadow-sm'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {PREMIUM_CURRICULUM[activeTab].map((chapter, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-navy text-sm mb-1">{chapter.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                    <span>🎬 {chapter.lectures} Lectures</span>
                    <span>⏱ {chapter.duration}</span>
                  </div>
                </div>
                <div className="bg-green-50 text-success text-[10px] font-bold uppercase px-2 py-1 rounded border border-green-100">
                  ✅ Included
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment Form */}
        <div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-t-4 border-brand-orange sticky top-28">
            
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Enrollment Initiated!</h2>
                <p className="text-charcoal mb-8">
                  Your details have been received. Please complete the payment of ₹999 to activate your account.
                </p>
                <div className="bg-bg-section-alt p-6 rounded-xl border border-brand-orange-light text-left mb-8">
                  <h4 className="font-bold text-navy mb-2">Next Steps:</h4>
                  <ol className="list-decimal pl-5 text-sm space-y-2 text-charcoal">
                    <li>Pay via UPI to <strong className="text-navy">9876543210@paytm</strong></li>
                    <li>Share the screenshot on WhatsApp</li>
                    <li>Your portal access will be activated within 2 hours</li>
                  </ol>
                </div>
                <a href={SITE_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-whatsapp text-white py-4 rounded-xl font-bold hover:opacity-90 transition">
                  Share Payment Screenshot
                </a>
              </div>
            ) : (
              <>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-6 text-center">Complete Your Enrollment</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Full Name</label>
                    <input type="text" {...register('name')} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition" />
                    {errors.name && <p className="text-error text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">Phone Number</label>
                      <input type="tel" {...register('phone')} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition" />
                      {errors.phone && <p className="text-error text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">Email Address</label>
                      <input type="email" {...register('email')} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition" />
                      {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Select Class / Level</label>
                    <select {...register('classLevel')} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange outline-none bg-gray-50 focus:bg-white transition">
                      <option value="">Choose...</option>
                      <option value="XI">Class XI Commerce</option>
                      <option value="XII">Class XII Commerce</option>
                      <option value="BCOM">B.Com</option>
                      <option value="BBA">B.B.A.</option>
                    </select>
                    {errors.classLevel && <p className="text-error text-xs mt-1">{errors.classLevel.message}</p>}
                  </div>

                  <div className="pt-2">
                    <label className="block text-sm font-medium text-navy mb-3">Payment Preference</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="relative flex cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm focus:outline-none has-[:checked]:border-brand-orange has-[:checked]:ring-1 has-[:checked]:ring-brand-orange has-[:checked]:bg-brand-orange-light/20">
                        <input type="radio" value="online" {...register('paymentMethod')} className="sr-only" />
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">📱</span>
                            <span className="text-sm font-semibold text-navy">Pay Online (UPI)</span>
                          </div>
                        </div>
                      </label>
                      <label className="relative flex cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm focus:outline-none has-[:checked]:border-brand-orange has-[:checked]:ring-1 has-[:checked]:ring-brand-orange has-[:checked]:bg-brand-orange-light/20">
                        <input type="radio" value="cash" {...register('paymentMethod')} className="sr-only" />
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">💵</span>
                            <span className="text-sm font-semibold text-navy">Pay at Center</span>
                          </div>
                        </div>
                      </label>
                    </div>
                    {errors.paymentMethod && <p className="text-error text-xs mt-1">{errors.paymentMethod.message}</p>}
                  </div>

                  <div className="border-t border-gray-100 pt-6 mt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-500 font-medium">Total Amount Payable</span>
                      <span className="text-3xl font-playfair font-bold text-navy">₹999</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-orange text-white text-lg rounded-xl py-4 font-bold hover:bg-brand-orange-dark transition disabled:opacity-70 shadow-md"
                    >
                      {isSubmitting ? 'Processing...' : 'Confirm Enrollment →'}
                    </button>
                  </div>
                </form>
              </>
            )}
            
          </div>
        </div>

      </div>
    </main>
  );
};

export default Enroll;
