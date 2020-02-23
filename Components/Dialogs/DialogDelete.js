import React, {useState, useContext} from 'react';
import {Overlay} from 'react-native-elements';
import {Text, View} from 'native-base';
import {Dimensions, Image, TouchableHighlight, Picker} from 'react-native';
import {SegmentContext} from '../../Context/SegmentContext';

const DialogDelete = ({
  visible,
  setVisible,
  point,
  setPoint,
  selected,
  setSelected,
}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  const segmentContext = useContext(SegmentContext);

  const deletePoint = () => {
    const data = [...point];
    data.splice(selected - 1, 1);
    setPoint(data);
    setSelected(0);
  };
  return (
    <>
      <Overlay
        height="auto"
        width="auto"
        borderRadius={8}
        overlayStyle={{
          backgroundColor: '#faf7f1',
        }}
        isVisible={visible}
        onBackdropPress={() => {
          setVisible(false);
        }}>
        <>
          <View
            style={{
              backgroundColor: '#faf7f1',
              height: HEIGHT / 9,
              width: WIDTH / 1.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'AvenirLTStd-Roman',
                  fontSize: 24,
                  color: '#0f2e47',
                  marginBottom: 20,
                }}>
                Delete this location ?
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
                setVisible(false);
                segmentContext.setSeg(0);
                deletePoint();
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
                Delete
              </Text>
            </TouchableHighlight>
          </View>
        </>
      </Overlay>
    </>
  );
};

export default DialogDelete;
