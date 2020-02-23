import React from 'react';
import {View, Button, Icon} from 'native-base';
import Animated from 'react-native-reanimated';
import {TouchableHighlight} from 'react-native-gesture-handler';

const MenuUser = ({type, name, styles, button, func, icon, lay}) => {
  return (
    <>
      <View style={styles}>
        <TouchableHighlight
          underlayColor={lay}
          style={button}
          onPress={() => func()}>
          <Animated.View>
            <Icon type={type} name={name} style={icon} />
          </Animated.View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default MenuUser;
