import React, {createContext, useState} from 'react';

export const AddNewContext = createContext();
export const AddNewContextProvider = props => {
  const [data, setData] = useState(false);

  return (
    <AddNewContext.Provider
      value={{
        data: data,
        setData: setData,
      }}>
      {props.children}
    </AddNewContext.Provider>
  );
};
