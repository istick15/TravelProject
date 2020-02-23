import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const AccidentMap = () => {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL={
            'https://raw.githubusercontent.com/nutthapol-jr/map-style/master/mapbox-style.json'
          }
        />
      </View>
    </View>
  );
};

export default AccidentMap;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1,
  },
});
