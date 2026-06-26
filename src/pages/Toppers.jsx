import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import { TOPPERS, SUCCESS_STORIES } from '../data/mockData';

const TABS = ['Class XII', 'Class XI', 'B.Com'];

const Toppers = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const initialTab = TABS.includes(tabParam) ? tabParam : 'Class XII';

  const [activeTab, setActiveTab] = useState(initialTab);

  const filteredToppers = TOPPERS.filter(t => t.category === activeTab);

  return (
    <main className="bg-bg-primary min-h-screen">
      <Helmet>
        <title>Our Toppers | Singh Commerce Classes — Student Achievements &amp; Results</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Our Hall of Fame
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Celebrating the students who made us proud through hard work and dedication.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white border-b border-gray-100 shadow-sm py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {[
            { value: '95%+', label: 'Board students score >80%' },
            { value: '50+', label: 'Board Toppers in 5 years' },
            { value: '200+', label: 'Graduates placed successfully' },
            { value: '10/10', label: 'Student satisfaction rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="font-playfair text-3xl md:text-4xl font-bold text-brand-orange mb-2">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-navy">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Toppers Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-16 overflow-x-auto py-2 hide-scrollbar">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-sm whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-navy text-white scale-105'
                    : 'bg-white text-navy hover:bg-brand-orange-light hover:text-brand-orange'
                }`}
              >
                {tab} Achievers
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredToppers.map(topper => (
              <div key={topper.id} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl shadow-lg border-4 border-white z-10 rotate-12 group-hover:rotate-0 transition-transform">
                  ⭐
                </div>
                
                <img 
                  src={topper.avatar} 
                  alt={topper.name} 
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-5 border-4 border-bg-section-alt shadow-inner" 
                />
                
                <h3 className="font-bold text-navy text-lg mb-1">{topper.name}</h3>

                {/* Roll number — only for Class XII real students */}
                {topper.rollNo && (
                  <p className="text-xs text-gray-400 font-medium mb-2">
                    Roll No: {topper.rollNo}
                  </p>
                )}

                <div className="font-playfair text-3xl font-black text-brand-orange tracking-tight mb-2">
                  {topper.score}
                </div>
                
                <div className="bg-gray-50 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Batch of {topper.batch}
                </div>
                
                <div className="bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-2 rounded-lg w-full">
                  {topper.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-bg-section-alt py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Success Stories" title="Words from our Achievers" />
          
          <div className="flex overflow-x-auto gap-8 pb-8 mt-16 hide-scrollbar snap-x">
            {SUCCESS_STORIES.map(story => (
              <div key={story.id} className="snap-center min-w-[320px] md:min-w-[400px] w-full max-w-md bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img src={story.avatar} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-orange-light p-1" />
                  <div>
                    <h4 className="font-bold text-navy text-lg">{story.name}</h4>
                    <p className="text-xs font-medium text-gray-500">{story.batch}</p>
                  </div>
                </div>
                <div className="text-brand-orange mb-4 text-2xl">"</div>
                <p className="text-charcoal leading-relaxed text-sm flex-grow italic mb-6">
                  {story.text}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button className="text-brand-orange font-bold text-sm hover:underline flex items-center gap-1">
                    Read Full Story 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Toppers;
