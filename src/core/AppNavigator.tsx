import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Home} from '../home/screens/Home';
import {Settings} from '../home/screens/Settings';

const Tab = createMaterialTopTabNavigator();

export function AppNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{tabBarItemStyle: {paddingBottom: insets.bottom}}}>
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
