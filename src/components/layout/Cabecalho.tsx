import React from 'react';
import { Building2, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cabecalho: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Building2 className="w-8 h-8 text-blue-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-800">
              Sistema de Gestão Hospitalar
            </h1>
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <User className="w-6 h-6" />
              <span className="hidden md:inline">Minha Conta</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};