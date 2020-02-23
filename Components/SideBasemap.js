import React from 'react';
import {Container, View, Text} from 'native-base';
import {StyleSheet, Image, Dimensions} from 'react-native';
import picture from '../image/5-01.png';
import defaultImg from '../image/map/default.png';
import TerrainImg from '../image/map/Terrain.png';
import SatelliteImg from '../image/map/Satellite.png';
import TrafficImg from '../image/map/Traffic.png';

const SideBasemap = ({closeDrawer}) => {
  const {height: HEIGHT} = Dimensions.get('screen');
  return (
    <Container style={styles.container}>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{height: HEIGHT / 6, width: 120, marginBottom: 20}}>
          <View
            style={{
              backgroundColor: '#faf7f1',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
              }}>
              <Image
                source={defaultImg}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '30%',
              }}>
              <Text style={{fontFamily: 'AvenirLTStd-Book'}}>Default</Text>
            </View>
          </View>
        </View>
        <View style={{height: HEIGHT / 6, width: 120, marginBottom: 20}}>
          <View
            style={{
              backgroundColor: '#faf7f1',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
              }}>
              <Image
                source={TerrainImg}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '30%',
              }}>
              <Text style={{fontFamily: 'AvenirLTStd-Book'}}>Terrain</Text>
            </View>
          </View>
        </View>
        <View style={{height: HEIGHT / 6, width: 120, marginBottom: 20}}>
          <View
            style={{
              backgroundColor: '#faf7f1',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
              }}>
              <Image
                source={SatelliteImg}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '30%',
              }}>
              <Text style={{fontFamily: 'AvenirLTStd-Book'}}>Satellite</Text>
            </View>
          </View>
        </View>
        <View style={{height: HEIGHT / 6, width: 120}}>
          <View
            style={{
              backgroundColor: '#faf7f1',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
              }}>
              <Image
                source={TrafficImg}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '30%',
              }}>
              <Text style={{fontFamily: 'AvenirLTStd-Book'}}>Traffic</Text>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SideBasemap;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#95a8a9b5',
    elevation: 0,
  },
});
