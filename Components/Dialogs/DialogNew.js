import React from 'react';
import {Overlay} from 'react-native-elements';
import {Text, View, Icon, Left, Right} from 'native-base';
import {Dimensions, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import tourist from '../../image/icon/tourist.png';
const DialogNew = ({visible, setVisible, error}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  return (
    <Overlay
      height="auto"
      width="auto"
      overlayStyle={{
        backgroundColor: '#41c0c1',
      }}
      isVisible={visible}
      onBackdropPress={() => {
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
              backgroundColor: '#0f2e47',
            }}>
            <Image source={tourist} style={{width: 30, height: 30}} />
          </Animated.View>
        </Left>
        <View>
          <Text>Wat</Text>
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
    </Overlay>
  );
};

export default DialogNew;
