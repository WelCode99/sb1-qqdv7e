import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Patient } from '../types/patient';
import { calculateNEWScore } from '../utils/newsScore';
import { Users, AlertTriangle } from 'lucide-react';

interface WardSectionProps {
  wardName: string;
  patients: Patient[];
}

export const WardSection: React.FC<WardSectionProps> = ({ wardName, patients }) => {
  const navigate = useNavigate();
  const { setSelectedPatient } = useStore();

  const getNewsScoreColor = (score: number) => {
    if (score >= 7) return 'bg-red-100 text-red-800';
    if (score >= 5) return 'bg-orange-100 text-orange-800';
    if (score >= 3) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
    navigate(`/pacientes/${patient.id}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-800">{wardName}</h2>
      </div>
      
      <div className="space-y-4">
        {patients.map((patient) => {
          const latestVitals = patient.vitalSigns[patient.vitalSigns.length - 1];
          const newsScore = latestVitals ? calculateNEWScore(latestVitals) : 0;
          
          return (
            <div
              key={patient.id}
              className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
              onClick={() => handlePatientClick(patient)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{patient.name}</h3>
                  <p className="text-sm text-gray-600">
                    Leito: {patient.bedNumber} | Reg: {patient.registrationNumber}
                  </p>
                </div>
                
                {newsScore >= 5 && (
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                )}
                
                <span className={`px-3 py-1 rounded-full text-sm ${getNewsScoreColor(newsScore)}`}>
                  NEWS: {newsScore}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};