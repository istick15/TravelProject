import React, {useState, useContext} from 'react';
import {Footer, FooterTab, Icon, Text, Button, Left, Right} from 'native-base';
import {StyleSheet, View, TouchableHighlight, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {SegmentContext} from '../../Context/SegmentContext';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 170,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  footertab: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '40%',
    borderTopWidth: 0.5,
    borderTopColor: '#fff',
  },
  footertab2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
});

const FooterSelect = ({setDel, setSelected}) => {
  const segmentContext = useContext(SegmentContext);
  return (
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
              }}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#faf7f1',
                  height: '100%',
                }}>
                <TouchableHighlight
                  style={{
                    backgroundColor: '#faf7f1',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <>
                    <Left>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 18,
                            color: '#0f2e47',
                          }}>
                          Bankla Floating Market
                        </Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 16,
                            color: '#95a8a9',
                            marginTop: 10,
                          }}>
                          Bangkla, Bangkla, Chachoengsao
                        </Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 16,
                            color: '#41c0c1',
                            marginTop: 10,
                          }}>
                          13.726689 , 101.203094
                        </Text>
                      </View>
                    </Left>
                    <View />
                    <Right>
                      <View style={{flexDirection: 'row', marginRight: 10}}>
                        <TouchableHighlight
                          style={{
                            borderRadius: 25,
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ec5960',
                          }}>
                          <Icon
                            type="EvilIcons"
                            name="trash"
                            style={{fontSize: 32, color: '#faf7f1'}}
                            onPress={() => {
                              setDel(true);
                            }}
                          />
                        </TouchableHighlight>
                        <TouchableHighlight
                          style={{
                            borderRadius: 25,
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 20,
                            backgroundColor: '#41c0c1',
                          }}>
                          <Icon
                            type="Feather"
                            name="edit"
                            style={{fontSize: 24, color: '#faf7f1'}}
                            onPress={() => {
                              segmentContext.setSeg(10);
                            }}
                          />
                        </TouchableHighlight>
                      </View>
                    </Right>
                  </>
                </TouchableHighlight>
              </View>
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
                  onPress={() => {
                    segmentContext.setSeg(0);
                    setSelected(0);
                  }}
                  underlayColor="#ffffffd9"
                  style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontFamily: 'AvenirLTStd-Medium',
                        fontSize: 22,
                        color: '#0f2e47',
                      }}>
                      Cancel
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </FooterTab>
      </View>
    </Footer>
  );
};

export default FooterSelect;
