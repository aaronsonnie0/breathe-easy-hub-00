
export interface SymptomLog {
  id?: string;
  date: Date;
  nighttimeAwakenings: number;
  inhalerUse: number;
  stressLevel: number;
  triggers: string[];
  hoursOfSleep: number;
  activityImpact: number;
  peakFlow: number;
  userId?: string;
  createdAt: Date;
}
