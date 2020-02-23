import React, {useState, useCallback, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import {
  Content,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Footer,
  Container,
} from 'native-base';

import userIcon from '../image/icon/user-01.png';
import mapIcon from '../image/icon/menu_map-01.png';
import importIcon from '../image/icon/menu_import_location-01.png';
import infoIcon from '../image/icon/menu_info-01.png';
import signinIcon from '../image/icon/menu_signin-01.png';
import Animated from 'react-native-reanimated';
import DialogStaff from './Dialogs/DialogStaff';
import {StaffContext} from '../Context/StaffContext';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#faf7f1',
  },
  col: {
    backgroundColor: '#635DB7',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
    height: 200,
  },
  user: {
    fontFamily: 'AvenirLTStd-Roman',
    justifyContent: 'center',
    color: '#464545',
    fontSize: 20,
  },
  username: {fontWeight: 'bold'},
  menu: {
    fontFamily: 'AvenirLTStd-Book',
    marginLeft: 20,
    justifyContent: 'center',
    color: '#464545',
    fontSize: 20,
  },
  divider: {marginLeft: 15, marginRight: 15},
  back: {
    position: 'absolute',
    right: '5%',
    top: '3%',
    zIndex: 5,
  },
});
const SideBar = ({
  logOut,
  goHome,
  location,
  setLocation,
  zoom,
  closeDrawer,
  goLogin,
}) => {
  const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
  const [dialog, setDialog] = useState(false);
  const staffContext = useContext(StaffContext);

  const importLocation = async () => {
    const token = await AsyncStorage.getItem('token');

    // if (token === null) {
    //   setDialog(true);
    //   closeDrawer();
    // } else {
    // }
    if (staffContext.data) {
      setDialog(true);
      closeDrawer();
    } else {
      closeDrawer();
    }
  };

  const goLogout = async () => {
    staffContext.setData(false);
    closeDrawer();
    await AsyncStorage.removeItem('token');
  };
  const [data, setData] = useState({
    data: [
      {
        name: 'Map',
        icon: {
          image: mapIcon,
        },
        func: () => {
          goHome();
        },
      },
      {
        name: 'Import location',
        icon: {
          image: importIcon,
        },
        func: () => {
          // importLocation();
          if (staffContext.data === true) {
            closeDrawer();
          } else {
            setDialog(true);
            closeDrawer();
          }
        },
      },
      {
        name: 'Info',
        icon: {
          image: infoIcon,
        },
        func: () => {},
      },
    ],
  });

  return (
    <Container style={styles.container}>
      <View style={styles.back}>
        <Icon
          name="md-list"
          type="Ionicons"
          style={{color: '#0f2e47', fontSize: 36}}
          onPress={() => {
            closeDrawer();
          }}
        />
      </View>

      <Content>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
          }}>
          <Card transparent>
            <CardItem
              style={{
                backgroundColor: '#faf7f1',
                justifyContent: 'center',
                alignItems: 'center',
                height: HEIGHT / 3.2,
                borderBottomWidth: 1,
                borderBottomColor: '#95a8a9',
              }}
              button
              onPress={() => {}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={userIcon} style={{width: 80, height: 80}} />
                <Text style={styles.user}>User</Text>
              </View>
            </CardItem>
            {data.data.map(res => {
              return (
                <CardItem
                  style={{
                    backgroundColor: '#faf7f1',
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                  key={res.name}
                  button
                  onPress={() => {
                    res.func();
                  }}>
                  <Image
                    source={res.icon.image}
                    style={{width: 30, height: 30}}
                  />
                  <Text style={styles.menu}>{res.name}</Text>
                </CardItem>
              );
            })}
            {staffContext.data ? (
              <CardItem
                style={{
                  backgroundColor: '#faf7f1',
                  borderTopWidth: 1,
                  borderTopColor: '#95a8a9',
                }}
                button
                onPress={() => {
                  goLogout();
                }}>
                <Image source={signinIcon} style={{width: 30, height: 30}} />
                <Text style={styles.menu}>Log out</Text>
              </CardItem>
            ) : (
              <CardItem
                style={{
                  backgroundColor: '#faf7f1',
                  borderTopWidth: 1,
                  borderTopColor: '#95a8a9',
                }}
                button
                onPress={() => {
                  goLogin();
                  closeDrawer();
                }}>
                <Image source={signinIcon} style={{width: 30, height: 30}} />
                <Text style={styles.menu}>Sign in</Text>
              </CardItem>
            )}
          </Card>
        </View>
      </Content>

      <Footer
        style={{backgroundColor: '#faf7f1', elevation: 0, height: HEIGHT / 7}}>
        <TouchableHighlight
          underlayColor="#faf7f1d9"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => goHome()}>
          <>
            <Animated.View
              style={{
                backgroundColor: '#41c0c1',
                height: 30,
                width: 30,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                type="Entypo"
                name="chevron-left"
                style={{fontSize: 24, color: '#faf7f1'}}
                onPress={() => {
                  goHome();
                }}
              />
            </Animated.View>
            <Text style={{color: '#41c0c1', paddingLeft: 20, fontSize: 20}}>
              Choose the Map
            </Text>
          </>
        </TouchableHighlight>
      </Footer>
      <DialogStaff visible={dialog} setVisible={setDialog} goLogin={goLogin} />
    </Container>
  );
};

export default SideBar;
