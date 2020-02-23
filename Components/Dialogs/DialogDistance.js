import React, {useState, useContext} from 'react';
import {Overlay} from 'react-native-elements';
import {
  Text,
  View,
  Icon,
  Left,
  Right,
  Header,
  Title,
  Item,
  Input,
} from 'native-base';
import {Dimensions, Image, TouchableHighlight, FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import tourist from '../../image/icon/tourist.png';
import Hotel from '../../image/icon/hotel-01.png';
import Hostel from '../../image/icon/hostel-02.png';
import Restuarant from '../../image/icon/restuarant-01.png';
import Spa from '../../image/icon/spa-01.png';
import {SegmentContext} from '../../Context/SegmentContext';
import locationData from '../../Data/LocationData.json';

const DialogDistance = ({visible, setVisible, error}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  const [change, setChange] = useState(false);
  const segmentContext = useContext(SegmentContext);
  const [input, setInput] = useState({from: 'Your location', to: ''});
  const [query, setQuery] = useState([]);
  return (
    <Overlay
      width="auto"
      overlayStyle={{
        backgroundColor: '#41c0c1',
        height: '100%',
      }}
      isVisible={visible}
      onBackdropPress={() => {
        setVisible(false);
      }}>
      <>
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
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: '#faf7f1',
            borderBottomWidth: 0.5,
          }}>
          <Left>
            <Icon
              onPress={() => {
                setVisible(false);
              }}
              type="Entypo"
              name="chevron-thin-left"
              style={{marginLeft: 20, color: '#fff'}}
            />
          </Left>
          <View>
            <Title style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 22}}>
              Distance
            </Title>
          </View>
          <Right />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#41c0c1',
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              backgroundColor: '#41c0c1',
              height: '100%',
            }}>
            <View
              style={{
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableHighlight
                underlayColor="#41c0c1d9"
                onPress={() => {
                  setChange(!change);
                }}>
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
                    name="swap-vertical-bold"
                    style={{color: '#faf7f1', fontSize: 48}}
                  />
                </Animated.View>
              </TouchableHighlight>
            </View>
            {change ? (
              <View
                style={{
                  width: '80%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Item>
                  <Text
                    style={{
                      color: '#faf7f1',
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 20,
                    }}>
                    To :{' '}
                  </Text>
                  <Input
                    value={input.to}
                    placeholder="You destination"
                    placeholderTextColor="#b4d4d4"
                    onChangeText={text => {
                      setInput({...input, to: text});
                      const location = locationData.filter(rs => {
                        return (
                          rs.place_name
                            .toLowerCase()
                            .indexOf(text.toLowerCase()) !== -1
                        );
                      });
                      setQuery(location);
                    }}
                    style={{
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 20,
                      color: '#faf7f1',
                    }}
                  />
                  {input.to !== '' ? (
                    <Icon
                      type="AntDesign"
                      name="closecircle"
                      style={{color: '#faf7f1', fontSize: 20}}
                      onPress={() => {
                        setInput({...input, to: ''});
                      }}
                    />
                  ) : null}
                </Item>
                <Item
                  style={{borderBottomWidth: 1, borderBottomColor: '#41c0c1'}}>
                  <Text
                    style={{
                      color: '#faf7f1',
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 20,
                    }}>
                    From :{' '}
                  </Text>
                  <Input
                    value={input.from}
                    style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 20}}
                    onChangeText={text => {
                      setInput({...input, from: text});
                    }}
                  />
                  {input.from !== '' ? (
                    <Icon
                      type="AntDesign"
                      name="closecircle"
                      style={{color: '#faf7f1', fontSize: 20}}
                      onPress={() => {
                        setInput({...input, from: ''});
                      }}
                    />
                  ) : null}
                </Item>
              </View>
            ) : (
              <View
                style={{
                  width: '80%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Item>
                  <Text
                    style={{
                      color: '#faf7f1',
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 20,
                    }}>
                    From :{' '}
                  </Text>
                  <Input
                    value={input.from}
                    style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 20}}
                    onChangeText={text => {
                      setInput({...input, from: text});
                    }}
                  />
                  {input.from !== '' ? (
                    <Icon
                      type="AntDesign"
                      name="closecircle"
                      style={{color: '#faf7f1', fontSize: 20}}
                      onPress={() => {
                        setInput({...input, from: ''});
                      }}
                    />
                  ) : null}
                </Item>
                <Item
                  style={{borderBottomWidth: 1, borderBottomColor: '#41c0c1'}}>
                  <Text
                    style={{
                      color: '#faf7f1',
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 20,
                    }}>
                    To :{' '}
                  </Text>
                  <Input
                    placeholder="You destination"
                    placeholderTextColor="#b4d4d4"
                    value={input.to}
                    onChangeText={text => {
                      setInput({...input, to: text});
                      const location = locationData.filter(rs => {
                        return (
                          rs.place_name
                            .toLowerCase()
                            .indexOf(text.toLowerCase()) !== -1
                        );
                      });
                      setQuery(location);
                    }}
                    style={{
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 20,
                      color: '#faf7f1',
                    }}
                  />
                  {input.to !== '' ? (
                    <Icon
                      type="AntDesign"
                      name="closecircle"
                      style={{color: '#faf7f1', fontSize: 20}}
                      onPress={() => {
                        setInput({...input, to: ''});
                      }}
                    />
                  ) : null}
                </Item>
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            width: WIDTH,
            backgroundColor: '#faf7f1',
            height: '80%',
          }}>
          <View
            style={{
              height: '100%',
              width: WIDTH,
            }}>
            {input.to !== '' ? (
              <FlatList
                keyExtractor={rs => rs._id}
                data={query}
                renderItem={res => {
                  return (
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 8,
                        width: '100%',
                      }}>
                      <TouchableHighlight
                        underlayColor="#faf7f1d9"
                        onPress={() => {
                          segmentContext.setSeg(5);
                          setVisible(false);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '100%',
                            backgroundColor: '#faf7f1',
                            height: HEIGHT / 10,
                            alignItems: 'center',
                            borderBottomWidth: 0.5,
                            borderBottomColor: '#95a8a9',
                            paddingLeft: 20,
                            paddingRight: 20,
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
                                  res.item.category === 'Tourist Place'
                                    ? '#0f2e47'
                                    : res.item.category === 'Spa'
                                    ? '#f36f5f'
                                    : res.item.category === 'Hotel'
                                    ? '#41c0c1'
                                    : res.item.category === 'Hostel'
                                    ? '#95a8a9'
                                    : res.item.category === 'Restaurant'
                                    ? '#ec5960'
                                    : '#000000',
                              }}>
                              {res.item.category === 'Tourist Place' ? (
                                <Image
                                  source={tourist}
                                  style={{width: 30, height: 30}}
                                />
                              ) : res.item.category === 'Spa' ? (
                                <Image
                                  source={Spa}
                                  style={{width: 30, height: 30}}
                                />
                              ) : res.item.category === 'Hotel' ? (
                                <Image
                                  source={Hotel}
                                  style={{width: 30, height: 30}}
                                />
                              ) : res.item.category === 'Hostel' ? (
                                <Image
                                  source={Hostel}
                                  style={{width: 30, height: 30}}
                                />
                              ) : res.item.category === 'Restaurant' ? (
                                <Image
                                  source={Restuarant}
                                  style={{width: 30, height: 30}}
                                />
                              ) : null}
                            </Animated.View>
                          </Left>
                          <View>
                            <Text
                              style={{
                                color: '#0f2e47',
                                fontFamily: 'AvenirLTStd-Roman',
                              }}>
                              {res.item.place_name}
                            </Text>
                            <Text
                              style={{
                                color: '#41c0c1',
                                fontFamily: 'AvenirLTStd-Roman',
                              }}>
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
                    </View>
                  );
                }}
              />
            ) : (
              <FlatList
                keyExtractor={rs => rs._id}
                data={locationData}
                renderItem={res => {
                  return (
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 8,
                        width: '100%',
                      }}>
                      <TouchableHighlight
                        underlayColor="#faf7f1d9"
                        onPress={() => {
                          segmentContext.setSeg(5);
                          setVisible(false);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '100%',
                            backgroundColor: '#faf7f1',
                            height: HEIGHT / 10,
                            alignItems: 'center',
                            borderBottomWidth: 0.5,
                            borderBottomColor: '#95a8a9',
                            paddingLeft: 20,
                            paddingRight: 20,
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
                                  res.item.category === 'Tourist Place'
                                    ? '#0f2e47'
                                    : res.item.category === 'Spa'
                                    ? '#f36f5f'
                                    : res.item.category === 'Hotel'
                                    ? '#41c0c1'
                                    : res.item.category === 'Hostel'
                                    ? '#95a8a9'
                                    : res.item.category === 'Restaurant'
                                    ? '#ec5960'
                                    : '#000000',
                              }}>
                              {res.item.category === 'Tourist Place' ? (
                                <Image
                                  source={tourist}
                                  style={{width: 30, height: 30}}
                                />
                              ) : res.item.category === 'Spa' ? (
                                <Image
                                  source={Spa}
                                  style={{width: 30, height: 30}}
                                />
                              ) : res.item.category === 'Hotel' ? (
                                <Image
                                  source={Hotel}
                                  style={{width: 30, height: 30}}
                                />
                              ) : res.item.category === 'Hostel' ? (
                                <Image
                                  source={Hostel}
                                  style={{width: 30, height: 30}}
                                />
                              ) : res.item.category === 'Restaurant' ? (
                                <Image
                                  source={Restuarant}
                                  style={{width: 30, height: 30}}
                                />
                              ) : null}
                            </Animated.View>
                          </Left>
                          <View>
                            <Text
                              style={{
                                color: '#0f2e47',
                                fontFamily: 'AvenirLTStd-Roman',
                              }}>
                              {res.item.place_name}
                            </Text>
                            <Text
                              style={{
                                color: '#41c0c1',
                                fontFamily: 'AvenirLTStd-Roman',
                              }}>
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
                    </View>
                  );
                }}
              />
            )}
          </View>
        </View>
      </>
    </Overlay>
  );
};

export default DialogDistance;
