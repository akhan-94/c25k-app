export interface RunState {
  status: 'waiting' | 'in-progress' | 'paused' | 'finished';
  step: {
    active: 'warm-up' | 'jog' | 'walk' | 'cool-down';
    // history: Record<
    //   RunState['step']['active'],
    //   {
    //     elapsed: number;
    //     remaining: number;
    //   }
    // >;
  };
  activeDay: number;
  distance: number;
  calories: number;
  duration: {
    elapsed: number;
    remaining: number;
  };
}
