import React, {useState, useContext, createRef} from 'react';
import {
  Footer,
  FooterTab,
  Icon,
  Text,
  Header,
  Left,
  Right,
  Input,
  Item,
} from 'native-base';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Animated from 'react-native-reanimated';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Tourimg from '../../image/icon/tourist.png';
import Hotelimg from '../../image/icon/hotel-01.png';
import Hostelimg from '../../image/icon/hostel-02.png';
import Restaurant from '../../image/icon/restuarant-01.png';
import Spa from '../../image/icon/spa-01.png';
import wat1 from '../../image/search/wat1.png';
import wat2 from '../../image/search/wat2.png';
import wat3 from '../../image/search/wat3.png';
import wat4 from '../../image/search/wat4.png';
import {SegmentContext} from '../../Context/SegmentContext';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    backgroundColor: 'transparent',
    maxHeight: '100%',
  },
  footertab: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 40,
    borderTopWidth: 0.5,
    borderTopColor: '#fff',
    borderRadius: 8,
  },
  footertab2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 100,
  },
  header: {
    position: 'absolute',
    top: 0,
    height: 70,
    backgroundColor: '#41c0c1',
    width: '100%',
    zIndex: 5,
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const FooterAreaCategorySelect = ({goArea, setMode}) => {
  const segmentContext = useContext(SegmentContext);
  const panel = createRef();
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  // const data = [
  //   {img: Tourimg, name: 'Tourist', number: 3, color: '#0f2e47'},
  //   {img: Hotelimg, name: 'Hotel', number: 4, color: '#41c0c1'},
  //   {img: Hostelimg, name: 'Hostel', number: 2, color: '#95a8a9'},
  //   {img: Restaurant, name: 'Restaurant', number: 6, color: '#ec5960'},
  //   {img: Spa, name: 'Spa', number: 2, color: '#f36f5f'},
  // ];
  const data = [{img: wat1}, {img: wat2}, {img: wat3}, {img: wat4}];
  const [hide, setHide] = useState(true);
  const [height, setHeight] = useState(Number(170));
  return (
    <>
      <SlidingUpPanel
        ref={panel}
        onDragStart={(value, gestureState) => {
          console.log(value);
          console.log(gestureState);
        }}
        onDragEnd={(value, gestureState) => {
          if (value < 50) {
            panel.current.hide();
            setHide(true);
          }
        }}
        draggableRange={{top: HEIGHT / 1.24, bottom: 200}}
        showBackdrop={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#faf7f1',
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              height: 30,
              backgroundColor: '#faf7f1',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              borderBottomWidth: 0.5,
              borderBottomColor: '#95a8a9',
            }}>
            <Left />
            <View
              style={{
                borderTopColor: '#95a8a9',
                borderTopWidth: 3,
                width: '8%',
                height: '100%',
                marginTop: 20,
              }}
            />
            <Right>
              <Icon
                type="AntDesign"
                name="closecircle"
                style={{fontSize: 20}}
                onPress={() => setMode('category')}
              />
            </Right>
          </View>
          <ScrollView>
            <View
              style={{
                flex: 1,
                backgroundColor: '#f8f9fa',
                marginLeft: 20,
                marginRight: 20,
                borderBottomWidth: 0.5,
                borderBottomColor: '#95a8a9',
              }}>
              <View
                style={{
                  height: 100,
                  backgroundColor: '#faf7f1',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                }}>
                <Left>
                  <Text
                    style={{
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 22,
                      color: '#0f2e47',
                    }}>
                    Kesorn Spa
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'AvenirLTStd-Book',
                      fontSize: 20,
                      color: '#0f2e47',
                    }}>
                    Bang
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'AvenirLTStd-Book',
                      fontSize: 18,
                      color: '#41c0c1',
                    }}>
                    15 km.
                  </Text>
                </Left>
                <View />
                <Right style={{}}>
                  {/* <Icon
                    type="AntDesign"
                    name="closecircle"
                    style={{fontSize: 20}}
                    onPress={() => setMode('all')}
                  /> */}
                  <TouchableHighlight
                    style={{
                      borderWidth: 1,
                      borderRadius: 8,
                      borderColor: '#95a8a9',
                    }}>
                    <Text
                      style={{
                        margin: 15,
                        color: '#41c0c1',
                        fontFamily: 'AvenirLTStd-Book',
                        fontSize: 18,
                      }}>
                      Distance
                    </Text>
                  </TouchableHighlight>
                </Right>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f8f9fa',
                }}>
                <ScrollView>
                  <View
                    style={{
                      height: '100%',
                      backgroundColor: '#faf7f1',
                    }}>
                    <View style={{margin: 20}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <View>
                          <ScrollView horizontal={true}>
                            {data.map((res, id) => {
                              return (
                                <TouchableHighlight
                                  key={id}
                                  style={{
                                    width: 200,
                                    height: 180,
                                    // backgroundColor: '#0f2e47',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 20,
                                  }}>
                                  <Image
                                    source={res.img}
                                    style={{width: '100%', height: '100%'}}
                                  />
                                </TouchableHighlight>
                              );
                            })}
                          </ScrollView>
                        </View>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          borderTopColor: '#95a8a9',
                          borderTopWidth: 1,
                          marginTop: 20,
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 20, marginRight: 20}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#0f2e47',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 8,
                            marginRight: 20,
                          }}>
                          <Image
                            source={Tourimg}
                            style={{width: '90%', height: '90%'}}
                          />
                        </View>
                        <Text
                          style={{
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 18,
                          }}>
                          Tourist Place
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          borderTopColor: '#95a8a9',
                          borderTopWidth: 1,
                          marginTop: 20,
                        }}
                      />
                    </View>
                    <View
                      style={{marginLeft: 20, marginRight: 20, marginTop: 20}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="MaterialCommunityIcons"
                          name="map-marker"
                          style={{fontSize: 50, marginRight: 20}}
                        />
                        <View style={{}}>
                          <Text
                            style={{
                              fontFamily: 'AvenirLTStd-Roman',
                              fontSize: 18,
                              maxWidth: '90%',
                              marginBottom: 5,
                            }}>
                            256 Pracha Neramit ,Chachoengsao 24110
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'AvenirLTStd-Roman',
                              fontSize: 18,
                              color: '#41c0c1',
                            }}>
                            13.726689 , 101.203094
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          borderTopColor: '#95a8a9',
                          borderTopWidth: 1,
                          marginTop: 20,
                        }}
                      />
                    </View>
                    <View
                      style={{marginLeft: 20, marginRight: 20, marginTop: 20}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Icon
                          type="AntDesign"
                          name="clockcircle"
                          style={{fontSize: 50, marginRight: 20}}
                        />
                        <Text
                          style={{
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 18,
                          }}>
                          Open : 9.00 - 18.00
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          borderTopColor: '#95a8a9',
                          borderTopWidth: 1,
                          marginTop: 20,
                        }}
                      />
                    </View>
                    <View style={{margin: 20}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginBottom: 140,
                        }}>
                        <Left
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Icon
                            type="Octicons"
                            name="checklist"
                            style={{fontSize: 50, marginRight: 20}}
                          />
                          <Text
                            style={{
                              fontFamily: 'AvenirLTStd-Roman',
                              fontSize: 18,
                            }}>
                            Detail....
                          </Text>
                        </Left>
                        <View>
                          <></>
                        </View>
                        <Right>
                          <Icon
                            type="Entypo"
                            name="chevron-thin-right"
                            onPress={() => console.log('object')}
                          />
                        </Right>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SlidingUpPanel>

      <Footer style={styles.footer}>
        <View style={{height: '100%'}}>
          <FooterTab style={styles.footertab2}>
            <View
              style={{
                width: '100%',
                backgroundColor: '#faf7f1',
                height: '100%',
              }}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#faf7f1',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: '#faf7f1',
                    height: '100%',
                  }}>
                  <TouchableHighlight
                    onPress={() => {
                      panel.current.show();
                      setHide(false);
                    }}
                    underlayColor="#faf7f1d9"
                    style={{
                      backgroundColor: '#41c0c1',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 8,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        type="Entypo"
                        name="mail-with-circle"
                        style={{color: '#fff', fontSize: 36}}
                      />
                      <Text
                        style={{
                          marginLeft: 20,
                          fontFamily: 'AvenirLTStd-Roman',
                          fontSize: 22,
                          color: '#faf7f1',
                        }}>
                        Share Location
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </FooterTab>
        </View>
      </Footer>
    </>
  );
};

export default FooterAreaCategorySelect;
