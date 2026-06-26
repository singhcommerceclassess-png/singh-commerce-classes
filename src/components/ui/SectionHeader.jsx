import React from 'react';

const SectionHeader = ({ badge, title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <span className="inline-block bg-brand-orange-light text-brand-orange text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-charcoal leading-relaxed ${align === 'center' ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-1 bg-brand-orange rounded-full mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
