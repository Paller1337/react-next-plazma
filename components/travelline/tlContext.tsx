import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';

interface TLLoadContextProps {
  children: React.ReactNode;
}

interface TLLoadContextValue {
  tlIsLoad: boolean;
  tlIframeIsLoad: boolean;
  setTlIsLoad: Dispatch<SetStateAction<boolean>>;
  setTlIframeIsLoad: Dispatch<SetStateAction<boolean>>;
}

export const TLContext = createContext<TLLoadContextValue>({
  tlIsLoad: false,
  tlIframeIsLoad: false,
  setTlIsLoad: () => { },
  setTlIframeIsLoad: () => { },
});

export const TLLoadContextProvider = ({ children }: TLLoadContextProps) => {
  const [tlIsLoad, setTlIsLoad] = useState(false);
  const [tlIframeIsLoad, setTlIframeIsLoad] = useState(false);


  return (
    <TLContext.Provider value={{ tlIsLoad, setTlIsLoad, tlIframeIsLoad, setTlIframeIsLoad }}>
      {children}
    </TLContext.Provider>
  );
};
