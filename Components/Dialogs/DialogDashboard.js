import React, {useState, useContext} from 'react';
import {Overlay} from 'react-native-elements';
import {
  Text,
  View,
  Button,
  Content,
  Icon,
  Container,
  Left,
  Right,
  Header,
  Body,
  Item,
  Input,
  Footer,
  FooterTab,
} from 'native-base';
import {
  Dimensions,
  Image,
  TouchableHighlight,
  Picker,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Animated from 'react-native-reanimated';
import tourist from '../../image/icon/tourist.png';
import Hotel from '../../image/icon/hotel-01.png';
import Hostel from '../../image/icon/hostel-02.png';
import Restuarant from '../../image/icon/restuarant-01.png';
import Spa from '../../image/icon/spa-01.png';
import dashboard from '../../image/dashboard.png';
import {SegmentContext} from '../../Context/SegmentContext';
import {StaffContext} from '../../Context/StaffContext';

const DialogDashboard = ({
  // visible, setVisible, setSegment, segment
  navigation,
}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  const segmentContext = useContext(SegmentContext);
  const staffContext = useContext(StaffContext);

  const data = [
    {name: 'Tourist', image: tourist, color: '#0f2e47'},
    {name: 'Hotel', image: Hotel, color: '#41c0c1'},
    {name: 'Hostel', image: Hostel, color: '#95a8a9'},
    {name: 'Restaurants', image: Restuarant, color: '#f36f5f'},
    {name: 'Spa', image: Spa, color: '#ec5960'},
  ];

  const [text, setText] = useState('');
  return (
    <>
      <View style={{backgroundColor: '#41c0c1', height: '90%', width: '100%'}}>
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
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: '#faf7f1',
            borderBottomWidth: 0.5,
          }}>
          <Left>
            <Icon
              onPress={() => {
                navigation.navigate('tourism');
                segmentContext.setSeg(0);
              }}
              type="MaterialCommunityIcons"
              name="map"
              style={{marginLeft: 20, color: '#fff', fontSize: 24}}
            />
          </Left>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 22,
                color: '#faf7f1',
              }}>
              Dashboard
            </Text>
          </View>
          <Right />
        </View>
        <ScrollView
          style={{
            width: WIDTH,
            backgroundColor: '#faf7f1',
            height: '100%',
          }}>
          <View
            style={{
              width: WIDTH,
              backgroundColor: '#faf7f1',
              height: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <TouchableHighlight style={{margin: 10}}>
                <Text
                  style={{
                    fontFamily: 'AvenirLTStd-Roman',
                    fontSize: 20,
                    color: '#0f2e47',
                  }}>
                  All
                </Text>
              </TouchableHighlight>
              <TouchableHighlight style={{margin: 10}}>
                <Text
                  style={{
                    fontFamily: 'AvenirLTStd-Roman',
                    fontSize: 20,
                    color: '#95a8a9',
                  }}>
                  EEC
                </Text>
              </TouchableHighlight>
              <TouchableHighlight style={{margin: 10}}>
                <Text
                  style={{
                    fontFamily: 'AvenirLTStd-Roman',
                    fontSize: 20,
                    color: '#95a8a9',
                  }}>
                  Rivera
                </Text>
              </TouchableHighlight>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={dashboard} style={{width: 150, height: 150}} />
            </View>
            <View
              style={{
                width: WIDTH,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{width: '85%', flexDirection: 'row', marginBottom: 10}}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text
                    style={{
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 18,
                      color: '#95a8a9',
                    }}>
                    Select Area
                  </Text>
                </View>
                <View style={{flex: 1}} />
                <View style={{justifyContent: 'flex-end'}}>
                  <Text
                    style={{
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 18,
                      color: '#ec5960',
                    }}>
                    Reset
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  width: '85%',
                }}>
                <View style={{margin: 10}}>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#faf7f1',
                    }}>
                    <Picker
                      style={{
                        height: HEIGHT / 15,
                        width: '100%',
                        fontFamily: 'AvenirLTStd-Roman',
                      }}>
                      <Picker.Item label="All Province" value="aprovince" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#faf7f1',
                    }}>
                    <Picker
                      style={{
                        height: HEIGHT / 15,
                        width: '100%',
                        fontFamily: 'AvenirLTStd-Roman',
                      }}>
                      <Picker.Item label="All District" value="district" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                  </View>
                  <View>
                    <Picker
                      style={{
                        height: HEIGHT / 15,
                        width: '100%',
                        fontFamily: 'AvenirLTStd-Roman',
                      }}>
                      <Picker.Item label="All Sub District" value="asd" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                  </View>
                </View>
              </View>
              <View style={{width: '85%', marginTop: 20, flexDirection: 'row'}}>
                {data.map(rs => {
                  return (
                    <TouchableHighlight
                      underlayColor="#faf7f1d9"
                      key={rs.name}
                      onPress={() => {
                        console.log('object');
                      }}
                      style={{marginBottom: 20, marginRight: 10}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            backgroundColor: rs.color,
                            borderRadius: 8,
                            width: WIDTH / 7,
                            height: HEIGHT / 14,
                          }}>
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '100%',
                              width: '100%',
                            }}>
                            <View
                              style={{
                                width: '100%',
                                height: '65%',
                              }}>
                              <Image
                                style={{width: '100%', height: '100%'}}
                                source={rs.image}
                              />
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            marginTop: 10,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'AvenirLTStd-Roman',
                              fontSize: 14,
                            }}>
                            {rs.name}
                          </Text>
                        </View>
                        <View
                          style={{
                            marginTop: 10,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'AvenirLTStd-Roman',
                              fontSize: 18,
                              fontWeight: 'bold',
                            }}>
                            50
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
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
    </>
  );
};

export default DialogDashboard;

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
