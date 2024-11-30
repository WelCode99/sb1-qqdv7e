export interface VitalSigns {
  temperature: number;
  heartRate: number;
  respiratoryRate: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  oxygenSaturation: number;
  consciousness: 'Alert' | 'Voice' | 'Pain' | 'Unresponsive';
  timestamp: string;
}

export interface LabResult {
  type: string;
  value: number;
  unit: string;
  referenceRange: string;
  timestamp: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'M' | 'F' | 'Other';
  registrationNumber: string;
  ward: string;
  bedNumber: string;
  admissionDate: string;
  diagnosis: string;
  vitalSigns: VitalSigns[];
  labResults: LabResult[];
}