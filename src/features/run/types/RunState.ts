import type {Program, ProgramStages} from '@shared/types';

export interface RunState {
  status: 'waiting' | 'in-progress' | 'paused' | 'finished';
  program: Program;
  stage: ProgramStages;
  timer: number;
  progress: [number, number, number];
  speed: number | null;
  calories: number | null;
  distance: number | null;
}
