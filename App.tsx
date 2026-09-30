import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@ui-kitten/eva';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaProvider>      
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

export default App;