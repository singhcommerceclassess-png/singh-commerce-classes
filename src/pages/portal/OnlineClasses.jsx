import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import { LoginPromptWall } from '../../router/ProtectedRoute';
import { LECTURES } from '../../data/mockData';

const OnlineClasses = () => {
  const { user } = useAuth();
  const [openModule, setOpenModule] = useState(LECTURES[0].moduleId);
  const [activeLecture, setActiveLecture] = useState(LECTURES[0].items[0]);

  if (!user) {
    return <LoginPromptWall />;
  }

  return (
    <main className="bg-bg-primary min-h-screen pt-20">
      <Helmet>
        <title>Online Classes | Singh Commerce Classes Student Portal</title>
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-playfair text-3xl font-bold text-navy mb-6">Video Lectures</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Video Player Area */}
          <div className="lg:col-span-2">
            <div className="bg-navy rounded-2xl aspect-video w-full flex flex-col items-center justify-center shadow-lg mb-6 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
              <div className="w-20 h-20 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-xl z-20 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              </div>
              <p className="text-white font-medium mt-4 z-20">Click to start watching</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-navy mb-1">{activeLecture.title}</h2>
                  <p className="text-sm text-gray-500 font-medium">By Ashutosh Singh</p>
                </div>
                <span className="bg-gray-100 text-charcoal text-xs font-bold px-3 py-1.5 rounded-lg">
                  ⏱ {activeLecture.duration}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 mb-2 font-medium">
                  <span>Your Progress</span>
                  <span>16:12 / {activeLecture.duration}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-brand-orange h-2.5 rounded-full w-[35%]"></div>
                </div>
              </div>

              <p className="text-charcoal text-sm leading-relaxed mb-6">
                In this lecture, we cover the fundamental concepts of {activeLecture.title.split(' - ')[0]}. Make sure to have your notebook ready and complete the practice assignment attached below after watching.
              </p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <button className="flex-1 border border-gray-200 text-charcoal font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition text-sm">
                  ← Previous
                </button>
                <button className="flex-1 bg-brand-orange text-white font-semibold py-2.5 rounded-lg hover:bg-brand-orange-dark transition text-sm shadow-sm">
                  Next Lecture →
                </button>
              </div>
            </div>
          </div>

          {/* Right: Curriculum Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[calc(100vh-160px)] flex flex-col sticky top-28">
              <div className="p-5 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-navy text-lg">Course Curriculum</h3>
                <span className="text-xs text-gray-500 font-medium">12/45 Completed</span>
              </div>
              
              <div className="flex-1 overflow-y-auto hide-scrollbar">
                {LECTURES.map((module) => (
                  <div key={module.moduleId} className="border-b border-gray-100 last:border-b-0">
                    <button 
                      onClick={() => setOpenModule(openModule === module.moduleId ? null : module.moduleId)}
                      className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition text-left"
                    >
                      <div>
                        <h4 className="font-bold text-navy text-sm mb-1">{module.title}</h4>
                        <p className="text-xs text-gray-500">{module.items.length} Lectures</p>
                      </div>
                      <svg className={`w-5 h-5 text-gray-400 transition-transform ${openModule === module.moduleId ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {openModule === module.moduleId && (
                      <div className="bg-bg-primary/50 border-t border-gray-50 divide-y divide-gray-50">
                        {module.items.map(lecture => {
                          const isActive = activeLecture.id === lecture.id;
                          return (
                            <button
                              key={lecture.id}
                              onClick={() => {
                                if (lecture.status !== 'locked') setActiveLecture(lecture);
                              }}
                              className={`w-full px-5 py-3.5 flex items-start gap-3 text-left transition ${
                                isActive 
                                  ? 'bg-brand-orange-light/30 border-l-4 border-brand-orange' 
                                  : 'border-l-4 border-transparent hover:bg-gray-50'
                              } ${lecture.status === 'locked' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              <div className="mt-0.5">
                                {lecture.status === 'watched' ? (
                                  <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                ) : lecture.status === 'locked' ? (
                                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                ) : (
                                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className={`text-sm font-medium ${isActive ? 'text-brand-orange' : 'text-navy'}`}>{lecture.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{lecture.duration}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default OnlineClasses;
