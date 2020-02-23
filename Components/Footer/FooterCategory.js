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
import wat1 from '../../image/search/wat1.png';
import wat2 from '../../image/search/wat2.png';
import wat3 from '../../image/search/wat3.png';
import wat4 from '../../image/search/wat4.png';
import {SegmentContext} from '../../Context/SegmentContext';
import FooterPlaceSelect from './FooterPlaceSelect';

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

const FooterCategory = ({goSearch}) => {
  const segmentContext = useContext(SegmentContext);
  const [text, setText] = useState('');
  const panel = createRef();
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  const data = [{img: wat1}, {img: wat2}, {img: wat3}, {img: wat4}];
  const [hide, setHide] = useState(true);
  const [category, setCategory] = useState('all');

  return (
    <>
      <Header
        androidStatusBarColor="#41c0c1"
        style={{
          elevation: 0,
          backgroundColor: '#41c0c1',
          height: 0,
        }}
      />
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Left style={{width: '20%'}}>
            <Icon
              type="Entypo"
              name="chevron-thin-left"
              style={{color: '#faf7f1', marginLeft: 20}}
              onPress={() => {
                segmentContext.setSeg(1);
                goSearch();
              }}
            />
          </Left>
          <View style={{width: '80%'}}>
            <View style={{}}>
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
        </View>
      </View>
      {category === 'all' ? (
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
          draggableRange={{top: HEIGHT / 1.24, bottom: 0}}
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
              <TouchableHighlight
                onPress={() => {
                  setCategory('select');
                }}
                underlayColor="faf7f1d9"
                style={{
                  height: 100,
                  backgroundColor: '#faf7f1',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  borderBottomColor: '#95a8a9',
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

              <TouchableHighlight
                onPress={() => {
                  setCategory('select');
                }}
                underlayColor="faf7f1"
                style={{
                  height: 100,
                  backgroundColor: '#faf7f1',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  borderBottomColor: '#95a8a9',
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
            </ScrollView>
          </View>
        </SlidingUpPanel>
      ) : category === 'select' ? (
        <FooterPlaceSelect setCategory={setCategory} />
      ) : null}

      {hide ? (
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
                        backgroundColor: '#fff',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        borderRadius: 8,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            marginLeft: 20,
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 22,
                            color: '#41c0c1',
                          }}>
                          Show List
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </FooterTab>
          </View>
        </Footer>
      ) : null}
    </>
  );
};

export default FooterCategory;
