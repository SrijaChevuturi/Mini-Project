import { SwitchContext } from './SwitchContext';
import React, { useState } from 'react';

function Store({ children }) {
  let [switchContextValue, setSwitchContextValue] = useState(false);

  return (
    <SwitchContext.Provider value={[switchContextValue, setSwitchContextValue]}>
      {children}
    </SwitchContext.Provider>
  );
}

export default Store;