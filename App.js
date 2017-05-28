import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';

import Camera from 'react-native-snap-camera';
import Emoji from 'react-native-snap-emoji';
import SnapText from 'react-native-snap-text';


const HEADER_MARGIN = Platform.select({
  ios: 0,
  android: 24
});

export default class App extends React.Component {

  state = {
    textIsVisible: false,
    emojiIsVisible: false
  }

  changeEmojiState(){
    this.setState({
      emojiIsVisible: !this.state.emojiIsVisible
    })
  }
  changeTextState(){
    this.setState({
      textIsVisible: !this.state.textIsVisible
    })
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>
          SnapApp</Text>

          <Text
            style={styles.button}
            onPress={this.changeTextState.bind(this)}
          >
            📝
          </Text>

          <Text
            style={styles.button}
            onPress={this.changeEmojiState.bind(this)}
          >
            🤓
          </Text>
        </View>
        <Emoji isVisible={this.state.emojiIsVisible}>
          <SnapText isVisible={this.state.textIsVisible}>
          <Camera type="front" />
          </SnapText>
        </Emoji>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    color:'white',
    fontSize: 25
  },

  container:{
    flex: 1,
    backgroundColor: '#fff',
  },

  header:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    height: 80,
    marginTop: HEADER_MARGIN,
    padding: 24
  },

  title:{
    fontSize: 30,
    color: 'white'
  }
});
