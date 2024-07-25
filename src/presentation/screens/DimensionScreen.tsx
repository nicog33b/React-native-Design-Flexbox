import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.6}} />

        <Text style={styles.title}>
          w: {width} h: {height}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5866D6',
    height: '50%',
    width: '%50',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
