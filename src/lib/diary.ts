import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  getDocs, 
  Timestamp, 
  doc, 
  setDoc,
  onSnapshot
} from 'firebase/firestore';
import { SymptomLog } from '@/types/diary';

const COLLECTION_NAME = 'symptomLogs';

export const addSymptomLog = async (log: Omit<SymptomLog, 'id' | 'createdAt'>) => {
  try {
    const timestamp = new Date().getTime();
    const customId = `log_${timestamp}`;
    
    const docRef = doc(db, COLLECTION_NAME, customId);
    await setDoc(docRef, {
      ...log,
      date: Timestamp.fromDate(log.date),
      createdAt: Timestamp.now(),
    });
    
    return customId;
  } catch (error) {
    console.error('Error adding symptom log:', error);
    throw error;
  }
};

export const getSymptomLogs = async (timeframe: 'weekly' | 'monthly' = 'weekly', userId?: string) => {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - (timeframe === 'weekly' ? 7 : 30));

    const constraints = [
      where('date', '>=', Timestamp.fromDate(startDate)),
      orderBy('date', 'asc')
    ];

    if (userId) {
      constraints.unshift(where('userId', '==', userId));
    }

    const q = query(
      collection(db, COLLECTION_NAME),
      ...constraints
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date.toDate(),
      createdAt: doc.data().createdAt.toDate()
    })) as SymptomLog[];
  } catch (error) {
    console.error('Error getting symptom logs:', error);
    throw error;
  }
};

export const subscribeToSymptomLogs = (
  timeframe: 'weekly' | 'monthly',
  callback: (logs: SymptomLog[]) => void,
  userId?: string
) => {
  console.log(`Setting up symptom logs subscription - Timeframe: ${timeframe}, UserId: ${userId}`);
  
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - (timeframe === 'weekly' ? 7 : 30));
  
  console.log(`Start date for query: ${startDate.toISOString()}`);

  const constraints = [
    where('date', '>=', Timestamp.fromDate(startDate)),
    orderBy('date', 'asc')
  ];

  if (userId) {
    constraints.unshift(where('userId', '==', userId));
  }

  const q = query(
    collection(db, COLLECTION_NAME),
    ...constraints
  );

  return onSnapshot(q, 
    (querySnapshot) => {
      try {
        console.log(`Received snapshot with ${querySnapshot.docs.length} documents`);
        
        const logs = querySnapshot.docs.map(doc => {
          const data = doc.data();
          if (!data.date || !data.createdAt) {
            console.warn(`Document ${doc.id} is missing required fields:`, data);
            return null;
          }
          
          const log: SymptomLog = {
            id: doc.id,
            userId: data.userId,
            date: data.date.toDate(),
            createdAt: data.createdAt.toDate(),
            nighttimeAwakenings: data.nighttimeAwakenings ?? 0,
            inhalerUse: data.inhalerUse ?? 0,
            stressLevel: data.stressLevel ?? 0,
            triggers: data.triggers ?? [],
            hoursOfSleep: data.hoursOfSleep ?? 0,
            activityImpact: data.activityImpact ?? 1,
            peakFlow: data.peakFlow ?? 0,
            notes: data.notes ?? ''
          };
          
          return log;
        }).filter((log): log is SymptomLog => log !== null);
        
        console.log(`Processed ${logs.length} valid logs`);
        callback(logs);
      } catch (error) {
        console.error('Error processing symptom logs snapshot:', error);
        // Return empty array in case of error to prevent UI from breaking
        callback([]);
      }
    },
    (error) => {
      console.error('Error in symptom logs subscription:', error);
      // Return empty array in case of error to prevent UI from breaking
      callback([]);
    }
  );
};
