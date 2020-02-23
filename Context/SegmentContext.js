import React, {createContext, useState} from 'react';

export const SegmentContext = createContext();
export const SegmentContextProvider = props => {
  const [seg, setSeg] = useState(0);

  return (
    <SegmentContext.Provider
      value={{
        seg: seg,
        setSeg: setSeg,
      }}>
      {props.children}
    </SegmentContext.Provider>
  );
};
