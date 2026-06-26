import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/sections/CTABanner';
import { SITE_INFO } from '../data/mockData';
import classroomImage from '../assets/images/our-classroom.jpeg';

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About Us | Singh Commerce Classes — 10+ Years of Commerce Coaching in Delhi</title>
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-navy pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm font-medium text-gray-400 mb-6 flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-brand-orange transition">Home</Link> 
            <span>/</span> 
            <span className="text-gray-200">About Us</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            About Singh Commerce Classes
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A decade of shaping commerce careers in Delhi
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-bg-primary py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={classroomImage} 
              alt="Classroom" 
              className="w-full rounded-2xl shadow-lg object-cover aspect-[5/4]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader badge="Our Story" title="How It All Began" align="left" />
            <div className="space-y-6 text-charcoal text-lg leading-relaxed">
              <p>
                Singh Commerce Classes was founded in 2014 with a vision to bridge the gap between mediocre coaching and genuine academic mentorship. Ashutosh Singh realized that commerce students were often forced to rely on rote learning rather than truly understanding business and financial concepts.
              </p>
              <p>
                Starting with just 15 students in a small room in Bhajanpura, we have grown into a recognized name in Delhi's commerce education ecosystem. Over the past decade, we have helped hundreds of students not just pass their board exams, but achieve distinctions and secure admissions in top-tier colleges.
              </p>
              <p className="font-medium text-navy border-l-4 border-brand-orange pl-4 py-1">
                Every student who walks through our doors is treated not as a number, but as an individual with unique potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-bg-section-alt py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center text-3xl mb-8 shadow-sm">
              🎯
            </div>
            <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Our Mission</h2>
            <p className="text-charcoal text-lg leading-relaxed">
              To provide structured, affordable, and result-oriented commerce coaching that empowers every student to achieve their academic best. We aim to build a strong conceptual foundation that helps students beyond their school exams.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center text-3xl mb-8 shadow-sm">
              🔭
            </div>
            <h2 className="font-playfair text-3xl font-bold text-navy mb-4">Our Vision</h2>
            <p className="text-charcoal text-lg leading-relaxed">
              To become Delhi's leading commerce coaching institute, recognized for academic excellence, exceptional student care, and transformative educational outcomes that shape the future business leaders of India.
            </p>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="bg-navy py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-navy to-navy"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-playfair text-5xl md:text-6xl italic text-brand-orange mb-4">
            {SITE_INFO.motto}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide mb-2 uppercase">
            {SITE_INFO.mottoTransliteration}
          </p>
          <p className="text-lg text-white font-playfair italic mb-8">
            "{SITE_INFO.mottoMeaning}"
          </p>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            This ancient principle is at the heart of everything we do at Singh Commerce Classes. We believe that a student's mindset, guided correctly, can achieve extraordinary results.
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="bg-bg-primary py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Approach" title="The Way We Teach" subtitle="We don't just teach the syllabus, we teach how to think." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '🧠', title: 'Concept First', desc: 'We never rush to solve problems before building a strong conceptual foundation. Understanding the "why" is more important than memorizing the "how".' },
              { icon: '📝', title: 'Practice-Led Learning', desc: 'Every concept is followed by curated practice sets from CBSE, DU, and past exams to ensure complete exam readiness.' },
              { icon: '🤝', title: 'Personal Attention', desc: 'Small batches ensure every student is seen, heard, and supported throughout the year. No one gets left behind.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-brand-orange-light rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-charcoal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner 
        heading="Ready to Start Your Commerce Journey?" 
        subtext="Come visit us at Bhajanpura or schedule a free call with Ashutosh sir."
        primaryCTA="Book a Free Counseling Session"
        secondaryCTA="Get Directions"
        secondaryLink={SITE_INFO.mapLink}
      />
    </main>
  );
};

export default About;
