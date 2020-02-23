import React, {useState, useContext} from 'react';
import {Footer, FooterTab, Icon, Text, Button} from 'native-base';
import {StyleSheet, View, TouchableHighlight, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import {StaffContext} from '../Context/StaffContext';
import {SegmentContext} from '../Context/SegmentContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import {MapContext} from '../Context/MapContext';
import areaImg from '../image/icon/n2.png';
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    backgroundColor: 'transparent',
  },
  footertab: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const FooterTools = ({
  search,
  setSearch,
  state,
  setState,
  setArea,
  setDashboard,
  setImported,
  goSearch,
  goArea,
  goDashboard,
  goCoordinate,
  mapRef,
}) => {
  const staffContext = useContext(StaffContext);
  const segmentContext = useContext(SegmentContext);
  const mapContext = useContext(MapContext);
  return (
    <Footer style={styles.footer}>
      <FooterTab style={styles.footertab}>
        <View style={{alignItems: 'center'}}>
          <Animated.View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#faf7f1',
            }}>
            <Icon
              onPress={() => {
                if (segmentContext.seg === 1) {
                  // setState({...state, seg: 0});
                  segmentContext.setSeg(0);
                  setSearch(false);
                } else {
                  // setState({...state, seg: 1});
                  segmentContext.setSeg(1);
                  setSearch(true);
                  goSearch();
                }
              }}
              name="magnifying-glass"
              type="Entypo"
              style={{
                color: segmentContext.seg === 1 ? '#41c0c1' : '#0f2e47',
              }}
            />
          </Animated.View>

          <Text
            style={{
              color: segmentContext.seg === 1 ? '#41c0c1' : '#0f2e47',
              textTransform: 'capitalize',
              fontFamily: 'AvenirLTStd-Roman',
              fontSize: 14,
            }}>
            Place
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Animated.View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#faf7f1',
            }}>
            {/* <Image source={areaImg} style={{height: '90%', width: '90%'}} /> */}
            <Icon
              onPress={() => {
                if (segmentContext.seg === 2) {
                  segmentContext.setSeg(0);
                  setArea(false);
                } else {
                  segmentContext.setSeg(2);
                  setArea(true);
                  goArea();
                }
              }}
              name="map-marker-radius"
              type="MaterialCommunityIcons"
              style={{
                color:
                  segmentContext.seg === 2 || segmentContext.seg === 8
                    ? '#41c0c1'
                    : '#0f2e47',
              }}
            />
          </Animated.View>

          <Text
            style={{
              color:
                segmentContext.seg === 2 || segmentContext.seg === 8
                  ? '#41c0c1'
                  : '#0f2e47',
              textTransform: 'capitalize',
              fontFamily: 'AvenirLTStd-Roman',
              fontSize: 14,
            }}>
            Area
          </Text>
        </View>

        {staffContext.data ? (
          <View style={{alignItems: 'center'}}>
            <Animated.View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#faf7f1',
              }}>
              <Icon
                onPress={() => {
                  if (segmentContext.seg === 3) {
                    // setState({...state, seg: 0});
                    segmentContext.setSeg(0);
                    setImported(false);
                  } else {
                    // setState({...state, seg: 3});
                    segmentContext.setSeg(3);
                    setImported(true);
                    console.log(mapRef.current);
                    mapContext.setMap(mapRef.current);
                    goCoordinate();
                    // setArea(false);
                    // setSearch(false);
                  }
                }}
                name="ios-globe"
                type="Ionicons"
                style={{
                  color: segmentContext.seg === 3 ? '#41c0c1' : '#0f2e47',
                }}
              />
            </Animated.View>

            <Text
              style={{
                color: segmentContext.seg === 3 ? '#41c0c1' : '#0f2e47',
                textTransform: 'capitalize',
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 14,
              }}>
              Coordinates
            </Text>
          </View>
        ) : (
          <View style={{alignItems: 'center'}}>
            <Animated.View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#faf7f1',
              }}>
              <Icon
                onPress={() => {
                  if (segmentContext.seg === 3) {
                    // setState({...state, seg: 0});
                    segmentContext.setSeg(0);
                    setDashboard(false);
                  } else {
                    // setState({...state, seg: 3});
                    segmentContext.setSeg(3);
                    setDashboard(true);
                    goDashboard();
                    // setArea(false);
                    // setSearch(false);
                  }
                }}
                name="dashboard"
                type="FontAwesome"
                style={{
                  color: segmentContext.seg === 3 ? '#41c0c1' : '#0f2e47',
                }}
              />
            </Animated.View>

            <Text
              style={{
                color: segmentContext.seg === 3 ? '#41c0c1' : '#0f2e47',
                textTransform: 'capitalize',
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 14,
              }}>
              Dashboard
            </Text>
          </View>
        )}
      </FooterTab>
    </Footer>
  );
};

export default FooterTools;
