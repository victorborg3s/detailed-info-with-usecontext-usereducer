import { useContext } from 'react';

import { SelectedItemContext }  from './SelectedItemProvider';

function useSelectedItem() {
  const { selectedItem, dispatch } = useContext(SelectedItemContext);

  return {
    selectedItem,
    actions: {
      selectItem: (term) => dispatch({ type: "SELECT_ITEM", term }),
    },
  };
}

export default useSelectedItem
