export type Program = '10-week' | '6-week' | 'custom';

export type ProgramStages = 'warm-up' | 'jog' | 'walk' | 'cool-down';

export type ProgramDay = {
  instructions: string;
  warmup: number;
  cooldown: number;
  pattern: Array<{
    type: 'jog' | 'walk';
    time: number;
    distance: number;
  }>;
};

export type ProgramStructure = Record<number, Record<number, ProgramDay>>;
