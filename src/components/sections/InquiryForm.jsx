import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { COURSE_OPTIONS } from '../../data/mockData';

const baseSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit mobile number' }),
  course: z.string().min(1, { message: 'Please select a course' }),
  message: z.string().optional(),
});

const contactSchema = baseSchema.extend({
  bestTimeToCall: z.string().min(1, { message: 'Please select a time' }),
});

const InquiryForm = ({ variant = 'hero' }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const isContact = variant === 'contact';
  const schema = isContact ? contactSchema : baseSchema;

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log('Form data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-navy mb-2">Enquiry Submitted!</h3>
        <p className="text-charcoal">We will call you back within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-navy mb-1" htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition"
          placeholder="e.g. Rahul Verma"
        />
        {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1" htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition"
          placeholder="e.g. 9876543210"
        />
        {errors.phone && <p className="text-error text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1" htmlFor="course">Course Interested In</label>
        <select
          id="course"
          {...register('course')}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition bg-white"
        >
          {COURSE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {errors.course && <p className="text-error text-sm mt-1">{errors.course.message}</p>}
      </div>

      {isContact && (
        <div>
          <label className="block text-sm font-medium text-navy mb-1" htmlFor="bestTimeToCall">Best Time to Call</label>
          <select
            id="bestTimeToCall"
            {...register('bestTimeToCall')}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition bg-white"
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 7 PM)</option>
          </select>
          {errors.bestTimeToCall && <p className="text-error text-sm mt-1">{errors.bestTimeToCall.message}</p>}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-navy mb-1" htmlFor="message">Any Questions? (Optional)</label>
        <textarea
          id="message"
          rows={3}
          {...register('message')}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition resize-none"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-orange text-white rounded-lg py-3.5 font-semibold hover:bg-brand-orange-dark transition disabled:opacity-70 flex justify-center items-center"
      >
        {isSubmitting ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          'Send Enquiry →'
        )}
      </button>
      <p className="text-sm text-gray-mid text-center mt-3">
        We'll call you back within 24 hours 📞
      </p>
    </form>
  );
};

export default InquiryForm;
