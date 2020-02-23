import React, {createContext, useState} from 'react';

export const CameraContext = createContext();
export const CameraContextProvider = props => {
  const [state, setState] = useState({
    camera: 5,
    center: [100.523186, 13.736717],
  });

  return (
    <CameraContext.Provider
      value={{
        state: state,
        setState: setState,
      }}>
      {props.children}
    </CameraContext.Provider>
  );
};
