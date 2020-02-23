import React from 'react';
import {
  View,
  Text,
  Container,
  Body,
  Footer,
  Content,
  Left,
  Button,
  Right,
} from 'native-base';
import {StyleSheet, Image, Dimensions} from 'react-native';
import ShowImage from '../image/2.png';
import {Slider} from 'react-native-elements';

const ShowLocation = ({navigation}) => {
  const {width: WIDTH} = Dimensions.get('screen');
  return (
    <>
      <Container style={styles.background}>
        <Body>
          <View style={styles.component}>
            <Image style={{width: 250, height: 250}} source={ShowImage} />
            <Text style={styles.title}>Show location</Text>
            <Text style={styles.second}>Lorem ipsum dolor sit amet,</Text>
            <Text style={styles.second}>consectetur adipiscing elit,</Text>
          </View>
        </Body>
        <Footer style={styles.footer}>
          <Content>
            <View style={styles.content}>
              <Left style={styles.left}>
                <Button
                  transparent
                  onPress={() => {
                    navigation.navigate('choose');
                  }}>
                  <Text style={styles.text}>Skip</Text>
                </Button>
              </Left>
              <View>
                <Slider
                  style={{width: WIDTH / 2}}
                  disabled
                  value={0.5}
                  thumbStyle={{
                    width: WIDTH / 7,
                    height: 10,
                    backgroundColor: '#41c0c1',
                  }}
                />
              </View>
              <Right style={styles.right}>
                <Button
                  transparent
                  onPress={() => {
                    navigation.navigate('third');
                  }}>
                  <Text style={styles.text}>Next</Text>
                </Button>
              </Right>
            </View>
          </Content>
        </Footer>
      </Container>
    </>
  );
};

export default ShowLocation;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#faf7f1',
    width: '100%',
    height: '100%',
  },
  component: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    elevation: 3,
  },
  title: {
    // fontWeight: 'bold',
    fontSize: 36,
    color: '#0f2e47',
    marginBottom: 20,
    fontFamily: 'AvenirLTStd-Roman',
  },
  second: {fontSize: 18, color: '#0f2e47', fontFamily: 'AvenirLTStd-Book'},
  footer: {
    elevation: 0,
    backgroundColor: '#faf7f1',
    position: 'absolute',
    bottom: 0,
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    color: '#95a8a9',
    textTransform: 'capitalize',
    fontFamily: 'AvenirLTStd-Book',
  },
  left: {marginLeft: 10},
  right: {marginRight: 10},
});
