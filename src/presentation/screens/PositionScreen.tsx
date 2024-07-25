import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}></View>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',

    //  justifyContent: 'center',
    //  alignItems: 'center',
  },
  purpleBox: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
  },
  greenBox: {
    //width: 100,
    //  height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
  },
});
