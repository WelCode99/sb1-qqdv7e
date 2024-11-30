import { create } from 'zustand';
import { Patient, VitalSigns, LabResult } from '../types/patient';
import { mockPatients } from './mockData';

interface HospitalStore {
  patients: Patient[];
  selectedPatient: Patient | null;
  setSelectedPatient: (patient: Patient | null) => void;
  addVitalSigns: (patientId: string, vitalSigns: VitalSigns) => void;
  addLabResult: (patientId: string, labResult: LabResult) => void;
}

export const useStore = create<HospitalStore>((set) => ({
  patients: mockPatients,
  selectedPatient: null,
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  addVitalSigns: (patientId, vitalSigns) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? { ...p, vitalSigns: [...p.vitalSigns, vitalSigns] }
          : p
      ),
    })),
  addLabResult: (patientId, labResult) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? { ...p, labResults: [...p.labResults, labResult] }
          : p
      ),
    })),
}));