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

const FooterAreaCategory = ({goArea, setMode}) => {
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
                height: 80,
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
                <View
                  style={{
                    backgroundColor: '#0f2e47',
                    borderRadius: 20,
                    width: 40,
                    height: 40,
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
                        source={Tourimg}
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 22,
                      marginLeft: 20,
                      color: '#0f2e47',
                      fontWeight: 'bold',
                    }}>
                    Tourist
                  </Text>
                </View>
              </Left>
              <View />
              <Right style={{}}>
                <Icon
                  type="AntDesign"
                  name="closecircle"
                  style={{fontSize: 20}}
                  onPress={() => setMode('all')}
                />
              </Right>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#f8f9fa',
                marginLeft: 20,
                marginRight: 20,
                borderBottomWidth: 0.5,
                borderBottomColor: '#95a8a9',
              }}>
              <TouchableHighlight
                onPress={() => {
                  setMode('select');
                }}
                style={{
                  height: 100,
                  backgroundColor: '#faf7f1',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                }}>
                <>
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
                  </Left>
                  <View />
                  <Right style={{}}>
                    <Text
                      style={{
                        color: '#41c0c1',
                        margin: 15,
                        marginLeft: 20,
                        fontFamily: 'AvenirLTStd-Book',
                        fontSize: 18,
                      }}>
                      15 km
                    </Text>
                  </Right>
                </>
              </TouchableHighlight>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#f8f9fa',
                marginLeft: 20,
                marginRight: 20,
                borderBottomWidth: 0.5,
                borderBottomColor: '#95a8a9',
              }}>
              <TouchableHighlight
                onPress={() => {
                  setMode('select');
                }}
                style={{
                  height: 100,
                  backgroundColor: '#faf7f1',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                }}>
                <>
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
                  </Left>
                  <View />
                  <Right style={{}}>
                    <Text
                      style={{
                        color: '#41c0c1',
                        margin: 15,
                        marginLeft: 20,
                        fontFamily: 'AvenirLTStd-Book',
                        fontSize: 18,
                      }}>
                      15 km
                    </Text>
                  </Right>
                </>
              </TouchableHighlight>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#f8f9fa',
                marginLeft: 20,
                marginRight: 20,
              }}>
              <TouchableHighlight
                onPress={() => {
                  setMode('select');
                }}
                style={{
                  height: 100,
                  backgroundColor: '#faf7f1',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                }}>
                <>
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
                  </Left>
                  <View />
                  <Right style={{}}>
                    <Text
                      style={{
                        color: '#41c0c1',
                        margin: 15,
                        marginLeft: 20,
                        fontFamily: 'AvenirLTStd-Book',
                        fontSize: 18,
                      }}>
                      15 km
                    </Text>
                  </Right>
                </>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </SlidingUpPanel>
    </>
  );
};

export default FooterAreaCategory;
