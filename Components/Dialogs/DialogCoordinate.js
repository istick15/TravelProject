import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  Icon,
  Header,
  Item,
  Input,
  Label,
  Footer,
  FooterTab,
} from 'native-base';
import {Dimensions, TouchableHighlight, StyleSheet, Image} from 'react-native';
import {SegmentContext} from '../../Context/SegmentContext';
import {StaffContext} from '../../Context/StaffContext';
import Animated from 'react-native-reanimated';
import {MapContext} from '../../Context/MapContext';
import {CameraContext} from '../../Context/CameraContext';
import {AddNewContext} from '../../Context/AddNewContext';
import CoorImage from '../../image/icon/n4.png';

const DialogCoordinate = ({navigation}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  const segmentContext = useContext(SegmentContext);
  const staffContext = useContext(StaffContext);
  const [coordinates, setCoordinates] = useState({lat: null, log: null});
  const [error, setError] = useState({status: false, text: ''});
  const cameraContext = useContext(CameraContext);
  const addnewContext = useContext(AddNewContext);
  const onApply = () => {
    if (coordinates.lat !== '' && coordinates.log !== '') {
      if (isNaN(coordinates.lat) || isNaN(coordinates.log)) {
        setError({
          ...error,
          status: true,
          text: 'latitude and longitude is not geometry type',
        });
      } else {
        if (coordinates.lat < 90 && coordinates.lat > -90) {
          segmentContext.setSeg(0);
          navigation.navigate('tourism');

          setError({
            ...error,
            status: false,
            text: '',
          });

          setTimeout(() => {
            segmentContext.setSeg(4);
            cameraContext.setState({
              ...cameraContext.state,
              camera: 13,
              center: [Number(coordinates.log), Number(coordinates.lat)],
            });
            setTimeout(() => {
              addnewContext.setData(true);
            }, 2000);
            setTimeout(() => {
              addnewContext.setData(false);
            }, 4000);
          }, 500);
        } else {
          setError({
            ...error,
            status: true,
            text: 'latiitude must be -90 and 90',
          });
        }
      }
    } else {
      setError({
        ...error,
        status: true,
        text: 'latitude and longitude is required',
      });
    }
  };

  return (
    <View style={{backgroundColor: '#41c0c1', height: '100%', width: '100%'}}>
      <Header
        androidStatusBarColor="#41c0c1"
        style={{
          elevation: 0,
          backgroundColor: '#41c0c1',
          height: 0,
        }}
      />
      <View
        style={{
          width: WIDTH,
          backgroundColor: '#41c0c1',
          height: 35,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <Icon
          onPress={() => {
            segmentContext.setSeg(0);
            navigation.navigate('tourism');
          }}
          type="Entypo"
          name="chevron-left"
          style={{marginLeft: 20, color: '#fff', fontSize: 22}}
        />
      </View>
      <View
        style={{
          width: WIDTH,
          backgroundColor: '#41c0c1',
          height: '20%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image style={{height: 60, width: 60}} source={CoorImage} />
        <Text
          style={{
            fontFamily: 'AvenirLTStd-Roman',
            fontSize: 22,
            color: '#faf7f1',
            marginTop: 10,
          }}>
          Coordinates
        </Text>
      </View>
      <View
        style={{
          width: WIDTH,
          backgroundColor: '#faf7f1',
          height: '80%',
        }}>
        <View
          style={{
            height: '75%',
            width: WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '85%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 18,
                color: '#0f2e47',
              }}>
              Designate location by coordinate
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              width: '85%',
              marginBottom: 20,
            }}>
            <View
              style={{
                margin: 20,
              }}>
              <Item stackedLabel style={{marginBottom: 20}}>
                <Label
                  style={{fontFamily: 'AvenirLTStd-Book', color: '#95a8a9'}}>
                  Latitude
                </Label>
                <Input
                  style={{
                    fontFamily: 'AvenirLTStd-Book',
                    borderBottomWidth: 1.5,
                    borderBottomColor: '#41c0c1',
                    width: '100%',
                  }}
                  value={coordinates.lat}
                  onChangeText={text => {
                    setCoordinates({...coordinates, lat: text});
                  }}
                />
              </Item>
              <Item stackedLabel style={{marginBottom: 20}}>
                <Label
                  style={{fontFamily: 'AvenirLTStd-Book', color: '#95a8a9'}}>
                  Longitude
                </Label>
                <Input
                  style={{
                    fontFamily: 'AvenirLTStd-Book',
                    borderBottomWidth: 1.5,
                    borderBottomColor: '#41c0c1',
                    width: '100%',
                  }}
                  value={coordinates.log}
                  onChangeText={text => {
                    setCoordinates({...coordinates, log: text});
                  }}
                />
              </Item>
              {error.status ? (
                <View>
                  <Text
                    style={{color: '#ec5960', fontFamily: 'AvenirLTStd-Book'}}>
                    {error.text}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              width: '85%',
              marginBottom: 20,
            }}>
            <TouchableHighlight
              underlayColor="#41c0c1d9"
              onPress={() => {
                // segmentContext.setSeg(0);
                // navigation.navigate('tourism');

                // console.log(mapContext.map);
                onApply();
              }}
              style={{
                backgroundColor: '#41c0c1',
                width: '100%',
                height: HEIGHT / 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: '#faf7f1',
                  fontFamily: 'AvenirLTStd-Roman',
                  fontSize: 22,
                }}>
                Apply
              </Text>
            </TouchableHighlight>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              width: '85%',
              marginBottom: 20,
            }}>
            <TouchableHighlight
              onPress={() => {
                segmentContext.setSeg(0);
                navigation.navigate('tourism');
              }}
              underlayColor="#faf7f1d9"
              style={{
                height: HEIGHT / 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 8,
                borderColor: '#ec5960',
              }}>
              <Text
                style={{
                  fontFamily: 'AvenirLTStd-Roman',
                  fontSize: 22,
                  color: '#ec5960',
                }}>
                Cancel
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
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
                name="magnifying-glass"
                type="Entypo"
                style={{
                  color: segmentContext.seg === 1 ? '#41c0c1' : '#0f2e47',
                }}
                onPress={() => {
                  if (segmentContext.seg === 1) {
                    segmentContext.setSeg(0);
                    navigation.navigate('tourism');
                  } else {
                    segmentContext.setSeg(1);
                    navigation.navigate('search');
                  }
                }}
              />
            </Animated.View>

            <Text
              style={{
                textTransform: 'capitalize',
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 14,
                color: segmentContext.seg === 1 ? '#41c0c1' : '#0f2e47',
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
              <Icon
                name="map-marker-radius"
                type="MaterialCommunityIcons"
                style={{
                  color: segmentContext.seg === 2 ? '#41c0c1' : '#0f2e47',
                }}
                onPress={() => {
                  if (segmentContext.seg === 2) {
                    segmentContext.setSeg(0);
                    navigation.navigate('tourism');
                  } else {
                    segmentContext.setSeg(2);
                    navigation.navigate('area');
                  }
                }}
              />
            </Animated.View>

            <Text
              style={{
                textTransform: 'capitalize',
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 14,
                color: segmentContext.seg === 2 ? '#41c0c1' : '#0f2e47',
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
                  name="ios-globe"
                  type="Ionicons"
                  style={{
                    color: segmentContext.seg === 3 ? '#41c0c1' : '#0f2e47',
                  }}
                  onPress={() => {
                    if (segmentContext.seg === 3) {
                      segmentContext.setSeg(0);
                      navigation.navigate('tourism');
                    } else {
                      segmentContext.setSeg(3);
                      navigation.navigate('coordinate');
                    }
                  }}
                />
              </Animated.View>

              <Text
                style={{
                  textTransform: 'capitalize',
                  fontFamily: 'AvenirLTStd-Roman',
                  fontSize: 14,
                  color: segmentContext.seg === 3 ? '#41c0c1' : '#0f2e47',
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
                  name="dashboard"
                  type="FontAwesome"
                  style={{
                    color: segmentContext.seg === 3 ? '#41c0c1' : '#0f2e47',
                  }}
                  onPress={() => {
                    if (segmentContext.seg === 3) {
                      segmentContext.setSeg(0);
                      navigation.navigate('tourism');
                    } else {
                      segmentContext.setSeg(3);
                      navigation.navigate('dashboard');
                    }
                  }}
                />
              </Animated.View>

              <Text
                style={{
                  textTransform: 'capitalize',
                  fontFamily: 'AvenirLTStd-Roman',
                  fontSize: 14,
                  color: segmentContext.seg === 3 ? '#41c0c1' : '#0f2e47',
                }}>
                Dashboard
              </Text>
            </View>
          )}
        </FooterTab>
      </Footer>
    </View>
  );
};

export default DialogCoordinate;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    backgroundColor: 'transparent',
  },
  footertab: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    borderTopWidth: 0.5,
    borderTopColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
