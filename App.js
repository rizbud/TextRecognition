import React from 'react';
import { StatusBar } from 'react-native';
import Main from './src/app';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Main />
    </>
  );
};

export default App;
