import React, { Component } from 'react';
import { StyleSheet,Text, Button, View ,TextInput } from 'react-native';

class Jugando extends Component {
      constructor(props) {
        super(props);
        this.state = {text: ''};
      }
      render() {
        return (
          <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder="Sheyilicienta escribe aqui mi nombre!"
              onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '💔💔💔💔💔💔💔💔💔💔💔💔💔💔💔💔💔💔💔💔💔💔').join('amor')}
            </Text>
          </View>
        );
      }
  }


export default Jugando;