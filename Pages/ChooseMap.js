import React, {useState} from 'react';
import {View, Text} from 'native-base';
import {StyleSheet, TouchableHighlight, Image} from 'react-native';
import TourMap from '../image/tourist.png';
import AccidentImage from '../image/accident2-01.png';
const ChooseMap = ({navigation}) => {
  const [state, setState] = useState({seg: 0});

  const GoMap = () => {
    if (state.seg === 1) {
      navigation.navigate('tourism');
    } else if (state.seg === 2) {
      navigation.navigate('accident');
    } else {
    }
  };
  return (
    <>
      <View style={styles.background}>
        <View>
          <Text style={styles.text}>Please Choose the Map</Text>
          <TouchableHighlight
            underlayColor="#ffffffd9"
            onPress={() => {
              if (state.seg === 1) {
                setState({seg: 0});
              } else {
                setState({seg: 1});
              }
            }}
            style={[
              styles.card,
              {borderWidth: state.seg === 1 ? 3 : 0, borderColor: '#49c0c0'},
            ]}>
            <View style={styles.insidecard}>
              <View
                style={{
                  height: '70%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '90%',
                }}>
                <Image style={styles.image} source={TourMap} />
              </View>
              <View
                style={{
                  height: '30%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>Tourism Map</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#ffffffd9"
            onPress={() => {
              if (state.seg === 2) {
                setState({seg: 0});
              } else {
                setState({seg: 2});
              }
            }}
            style={[
              styles.card,
              {borderWidth: state.seg === 2 ? 3 : 0, borderColor: '#49c0c0'},
            ]}>
            <View style={styles.insidecard}>
              <View
                style={{
                  height: '70%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '90%',
                }}>
                <Image style={styles.image} source={AccidentImage} />
              </View>
              <View
                style={{
                  height: '30%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>Accident Map</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#41c0c1d9"
            style={styles.start}
            onPress={() => GoMap()}>
            <Text style={styles.stateText}>Get Start</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

export default ChooseMap;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#faf7f1',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    height: 230,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  image: {width: '100%', height: '90%'},
  insidecard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'AvenirLTStd-Roman',
    fontWeight: '900',
  },
  start: {
    marginTop: 20,
    backgroundColor: '#49c0c0',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateText: {
    color: '#ffffff',
    fontFamily: 'AvenirLTStd-Book',
  },
});
