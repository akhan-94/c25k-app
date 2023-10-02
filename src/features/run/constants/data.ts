import type {DayData} from '../types/DayData';

export const DATA: Record<number, DayData> = {
  0: {
    time: {
      coolDown: 300,
      jog: 300,
      walk: 300,
      warmUp: 300,
    },
    quantity: {
      jog: 1,
      walk: 1,
    },
  },
};
