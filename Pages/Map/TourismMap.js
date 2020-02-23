import React, {useEffect, useState, useContext, createRef} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import FooterTools from '../../Components/FooterTools';
import MenuUser from '../../Components/MenuUser';
import DialogDistance from '../../Components/Dialogs/DialogDistance';
import {StaffContext} from '../../Context/StaffContext';
import markerIcon from '../../image/icon/n3.png';
import FooterAdd from '../../Components/FooterAdd';
import DialogSavePlace from '../../Components/Dialogs/DialogSavePlace';
import {SegmentContext} from '../../Context/SegmentContext';
import FooterDistance from '../../Components/FooterDistance';
import FooterSearch from '../../Components/FooterSearch';
import FooterCategory from '../../Components/Footer/FooterCategory';
import FooterArea from '../../Components/Footer/FooterArea';
import * as turf from '@turf/turf';
import {DialogContext} from '../../Context/DialogContext';
import CompleteDialog from '../../Components/Dialogs/CompleteDialog';
import {AddNewContext} from '../../Context/AddNewContext';
import {CameraContext} from '../../Context/CameraContext';
import FooterSelect from '../../Components/Footer/FooterSelect';
import DialogDelete from '../../Components/Dialogs/DialogDelete';
import FooterEdit from '../../Components/Footer/FooterEdit';
import DialogEditPlace from '../../Components/Dialogs/DialogEditPlace';
import dataPoint from '../../Data/DataPoint.json';
import TouristImg from '../../image/tour_marker.png';
import HotelImg from '../../image/hotel_marker.png';
import HostelImg from '../../image/hostel_marker.png';
import ResImg from '../../image/restaurant_marker.png';
import SpaImg from '../../image/spa_marker.png';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoianVzbWFueiIsImEiOiJjangyczU3azgwNHBzNDlxb2w5OWgzeDZvIn0.xqxSzNNuDT1lHvqZpfMh4g',
);

const layerStyles = {
  icon: {
    circleRadius: 5,
    circleColor: '#A63247',
  },
};

const TourismMap = ({
  openDrawer,
  basemapOpen,
  goSearch,
  goArea,
  goDashboard,
  goCoordinate,
}) => {
  const [render, setRender] = useState(false);
  const cameraContext = useContext(CameraContext);
  const [segment, setSegment] = useState({seg: 0});
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState({showUserLocation: true});
  const [search, setSearch] = useState(false);
  const [area, setArea] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const staffContext = useContext(StaffContext);
  const mapRef = createRef();
  const [coordinates, setCoordinates] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [imported, setImported] = useState(false);
  const segmentContext = useContext(SegmentContext);
  const dialogContext = useContext(DialogContext);
  const addnewContext = useContext(AddNewContext);
  const [del, setDel] = useState(false);
  const [coor, setCoor] = useState([]);
  const [edit, setEdit] = useState(false);
  const [already, setAlready] = useState(false);
  const [selected, setSelected] = useState(0);
  const [point, setPoint] = useState([]);

  const [images] = useState({
    Tourist: TouristImg,
    Hotel: HotelImg,
    Hostel: HostelImg,
    Restaurant: ResImg,
    Spa: SpaImg,
  });

  let geoJson = {
    type: 'FeatureCollection',
    features: coordinates,
  };

  const zoomIn = async () => {
    if (cameraContext.state.camera <= 16) {
      const zoom = await mapRef.current.getZoom();
      const center = await mapRef.current.getCenter();
      // setState({...state, camera: zoom + 1, center: center});
      cameraContext.setState({
        ...cameraContext.state,
        camera: zoom + 1,
        center: center,
      });
    } else {
      // setState({...state, camera: state.camera});
    }
  };

  const zoomOut = async () => {
    const zoom = await mapRef.current.getZoom();
    const center = await mapRef.current.getCenter();
    if (cameraContext.state.camera > 0) {
      // setState({...state, camera: zoom - 1, center: center});
      cameraContext.setState({
        ...cameraContext.state,
        camera: zoom - 1,
        center: center,
      });
    } else {
    }
  };

  const onRegionChange = async () => {
    const center = await mapRef.current.getCenter();
    if (segmentContext.seg === 4) {
      const point = turf.point(center);
      setCoordinates([point]);
      setCoor([center[0], center[1]]);
    } else {
    }
  };

  const userLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== undefined) {
      staffContext.setData(true);
      setPoint(dataPoint);
    } else {
      staffContext.setData(false);
    }
  };

  useEffect(() => {
    if (render) {
      MapboxGL.setTelemetryEnabled(false);
      userLogin();
    } else {
      setRender(true);
    }
  }, [render]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MenuUser
          type={'Ionicons'}
          name={'md-list'}
          styles={styles.menu}
          button={styles.menuButton}
          func={openDrawer}
          icon={styles.icon}
          lay={'#41c0c1d9'}
        />

        {segmentContext.seg === 6 ||
        segmentContext.seg === 7 ||
        segmentContext.seg === 8 ? null : (
          <>
            <MenuUser
              type={'AntDesign'}
              name={'plus'}
              styles={styles.plus}
              button={styles.plusButton}
              icon={styles.iconTool}
              func={zoomIn}
              lay={'#95a8a9'}
            />

            <MenuUser
              type={'AntDesign'}
              name={'minus'}
              styles={styles.minus}
              button={styles.plusButton}
              icon={styles.iconTool}
              func={zoomOut}
              lay={'#95a8a9'}
            />

            <MenuUser
              type={'FontAwesome5'}
              name={'layer-group'}
              styles={styles.layer}
              button={styles.layerButton}
              icon={styles.iconTool}
              func={basemapOpen}
              lay={'#95a8a9'}
            />

            {staffContext.data ? null : (
              <MenuUser
                type={'MaterialCommunityIcons'}
                name={'map-marker-distance'}
                styles={styles.distance}
                button={styles.layerButton}
                icon={styles.iconTool}
                func={() => setVisible(true)}
                lay={'#95a8a9'}
              />
            )}

            <MenuUser
              type={'Ionicons'}
              name={'ios-send'}
              styles={styles.location}
              button={styles.locationButton}
              icon={styles.icon}
              lay={'#f36f5fd9'}
              func={async () => {
                // setLocation({
                //   ...location,
                //   showUserLocation: !location.showUserLocation,
                // });
              }}
            />
          </>
        )}

        {staffContext.data ? (
          <MenuUser
            type={'MaterialCommunityIcons'}
            name={'map-marker-plus'}
            styles={styles.addpoint}
            button={
              segmentContext.seg === 4
                ? styles.addpointButtonActive
                : styles.addpointButton
            }
            icon={styles.iconPoint}
            lay={'#95a8a9'}
            func={async () => {
              if (segmentContext.seg === 4) {
                // setSegment({...segment, seg: 0});
                segmentContext.setSeg(0);
              } else {
                // setSegment({...segment, seg: 4});
                segmentContext.setSeg(4);
                const center = await mapRef.current.getCenter();
                setCoor([center[0], center[1]]);
                const pointed = turf.point(center);
                setCoordinates([pointed]);

                addnewContext.setData(true);

                setTimeout(() => {
                  addnewContext.setData(false);
                }, 4000);
              }
            }}
          />
        ) : null}

        <MapboxGL.MapView
          scrollEnabled={true}
          style={styles.map}
          onRegionDidChange={onRegionChange}
          ref={mapRef}
          logoEnabled={false}
          onPress={() => {
            if (segmentContext.seg === 9) {
              segmentContext.setSeg(0);
              setSelected(0);
            } else {
            }
          }}
          styleURL={
            'https://raw.githubusercontent.com/nutthapol-jr/map-style/master/mapbox-style.json'
          }>
          <MapboxGL.UserLocation visible={true} />

          {segmentContext.seg === 4 ? (
            <MapboxGL.ShapeSource id="symbolLocationSource" shape={geoJson}>
              <MapboxGL.SymbolLayer
                id="symbolLocationSymbols"
                minZoomLevel={1}
                style={{
                  iconImage: markerIcon,
                  iconAllowOverlap: true,
                  iconSize: 0.065,
                }}
              />
            </MapboxGL.ShapeSource>
          ) : null}

          {/* <PointLocation /> */}

          {staffContext.data ? (
            <>
              {point.map((res, idex) => {
                return (
                  <MapboxGL.ShapeSource
                    onPress={() => {
                      if (segmentContext.seg === 9) {
                        segmentContext.setSeg(0);
                        setSelected(0);
                        setTimeout(() => {
                          segmentContext.setSeg(9);
                          setSelected(idex + 1);
                        }, 100);
                      } else {
                        segmentContext.setSeg(9);
                        setSelected(idex + 1);
                      }
                    }}
                    key={res._id}
                    id={`point_${res._id}`}
                    images={images}
                    shape={res.data}>
                    <MapboxGL.CircleLayer
                      id={`selected_${res._id}`}
                      style={{
                        circleRadius: selected === idex + 1 ? 30 : 0,
                        circleColor: '#ec596069',
                        circleStrokeWidth: 0,
                      }}
                    />
                    <MapboxGL.SymbolLayer
                      id={`point_${res._id}`}
                      minZoomLevel={1}
                      style={{
                        iconImage: ['get', 'category'],
                        iconAllowOverlap: true,
                        iconSize: 0.2,
                      }}
                    />
                  </MapboxGL.ShapeSource>
                );
              })}
            </>
          ) : (
            <>
              {point.map(res => {
                return (
                  <MapboxGL.ShapeSource
                    key={res._id}
                    id={`point_${res._id}`}
                    images={images}
                    shape={res.data}>
                    <MapboxGL.SymbolLayer
                      id={`point_${res._id}`}
                      minZoomLevel={1}
                      style={{
                        iconImage: ['get', 'category'],
                        iconAllowOverlap: true,
                        iconSize: 0.2,
                      }}
                    />
                  </MapboxGL.ShapeSource>
                );
              })}
            </>
          )}

          <MapboxGL.Camera
            zoomLevel={cameraContext.state.camera}
            centerCoordinate={cameraContext.state.center}

            // followUserLocation={true}
            // followUserMode="compass"
          />
        </MapboxGL.MapView>

        <DialogDistance visible={visible} setVisible={setVisible} />

        {segmentContext.seg === 4 ? (
          <FooterAdd
            coordinates={coor}
            setSegment={setSegment}
            segment={segment}
            setDialog={setDialog}
          />
        ) : segmentContext.seg === 5 ? (
          <FooterDistance setVisible={setVisible} />
        ) : segmentContext.seg === 6 ? (
          <FooterSearch goSearch={goSearch} />
        ) : segmentContext.seg === 7 ? (
          <FooterCategory goSearch={goSearch} />
        ) : segmentContext.seg === 9 ? (
          <FooterSelect setDel={setDel} setSelected={setSelected} />
        ) : segmentContext.seg === 10 ? (
          <FooterEdit setEdit={setEdit} setSelected={setSelected} />
        ) : (
          <FooterTools
            search={search}
            setSearch={setSearch}
            setArea={setArea}
            state={segment}
            setState={setSegment}
            setDashboard={setDashboard}
            setImported={setImported}
            goSearch={goSearch}
            goArea={goArea}
            goDashboard={goDashboard}
            goCoordinate={goCoordinate}
            mapRef={mapRef}
          />
        )}

        {segmentContext.seg === 8 ? <FooterArea goArea={goArea} /> : null}

        {dialogContext.data ? (
          <CompleteDialog text={'Import Complete'} setAlready={setAlready} />
        ) : null}

        {already ? (
          <CompleteDialog text={'Already edit'} setAlready={setAlready} />
        ) : null}

        {addnewContext.data ? (
          <CompleteDialog
            text={'Add new place'}
            text2={'Move the map until the marker is on your location'}
            setAlready={setAlready}
          />
        ) : null}

        <DialogSavePlace
          visible={dialog}
          setVisible={setDialog}
          segment={segment}
          setSegment={setSegment}
          point={point}
          setPoint={setPoint}
          coor={coor}
        />

        <DialogEditPlace
          visible={edit}
          setVisible={setEdit}
          setAlready={setAlready}
        />
        <DialogDelete
          visible={del}
          setVisible={setDel}
          selected={selected}
          point={point}
          setPoint={setPoint}
          setSelected={setSelected}
        />
        {/* {segmentContext.seg === 5 ? <FooterDistance /> : null} */}
      </View>
    </View>
  );
};

export default TourismMap;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1,
  },
  menu: {
    position: 'absolute',
    left: '4%',
    top: '3%',
    zIndex: 5,
  },
  menuButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#41c0c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    position: 'absolute',
    right: '4%',
    bottom: '37.5%',
    zIndex: 5,
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#c7d0d1cc',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {color: '#faf7f1', fontSize: 22},
  iconTool: {color: '#0f2e47', fontSize: 22},
  minus: {
    position: 'absolute',
    right: '4%',
    bottom: '25%',
    zIndex: 5,
  },
  layer: {
    position: 'absolute',
    right: '4%',
    bottom: '50%',
    zIndex: 5,
  },
  layerButton: {
    width: 50,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#c7d0d1cc',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  distance: {
    position: 'absolute',
    right: '4%',
    bottom: '15%',
    zIndex: 5,
  },
  location: {
    position: 'absolute',
    left: '4%',
    bottom: '15%',
    zIndex: 5,
  },
  locationButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f36f5f',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addpoint: {
    position: 'absolute',
    right: '4%',
    top: '30%',
    zIndex: 5,
  },
  addpointButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#c7d0d1cc',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconPoint: {
    color: '#f36f5f',
    fontSize: 36,
  },
  addpointButtonActive: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#c7d0d1cc',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1.5,
    borderColor: '#f36f5f',
  },
});
