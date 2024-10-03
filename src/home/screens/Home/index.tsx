import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';

const items = Array.from({length: 100});

export function Home() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[styles.container, {paddingTop: insets.top}]}>
      {items.map((_, i) => (
        <View key={i} style={styles.item} />
      ))}
    </ScrollView>
  );
}
