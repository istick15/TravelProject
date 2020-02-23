/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {StaffContextProvider} from './Context/StaffContext';
import {SegmentContextProvider} from './Context/SegmentContext';
import {BackdropProvider} from 'react-native-propel-kit';
import {DialogContextProvider} from './Context/DialogContext';
import {AddNewContextProvider} from './Context/AddNewContext';
import {MapContextProvider} from './Context/MapContext';
import {CameraContextProvider} from './Context/CameraContext';

export default function Main() {
  return (
    <BackdropProvider>
      <MapContextProvider>
        <CameraContextProvider>
          <SegmentContextProvider>
            <StaffContextProvider>
              <DialogContextProvider>
                <AddNewContextProvider>
                  <App />
                </AddNewContextProvider>
              </DialogContextProvider>
            </StaffContextProvider>
          </SegmentContextProvider>
        </CameraContextProvider>
      </MapContextProvider>
    </BackdropProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
