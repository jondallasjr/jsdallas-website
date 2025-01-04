import React from 'react';
import Navigation from './Navigation';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif text-gray-900 tracking-tight">
              J.S. Dallas, Inc.
            </h1>
          </div>
          <div className="hidden md:flex items-center">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;