import { StyleSheet, Text, View } from 'react-native';

import { useFastGameStore } from '../context/store';
import useStoplight from '../hooks/useStoplight';
import { COLORS, GAME_STATES, STOPLIGHT_CIRCLE_SIZE } from '../utils/constants';

const Stoplight = () => {
  const { gameStatus, setGameStatus } = useFastGameStore();
  const { counter } = useStoplight(gameStatus, setGameStatus);

  return (
    <View style={styles.container}>
      {gameStatus === GAME_STATES.NOT_STARTED ? (
        <Text style={styles.text}>Esperando a los jugadores</Text>
      ) : (
        <>
          <View
            style={[
              styles.redlight,
              counter > 0 && { backgroundColor: COLORS.RED },
            ]}
          />
          <View
            style={[
              styles.yellowlight,
              counter > 1 && { backgroundColor: COLORS.YELLOW },
            ]}
          />
          <View
            style={[
              styles.greenlight,
              (gameStatus === GAME_STATES.STARTED ||
                gameStatus === GAME_STATES.FINISHED) && {
                backgroundColor: COLORS.GREEN,
              },
            ]}
          />
        </>
      )}
    </View>
  );
};
export default Stoplight;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    gap: 20,
  },
  redlight: {
    width: STOPLIGHT_CIRCLE_SIZE,
    aspectRatio: 1,
    borderRadius: 50,
  },
  yellowlight: {
    width: STOPLIGHT_CIRCLE_SIZE,
    aspectRatio: 1,
    borderRadius: 50,
  },
  greenlight: {
    width: STOPLIGHT_CIRCLE_SIZE,
    aspectRatio: 1,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    height: 50,
    textAlignVertical: 'center',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
});
