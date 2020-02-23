import React, {useState, useContext} from 'react';
import {Overlay} from 'react-native-elements';
import {
  Text,
  View,
  Icon,
  Left,
  Header,
  Item,
  Input,
  Footer,
  FooterTab,
  Right,
} from 'native-base';
import {Dimensions, Image, TouchableHighlight, StyleSheet} from 'react-native';
import tourist from '../../image/icon/tourist.png';
import Hotel from '../../image/icon/hotel-01.png';
import Hostel from '../../image/icon/hostel-02.png';
import Restuarant from '../../image/icon/restuarant-01.png';
import Spa from '../../image/icon/spa-01.png';
import Animated from 'react-native-reanimated';
import {StaffContext} from '../../Context/StaffContext';
import {SegmentContext} from '../../Context/SegmentContext';
import locationData from '../../Data/LocationData.json';

const DialogSearch = ({navigation}) => {
  const staffContext = useContext(StaffContext);
  const segmentContext = useContext(SegmentContext);
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');

  const data = [
    {name: 'Tourist', image: tourist, color: '#0f2e47'},
    {name: 'Hotel', image: Hotel, color: '#41c0c1'},
    {name: 'Hostel', image: Hostel, color: '#95a8a9'},
    {name: 'Restaurants', image: Restuarant, color: '#ec5960'},
    {name: 'Spa', image: Spa, color: '#f36f5f'},
  ];
  const [text, setText] = useState('');
  const [query, setQuery] = useState([]);

  const renderSearch = () => {
    const render = query.map(rs => {
      return (
        <TouchableHighlight
          key={rs._id}
          underlayColor="#faf7f1d9"
          onPress={() => {
            // segmentContext.setSeg(5);
            navigation.navigate('tourism');
            segmentContext.setSeg(6);
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              backgroundColor: '#faf7f1',
              height: HEIGHT / 10,
              borderBottomWidth: 0.5,
              borderBottomColor: '#95a8a9',
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: 'center',
            }}>
            <Left>
              <Animated.View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    rs.category === 'Tourist Place'
                      ? '#0f2e47'
                      : rs.category === 'Spa'
                      ? '#f36f5f'
                      : rs.category === 'Hotel'
                      ? '#41c0c1'
                      : rs.category === 'Hostel'
                      ? '#95a8a9'
                      : rs.category === 'Restaurant'
                      ? '#ec5960'
                      : '#000000',
                }}>
                {rs.category === 'Tourist Place' ? (
                  <Image source={tourist} style={{width: 30, height: 30}} />
                ) : rs.category === 'Spa' ? (
                  <Image source={Spa} style={{width: 30, height: 30}} />
                ) : rs.category === 'Hotel' ? (
                  <Image source={Hotel} style={{width: 30, height: 30}} />
                ) : rs.category === 'Hostel' ? (
                  <Image source={Hostel} style={{width: 30, height: 30}} />
                ) : rs.category === 'Restaurant' ? (
                  <Image source={Restuarant} style={{width: 30, height: 30}} />
                ) : null}
              </Animated.View>
            </Left>
            <View>
              <Text style={{color: '#0f2e47', fontFamily: 'AvenirLTStd-Roman'}}>
                {rs.place_name}
              </Text>
              <Text style={{color: '#41c0c1', fontFamily: 'AvenirLTStd-Roman'}}>
                15 km
              </Text>
            </View>
            <Right>
              <Animated.View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="arrow-top-left"
                  style={{color: '#0f2e47', fontSize: 36}}
                />
              </Animated.View>
            </Right>
          </View>
        </TouchableHighlight>
      );
    });

    return render;
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
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomColor: '#faf7f1',
          borderBottomWidth: 0.5,
        }}>
        <Left style={{width: '10%'}}>
          <Icon
            onPress={() => {
              navigation.navigate('tourism');
              segmentContext.setSeg(0);
            }}
            type="Entypo"
            name="chevron-thin-left"
            style={{marginLeft: 20, color: '#fff', fontSize: 22}}
          />
        </Left>
        <View
          style={{width: '85%', flexDirection: 'row', alignItems: 'center'}}>
          <Item
            style={{
              width: '95%',
              borderBottomWidth: 1,
              borderBottomColor: '#41c0c1',
            }}>
            <Input
              placeholder="Search"
              placeholderTextColor="#faf7f1"
              value={text}
              onChangeText={t => {
                setText(t);
                const location = locationData.filter(rs => {
                  return (
                    rs.place_name.toLowerCase().indexOf(t.toLowerCase()) !== -1
                  );
                });
                setQuery(location);
              }}
              style={{
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 22,
                color: '#faf7f1',
              }}
            />
            {text.trim() !== '' ? (
              <Icon
                type="AntDesign"
                name="closecircle"
                style={{color: '#faf7f1', fontSize: 20}}
                onPress={() => {
                  setText('');
                }}
              />
            ) : null}
          </Item>
        </View>
      </View>

      <View
        style={{
          width: WIDTH,
          backgroundColor: '#faf7f1',
          height: '100%',
        }}>
        {text.trim() !== '' ? (
          // <TouchableHighlight
          //   underlayColor="#faf7f1d9"
          //   onPress={() => {
          //     // segmentContext.setSeg(5);
          //     navigation.navigate('tourism');
          //     segmentContext.setSeg(6);
          //   }}>
          //   <View
          //     style={{
          //       flexDirection: 'row',
          //       width: '100%',
          //       backgroundColor: '#faf7f1',
          //       height: HEIGHT / 10,
          //       alignItems: 'center',
          //       borderBottomWidth: 0.5,
          //       borderBottomColor: '#95a8a9',
          //       paddingLeft: 20,
          //       paddingRight: 20,
          //     }}>
          //     <Left>
          //       <Animated.View
          //         style={{
          //           height: 50,
          //           width: 50,
          //           borderRadius: 25,
          //           justifyContent: 'center',
          //           alignItems: 'center',
          //           backgroundColor: '#0f2e47',
          //         }}>
          //         <Image source={tourist} style={{width: 30, height: 30}} />
          //       </Animated.View>
          //     </Left>
          //     <View>
          //       <Text
          //         style={{color: '#0f2e47', fontFamily: 'AvenirLTStd-Roman'}}>
          //         Wat
          //       </Text>
          //       <Text
          //         style={{color: '#41c0c1', fontFamily: 'AvenirLTStd-Roman'}}>
          //         15 km
          //       </Text>
          //     </View>
          //     <Right>
          //       <Animated.View
          //         style={{
          //           height: 50,
          //           width: 50,
          //           borderRadius: 25,
          //           justifyContent: 'center',
          //           alignItems: 'center',
          //         }}>
          //         <Icon
          //           type="MaterialCommunityIcons"
          //           name="arrow-top-left"
          //           style={{color: '#0f2e47', fontSize: 36}}
          //         />
          //       </Animated.View>
          //     </Right>
          //   </View>
          // </TouchableHighlight>
          <>{renderSearch()}</>
        ) : (
          <>
            <View style={{margin: 20}}>
              <Text style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 24}}>
                Category
              </Text>
            </View>
            <View
              style={{
                width: WIDTH,
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: 10,
              }}>
              {data.map(rs => {
                return (
                  <TouchableHighlight
                    underlayColor="#faf7f1d9"
                    key={rs.name}
                    onPress={() => {
                      navigation.navigate('tourism');
                      segmentContext.setSeg(7);
                    }}
                    style={{marginBottom: 20, marginLeft: 20, marginRight: 20}}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View
                        style={{
                          backgroundColor: rs.color,
                          borderRadius: 8,
                          width: 90,
                          height: 90,
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
                        <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>
                          {rs.name}
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </View>
          </>
        )}
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

export default DialogSearch;

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
