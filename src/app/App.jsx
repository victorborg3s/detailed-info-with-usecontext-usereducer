import React from 'react';

import { SelectedItemProvider } from '../components';
import AppMain from './AppMain';
import AppAside from './AppAside';
import './App.css';

function App() {
  return (
    <article>
      <SelectedItemProvider>
        <AppMain />
        <AppAside />
      </SelectedItemProvider>
    </article>
  );
}

export default App;
