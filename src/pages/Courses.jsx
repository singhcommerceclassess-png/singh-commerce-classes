import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/sections/CTABanner';
import { COURSES, SITE_INFO } from '../data/mockData';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all' 
    ? COURSES 
    : COURSES.filter(c => {
        if (activeTab === 'school' && (c.id === 'class-xi' || c.id === 'class-xii')) return true;
        if (activeTab === 'bcom' && c.id === 'bcom') return true;
        if (activeTab === 'bba' && c.id === 'bba') return true;
        return false;
      });

  return (
    <main className="bg-bg-primary min-h-screen">
      <Helmet>
        <title>Our Courses | Singh Commerce Classes — Class XI, XII, B.Com & BBA Coaching</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Our Courses
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive commerce education from Class XI to Graduation
          </p>
        </div>
      </section>

      {/* Sticky Tabs */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 hide-scrollbar">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'school', label: 'Class XI & XII' },
              { id: 'bcom', label: 'B.Com' },
              { id: 'bba', label: 'B.B.A.' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-brand-orange text-white'
                    : 'text-charcoal bg-gray-50 hover:bg-brand-orange-light hover:text-brand-orange'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {filteredCourses.map(course => (
            <div key={course.id} id={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
              <div className={`h-2 w-full ${course.colorClass}`}></div>
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className={`${course.badgeClass} px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2`}>
                    <span className="text-xl">{course.icon}</span> {course.name.split(' ')[0]}
                  </span>
                  <span className="bg-gray-100 text-charcoal font-medium text-sm rounded-lg px-4 py-2">
                    ⏱ {course.duration}
                  </span>
                </div>
                
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-8">
                  {course.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Subjects Covered</p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map(sub => (
                        <span key={sub} className="bg-bg-primary border border-brand-orange-light text-navy font-semibold text-sm px-4 py-2 rounded-lg shadow-sm">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Course Highlights</p>
                    <ul className="space-y-3">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-charcoal text-sm">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-bg-section-alt rounded-xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4 border border-brand-orange-light">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <span className="text-xl">📅</span> Next Batch: {course.nextBatch}
                  </div>
                  <div className="flex items-center gap-2 text-error font-bold">
                    <span className="text-xl">👥</span> Only {course.seatsLeft} Seats Left
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <Link to="/contact" className="bg-brand-orange text-white text-center rounded-lg px-8 py-3.5 font-bold hover:bg-brand-orange-dark transition shadow-sm w-full sm:w-auto">
                    Enquire Now
                  </Link>
                  <a href={`tel:${SITE_INFO.phoneRaw}`} className="border-2 border-brand-orange text-brand-orange text-center rounded-lg px-8 py-3.5 font-bold hover:bg-brand-orange-light transition w-full sm:w-auto">
                    Call: {SITE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Callout */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-navy rounded-3xl p-10 md:p-14 text-center border-b-8 border-brand-orange shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light to-navy opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Looking for Online Coaching?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Get access to recorded lectures, PDF notes, and weekly doubt sessions from anywhere with our Premium Digital Batch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/enroll" className="bg-brand-orange text-white text-lg font-bold px-10 py-4 rounded-xl hover:bg-brand-orange-dark transition shadow-md w-full sm:w-auto">
                Explore Premium Batch →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Courses;
