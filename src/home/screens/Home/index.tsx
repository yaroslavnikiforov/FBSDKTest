import {ScrollView} from 'react-native';
import {Item} from '../../components/Item';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {styles} from './styles';

const items = Array.from({length: 1});

export function Home() {
  const insets = useSafeAreaInsets();
  const route = useRoute<any>();
  const {backgroundColor, animation} = route.params || {};

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {paddingTop: insets.top, backgroundColor},
      ]}>
      {items.map((_, i) => (
        <Item key={i} animation={animation} />
      ))}
    </ScrollView>
  );
}
