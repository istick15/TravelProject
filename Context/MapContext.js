import React, {createContext, useState} from 'react';

export const MapContext = createContext();
export const MapContextProvider = props => {
  const [map, setMap] = useState(null);
  return (
    <MapContext.Provider
      value={{
        map: map,
        setMap: setMap,
      }}>
      {props.children}
    </MapContext.Provider>
  );
};
