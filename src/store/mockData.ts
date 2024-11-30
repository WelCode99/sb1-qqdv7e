import { Patient } from '../types/patient';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'João Silva',
    age: 65,
    gender: 'M',
    registrationNumber: 'REG001',
    ward: 'UTI',
    bedNumber: 'UTI-01',
    admissionDate: '2024-03-15',
    diagnosis: 'Pneumonia Grave',
    vitalSigns: [
      {
        temperature: 38.5,
        heartRate: 95,
        respiratoryRate: 22,
        bloodPressureSystolic: 135,
        bloodPressureDiastolic: 85,
        oxygenSaturation: 92,
        consciousness: 'Alert',
        timestamp: '2024-03-15T08:00:00.000Z'
      },
      {
        temperature: 38.2,
        heartRate: 92,
        respiratoryRate: 20,
        bloodPressureSystolic: 130,
        bloodPressureDiastolic: 80,
        oxygenSaturation: 94,
        consciousness: 'Alert',
        timestamp: '2024-03-15T12:00:00.000Z'
      },
      {
        temperature: 37.8,
        heartRate: 88,
        respiratoryRate: 18,
        bloodPressureSystolic: 128,
        bloodPressureDiastolic: 78,
        oxygenSaturation: 96,
        consciousness: 'Alert',
        timestamp: '2024-03-15T16:00:00.000Z'
      }
    ],
    labResults: [
      {
        type: 'Hemoglobina',
        value: 12.5,
        unit: 'g/dL',
        referenceRange: '12-16',
        timestamp: '2024-03-15T08:00:00.000Z'
      },
      {
        type: 'Leucócitos',
        value: 15000,
        unit: '/mm³',
        referenceRange: '4000-11000',
        timestamp: '2024-03-15T08:00:00.000Z'
      },
      {
        type: 'PCR',
        value: 80,
        unit: 'mg/L',
        referenceRange: '< 5',
        timestamp: '2024-03-15T08:00:00.000Z'
      }
    ]
  },
  {
    id: '2',
    name: 'Maria Oliveira',
    age: 72,
    gender: 'F',
    registrationNumber: 'REG002',
    ward: 'Clínica Médica',
    bedNumber: 'CM-05',
    admissionDate: '2024-03-14',
    diagnosis: 'Insuficiência Cardíaca Descompensada',
    vitalSigns: [
      {
        temperature: 36.8,
        heartRate: 102,
        respiratoryRate: 24,
        bloodPressureSystolic: 145,
        bloodPressureDiastolic: 95,
        oxygenSaturation: 91,
        consciousness: 'Alert',
        timestamp: '2024-03-15T08:00:00.000Z'
      }
    ],
    labResults: [
      {
        type: 'BNP',
        value: 850,
        unit: 'pg/mL',
        referenceRange: '< 100',
        timestamp: '2024-03-15T08:00:00.000Z'
      }
    ]
  }
];