import React, { useState } from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default App;

