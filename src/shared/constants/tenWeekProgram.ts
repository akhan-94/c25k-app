import type {ProgramStructure} from '@shared/types';

export const TEN_WEEK_PROGRAM: ProgramStructure = {
  // Week 1
  0: {
    // Day 1
    0: {
      instructions: '5 minute brisk walk followed by 5 minute jog',
      pattern: [
        {
          type: 'warmup',
          time: 20,
          distance: 1000,
        },
        {
          type: 'jog',
          time: 5,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 5,
          distance: 1000,
        },
        {
          type: 'jog',
          time: 5,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 5,
          distance: 1000,
        },
        {
          type: 'cooldown',
          time: 5,
          distance: 1000,
        },
      ],
    },
    1: {
      instructions: '5 minute brisk walk followed by 5 minute jog',
      pattern: [
        {
          type: 'warmup',
          time: 5,
          distance: 1000,
        },
        {
          type: 'jog',
          time: 500,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 9,
          distance: 1000,
        },
        {
          type: 'jog',
          time: 11,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 13,
          distance: 1000,
        },
        {
          type: 'cooldown',
          time: 15,
          distance: 1000,
        },
      ],
    },
  },
  // Week 2
  1: {
    // Day 1
    0: {
      instructions: '5 minute brisk walk followed by 5 minute jog',
      pattern: [
        {
          type: 'warmup',
          time: 5,
          distance: 1000,
        },
        {
          type: 'jog',
          time: 7,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 9,
          distance: 1000,
        },
        {
          type: 'jog',
          time: 11,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 13,
          distance: 1000,
        },
        {
          type: 'cooldown',
          time: 15,
          distance: 1000,
        },
      ],
    },
    1: {
      instructions: '5 minute brisk walk followed by 5 minute jog',
      pattern: [
        {
          type: 'warmup',
          time: 5,
          distance: 1000,
        },
        {
          type: 'jog',
          time: 7,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 9,
          distance: 1000,
        },
        {
          type: 'jog',
          time: 11,
          distance: 1000,
        },
        {
          type: 'walk',
          time: 13,
          distance: 1000,
        },
        {
          type: 'cooldown',
          time: 15,
          distance: 1000,
        },
      ],
    },
  },
};
