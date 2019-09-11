import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#204969" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}
