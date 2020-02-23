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
import FooterAreaCategory from './FooterAreaCategory';
import FooterAreaCategorySelect from './FooterAreaCategorySelect';

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

const FooterArea = ({goArea}) => {
  const segmentContext = useContext(SegmentContext);
  const panel = createRef();
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  const data = [
    {img: Tourimg, name: 'Tourist', number: 3, color: '#0f2e47'},
    {img: Hotelimg, name: 'Hotel', number: 4, color: '#41c0c1'},
    {img: Hostelimg, name: 'Hostel', number: 2, color: '#95a8a9'},
    {img: Restaurant, name: 'Restaurant', number: 6, color: '#ec5960'},
    {img: Spa, name: 'Spa', number: 2, color: '#f36f5f'},
  ];
  const [hide, setHide] = useState(true);
  const [height, setHeight] = useState(170);
  const [mode, setMode] = useState('all');
  return (
    <>
      {mode === 'all' ? (
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
          draggableRange={{top: HEIGHT / 1.24, bottom: height}}
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
                height: 10,
                backgroundColor: '#faf7f1',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  borderTopColor: '#95a8a9',
                  borderTopWidth: 3,
                  width: '8%',
                  height: '100%',
                  marginTop: 10,
                }}
              />
            </View>
            <ScrollView>
              <View
                style={{
                  height: 90,
                  backgroundColor: '#faf7f1',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  borderBottomWidth: 0.5,
                  marginLeft: 20,
                  marginRight: 20,
                  borderBottomColor: '#95a8a9',
                }}>
                <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    type="AntDesign"
                    name="caretleft"
                    onPress={() => {
                      goArea();
                      segmentContext.setSeg(2);
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontFamily: 'AvenirLTStd-Roman',
                        fontSize: 22,
                        color: '#0f2e47',
                      }}>
                      Chachoengsao
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        fontSize: 20,
                        color: '#0f2e47',
                      }}>
                      Bangkla, Bangkla
                    </Text>
                  </View>
                </Left>
                <View />
                <Right style={{}}>
                  <TouchableHighlight
                    style={{
                      borderWidth: 2,
                      borderRadius: 8,
                      borderColor: '#ec5960',
                    }}>
                    <Text
                      style={{
                        color: '#ec5960',
                        margin: 10,
                        fontFamily: 'AvenirLTStd-Book',
                        fontSize: 18,
                      }}>
                      Reset
                    </Text>
                  </TouchableHighlight>
                </Right>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f8f9fa',
                  margin: 20,
                }}>
                <View
                  style={{
                    height: 100,
                    backgroundColor: '#faf7f1',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <ScrollView horizontal={true}>
                    {data.map(rs => {
                      return (
                        <TouchableHighlight
                          onPress={() => {
                            // setHeight(HEIGHT / 2.5);
                            setMode('category');
                          }}
                          underlayColor="#faf7f1d9"
                          key={rs.name}
                          style={{
                            backgroundColor: '#fff',
                            width: WIDTH / 3,
                            height: '95%',
                            marginRight: 20,
                            borderRadius: 8,
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 1,
                            },
                            shadowOpacity: 0.2,
                            shadowRadius: 1.41,
                            elevation: 2,
                          }}>
                          <View style={{height: '100%'}}>
                            <View
                              style={{
                                height: '50%',
                                justifyContent: 'center',
                                marginLeft: 20,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'AvenirLTStd-Roman',
                                  fontSize: 18,
                                }}>
                                {rs.name}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                              }}>
                              <Left
                                style={{
                                  width: '50%',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <View
                                  style={{
                                    backgroundColor: rs.color,
                                    borderRadius: 15,
                                    width: 30,
                                    height: 30,
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
                                        style={{
                                          width: '100%',
                                          height: '100%',
                                        }}
                                        source={rs.img}
                                      />
                                    </View>
                                  </View>
                                </View>
                              </Left>
                              <View>
                                <></>
                              </View>
                              <Right
                                style={{
                                  width: '50%',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  style={{
                                    fontFamily: 'AvenirLTStd-Roman',
                                    fontSize: 24,
                                  }}>
                                  {rs.number}
                                </Text>
                              </Right>
                            </View>
                          </View>
                        </TouchableHighlight>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>
        </SlidingUpPanel>
      ) : mode === 'category' ? (
        <FooterAreaCategory goArea={goArea} setMode={setMode} />
      ) : mode === 'select' ? (
        <FooterAreaCategorySelect goArea={goArea} setMode={setMode} />
      ) : null}
    </>
  );
};

export default FooterArea;
