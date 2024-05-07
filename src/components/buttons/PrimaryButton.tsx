import { StyleSheet, Text, View } from 'react-native';
const PrimaryButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PLAY</Text>
    </View>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FE6C56',
    paddingHorizontal: 24,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    includeFontPadding: false,
  },
});
