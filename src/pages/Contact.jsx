import React from 'react';
import { Helmet } from 'react-helmet-async';
import InquiryForm from '../components/sections/InquiryForm';
import { SITE_INFO } from '../data/mockData';

const Contact = () => {
  return (
    <main className="bg-bg-primary min-h-screen pb-24">
      <Helmet>
        <title>Contact Us | Singh Commerce Classes — Visit Us in Bhajanpura, Delhi</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We're here to answer your questions about admissions, courses, and more.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Blocks */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col gap-8 h-full">
            <h2 className="font-playfair text-3xl font-bold text-navy mb-2">Contact Information</h2>
            <p className="text-gray-500 mb-4">Feel free to reach out to us during our working hours.</p>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-bg-section-alt text-brand-orange rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                📍
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Visit Us</h4>
                <p className="text-charcoal leading-relaxed max-w-xs">{SITE_INFO.address}</p>
                <p className="text-sm text-gray-500 mt-2 mb-3">Nearest Metro: Bhajanpura (Pink Line)</p>
                <a href={SITE_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="text-brand-orange font-bold text-sm hover:underline flex items-center gap-1">
                  Get Directions <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-bg-section-alt text-brand-orange rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                📞
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Call Us</h4>
                <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-brand-orange font-bold text-lg hover:underline block mb-1">
                  {SITE_INFO.phone}
                </a>
                <p className="text-sm text-gray-500">Available Mon-Sat, 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-green-50 text-whatsapp rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                💬
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">WhatsApp Us</h4>
                <a href={SITE_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-whatsapp text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-green-600 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.14.561 4.234 1.626 6.082L.21 23.79l5.805-1.522a11.96 11.96 0 006.016 1.616h.005c6.645 0 12.031-5.384 12.031-12.032C24.067 5.385 18.681 0 12.031 0zm0 21.872h-.004a9.922 9.922 0 01-5.056-1.378l-.362-.215-3.76.985.998-3.666-.236-.375a9.92 9.92 0 01-1.517-5.35c0-5.485 4.463-9.948 9.95-9.948 5.486 0 9.949 4.463 9.949 9.948 0 5.485-4.463 9.95-9.949 9.95z"/></svg>
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 h-full">
            <h2 className="font-playfair text-2xl font-bold text-navy mb-6">Send an Enquiry</h2>
            <InquiryForm variant="contact" />
          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white p-2 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <iframe 
            src="https://maps.google.com/maps?q=Singh%20Commerce%20Classes,%20Bhajanpura,%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '1.5rem' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </section>

    </main>
  );
};

export default Contact;
