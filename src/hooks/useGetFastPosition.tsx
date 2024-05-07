import { useState } from 'react';
import {
  Dimensions,
  type GestureResponderEvent,
  StatusBar,
} from 'react-native';

import { useFastGameStore } from '../context/store';
import { GAME_STATES } from '../utils/constants';

export default function useGetFastPosition() {
  const { setGameStatus } = useFastGameStore();
  const { height } = Dimensions.get('window');
  const [positions, setPositions] = useState<IPositions | null>(null);
  const [winner, setWinner] = useState<'first' | 'second' | null>(null);

  const handlePressPosition = (event: GestureResponderEvent) => {
    const { locationX, locationY } = event.nativeEvent;
    const halfScreen = (height - (StatusBar.currentHeight || 0)) / 2;
    setPositions({
      x: locationX,
      y: locationY,
    });
    setWinner(locationY > halfScreen ? 'second' : 'first');
    setGameStatus(GAME_STATES.FINISHED);
  };

  return { handlePressPosition, positions, winner };
}
