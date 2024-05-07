import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';

import { TOUCH_OFFSET } from '../utils/constants';

const TouchIndicator = ({ positions }: { positions: IPositions | null }) => {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    if (positions) animation.current?.play();
  }, [positions]);

  return (
    <LottieView
      ref={animation}
      speed={0.9}
      style={{
        marginTop: StatusBar.currentHeight,
        position: 'absolute',
        top: positions ? positions?.y - TOUCH_OFFSET : 0,
        left: positions ? positions?.x - TOUCH_OFFSET : 0,
        width: 150,
        aspectRatio: 1,
        borderRadius: 50,
        zIndex: 2,
      }}
      source={require('@/assets/animations/pick.json')}
    />
  );
};
export default TouchIndicator;
