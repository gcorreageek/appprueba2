import React, { Component } from 'react';
import { StyleSheet,Text, Button, View, Alert  } from 'react-native';

const showAlert = () => {
    Alert.alert(
       'You need to...'
    )
  }

class Perfil extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Mi Perfil Screen</Text> 
          <Button title="Presioname" onPress={showAlert} > </Button>
        </View>
      );
    }
  }


export default Perfil;