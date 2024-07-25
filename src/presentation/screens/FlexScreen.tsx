import {StyleSheet, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'gray'},
  box1: {
    backgroundColor: '#4856a6',
    // +1 , 1/6
    flex: 1,
  },
  box2: {
    backgroundColor: '#2256a6',
    //1+2 = 3, 2/6 = 1/3
    flex: 2,
  },
  box3: {
    backgroundColor: '#2e2d71',
    // 3/6 = 1/2
    flex: 4,
  },
});
