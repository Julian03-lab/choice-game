import { Pressable, StyleSheet, Text } from 'react-native';

import { GAME_STATES } from '@/src/utils/constants';

const Board = ({
  handleVote,
  isReady,
  player,
  customBoardColor,
  inverted,
  gameStatus,
}: IBoardProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: customBoardColor },
        inverted && { transform: [{ rotate: '180deg' }] },
      ]}
      onPress={() => !isReady && handleVote(player)}
    >
      {gameStatus === GAME_STATES.NOT_STARTED ? (
        <>
          <Text style={styles.title}>
            {isReady ? 'You are ready' : 'Ready?'}
          </Text>
          <Text style={styles.hint}>Touch To Start</Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>Tap first to win</Text>
          <Text style={styles.hint}>When the green light shows</Text>
        </>
      )}
    </Pressable>
  );
};
export default Board;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hint: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '400',
  },
});
