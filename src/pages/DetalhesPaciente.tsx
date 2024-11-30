import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { PatientDetails } from '../components/PatientDetails';

export const DetalhesPaciente: React.FC = () => {
  const { id } = useParams();
  const { patients, setSelectedPatient } = useStore();
  
  React.useEffect(() => {
    const patient = patients.find(p => p.id === id);
    if (patient) {
      setSelectedPatient(patient);
    }
  }, [id, patients, setSelectedPatient]);

  return <PatientDetails />;
};