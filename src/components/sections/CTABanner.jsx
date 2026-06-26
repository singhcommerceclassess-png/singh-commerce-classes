import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = ({ heading, subtext, primaryCTA, secondaryCTA, primaryLink = '/contact', secondaryLink = 'tel:+918800727377' }) => {
  return (
    <div className="bg-navy py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-bold mb-4">
            {heading}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            {subtext}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <Link
            to={primaryLink}
            className="bg-brand-orange text-white rounded-lg px-8 py-3.5 font-semibold text-center hover:bg-brand-orange-dark transition"
          >
            {primaryCTA}
          </Link>
          <a
            href={secondaryLink}
            className="border-2 border-white text-white rounded-lg px-8 py-3.5 font-semibold text-center hover:bg-white hover:text-navy transition"
          >
            {secondaryCTA}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
