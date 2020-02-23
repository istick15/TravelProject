import React, {useState, useContext} from 'react';
import {Footer, FooterTab, Icon, Text, Button} from 'native-base';
import {StyleSheet, View, TouchableHighlight, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {SegmentContext} from '../Context/SegmentContext';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 140,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  footertab: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '50%',
    borderTopWidth: 0.5,
    borderTopColor: '#fff',
  },
  footertab2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '50%',
  },
});

const FooterAdd = ({coordinates, setDialog, setSegment, segment}) => {
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
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 16,
                color: '#95a8a9',
                marginBottom: 10,
              }}>
              place
            </Text>

            <Text
              style={{
                marginLeft: 10,
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 16,
                color: '#41c0c1',
              }}>
              {coordinates[0]},{coordinates[1]}
            </Text>
          </View>
        </FooterTab>
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
                // setSegment({...segment, seg: 0});
                segmentContext.setSeg(0);
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
                setDialog(true);
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
                Next
              </Text>
            </TouchableHighlight>
          </View>
        </FooterTab>
      </View>
    </Footer>
  );
};

export default FooterAdd;
