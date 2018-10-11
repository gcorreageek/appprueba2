import React from 'react';
import { StyleSheet,Text, TextInput, View  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeClase from './src/screens/home';
import PerfilClase from './src/screens/perfil';
import JugandoClase from './src/screens/jugando';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const AppNavigator=  createStackNavigator(
  {
    HomeMenu: HomeClase,
    PerfilMenu:PerfilClase,
    JugandoMenu:JugandoClase
  },
  {
    initialRouteName: 'PerfilMenu',
  }
);

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
