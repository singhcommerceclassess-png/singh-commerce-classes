import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rawReviews from '../../data/reviews.json';

/* ── helpers ────────────────────────────────────────────────────── */

/** Returns only reviews with actual written text */
function filterReviews(reviews) {
  return reviews.filter(
    (r) => r.text && typeof r.text === 'string' && r.text.trim().length > 0
  );
}

/** Sort by review text length, longest first */
function sortByLength(reviews) {
  return [...reviews].sort((a, b) => b.text.length - a.text.length);
}

/** Generate initials avatar colour deterministically from a name */
function avatarColor(name = '') {
  const palette = [
    '#E8621A', '#1A56DB', '#059669', '#F59E0B',
    '#0B2545', '#7C3AED', '#DB2777', '#0891B2',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
}

function initials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

/* ── sub-components ─────────────────────────────────────────────── */

const StarRating = ({ count = 5 }) => (
  <div className="flex items-center gap-0.5 text-yellow-400" aria-label={`${count} stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review, index }) => {
  const color = avatarColor(review.name);
  const initl = initials(review.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
    >
      <StarRating count={review.stars} />

      {/* Review text — Google quote marks */}
      <p className="text-charcoal leading-relaxed flex-1 text-sm sm:text-base">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        {/* Initials avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 select-none"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          {initl}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-navy text-sm truncate">{review.name}</p>
          <p className="text-xs text-gray-mid flex items-center gap-1">
            <svg className="w-3 h-3 text-[#4285F4] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Review
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* ── main component ─────────────────────────────────────────────── */

const REVIEWS_PER_PAGE = 6;

export default function ReviewsCarousel() {
  // Process reviews once: filter → sort by length descending
  const [allReviews] = useState(() => sortByLength(filterReviews(rawReviews)));
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const totalPages = Math.ceil(allReviews.length / REVIEWS_PER_PAGE);

  const currentReviews = allReviews.slice(
    page * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  );

  const goTo = useCallback(
    (nextPage) => {
      setDirection(nextPage > page ? 1 : -1);
      setPage(nextPage);
      // Scroll so the section heading is visible on mobile
      document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [page]
  );

  const prev = () => page > 0 && goTo(page - 1);
  const next = () => page < totalPages - 1 && goTo(page + 1);

  // keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  if (allReviews.length === 0) return null;

  return (
    <div id="reviews-section">
      {/* Review grid with animated page transitions */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={{
              enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {currentReviews.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {totalPages > 1 && (
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Dot indicators */}
          <div className="flex items-center gap-2 order-2 sm:order-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === page
                    ? 'w-6 h-2.5 bg-brand-orange'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {/* Page info */}
            <span className="text-sm text-gray-mid font-medium">
              Page {page + 1} of {totalPages}
            </span>

            <button
              onClick={prev}
              disabled={page === 0}
              id="reviews-prev-btn"
              aria-label="Previous reviews"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border-2 transition-all duration-200 ${
                page === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
                  : 'border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white cursor-pointer'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <button
              onClick={next}
              disabled={page === totalPages - 1}
              id="reviews-next-btn"
              aria-label="Next reviews"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border-2 transition-all duration-200 ${
                page === totalPages - 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
                  : 'border-brand-orange text-white bg-brand-orange hover:bg-brand-orange-dark cursor-pointer'
              }`}
            >
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Total review count badge */}
      <p className="mt-5 text-center text-xs text-gray-400 font-medium">
        Showing {Math.min((page + 1) * REVIEWS_PER_PAGE, allReviews.length)} of{' '}
        {allReviews.length} verified Google Reviews
      </p>
    </div>
  );
}
