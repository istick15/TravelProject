import React, {useContext} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Icon} from 'native-base';
import {DialogContext} from '../../Context/DialogContext';
import {AddNewContext} from '../../Context/AddNewContext';

const CompleteDialog = ({text, text2, setAlready}) => {
  const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');
  const dialogContext = useContext(DialogContext);
  const addnewContext = useContext(AddNewContext);
  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: WIDTH / 1.5,
          //   height: HEIGHT / 15,
          top: '30%',
          left: '15%',
          backgroundColor: '#faf7f1',
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
          justifyContent: 'center',
        }}>
        <View style={{position: 'absolute', top: 10, right: 25, zIndex: 200}}>
          <Icon
            type="AntDesign"
            name="closecircleo"
            style={{fontSize: 20}}
            onPress={() => {
              dialogContext.setData(false);
              addnewContext.setData(false);
              setAlready(false);
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'AvenirLTStd-Roman',
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
          }}>
          {text}
        </Text>
        {text2 !== undefined ? (
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'AvenirLTStd-Book',
              marginLeft: 20,
              marginBottom: 10,
              maxWidth: '90%',
            }}>
            {text2}
          </Text>
        ) : null}
      </View>
    </>
  );
};

export default CompleteDialog;
