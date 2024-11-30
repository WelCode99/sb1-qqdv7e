import React from 'react';
import { useStore } from '../store/useStore';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { Activity, TestTube2, AlertCircle } from 'lucide-react';

export const PatientDetails: React.FC = () => {
  const { selectedPatient } = useStore();

  if (!selectedPatient) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Select a patient to view details</p>
      </div>
    );
  }

  const latestVitals = selectedPatient.vitalSigns[selectedPatient.vitalSigns.length - 1];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">{selectedPatient.name}</h2>
        <p className="text-gray-600">
          {selectedPatient.age} years | {selectedPatient.gender} | Reg: {selectedPatient.registrationNumber}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Latest Vital Signs</h3>
          </div>
          
          {latestVitals && (
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="text-lg font-semibold">{latestVitals.temperature}°C</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Heart Rate</p>
                <p className="text-lg font-semibold">{latestVitals.heartRate} bpm</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Blood Pressure</p>
                <p className="text-lg font-semibold">
                  {latestVitals.bloodPressureSystolic}/{latestVitals.bloodPressureDiastolic}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">O2 Saturation</p>
                <p className="text-lg font-semibold">{latestVitals.oxygenSaturation}%</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TestTube2 className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Latest Lab Results</h3>
          </div>
          
          <div className="space-y-2">
            {selectedPatient.labResults.slice(-3).map((result, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">{result.type}</p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(result.timestamp), 'MMM d, HH:mm')}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  {result.value} {result.unit}
                </p>
                <p className="text-xs text-gray-500">Reference: {result.referenceRange}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Vital Signs Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={selectedPatient.vitalSigns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={(value) => format(new Date(value), 'HH:mm')}
              />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperature" />
              <Line type="monotone" dataKey="heartRate" stroke="#82ca9d" name="Heart Rate" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};