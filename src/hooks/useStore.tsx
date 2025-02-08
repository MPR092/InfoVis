import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  startTime: string;
  endTime: string;
  numOfDays: string;
  setStartTime: (startTime: string) => void;
  setEndTime: (endTime: string) => void;
  setNumOfDays: (numOfDays: string) => void;
}

const useStore = create<Store>()(
  devtools((set) => ({
    startTime: 'NOW - 30days',
    endTime: '',
    numOfDays: '30 days',
    setStartTime: (startTime) => set((state) => ({ ...state, startTime })),
    setEndTime: (endTime) => set((state) => ({ ...state, endTime })),
    setNumOfDays: (numOfDays) => set((state) => ({ ...state, numOfDays }))
  }))
);

export default useStore;
