import React, {createRef, useState} from 'react';
import {Drawer} from 'native-base';
import SideBar from '../Components/SideBar';
import TourismMap from '../Pages/Map/TourismMap';
import SideBasemap from './SideBasemap';

const drawerStyles = {
  drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
};

const DrawerMenu = ({navigation}) => {
  const testRef = createRef();
  const basemap = createRef();

  const [location, setLocation] = useState({
    lng: 0,
    lat: 0,
    error: null,
    zoom: 1,
  });

  const closeDrawer = () => {
    testRef.current._root.close();
  };
  const openDrawer = () => {
    testRef.current._root.open();
  };

  const goHome = () => {
    navigation.navigate('choose');
  };

  const closeBasemapDrawer = () => {
    basemap.current._root.close();
  };

  const openBasemapDrawer = () => {
    basemap.current._root.open();
  };

  const goLogin = () => {
    navigation.navigate('login');
  };

  const goSearch = () => {
    navigation.navigate('search');
  };

  const goArea = () => {
    navigation.navigate('area');
  };

  const goDashboard = () => {
    navigation.navigate('dashboard');
  };

  const goCoordinate = () => {
    navigation.navigate('coordinate');
  };

  return (
    <>
      <Drawer
        side="left"
        ref={testRef}
        content={
          <SideBar
            goHome={goHome}
            location={location}
            zoom={location.zoom}
            setLocation={setLocation}
            closeDrawer={closeDrawer}
            goLogin={goLogin}
          />
        }
        onClose={() => closeDrawer()}>
        <Drawer
          side="right"
          openDrawerOffset={0.55}
          panCloseMask={0.55}
          styles={drawerStyles}
          ref={basemap}
          content={<SideBasemap closeDrawer={closeBasemapDrawer} />}
          onClose={() => closeBasemapDrawer()}>
          <TourismMap
            openDrawer={openDrawer}
            basemapOpen={openBasemapDrawer}
            goSearch={goSearch}
            goArea={goArea}
            goDashboard={goDashboard}
            goCoordinate={goCoordinate}
          />
        </Drawer>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
