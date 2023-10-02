import * as React from 'react';

export const useCountDownTimer = () => {
  /** Local State */
  const [seconds, setSeconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);

  /** Callbacks */
  const toggle = () => setIsActive(!isActive);

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  /** Side Effects */
  React.useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  React.useEffect(() => {
    setSeconds(0);
  }, []);

  return {seconds, isActive, toggle, reset} as const;
};
