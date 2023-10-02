import type {ProgramStructure} from '@shared/types';

export const TEN_WEEK_PROGRAM: ProgramStructure = {
  // Week 1
  0: {
    // Day 1
    0: {
      instructions: '5 minute brisk walk followed by 5 minute jog',
      warmup: 300,
      cooldown: 300,
      pattern: [
        {
          type: 'jog',
          time: 300,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 300,
          distance: 1000,
        },
      ],
    },
  },
};
