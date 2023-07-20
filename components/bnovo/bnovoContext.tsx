import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';

interface BnovoLoadContextProps {
  children: React.ReactNode;
}

interface BnovoLoadContextValue {
  bnovoIsLoad: boolean;
  bnovoIframeIsLoad: boolean;
  setBnovoIsLoad: Dispatch<SetStateAction<boolean>>;
  setBnovoIframeIsLoad: Dispatch<SetStateAction<boolean>>;
}

export const BnovoContext = createContext<BnovoLoadContextValue>({
  bnovoIsLoad: false,
  bnovoIframeIsLoad: false,
  setBnovoIsLoad: () => { },
  setBnovoIframeIsLoad: () => { },
});

export const BnovoLoadContextProvider = ({ children }: BnovoLoadContextProps) => {
  const [bnovoIsLoad, setBnovoIsLoad] = useState(false);
  const [bnovoIframeIsLoad, setBnovoIframeIsLoad] = useState(false);


  return (
    <BnovoContext.Provider value={{ bnovoIsLoad, setBnovoIsLoad, bnovoIframeIsLoad, setBnovoIframeIsLoad }}>
      {children}
    </BnovoContext.Provider>
  );
};
