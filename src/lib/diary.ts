
import { db } from './firebase';
import { collection, addDoc, query, where, orderBy, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore';
import { SymptomLog } from '@/types/diary';

const COLLECTION_NAME = 'symptomLogs';

export const addSymptomLog = async (log: Omit<SymptomLog, 'id' | 'createdAt'>) => {
  try {
    // Generate a custom ID based on timestamp to help with uniqueness
    const timestamp = new Date().getTime();
    const customId = `log_${timestamp}`;
    
    // Use setDoc with a specific document reference instead of addDoc
    const docRef = doc(db, COLLECTION_NAME, customId);
    await setDoc(docRef, {
      ...log,
      createdAt: Timestamp.now(),
    });
    
    return customId;
  } catch (error) {
    console.error('Error adding symptom log:', error);
    throw error;
  }
};

export const getSymptomLogs = async (timeframe: 'weekly' | 'monthly' = 'weekly') => {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - (timeframe === 'weekly' ? 7 : 30));

    const q = query(
      collection(db, COLLECTION_NAME),
      where('date', '>=', startDate),
      orderBy('date', 'asc')
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
