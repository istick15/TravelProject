import React, {useState, useContext} from 'react';
import {Overlay} from 'react-native-elements';
import {
  Text,
  View,
  Button,
  Icon,
  Left,
  Right,
  Header,
  Item,
  Input,
  Label,
  Footer,
  FooterTab,
} from 'native-base';
import {
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from 'react-native';
import tourist from '../../image/icon/tourist.png';
import Hotel from '../../image/icon/hotel-01.png';
import Hostel from '../../image/icon/hostel-02.png';
import Restuarant from '../../image/icon/restuarant-01.png';
import Spa from '../../image/icon/spa-01.png';
import ModalDropdown from 'react-native-modal-dropdown';
import {TimePicker} from 'react-native-propel-kit';
import ImagePicker from 'react-native-image-picker';
import Delete from '../../image/icon/delete.png';
import {DialogContext} from '../../Context/DialogContext';
import {SegmentContext} from '../../Context/SegmentContext';

const DialogEditPlace = ({
  visible,
  setVisible,
  setSegment,
  segment,
  setAlready,
}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  //   const [category, setCategory] = useState('Select Category');
  const [category, setCategory] = useState('Hotel');
  const [upload, setUpload] = useState(false);
  const [image, setImage] = useState([]);
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const dialogContext = useContext(DialogContext);
  const segmentContext = useContext(SegmentContext);
  const [place, setPlace] = useState({
    name: 'test',
    address: 'test',
    detail: 'test',
  });

  const data = [
    {name: 'Tourist', image: tourist, color: '#0f2e47'},
    {name: 'Hotel', image: Hotel, color: '#41c0c1'},
    {name: 'Hostel', image: Hostel, color: '#95a8a9'},
    {name: 'Restaurants', image: Restuarant, color: '#ec5960'},
    {name: 'Spa', image: Spa, color: '#f36f5f'},
  ];

  const selectPhoto = async () => {
    ImagePicker.showImagePicker(response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(source);

        const ImageData = [...image];
        ImageData.push(source);
        setImage(ImageData);
        setUpload(true);
      }
    });
  };

  const dropdownRender = (rowData, rowID) => {
    return (
      <TouchableHighlight
        style={{
          fontFamily: 'AvenirLTStd-Roman',
          color: '#95a8a9',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Left style={{margin: 10}}>
            <View
              style={{
                backgroundColor: rowData.color,
                borderRadius: 8,
                width: 50,
                height: 50,
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
                    source={rowData.image}
                  />
                </View>
              </View>
            </View>
          </Left>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>{rowData.name}</Text>
          </View>
          <Right />
        </View>
      </TouchableHighlight>
    );
  };
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
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'AvenirLTStd-Roman',
              fontSize: 24,
              color: '#faf7f1',
            }}>
            Add New Place
          </Text>
        </View>
        <View
          style={{
            width: WIDTH,
            backgroundColor: '#faf7f1',
            height: '95%',
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
                backgroundColor: '#fff',
                borderRadius: 8,
                width: '85%',
                height: '100%',
              }}>
              <View
                style={{
                  margin: 20,
                }}>
                <ScrollView>
                  <Item stackedLabel style={{marginBottom: 20}}>
                    <Label
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        color: '#95a8a9',
                      }}>
                      Place name
                    </Label>
                    <Input
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        borderBottomWidth: 1.5,
                        borderBottomColor: '#41c0c1',
                        width: '100%',
                      }}
                      value={place.name}
                      onChangeText={text => {
                        setPlace({...place, name: text});
                      }}
                    />
                  </Item>
                  <View style={{marginBottom: 20}}>
                    <Label
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        color: '#95a8a9',
                      }}>
                      Category
                    </Label>
                    <View
                      style={{
                        backgroundColor: '#d5dcdd',
                        borderRadius: 8,
                        width: '100%',
                        marginTop: 20,
                        flexDirection: 'row',
                        height: HEIGHT / 15,
                      }}>
                      <ModalDropdown
                        defaultValue={category}
                        defaultIndex={-1}
                        renderButtonText={rowData => {
                          return (
                            <>
                              <Text
                                style={{
                                  fontFamily: 'AvenirLTStd-Book',
                                  fontSize: 18,
                                  color: '#0f2e47',
                                }}>
                                {rowData.name}
                              </Text>
                            </>
                          );
                        }}
                        onSelect={(index, value) => {
                          setCategory(value.name);
                        }}
                        options={data}
                        style={{
                          width: '90%',
                          justifyContent: 'center',
                        }}
                        renderRow={dropdownRender}
                        textStyle={{
                          fontFamily: 'AvenirLTStd-Book',
                          fontSize: 18,
                          color: '#95a8a9',
                          marginLeft: 20,
                        }}
                        dropdownStyle={{
                          width: '75%',
                          justifyContent: 'center',
                          height: HEIGHT / 2.1,
                          borderRadius: 8,
                        }}
                      />
                      <View />
                      <View style={{width: '10%', justifyContent: 'center'}}>
                        <Icon
                          type="FontAwesome"
                          name="sort"
                          style={{marginRight: 10, color: '#41c0c1'}}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderTopColor: '#41c0c1',
                      borderTopWidth: 1.5,
                      marginBottom: 20,
                    }}
                  />
                  <Item stackedLabel style={{marginBottom: 20}}>
                    <Label
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        color: '#95a8a9',
                      }}>
                      Address
                    </Label>
                    <Input
                      value={place.address}
                      onChangeText={text => {
                        setPlace({...place, address: text});
                      }}
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        borderBottomWidth: 1.5,
                        borderBottomColor: '#41c0c1',
                        width: '100%',
                      }}
                    />
                  </Item>
                  <View
                    style={{
                      marginBottom: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{width: '48%'}}>
                      <Label
                        style={{
                          fontFamily: 'AvenirLTStd-Book',
                          color: '#95a8a9',
                        }}>
                        Time Open
                      </Label>
                      <View
                        style={{
                          backgroundColor: '#d5dcdd',
                          borderRadius: 8,
                          width: '100%',
                          marginTop: 20,
                          justifyContent: 'center',
                          height: HEIGHT / 15,
                        }}>
                        <View
                          style={{
                            height: '100%',
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Left>
                            <TimePicker
                              value={time}
                              title="Open"
                              onChange={e => {
                                console.log(e);
                                setTime(e);
                              }}
                              style={{
                                color: '#0f2e47',
                                fontFamily: 'AvenirLTStd-Book',
                                height: '100%',
                                marginTop: 30,
                                marginLeft: 10,
                                fontSize: 18,
                              }}
                            />
                          </Left>
                          <View />
                          <Right>
                            <Icon
                              type="FontAwesome"
                              name="sort"
                              style={{marginRight: 10, color: '#41c0c1'}}
                            />
                          </Right>
                        </View>
                      </View>
                    </View>
                    <View style={{width: '48%'}}>
                      <Label
                        style={{
                          fontFamily: 'AvenirLTStd-Book',
                          color: '#95a8a9',
                        }}>
                        Time Closed
                      </Label>
                      <View
                        style={{
                          backgroundColor: '#d5dcdd',
                          borderRadius: 8,
                          width: '100%',
                          marginTop: 20,
                          height: HEIGHT / 15,
                        }}>
                        <View
                          style={{
                            height: '100%',
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Left>
                            <TimePicker
                              value={time2}
                              title="Open"
                              onChange={e => {
                                console.log(e);
                                setTime2(e);
                              }}
                              style={{
                                color: '#0f2e47',
                                fontFamily: 'AvenirLTStd-Book',
                                height: '100%',
                                marginTop: 30,
                                marginLeft: 10,
                                fontSize: 18,
                              }}
                            />
                          </Left>
                          <View />
                          <Right>
                            <Icon
                              type="FontAwesome"
                              name="sort"
                              style={{marginRight: 10, color: '#41c0c1'}}
                            />
                          </Right>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderTopColor: '#41c0c1',
                      borderTopWidth: 1.5,
                      marginBottom: 20,
                    }}
                  />
                  <Item stackedLabel style={{marginBottom: 20}}>
                    <Label
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        color: '#95a8a9',
                      }}>
                      Detail
                    </Label>
                    <Input
                      value={place.detail}
                      onChangeText={text => {
                        setPlace({...place, detail: text});
                      }}
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        borderBottomWidth: 1.5,
                        borderBottomColor: '#41c0c1',
                        width: '100%',
                      }}
                    />
                  </Item>
                  <View
                    style={{
                      marginBottom: 20,
                    }}>
                    <Label
                      style={{
                        fontFamily: 'AvenirLTStd-Book',
                        color: '#95a8a9',
                      }}>
                      Photo
                    </Label>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}>
                      {upload ? (
                        <>
                          <View
                            style={{flexDirection: 'row', marginBottom: 10}}>
                            <ScrollView horizontal={true}>
                              {image.map((rs, index) => {
                                return (
                                  <View
                                    key={index}
                                    style={{
                                      width: WIDTH / 3.5,
                                      height: HEIGHT / 7.5,
                                      margin: 5,
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
                                          height: '100%',
                                        }}>
                                        <View style={{}}>
                                          <Icon
                                            type="AntDesign"
                                            name="closecircle"
                                            style={{
                                              color: '#fff',
                                              fontSize: 20,
                                              position: 'absolute',
                                              right: 1,
                                              top: 1,
                                              zIndex: 10,
                                            }}
                                          />
                                          <Image
                                            source={{uri: rs.uri}}
                                            style={{
                                              width: '100%',
                                              height: '100%',
                                            }}
                                          />
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                );
                              })}
                            </ScrollView>
                            <TouchableHighlight
                              onPress={() => {
                                setImage([]);
                                setUpload(false);
                              }}
                              underlayColor="#b4c1c2d9"
                              style={{
                                width: WIDTH / 4.5,
                                height: HEIGHT / 7.5,
                                margin: 5,
                              }}>
                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  height: '100%',
                                  width: '100%',
                                  backgroundColor: '#b4c1c2',
                                }}>
                                <View
                                  style={{
                                    width: '40%',
                                    height: '40%',
                                  }}>
                                  <Image
                                    source={Delete}
                                    style={{width: '100%', height: '100%'}}
                                  />
                                </View>
                              </View>
                            </TouchableHighlight>
                          </View>
                        </>
                      ) : null}

                      <Button
                        onPress={() => {
                          selectPhoto();
                        }}
                        iconLeft
                        transparent
                        style={{
                          borderColor: '#0f2e47',
                          borderWidth: 1.5,
                          borderRadius: 8,
                          width: '50%',
                        }}>
                        <Icon
                          type="Entypo"
                          name="camera"
                          style={{color: '#0f2e47'}}
                        />
                        <Text
                          style={{
                            fontFamily: 'AvenirLTStd-Roman',
                            color: '#f36f5f',
                            textTransform: 'capitalize',
                          }}>
                          Add Photo
                        </Text>
                      </Button>
                    </View>

                    <View
                      style={{
                        width: '100%',
                        height: 2,
                        borderTopColor: '#ffffff',
                        borderTopWidth: 2,
                      }}
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footertab}>
            <View style={{width: '50%'}}>
              <TouchableHighlight
                underlayColor="#faf7f1d9"
                style={{
                  backgroundColor: '#fff',
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setVisible(false);
                }}>
                <Text
                  style={{
                    fontFamily: 'AvenirLTStd-Roman',
                    fontSize: 22,
                    color: '#0f2e47',
                  }}>
                  Cancel
                </Text>
              </TouchableHighlight>
            </View>

            <View
              style={{
                height: '100%',
                width: '50%',
              }}>
              <TouchableHighlight
                onPress={() => {
                  setVisible(false);

                  setAlready(true);
                  setTimeout(() => {
                    setAlready(false);
                    segmentContext.setSeg(0);
                  }, 2500);
                }}
                underlayColor="#41c0c1d9"
                style={{
                  backgroundColor: '#41c0c1',
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#faf7f1',
                    fontFamily: 'AvenirLTStd-Roman',
                    fontSize: 22,
                  }}>
                  Done
                </Text>
              </TouchableHighlight>
            </View>
          </FooterTab>
        </Footer>
      </>
    </Overlay>
  );
};

export default DialogEditPlace;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    backgroundColor: 'transparent',
    zIndex: 5,
  },
  footertab: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    borderTopWidth: 0.5,
    borderTopColor: '#fff',
  },
});
