import {ComponentType} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';
import {AppNavigator} from './AppNavigator';

enableFreeze(true);

export const App: ComponentType<Record<string, unknown>> = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};
