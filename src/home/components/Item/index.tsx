import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {getAnimation} from './utils';
import {styles} from './styles';
import {ItemProps} from './types';

export function Item({animation = 'crab'}: ItemProps) {
  return (
    <View style={styles.item}>
      <LottieView
        source={getAnimation(animation)}
        style={styles.lottie}
        autoPlay={true}
      />
    </View>
  );
}
