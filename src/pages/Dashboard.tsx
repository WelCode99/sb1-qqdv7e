import React from 'react';
import { useStore } from '../store/useStore';
import { WardSection } from '../components/WardSection';

export const Dashboard: React.FC = () => {
  const { patients } = useStore();

  const wardPatients = {
    'UTI': patients.filter(p => p.ward === 'UTI'),
    'Clínica Médica': patients.filter(p => p.ward === 'Clínica Médica'),
    'Cirurgia': patients.filter(p => p.ward === 'Cirurgia'),
    'Emergência': patients.filter(p => p.ward === 'Emergência'),
    'Pediatria': patients.filter(p => p.ward === 'Pediatria'),
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Painel de Controle</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(wardPatients).map(([ward, patients]) => (
          <WardSection key={ward} wardName={ward} patients={patients} />
        ))}
      </div>
    </div>
  );
};