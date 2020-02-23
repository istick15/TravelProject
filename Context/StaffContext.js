import React, {createContext, useState} from 'react';

export const StaffContext = createContext();
export const StaffContextProvider = props => {
  const [data, setData] = useState(false);

  return (
    <StaffContext.Provider
      value={{
        data: data,
        setData: setData,
      }}>
      {props.children}
    </StaffContext.Provider>
  );
};
