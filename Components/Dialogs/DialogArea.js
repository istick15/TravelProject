import React, {useState, useContext, useEffect} from 'react';
import {Overlay} from 'react-native-elements';
import {Text, View, Icon, Header, Footer, FooterTab} from 'native-base';
import {
  Dimensions,
  Image,
  TouchableHighlight,
  Picker,
  StyleSheet,
} from 'react-native';

import Area from '../../image/icon/area.png';
import {SegmentContext} from '../../Context/SegmentContext';
import Animated from 'react-native-reanimated';
import {StaffContext} from '../../Context/StaffContext';
import areaData from '../../Data/AreaData.json';
import districtData from '../../Data/DistrictData.json';
import subDistrictData from '../../Data/SubDistricData.json';

const DialogArea = ({navigation}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  const segmentContext = useContext(SegmentContext);
  const staffContext = useContext(StaffContext);
  const [area, setArea] = useState({province: '', district: '', subdis: ''});
  const [data, setData] = useState({province: [], district: [], subdis: []});

  useEffect(() => {
    const province = areaData.filter(pv => {
      return pv.PROVINCE_NAME;
    });
    setData({...data, province: province});
  }, []);

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
          name="chevron-thin-left"
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
        <View style={{height: '40%', width: '20%', margin: 10}}>
          <Image source={Area} style={{height: '100%', width: '100%'}} />
        </View>
        <Text
          style={{
            fontFamily: 'AvenirLTStd-Roman',
            fontSize: 24,
            color: '#faf7f1',
          }}>
          Select your area
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
            width: WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              width: '85%',
              marginBottom: 20,
            }}>
            <View
              style={{
                margin: 10,
              }}>
              <View
                style={{borderBottomWidth: 1.5, borderBottomColor: '#faf7f1'}}>
                <Picker
                  selectedValue={area.province}
                  onValueChange={val => {
                    setArea({...area, province: val});

                    const dist = districtData.filter(dis => {
                      return dis.PROVINCE_ID === val;
                    });

                    setData({...data, district: dist});
                  }}
                  style={{
                    height: HEIGHT / 15,
                    width: '100%',
                    fontFamily: 'AvenirLTStd-Roman',
                  }}>
                  <Picker.Item label="All Province" value="" />
                  {data.province.map(pv => {
                    return (
                      <Picker.Item
                        key={pv.PROVINCE_ID}
                        label={pv.PROVINCE_NAME}
                        value={pv.PROVINCE_ID}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View
                style={{borderBottomWidth: 1.5, borderBottomColor: '#faf7f1'}}>
                <Picker
                  selectedValue={area.district}
                  onValueChange={val => {
                    setArea({...area, district: val});

                    const subdist = subDistrictData.filter(dis => {
                      return dis.DISTRICT_ID === val;
                    });

                    setData({...data, subdis: subdist});
                  }}
                  style={{
                    height: HEIGHT / 15,
                    width: '100%',
                    fontFamily: 'AvenirLTStd-Roman',
                  }}>
                  <Picker.Item label="All District" value="" />
                  {data.district.map(dis => {
                    return (
                      <Picker.Item
                        key={dis.DISTRICT_ID}
                        label={dis.DISTRICT_NAME}
                        value={dis.DISTRICT_ID}
                      />
                    );
                  })}
                  {/* <Picker.Item label="Bangkla" value="Bangkla" /> */}
                </Picker>
              </View>
              <View>
                <Picker
                  selectedValue={area.subdis}
                  onValueChange={val => {
                    setArea({...area, subdis: val});
                  }}
                  style={{
                    height: HEIGHT / 15,
                    width: '100%',
                    fontFamily: 'AvenirLTStd-Roman',
                  }}>
                  <Picker.Item label="All Sub District" value="" />
                  {data.subdis.map(sub => {
                    return (
                      <Picker.Item
                        key={sub.SUB_DISTRICT_ID}
                        label={sub.SUB_DISTRICT_NAME}
                        value={sub.SUB_DISTRICT_ID}
                      />
                    );
                  })}
                  {/* <Picker.Item label="Bangkla" value="Bangkla" /> */}
                </Picker>
              </View>
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
                segmentContext.setSeg(8);
                navigation.navigate('tourism');
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
                setArea({
                  ...area,
                  province: '',
                  district: '',
                  subdis: '',
                });
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
                Reset
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

export default DialogArea;

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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
