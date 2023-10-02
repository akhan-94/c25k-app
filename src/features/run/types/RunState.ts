export interface RunState {
  status: 'waiting' | 'in-progress' | 'paused' | 'finished';
  step: {
    active: 'warm-up' | 'jog' | 'walk' | 'cool-down';
  };
  activeDay: number;
  distance: number;
  calories: number;
  duration: {
    elapsed: number;
    remaining: number;
  };
}
