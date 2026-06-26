import React, { useState, useEffect, useCallback, useRef } from 'react';
import carousel1  from '../../assets/images/carousel/carousel 1.jpeg';
import carousel2  from '../../assets/images/carousel/carousel 2.jpeg';
import carousel3  from '../../assets/images/carousel/carousel 3.jpeg';
import carousel4  from '../../assets/images/carousel/carousel 4.jpeg';
import carousel5  from '../../assets/images/carousel/carousel 5.jpeg';
import carousel6  from '../../assets/images/carousel/carousel 6.jpeg';
import carousel7  from '../../assets/images/carousel/carousel 7.jpeg';
import carousel8  from '../../assets/images/carousel/carousel 8.jpeg';
import carousel9  from '../../assets/images/carousel/carousel 9.jpeg';
import carousel10 from '../../assets/images/carousel/carousel 10.jpeg';
import carousel11 from '../../assets/images/carousel/carousel 11.jpeg';

const SLIDES = [
  { src: carousel1,  alt: 'Singh Commerce Classes — Live classroom session 1' },
  { src: carousel2,  alt: 'Singh Commerce Classes — Live classroom session 2' },
  { src: carousel3,  alt: 'Singh Commerce Classes — Live classroom session 3' },
  { src: carousel4,  alt: 'Singh Commerce Classes — Live classroom session 4' },
  { src: carousel5,  alt: 'Singh Commerce Classes — Live classroom session 5' },
  { src: carousel6,  alt: 'Singh Commerce Classes — Live classroom session 6' },
  { src: carousel7,  alt: 'Singh Commerce Classes — Live classroom session 7' },
  { src: carousel8,  alt: 'Singh Commerce Classes — Live classroom session 8' },
  { src: carousel9,  alt: 'Singh Commerce Classes — Live classroom session 9' },
  { src: carousel10, alt: 'Singh Commerce Classes — Live classroom session 10' },
  { src: carousel11, alt: 'Singh Commerce Classes — Live classroom session 11' },
];

const AUTOPLAY_INTERVAL = 5000; // ms between slides

/**
 * HeroCarousel
 * Renders as a full-bleed, absolutely-positioned background behind the hero section.
 * Parent must have  position: relative  and  overflow: hidden.
 */
const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const total = SLIDES.length;

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(((index % total) + total) % total);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning, total]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Touch Handlers for Swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) goNext();
    if (isRightSwipe) goPrev();
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = setTimeout(goNext, AUTOPLAY_INTERVAL);
    return () => clearTimeout(id);
  }, [current, isPaused, goNext]);

  return (
    <>
      {/* ══ LAYER 1: Image track + overlays — z-0, overflow-hidden clips slides ══ */}
      <div className="absolute inset-x-0 top-0 h-[650px] sm:h-[700px] lg:h-full lg:inset-0 z-0 overflow-hidden">
        {/* ── Full-bleed slide track ── */}
        <div
          className="absolute inset-0 z-0 flex transition-transform duration-[900ms] ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {SLIDES.map((slide, i) => (
            <div key={i} className="flex-shrink-0 w-full h-full" aria-hidden={i !== current}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-[75%_20%] lg:object-center"
                draggable={false}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* ── Overlay — left-weighted so text stays readable ── */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to right, rgba(245,230,211,0.42) 0%, rgba(245,230,211,0.20) 45%, rgba(245,230,211,0.08) 100%)',
          }}
        />

        {/* ── Mobile bottom fade — blends image into section bg ── */}
        <div className="absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-t from-bg-primary to-transparent lg:hidden" />

        {/* ── Autoplay progress bar ── */}
        {!isPaused && (
          <div
            key={`bar-${current}`}
            className="absolute bottom-0 left-0 h-[3px] bg-brand-orange z-[2] pointer-events-none"
            style={{ animation: `hero-carousel-progress ${AUTOPLAY_INTERVAL}ms linear forwards` }}
          />
        )}
      </div>

      {/* ══ LAYER 2: Controls — z-[30], sits above ALL content layers ══
           pointer-events-none on the wrapper so the transparent area doesn't
           block scroll/tap on the hero text; pointer-events-auto on each control. */}
      <div className="absolute inset-x-0 top-0 h-[650px] sm:h-[700px] lg:h-full lg:inset-0 z-[30] pointer-events-none">

        {/* ── Left arrow ── */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="pointer-events-auto absolute left-2 sm:left-3 bottom-[13px] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2
                     w-7 h-7 lg:w-11 lg:h-11 rounded-full
                     bg-white/60 backdrop-blur-sm border border-white/80
                     text-navy flex items-center justify-center
                     hover:bg-white/90 hover:scale-110 active:scale-95
                     transition-all duration-200 shadow-md
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          id="carousel-prev-btn"
        >
          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* ── Right arrow ── */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="pointer-events-auto absolute right-2 sm:right-3 bottom-[13px] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2
                     w-7 h-7 lg:w-11 lg:h-11 rounded-full
                     bg-white/60 backdrop-blur-sm border border-white/80
                     text-navy flex items-center justify-center
                     hover:bg-white/90 hover:scale-110 active:scale-95
                     transition-all duration-200 shadow-md
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          id="carousel-next-btn"
        >
          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ── Dot indicators ── */}
        <div
          className="pointer-events-auto absolute bottom-[19px] lg:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 lg:gap-2.5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              id={`carousel-dot-${i}`}
              className={`rounded-full transition-all duration-300
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange
                          ${i === current
                            ? 'w-7 h-2.5 bg-brand-orange shadow-sm'
                            : 'w-2.5 h-2.5 bg-navy/40 hover:bg-navy/70'
                          }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hero-carousel-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </>
  );
};

export default HeroCarousel;

