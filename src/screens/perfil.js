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
          <Text>Mi Perfil</Text> 
          <Button
            title="👱🔄"
            onPress={() => this.props.navigation.push('PerfilMenu')}
          />
          <Button
            title="🏠"
            onPress={() => this.props.navigation.navigate('HomeMenu')}
          />
          <Button
            title="👈"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }


export default Perfil;