import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cabecalho } from './components/layout/Cabecalho';
import { Dashboard } from './pages/Dashboard';
import { ListaPacientes } from './pages/ListaPacientes';
import { DetalhesPaciente } from './pages/DetalhesPaciente';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Cabecalho />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pacientes" element={<ListaPacientes />} />
            <Route path="/pacientes/:id" element={<DetalhesPaciente />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;