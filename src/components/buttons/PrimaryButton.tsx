import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const PrimaryButton = () => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 40,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={['#70E0FD', '#4CDAFE']}
        start={{ x: 1, y: 1 }}
        locations={[0.5, 0.5]}
        end={{ x: 0, y: 0 }}
        style={styles.buttonGrad}
      >
        <Text style={styles.text}>Volver a jugar</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonGrad: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Rowdies_400Regular',
    textTransform: 'uppercase',
  },
});
