
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OtpScreen from '../screens/OtpScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = ({ onLogin }: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Login"
        options={{ title: 'Login' }}
      >
        {props => (
          <LoginScreen {...props} onLogin={onLogin} />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="OTP"
        component={OtpScreen}
        options={{ title: 'Verify OTP' }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
