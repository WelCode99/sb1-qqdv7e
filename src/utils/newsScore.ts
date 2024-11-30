export const calculateNEWScore = (vitals: VitalSigns): number => {
  let score = 0;

  // Respiratory Rate
  if (vitals.respiratoryRate <= 8) score += 3;
  else if (vitals.respiratoryRate >= 25) score += 3;
  else if (vitals.respiratoryRate >= 21) score += 2;
  else if (vitals.respiratoryRate <= 11) score += 1;

  // Oxygen Saturation
  if (vitals.oxygenSaturation <= 91) score += 3;
  else if (vitals.oxygenSaturation <= 93) score += 2;
  else if (vitals.oxygenSaturation <= 95) score += 1;

  // Temperature
  if (vitals.temperature <= 35.0) score += 3;
  else if (vitals.temperature >= 39.1) score += 2;
  else if (vitals.temperature >= 38.1 || vitals.temperature <= 36.0) score += 1;

  // Systolic Blood Pressure
  if (vitals.bloodPressureSystolic <= 90) score += 3;
  else if (vitals.bloodPressureSystolic <= 100) score += 2;
  else if (vitals.bloodPressureSystolic <= 110) score += 1;
  else if (vitals.bloodPressureSystolic >= 220) score += 3;

  // Heart Rate
  if (vitals.heartRate <= 40) score += 3;
  else if (vitals.heartRate >= 131) score += 3;
  else if (vitals.heartRate >= 111) score += 2;
  else if (vitals.heartRate <= 50 || vitals.heartRate >= 91) score += 1;

  // Consciousness
  if (vitals.consciousness !== 'Alert') score += 3;

  return score;
};