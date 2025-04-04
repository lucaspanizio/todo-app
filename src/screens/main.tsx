import { StyleSheet, Text, View } from 'react-native';

export const Main = () => {
  return <Text style={styles.text}>Hello World</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
});
