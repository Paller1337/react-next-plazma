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

  // useEffect(() => {
  //   const scriptBnovo = document.createElement('script');
  //   scriptBnovo.src = 'https://widget.reservationsteps.ru/js/bnovo.js';
  //   scriptBnovo.async = true;
  //   scriptBnovo.onload = () => {
  //     setBnovoIsLoad(true)
  //   }

  //   const scriptBnovoIframe = document.createElement('script');
  //   scriptBnovoIframe.src = 'https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js';
  //   scriptBnovoIframe.async = true;
  //   scriptBnovoIframe.onload = () => {
  //     setBnovoIframeIsLoad(true)
  //   }

    
    
  //   document.head.appendChild(scriptBnovo)
  //   document.head.appendChild(scriptBnovoIframe)
  // }, [])


  return (
    <BnovoContext.Provider value={{ bnovoIsLoad, setBnovoIsLoad, bnovoIframeIsLoad, setBnovoIframeIsLoad }}>
      {children}
    </BnovoContext.Provider>
  );
};
