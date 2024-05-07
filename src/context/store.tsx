import { create } from 'zustand';

import { GAME_STATES } from '../utils/constants';

interface FastGameStore {
  gameStatus: (typeof GAME_STATES)[keyof typeof GAME_STATES];
  setGameStatus: (
    status: (typeof GAME_STATES)[keyof typeof GAME_STATES],
  ) => void;
}

export const useFastGameStore = create<FastGameStore>((set) => ({
  gameStatus: GAME_STATES.NOT_STARTED,
  setGameStatus: (status) => set({ gameStatus: status }),
}));
