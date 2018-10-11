import React, { Component } from 'react';
import { StyleSheet,Text, Button, View  } from 'react-native';

class Home extends Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home</Text> 
          <Button title="👱" 
          onPress={() => this.props.navigation.push('PerfilMenu')}
          > </Button>
         
        </View>
      );
    }
  }


export default Home;