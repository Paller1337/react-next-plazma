import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';

interface BnovoLoadContextProps {
  children: React.ReactNode;
}

interface BnovoLoadContextValue {
  bnovoIsLoad: boolean;
  setBnovoIsLoad: Dispatch<SetStateAction<boolean>>;
}

export const BnovoContext = createContext<BnovoLoadContextValue>({
  bnovoIsLoad: false,
  setBnovoIsLoad: () => { },
});

export const BnovoLoadContextProvider = ({ children }: BnovoLoadContextProps) => {
  const [bnovoIsLoad, setBnovoIsLoad] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.reservationsteps.ru/js/bnovo.js';
    script.async = true;
    script.onload = () => {
      setBnovoIsLoad(true)
    }
    
    document.head.appendChild(script)
  }, [])


  return (
    <BnovoContext.Provider value={{ bnovoIsLoad, setBnovoIsLoad }}>
      {children}
    </BnovoContext.Provider>
  );
};
