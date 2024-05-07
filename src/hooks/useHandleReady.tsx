import { useEffect, useState } from 'react';

import { useFastGameStore } from '../context/store';
import { GAME_STATES } from '../utils/constants';

export default function useHandleReady() {
  const { setGameStatus } = useFastGameStore();
  const [firstReady, setFirstReady] = useState(false);
  const [secondReady, setSecondReady] = useState(false);

  useEffect(() => {
    if (firstReady && secondReady) {
      setGameStatus(GAME_STATES.READY);
    }
  }, [firstReady, secondReady, setGameStatus]);

  const handleVote = (player: 'first' | 'second') => {
    if (player === 'first') {
      setFirstReady(true);
    } else {
      setSecondReady(true);
    }
  };

  return { handleVote, firstReady, secondReady };
}
