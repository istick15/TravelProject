import React, {useState, useContext} from 'react';
import {Footer, FooterTab, Icon, Text, Button, Left, Right} from 'native-base';
import {StyleSheet, View, TouchableHighlight, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {SegmentContext} from '../../Context/SegmentContext';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 230,
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

const FooterEdit = ({setEdit, setSelected}) => {
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
                height: '70%',
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
                      <View style={{marginLeft: 20, width: '100%'}}>
                        <Text
                          style={{
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 20,
                            color: '#0f2e47',
                            fontWeight: 'bold',
                          }}>
                          Edit
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 18,
                            color: '#0f2e47',
                            marginTop: 5,
                          }}>
                          Bankla Floating Market
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 16,
                            color: '#95a8a9',
                            marginTop: 5,
                          }}>
                          Bangkla, Bangkla, Chachoengsao
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'AvenirLTStd-Roman',
                            fontSize: 16,
                            color: '#41c0c1',
                            marginTop: 5,
                          }}>
                          13.726689 , 101.203094
                        </Text>
                      </View>
                    </Left>
                    <View />
                    <Right />
                  </>
                </TouchableHighlight>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: '#faf7f1',
                height: '30%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '50%',
                  backgroundColor: '#faf7f1',
                  height: '100%',
                }}>
                <TouchableHighlight
                  onPress={() => {
                    segmentContext.setSeg(0);
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
              <View
                style={{
                  width: '50%',
                  backgroundColor: '#faf7f1',
                  height: '100%',
                }}>
                <TouchableHighlight
                  onPress={() => {
                    // segmentContext.setSeg(0);
                    setSelected(0);
                    setEdit(true);
                  }}
                  underlayColor="#41c0c1d9"
                  style={{
                    backgroundColor: '#41c0c1',
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
                        color: '#ffffff',
                      }}>
                      Next
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

export default FooterEdit;
