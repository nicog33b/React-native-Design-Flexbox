import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>BoxObjectModelScreen</Text>
       */}

      <View style={styles.purpleBox}>
        <Text>Hola mundo</Text>
      </View>
      <View style={styles.purpleBox}>
        <Text>Hola mundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    borderWidth: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    //margin: 20,
    marginHorizontal: 50,
    marginVertical: 30,
    padding: 5,
    color: 'white',
  },
});
