import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import PrimaryButton from '../components/buttons/PrimaryButton';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>MainScreen</Text>*/}
      <Link href="/fast">Tap Fast</Link>
      <Link href="/more">Tap more</Link>
      <PrimaryButton />
    </View>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
