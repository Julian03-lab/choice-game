import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import PrimaryButton from '../components/buttons/PrimaryButton';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>MainScreen</Text>
      <Link href="/fast">Play Game</Link> */}
      <PrimaryButton />
    </View>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A659FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
