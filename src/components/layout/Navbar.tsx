import React from 'react';
import { Building2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Building2 className="w-8 h-8 text-blue-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-800">
              Hospital Management System
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};