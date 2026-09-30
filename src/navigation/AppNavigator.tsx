import React, { useState } from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? (
    <MainNavigator />
  ) : (
    <AuthNavigator onLogin={handleLogin} />
  );
};

export default AppNavigator;
