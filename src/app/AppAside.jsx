import React from 'react';

import { useSelectedItem } from '../components';

function AppAside() {
  const { selectedItem } = useSelectedItem();

  return (
    <aside>
      <header>
        <h2>{selectedItem.title}</h2>
      </header>
      {selectedItem.detail}
    </aside>
  );
}

export default AppAside;
