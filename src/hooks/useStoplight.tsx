import { useEffect, useState } from 'react';

import { GAME_STATES, RANDOM_TIME_LIMIT } from '../utils/constants';

export default function useStoplight(
  gameStatus: string,
  setGameStatus: (status: string) => void,
) {
  const [counter, setCounter] = useState(0);
  const [startGreen, setStartGreen] = useState(false);

  useEffect(() => {
    if (gameStatus === GAME_STATES.READY) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev === 2) {
            setStartGreen(true);
            return prev;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStatus]);

  useEffect(() => {
    if (startGreen) {
      console.log('startGreen');
      let count = Math.floor(Math.random() * RANDOM_TIME_LIMIT) + 1;
      const interval = setInterval(() => {
        count--;

        if (count === 0) {
          clearInterval(interval);
          // Call a separate function to update gameStatus in parent
          //onGameStart(); // (New function)
          setGameStatus(GAME_STATES.STARTED);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [setGameStatus, startGreen]);

  return { counter };
}
