import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { VitalSigns } from '../../types/patient';

interface VitalSignsChartProps {
  vitalSigns: VitalSigns[];
}

export const VitalSignsChart: React.FC<VitalSignsChartProps> = ({ vitalSigns }) => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={vitalSigns}>
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
  );
};