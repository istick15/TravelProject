import React, {useState} from 'react';
import {Overlay} from 'react-native-elements';
import {
  Text,
  View,
  Button,
  Content,
  Icon,
  Container,
  Left,
  Right,
  Header,
  Body,
  Title,
  Item,
  Input,
} from 'native-base';
import {Dimensions, Image, TouchableHighlight, Picker} from 'react-native';
import Animated from 'react-native-reanimated';
import tourist from '../../image/icon/tourist.png';
import Hotel from '../../image/icon/hotel-01.png';
import Hostel from '../../image/icon/hostel-02.png';
import Restuarant from '../../image/icon/restuarant-01.png';
import Spa from '../../image/icon/spa-01.png';

const DialogStaff = ({visible, setVisible, goLogin}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  return (
    <Overlay
      height="auto"
      width="auto"
      overlayStyle={{
        backgroundColor: '#faf7f1',
        borderRadius: 8,
      }}
      isVisible={visible}
      onBackdropPress={() => {
        setVisible(false);
      }}>
      <>
        <View
          style={{
            backgroundColor: '#faf7f1',
            height: HEIGHT / 7,
            width: WIDTH / 1.25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <View style={{height: '40%', width: '20%'}}>
          <Image source={tourist} style={{height: '100%', width: '100%'}} />
        </View> */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 24,
                color: '#0f2e47',
                marginBottom: 20,
              }}>
              Only Staff !!
            </Text>
            <Text
              style={{
                fontFamily: 'AvenirLTStd-Roman',
                fontSize: 20,
                color: '#0f2e47',
                marginBottom: 20,
              }}>
              Have to sign in for import location
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#41c0c1',
            height: HEIGHT / 15,
            width: WIDTH / 1.25,
            flexDirection: 'row',
            borderRadius: 8,
          }}>
          <TouchableHighlight
            underlayColor="#41c0c1d9"
            onPress={() => setVisible(false)}
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 20,
                color: '#faf7f1',
              }}>
              Cancel
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              goLogin();
              setVisible(false);
            }}
            underlayColor="#41c0c1d9"
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeftWidth: 1,
              borderLeftColor: '#faf7f1',
            }}>
            <Text
              style={{
                fontFamily: 'AvenirLTStd-Book',
                fontSize: 20,
                color: '#faf7f1',
              }}>
              Sign in
            </Text>
          </TouchableHighlight>
        </View>
      </>
    </Overlay>
  );
};

export default DialogStaff;
