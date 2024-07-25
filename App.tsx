/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, View, Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {globalStyles} from './src/theme/styles.theme';
import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
import {DimensionScreen} from './src/presentation/screens/dimensionScreen';
import {PositionScreen} from './src/presentation/screens/PositionScreen';
import {FlexScreen} from './src/presentation/screens/FlexScreen';
import {FlexDirectionScreen} from './src/presentation/screens/flexDirectionScreen';
import {HomeWorkScreen} from './src/presentation/screens/HomeWorkScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <Ionicons {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/*<BoxObjectModelScreen></BoxObjectModelScreen>*/}
        {/*<DimensionScreen></DimensionScreen>*/}
        {/*<PositionScreen></PositionScreen>*/}
        {/*<FlexScreen></FlexScreen>*/}
        {/*<FlexDirectionScreen></FlexDirectionScreen>*/}
        <HomeWorkScreen></HomeWorkScreen>
      </SafeAreaView>
    </PaperProvider>
  );
};
