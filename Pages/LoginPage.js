import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import IconImage from '../image/icon.png';
import {Item, Label, Input} from 'native-base';
import MenuUser from '../Components/MenuUser';
import {StaffContext} from '../Context/StaffContext';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const LoginPage = ({navigation}) => {
  const [state, setState] = useState({username: '', password: ''});
  const [error, setError] = useState({status: false, text: ''});
  const staffContext = useContext(StaffContext);

  const handleChange = name => e => {
    setState({...state, [name]: e});
    setError({...error, status: false, text: ''});
  };

  const signIn = () => {
    if (state.username.trim() !== '' && state.password.trim() !== '') {
      if (state.username === 'admin' && state.password === '1234') {
        navigation.navigate('tourism');
        setError({...error, status: false, text: ''});
        AsyncStorage.setItem('token', state.username);
        staffContext.setData(true);
      } else {
        setError({
          ...error,
          status: true,
          text: 'Username or Password is incorrect',
        });
      }
    } else {
      setError({
        ...error,
        status: true,
        text: 'Username or Password is required',
      });
    }
  };

  const signOut = () => {
    staffContext.setData(false);
  };
  return (
    <>
      <View style={styles.background}>
        <MenuUser
          type={'AntDesign'}
          name={'arrowleft'}
          styles={styles.minus}
          button={styles.plusButton}
          icon={styles.iconTool}
          func={() => {
            navigation.navigate('tourism');
          }}
          lay={'#41c0c1d9'}
        />
        <View style={styles.component}>
          <Image
            style={{width: 100, height: 100, marginBottom: 20}}
            source={IconImage}
          />
          <View style={styles.form}>
            <View
              style={{
                width: '70%',
                height: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.title}>Welcome back !!</Text>
            </View>
            <View
              style={{
                width: '100%',
                height: '80%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Item stackedLabel style={{width: '80%'}}>
                <Label style={{fontFamily: 'AvenirLTStd-Book'}}>Username</Label>
                <Input
                  style={{fontFamily: 'AvenirLTStd-Book', width: '100%'}}
                  value={state.username}
                  onChangeText={handleChange('username')}
                />
              </Item>
              <Item stackedLabel style={{width: '80%'}}>
                <Label style={{fontFamily: 'AvenirLTStd-Book'}}>Password</Label>
                <Input
                  style={{fontFamily: 'AvenirLTStd-Book'}}
                  secureTextEntry={true}
                  value={state.password}
                  onChangeText={handleChange('password')}
                />
              </Item>

              {error.status ? (
                <View style={{marginTop: 20}}>
                  <Text
                    style={{color: '#ec5960', fontFamily: 'AvenirLTStd-Book'}}>
                    {error.text}
                  </Text>
                </View>
              ) : null}

              <TouchableHighlight
                style={styles.signin}
                underlayColor="#41c0c1d9"
                onPress={() => signIn()}>
                <Text style={styles.fontSignin}>Sign in</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View>
            <Text style={styles.welcome}>GIS for tourism management</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#41c0c1',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  component: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 24,
    color: '#faf7f1',
    marginBottom: 20,
    marginTop: 20,
    fontFamily: 'AvenirLTStd-Book',
  },
  title: {
    fontSize: 24,
    color: '#0f2e47',
    fontFamily: 'AvenirLTStd-Roman',
  },
  form: {
    backgroundColor: '#faf7f1',
    borderRadius: 8,
    width: WIDTH / 1.25,
    height: HEIGHT / 2.25,
  },
  signin: {
    backgroundColor: '#41c0c1',
    width: '80%',
    borderRadius: 8,
    height: HEIGHT / 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  fontSignin: {
    fontSize: 24,
    color: '#faf7f1',
    fontFamily: 'AvenirLTStd-Book',
  },
  iconTool: {color: '#faf7f1'},
  minus: {
    position: 'absolute',
    left: '4%',
    top: '4%',
    zIndex: 5,
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
