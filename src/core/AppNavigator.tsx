import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Home} from '../home/screens/Home';

const Tab = createMaterialTopTabNavigator();

export function AppNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          // lazy: true,
          tabBarItemStyle: {paddingBottom: insets.bottom},
        }}>
        <Tab.Screen
          name="First"
          component={Home}
          initialParams={{backgroundColor: '#ffc93c', animation: 'car'}}
        />

        <Tab.Screen
          name="Second"
          component={Home}
          initialParams={{backgroundColor: '#ff6465', animation: 'crab'}}
        />

        <Tab.Screen
          name="Third"
          component={Home}
          initialParams={{
            backgroundColor: '#ff8c00',
            animation: 'coffee-maker',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
