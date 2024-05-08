import { useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ROPE_HEIGHT_BASE } from '../utils/constants';

const More = () => {
  const [tapsFirst, setTapsFirst] = useState(4);
  const [tapsSecond, setTapsSecond] = useState(4);

  // Max win with 7 taps
  const handleTap = (player: 'first' | 'second') => {
    if (player === 'first') {
      setTapsFirst((prevState) => prevState + 1);
      if (tapsSecond > 0) {
        setTapsSecond((prevState) => prevState - 1);
      }
      if (tapsFirst === 7) {
        console.log(Alert.alert('Player 1 wins!'));
      }
    } else {
      setTapsSecond((prevState) => prevState + 1);
      if (tapsFirst > 0) {
        setTapsFirst((prevState) => prevState - 1);
      }
      if (tapsSecond === 7) {
        console.log(Alert.alert('Player 2 wins!'));
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => handleTap('first')}
        style={[styles.board, { backgroundColor: 'red' }]}
      >
        <View style={styles.finishTop} />
        <View
          style={[
            styles.rope,
            styles.bottom,
            { height: ROPE_HEIGHT_BASE * tapsFirst },
          ]}
        />
      </Pressable>
      <Pressable
        onPress={() => handleTap('second')}
        style={[styles.board, { backgroundColor: 'blue' }]}
      >
        <View style={styles.finishBottom} />
        <View
          style={[
            styles.rope,
            styles.top,
            { height: ROPE_HEIGHT_BASE * tapsSecond },
          ]}
        />
      </Pressable>
    </SafeAreaView>
  );
};
export default More;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cef',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    width: '100%',
    alignItems: 'center',
  },
  board: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rope: {
    width: 10,
    backgroundColor: 'black',
  },
  top: {
    position: 'absolute',
    top: 0,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  finishTop: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    top: 20,
  },
  finishBottom: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    bottom: 20,
  },
});
