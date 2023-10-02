import type {Program, ProgramStructure} from '@shared/types';
import {TEN_WEEK_PROGRAM} from './tenWeekProgram';

export const PROGRAM_MAP: Record<Program, ProgramStructure> = {
  '10-week': TEN_WEEK_PROGRAM,
  '6-week': {},
  custom: {},
};
