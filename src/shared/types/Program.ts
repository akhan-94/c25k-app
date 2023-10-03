export type Program = '10-week' | '6-week' | 'custom';

export type ProgramStages = 'warm-up' | 'jog' | 'walk' | 'cool-down';

export type ProgramDay = {
  instructions: string;
  pattern: Array<{
    type: 'warmup' | 'jog' | 'walk' | 'cooldown';
    time: number;
    distance: number;
  }>;
};

export type ProgramStructure = Record<number, Record<number, ProgramDay>>;
