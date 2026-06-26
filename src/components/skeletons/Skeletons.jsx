import React from 'react';

export const SkeletonBase = ({ className = '' }) => (
  <div className={`skeleton-shimmer rounded ${className}`} aria-hidden="true" />
);

export const CardSkeleton = () => (
  <div className="bg-white rounded-xl p-6 border border-gray-100 h-full flex flex-col gap-4">
    <SkeletonBase className="h-4 w-3/4" />
    <SkeletonBase className="h-3 w-full" />
    <SkeletonBase className="h-3 w-5/6" />
    <SkeletonBase className="h-3 w-4/6" />
    <div className="mt-auto pt-4">
      <SkeletonBase className="h-10 w-32 rounded-lg" />
    </div>
  </div>
);

export const TopperSkeleton = () => (
  <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 flex flex-col items-center gap-4">
    <SkeletonBase className="w-20 h-20 rounded-full" />
    <SkeletonBase className="h-4 w-24" />
    <SkeletonBase className="h-6 w-16" />
    <SkeletonBase className="h-3 w-32" />
  </div>
);

export const DashboardSkeleton = () => (
  <div className="space-y-8 animate-pulse w-full">
    {/* Stats Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SkeletonBase className="h-28 rounded-xl" />
      <SkeletonBase className="h-28 rounded-xl" />
      <SkeletonBase className="h-28 rounded-xl" />
    </div>
    
    {/* Table Area */}
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100"><SkeletonBase className="h-6 w-48" /></div>
      <div className="p-4 space-y-4">
        {[1, 2, 3, 4, 5].map(i => (
          <SkeletonBase key={i} className="h-12 w-full rounded-lg" />
        ))}
      </div>
    </div>
  </div>
);

export const NotesSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <SkeletonBase key={i} className="h-48 rounded-xl" />
    ))}
  </div>
);

export const VideoSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
    <div className="lg:col-span-3 space-y-4">
      <SkeletonBase className="w-full aspect-video rounded-2xl" />
      <SkeletonBase className="h-8 w-3/4" />
      <SkeletonBase className="h-4 w-1/4" />
      <SkeletonBase className="h-16 w-full" />
    </div>
    <div className="lg:col-span-2 space-y-4">
      <SkeletonBase className="h-14 w-full rounded-xl" />
      <SkeletonBase className="h-14 w-full rounded-xl" />
      <SkeletonBase className="h-14 w-full rounded-xl" />
      <SkeletonBase className="h-14 w-full rounded-xl" />
    </div>
  </div>
);
