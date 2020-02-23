import React, {useState, useContext} from 'react';
import {
  Footer,
  FooterTab,
  Icon,
  Text,
  Button,
  Header,
  Left,
  Right,
  Input,
  Item,
} from 'native-base';
import {StyleSheet, View, TouchableHighlight, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {SegmentContext} from '../Context/SegmentContext';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 140,
    backgroundColor: 'transparent',
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
    height: 100,
    backgroundColor: '#41c0c1',
    width: '100%',
    zIndex: 5,
  },
});

const FooterDistance = ({setVisible}) => {
  const segmentContext = useContext(SegmentContext);

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
                segmentContext.setSeg(0);
                setVisible(true);
              }}
            />
          </Left>
          <View style={{width: '80%'}}>
            <View>
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
                  style={{width: '100%'}}
                  style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 20}}
                />
              </Item>
            </View>
            <View>
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
                  value={'Your location'}
                  style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 20}}
                />
              </Item>
            </View>
          </View>
        </View>
      </View>
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
                  height: '60%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                }}>
                <Left>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontFamily: 'AvenirLTStd-Roman',
                      fontSize: 22,
                      color: '#0f2e47',
                    }}>
                    Distance : 15 Km.
                  </Text>
                </Left>
                <View />
                <Right>
                  <Icon
                    style={{
                      marginRight: 10,
                    }}
                    type={'MaterialCommunityIcons'}
                    name={'map-marker-distance'}
                  />
                </Right>
              </View>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#faf7f1',
                  height: '40%',
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
                          marginLeft: 10,
                          fontFamily: 'AvenirLTStd-Roman',
                          fontSize: 22,
                          color: '#fff',
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

export default FooterDistance;
