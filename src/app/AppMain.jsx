import React from 'react';

import { useSelectedItem } from '../components';

function AppMain() {
  const { actions } = useSelectedItem();
  const selectItemBuilder = (term) => () => actions.selectItem(term);

  return (
    <main>
      <header>
        <h1>Detailed info with useContext and useReducer</h1>
      </header>
      The part shown in the left (this) is a component named AppMain. The part shown in the right
      is the AppAside. One don't know each other directly. The App provides a context with the data
      and actions that can be retrieved through useSelectedItem hook. Then, when an item is clicked
      here, the action "selectItem" provided is called and the state is updated in the context.
      Then, the AppAside that also is using useSelectedItem can retrieve the "selectedItem" without
      knowing where or who the data was updated.
      <br />
      Some content <button type="button" onClick={selectItemBuilder('here')}>here</button>.
      And <button type="button" onClick={selectItemBuilder('more')}>more</button> content here.
    </main>
  );
}

export default AppMain;
