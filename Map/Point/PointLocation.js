import React, {useState, useContext} from 'react';
import {StyleSheet, Image, TouchableHighlight} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {View, Icon, Left, Right, Text} from 'native-base';
import TouristImg from '../../image/tour_marker.png';
import HotelImg from '../../image/hotel_marker.png';
import HostelImg from '../../image/hostel_marker.png';
import ResImg from '../../image/restaurant_marker.png';
import SpaImg from '../../image/spa_marker.png';
import {SegmentContext} from '../../Context/SegmentContext';
import {StaffContext} from '../../Context/StaffContext';

const ANNOTATION_SIZE = 10;

const PointLocation = () => {
  const [state, setState] = useState({
    activeAnnotationIndex: -1,
    previousActiveAnnotationIndex: -1,
    scaleIn: null,
    scaleOut: null,
  });
  const segmentContext = useContext(SegmentContext);
  const point = [[100.546875, 17.308687886770034]];
  const [dataPoint, setDataPoint] = useState([
    {
      coordinate: [100.546875, 17.308687886770034],
      image: TouristImg,
      color: '#0f2e47',
    },
    {
      coordinate: [101.865234375, 15.26298855],
      image: HotelImg,
      color: '#41c0c1',
    },
    {
      coordinate: [100.5029296875, 13.944729974920167],
      image: HostelImg,
      color: '#95a8a9',
    },
    {
      coordinate: [99.49218749999999, 13.923403897723347],
      image: ResImg,
      color: '#f36f5f',
    },
    {
      coordinate: [99.68994140625, 15.262988555023204],
      image: SpaImg,
      color: '#ec5960',
    },
  ]);
  const [toggle, setToggle] = useState(true);
  const staffContext = useContext(StaffContext);

  // const defaultPoint = () => {
  //   return (
  //     <>
  //       <View style={styles.highlight}>
  //         <Text style={styles.annotationContainer}>
  //           <Image
  //             style={{
  //               width: 40,
  //               height: 30,
  //             }}
  //             source={TouristImg}
  //             resizeMode="cover"
  //           />
  //         </Text>
  //       </View>
  //     </>
  //   );
  // };
  // const selectPoint = () => {
  //   return (
  //     <Text style={styles.annotationContainer}>
  //       <Image
  //         style={{
  //           width: 40,
  //           height: 30,
  //         }}
  //         source={TouristImg}
  //         resizeMode="cover"
  //       />
  //     </Text>
  //   );
  // };
  const renderAnnotations = () => {
    const items = [];

    for (let i = 0; i < dataPoint.length; i++) {
      const coordinate = dataPoint[i].coordinate;
      const title = `Lon: ${coordinate[0]} Lat: ${coordinate[1]}`;
      const id = `pointAnnotation${i}`;

      const animationStyle = {};
      if (i === state.activeAnnotationIndex) {
        animationStyle.transform = [{scale: state.scaleIn}];
      } else if (i === state.previousActiveAnnotationIndex) {
        animationStyle.transform = [{scale: state.scaleOut}];
      }

      items.push(
        <MapboxGL.PointAnnotation
          selected={true}
          onDragStart={e => {}}
          onDragEnd={e => {
            coordinate[0] = e.geometry.coordinates[0];
            coordinate[1] = e.geometry.coordinates[1];
          }}
          onSelected={() => {
            segmentContext.setSeg(9);
          }}
          onDeselected={() => {
            segmentContext.setSeg(0);
          }}
          key={id}
          id={id}
          coordinate={coordinate}
          title={title}>
          {/* {highlight ? (
            <View style={styles.highlight} />
          ) : (
            <View style={styles.annotationContainer} />
          )} */}

          {/* {segmentContext.seg === 9
            ? defaultPoint()
            : segmentContext.seg === 0
            ? selectPoint()
            : null} */}

          {/* <View style={styles.highlight}> */}
          <Text
            style={{width: ANNOTATION_SIZE * 6, height: ANNOTATION_SIZE * 6}}>
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={dataPoint[i].image}
              // resizeMode="cover"
            />
          </Text>
          {/* </View> */}

          <MapboxGL.Callout title="This is a sample" style={{}}>
            <View
              style={{
                zIndex: 9999999,
                width: ANNOTATION_SIZE * 12,
                height: ANNOTATION_SIZE * 5,
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Left>
                <TouchableHighlight
                  onPress={() => {
                    segmentContext.setSeg(5);
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '90%',
                    backgroundColor: '#e4e2dc',
                    borderRadius: 8,
                    borderColor: '#95a8a9',
                  }}>
                  <Icon type="EvilIcons" name="trash" style={{fontSize: 32}} />
                </TouchableHighlight>
              </Left>
              <Right>
                <TouchableHighlight
                  onPress={() => {
                    console.log('object');
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '90%',
                    backgroundColor: '#e4e2dc',
                    borderRadius: 8,
                    borderWidth: 0.5,
                    borderColor: '#95a8a9',
                  }}>
                  <Icon type="Feather" name="edit" style={{fontSize: 24}} />
                </TouchableHighlight>
              </Right>
            </View>
          </MapboxGL.Callout>
        </MapboxGL.PointAnnotation>,
      );
    }

    return items;
  };

  const notAdmin = () => {
    const items = [];

    for (let i = 0; i < dataPoint.length; i++) {
      const coordinate = dataPoint[i].coordinate;
      const title = `Lon: ${coordinate[0]} Lat: ${coordinate[1]}`;
      const id = `pointAnnotation${i}`;

      const animationStyle = {};
      if (i === state.activeAnnotationIndex) {
        animationStyle.transform = [{scale: state.scaleIn}];
      } else if (i === state.previousActiveAnnotationIndex) {
        animationStyle.transform = [{scale: state.scaleOut}];
      }

      items.push(
        <MapboxGL.PointAnnotation
          selected={false}
          onDragStart={e => {}}
          onDragEnd={e => {
            coordinate[0] = e.geometry.coordinates[0];
            coordinate[1] = e.geometry.coordinates[1];
          }}
          key={id}
          id={id}
          coordinate={coordinate}
          title={title}>
          <Text
            style={{
              width: ANNOTATION_SIZE * 4,
              height: ANNOTATION_SIZE * 4,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: dataPoint[i].color,
              borderRadius: Number(ANNOTATION_SIZE * 4) / 2,
            }}>
            <Image
              style={{
                width: 40,
                height: 30,
              }}
              source={dataPoint[i].image}
              resizeMode="cover"
            />
          </Text>
        </MapboxGL.PointAnnotation>,
      );
    }

    return items;
  };

  // const renderPoint = () => {
  //   return (
  //     <MapboxGL.ShapeSource
  //       id="symbolLocationSource"
  //       hitbox={{width: 20, height: 20}}
  //       onPress={e => {
  //         console.log(e.nativeEvent.payload);
  //       }}
  //       shape={{
  //         type: 'FeatureCollection',
  //         features: [
  //           {
  //             type: 'Feature',
  //             properties: {},
  //             geometry: {
  //               type: 'Point',
  //               coordinates: [100.72265625, 32.58384932565662],
  //             },
  //           },
  //         ],
  //       }}>
  //       <MapboxGL.SymbolLayer
  //         id="symbolLocationSymbols"
  //         minZoomLevel={1}
  //         style={{
  //           iconImage: TouristImg,
  //           iconAllowOverlap: true,
  //           iconSize: 0.03,
  //         }}
  //       />
  //       <View
  //         style={{height: 40, width: 40, backgroundColor: '#000'}}
  //         pointerEvents="none">
  //         <Text style={{color: '#000', fontSize: 32}}>Something</Text>
  //       </View>
  //     </MapboxGL.ShapeSource>
  //   );
  // };

  return <>{renderAnnotations()}</>;
};

export default PointLocation;

const styles = StyleSheet.create({
  annotationContainer: {
    width: ANNOTATION_SIZE * 4,
    height: ANNOTATION_SIZE * 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f2e47',
    borderRadius: Number(ANNOTATION_SIZE * 4) / 2,
  },
  annotationFill: {
    width: ANNOTATION_SIZE - 3,
    height: ANNOTATION_SIZE - 3,
    borderRadius: (ANNOTATION_SIZE - 3) / 2,
    backgroundColor: 'orange',
    transform: [{scale: 0.6}],
  },
  highlight: {
    width: ANNOTATION_SIZE * 7,
    height: ANNOTATION_SIZE * 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ec59608c',
    borderRadius: Number(ANNOTATION_SIZE * 7) / 2,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    zIndex: 9999999,
    position: 'absolute',
  },
  tip: {
    zIndex: 1000,
    marginTop: -2,
    elevation: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 16,
    borderRightWidth: 8,
    borderBottomWidth: 0,
    borderLeftWidth: 8,
    borderTopColor: 'white',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  content: {
    position: 'relative',
    flex: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
  },
  campsiteName: {
    fontSize: 20,
    fontWeight: '500',
  },
  parkName: {
    fontSize: 20,
    color: '#aaa',
  },
  arrow: {
    width: 30,
    height: 30,
    paddingLeft: 30,
    opacity: 0.3,
  },
});
