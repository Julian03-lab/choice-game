import { Feather } from '@expo/vector-icons';
import { Pressable, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Board from '../components/FastGame/Board';
import Stoplight from '../components/Stoplight';
import TouchIndicator from '../components/TouchIndicator';
import FastModal from '../components/modal/FastModal';
import { useFastGameStore } from '../context/store';
import useGetFastPosition from '../hooks/useGetFastPosition';
import useHandleReady from '../hooks/useHandleReady';
import { GAME_STATES } from '../utils/constants';

const FastGame = () => {
  const { gameStatus } = useFastGameStore();
  const { handlePressPosition, positions, winner } = useGetFastPosition();
  const { handleVote, firstReady, secondReady } = useHandleReady();

  return (
    <SafeAreaView style={styles.container}>
      <FastModal onClose={() => null} visible={false} />
      <TouchIndicator positions={positions} />
      {!winner && gameStatus === GAME_STATES.STARTED && (
        <Pressable
          onPress={handlePressPosition}
          style={{
            marginTop: StatusBar.currentHeight,
            flex: 1,
            position: 'absolute',
            top: 0,
            backgroundColor: 'transparent',
            width: '100%',
            height: '100%',
            zIndex: !winner ? 1 : 0,
          }}
        />
      )}
      <Board
        isReady={firstReady}
        handleVote={handleVote}
        player="first"
        customBoardColor="gray"
        inverted
        gameStatus={gameStatus}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Feather name="arrow-left" size={32} color="black" />
        <Stoplight />
        <Feather name="pause" size={32} color="black" />
      </View>
      <Board
        gameStatus={gameStatus}
        isReady={secondReady}
        handleVote={handleVote}
        player="second"
        customBoardColor="green"
      />
    </SafeAreaView>
  );
};
export default FastGame;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cef',

    justifyContent: 'center',
  },
});
