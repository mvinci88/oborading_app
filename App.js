import React from 'react';
import { Provider } from 'react-redux';
import ScreenPage from './src/components/Screen';
import { store } from "./src/store";

const App = () => {
  return(
    <Provider store={store}>
        <ScreenPage />
    </Provider>)
}

export default App;

