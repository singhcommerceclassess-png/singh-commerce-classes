import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import InquiryForm from '../components/sections/InquiryForm';
import CTABanner from '../components/sections/CTABanner';
import HeroCarousel from '../components/sections/HeroCarousel';
import { SITE_INFO, COURSES, STATS, FEATURES, TOPPERS } from '../data/mockData';
import ReviewsCarousel from '../components/sections/ReviewsCarousel';
import founderPhoto from '../assets/images/faculty/ashutosh-singh.jpeg';

const StatCounter = ({ end, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center p-4 sm:p-6">
      <div className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-brand-orange mb-1 sm:mb-2">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {end}
          </motion.span>
        ) : "0"}
        {suffix}
      </div>
      <p className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide">{label}</p>
    </div>
  );
};



const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Singh Commerce Classes | Best Commerce Coaching in Bhajanpura, Delhi</title>
      </Helmet>

      {/* Hero Section — carousel acts as full-bleed background */}
      <section className="relative overflow-hidden bg-bg-primary lg:bg-transparent pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background carousel */}
        <HeroCarousel />
        {/* Hero content — sits above carousel (z-[2]) */}
        <div className="relative z-[2] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-yellow-100 text-yellow-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-5 sm:mb-6">
              🎓 Admissions Open — New Batch Starting Soon
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[56px] font-bold text-navy leading-[1.15] mb-5 sm:mb-6">
              Delhi's Most Trusted <br className="hidden sm:block" /> Commerce Coaching
            </h1>
            <p 
              className="text-white font-medium text-base sm:text-lg leading-relaxed mb-7 sm:mb-8 max-w-xl"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.35)' }}
            >
              Expert coaching for Class XI, XII, B.Com & B.B.A. students by Ashutosh Singh — with 10+ years of teaching experience.
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
              {['🏆 500+ Students Guided', '✅ 10+ Years Experience', '📍 Bhajanpura, Delhi'].map(badge => (
                <span key={badge} className="bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-navy shadow-sm">
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact" className="bg-brand-orange text-white text-center rounded-lg px-8 py-3.5 font-semibold hover:bg-brand-orange-dark transition shadow-sm">
                Book Free Demo Class
              </Link>
              <a href={`tel:${SITE_INFO.phoneRaw}`} className="bg-brand-orange text-white text-center rounded-lg px-8 py-3.5 font-semibold hover:bg-brand-orange-dark transition shadow-sm">
                Call: {SITE_INFO.phone}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 relative">
              <div className="absolute -top-4 -right-4 bg-yellow-400 w-24 h-24 rounded-full opacity-20 blur-2xl"></div>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-2">Get Free Counseling</h3>
              <p className="text-sm text-gray-mid mb-5 sm:mb-6">Fill the form — we'll call you back today!</p>
              <InquiryForm variant="hero" />
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-100 text-center">
                <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-sm font-medium text-navy hover:text-brand-orange transition flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Or call us directly: {SITE_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Stats Bar */}
      <section className="bg-navy border-y-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map((stat, i) => (
              <StatCounter key={i} end={stat.number} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="bg-bg-section-alt py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-2 relative max-w-sm mx-auto lg:mx-0 w-full">
            <img
              src={founderPhoto}
              alt="Ashutosh Singh — Founder, Singh Commerce Classes"
              className="relative z-10 w-full h-[360px] sm:h-[480px] object-cover object-top rounded-2xl shadow-md"
            />
          </div>
          <div className="lg:col-span-3">
            <SectionHeader badge="Meet Our Founder" title={SITE_INFO.founder} subtitle="A decade of transforming commerce students" align="left" />
            <div className="space-y-5 text-charcoal leading-relaxed text-base sm:text-lg mb-8">
              <p>
                Ashutosh Singh founded Singh Commerce Classes with one mission — making quality commerce education accessible to every student in Delhi. With over 10 years of hands-on teaching experience, his methodology focuses on deep conceptual clarity rather than rote memorization.
              </p>
              <p>
                He has mentored hundreds of students who have gone on to crack CA Foundation, score 90%+ in Boards, and secure seats in top Delhi University colleges. Every student receives personal attention to ensure their academic growth.
              </p>
            </div>
            <div className="border-l-4 border-brand-orange pl-6 py-2 mb-8 sm:mb-10">
              <p className="font-playfair italic text-xl sm:text-2xl text-navy mb-2">{SITE_INFO.motto}</p>
              <p className="text-gray-mid text-sm font-medium uppercase tracking-wider">{SITE_INFO.mottoMeaning}</p>
            </div>
            <Link to="/contact" className="inline-block bg-navy text-white rounded-lg px-8 py-4 font-semibold hover:bg-navy-light transition shadow-sm">
              Book a Session with Ashutosh →
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Faculty */}
      {(() => {
        const faculty = [
          {
            name: 'Ashutosh Singh',
            tagline: 'Eco Accounts Guru',
            image: '/images/faculty/faculty-ashutosh.jpeg',
            // Landscape close-up — already well-framed, just position eyes at ~30% from top
            imgStyle: { aspectRatio: '4 / 5', objectPosition: 'center 15%' },
            wrapperStyle: {},
          },
          {
            name: 'Sanjay Sir',
            tagline: 'Mathematics Wizard',
            image: '/images/faculty/faculty-sanjay.png',
            // Full-body portrait — zoom anchored on face so head & shoulders match others
            imgStyle: { aspectRatio: '4 / 5', objectPosition: 'center top' },
            wrapperStyle: { transform: 'scale(1.55)', transformOrigin: 'center 40%' },
          },
          {
            name: "Vandana Ma'am",
            tagline: 'Fun Math, Smart Science',
            image: '/images/faculty/faculty-vandana.png',
            // Head-to-chest portrait — gentle zoom anchored on face for consistent framing
            imgStyle: { aspectRatio: '4 / 5', objectPosition: 'center 10%' },
            wrapperStyle: { transform: 'scale(1.08)', transformOrigin: 'center 20%' },
          },
        ];
        return (
          <section className="bg-bg-section-alt py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                badge="Our Faculty"
                title="Learn from Expert Educators"
                subtitle="Meet the experienced mentors guiding students toward academic excellence and career success."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-16">
                {faculty.map((member, idx) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                  >
                    {/* Photo */}
                    <div className="w-full overflow-hidden">
                      <div style={member.wrapperStyle} className="w-full h-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={member.imgStyle}
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 sm:p-7 flex flex-col items-center text-center">
                      <div className="w-10 h-1 bg-brand-orange rounded-full mb-4" />
                      <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-1 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-brand-orange italic">
                        {member.tagline}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Courses Overview */}
      <section className="bg-bg-primary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Programs" title="Courses We Offer" subtitle="Comprehensive commerce education from Class XI to graduation with focus on board exams and competitive preparation." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8">
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl ${course.badgeClass}`}>
                    {course.icon}
                  </div>
                  <span className="bg-green-50 text-green-700 text-xs font-bold rounded-full px-3 py-1 flex items-center gap-1.5 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Batch Open
                  </span>
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-2">{course.name}</h3>
                <p className="text-sm font-medium text-gray-500 mb-5 sm:mb-6">{course.duration}</p>
                
                <div className="mb-6 sm:mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Subjects Included</p>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map(sub => (
                      <span key={sub} className="bg-gray-50 border border-gray-200 text-charcoal text-sm px-3 py-1.5 rounded-md font-medium">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link to={`/courses#${course.id}`} className="text-brand-orange font-semibold hover:underline text-sm sm:text-base">
                    View Details →
                  </Link>
                  <Link to="/contact" className="bg-navy text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-navy-light transition text-sm">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <p className="text-base sm:text-lg font-medium text-navy">Not sure which course is right for you?</p>
            <a href={SITE_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2 whitespace-nowrap">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.14.561 4.234 1.626 6.082L.21 23.79l5.805-1.522a11.96 11.96 0 006.016 1.616h.005c6.645 0 12.031-5.384 12.031-12.032C24.067 5.385 18.681 0 12.031 0zm0 21.872h-.004a9.922 9.922 0 01-5.056-1.378l-.362-.215-3.76.985.998-3.666-.236-.375a9.92 9.92 0 01-1.517-5.35c0-5.485 4.463-9.948 9.95-9.948 5.486 0 9.949 4.463 9.949 9.948 0 5.485-4.463 9.95-9.949 9.95z"/></svg>
              Talk to Our Counselor
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-bg-section-alt py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Why Students Choose Us" title="The Singh Commerce Advantage" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {FEATURES.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange/30 transition-colors">
                <div className="bg-brand-orange-light w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-5 sm:mb-6">
                  {feat.icon}
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-navy mb-3">{feat.title}</h3>
                <p className="text-charcoal leading-relaxed text-sm sm:text-base">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Batch CTA */}
      <section className="bg-navy py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-2xl mx-auto bg-white rounded-[32px] p-8 sm:p-10 md:p-14 text-center border-t-[6px] border-brand-orange shadow-2xl relative z-10">
          <span className="inline-block bg-brand-orange-light text-brand-orange rounded-full px-5 py-1.5 text-sm font-bold tracking-wide uppercase mb-5 sm:mb-6">
            ⭐ Most Popular
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-5 sm:mb-6">
            Commerce Premium Batch
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
            <span className="text-gray-400 line-through text-xl sm:text-2xl font-medium">₹2,999</span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-orange font-playfair">₹999</span>
          </div>
          
          <div className="bg-bg-section-alt rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 max-w-sm mx-auto text-left">
            <ul className="space-y-3 sm:space-y-4">
              {[
                '3 Core Subjects Included',
                'Recorded Video Lectures',
                'PDF Notes Access',
                'Practice Questions Bank',
                'Direct Doubt Support'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-navy text-sm sm:text-base">
                  <span className="text-success text-lg sm:text-xl flex-shrink-0">✅</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <Link to="/enroll" className="block w-full bg-brand-orange text-white text-lg sm:text-xl font-bold px-8 py-4 sm:py-5 rounded-xl hover:bg-brand-orange-dark transition shadow-md mb-4">
            Enroll Now →
          </Link>
          <p className="text-sm text-gray-500 font-medium">
            Limited seats per batch. Secure yours today.
          </p>
        </div>
      </section>

      {/* Testimonials — Real Student Reviews from Google */}
      <section className="bg-bg-primary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Student Stories" title="What Our Students Say" />
          <div className="mt-12 sm:mt-16">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      {/* Toppers Strip */}
      <section className="bg-bg-section-alt py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Hall of Fame" title="Our Star Performers" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-12 sm:mt-16 mb-10 sm:mb-12">
            {TOPPERS.filter(t => t.category === 'Class XII').slice(0, 5).map((topper) => (
              <div key={topper.id} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-sm border border-gray-100 relative group hover:border-brand-orange/30 transition-colors">
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm shadow-md z-10 group-hover:scale-110 transition-transform">
                  🏆
                </div>
                <img src={topper.avatar} alt={topper.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto object-cover mb-3 sm:mb-4 border-4 border-gray-50" />
                <h4 className="font-bold text-navy text-xs sm:text-sm mb-1">{topper.name}</h4>
                <p className="font-playfair text-xl sm:text-2xl font-bold text-brand-orange mb-1">{topper.score}</p>
                <p className="text-xs text-gray-mid font-medium">{topper.batch}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/toppers?tab=Class+XII" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-brand-orange-dark transition">
              View All Toppers
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner 
        heading="Admissions Are Now Open" 
        subtext="New batches starting this month. Limited seats available. Book a demo class today to experience the difference."
        primaryCTA="Book Your Free Demo Class"
        secondaryCTA={`Call: ${SITE_INFO.phone}`}
      />
    </main>
  );
};

export default Home;
