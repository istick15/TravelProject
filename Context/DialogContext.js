import React, {createContext, useState} from 'react';

export const DialogContext = createContext();
export const DialogContextProvider = props => {
  const [data, setData] = useState(false);

  return (
    <DialogContext.Provider
      value={{
        data: data,
        setData: setData,
      }}>
      {props.children}
    </DialogContext.Provider>
  );
};
