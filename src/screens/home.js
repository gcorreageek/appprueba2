import React, { Component } from 'react';
import { StyleSheet,Text, Button, View  } from 'react-native';

class Home extends Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text> 
          <Button title="Presioname" 
          onPress={() => this.props.navigation.navigate('PerfilMenu')}
          > </Button>
        </View>
      );
    }
  }


export default Home;