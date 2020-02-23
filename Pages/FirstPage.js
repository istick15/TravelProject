import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IconImage from '../image/icon.png';
import * as Animatable from 'react-native-animatable';

const FirstPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('first');
    }, 3000);
  }, [navigation]);

  return (
    <>
      <View style={styles.background}>
        <View style={styles.component}>
          <Animatable.View
            animation="slideInDown"
            iterationCount={'infinite'}
            direction="alternate">
            <Image style={{width: 120, height: 120}} source={IconImage} />
          </Animatable.View>

          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.title}>GIS for tourism</Text>
          <Text style={styles.title}>management</Text>
        </View>
      </View>
    </>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#41c0c1',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  component: {justifyContent: 'center', alignItems: 'center'},
  welcome: {
    fontSize: 24,
    color: '#faf7f1',
    marginBottom: 20,
    marginTop: 20,
    fontFamily: 'AvenirLTStd-Book',
  },
  title: {fontSize: 36, color: '#faf7f1', fontFamily: 'AvenirLTStd-Roman'},
});
