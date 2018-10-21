import React from 'react';
import { ScrollView,Image, SectionList, StyleSheet, View, Text,TextInput,Button,SafeAreaView,TouchableOpacity } from 'react-native';

import { Layout, Colors } from '../constants';
import MenuButton from '../components/MenuButton';
import { BoldText, SemiBoldText, RegularText } from '../components/StyledText';
import LoadingPlaceholder from '../components/LoadingPlaceholder';

import _ from 'lodash';

const HEIGHT = Layout.window.height;
const WIDTH = Layout.window.width;

export default class Login extends React.Component { 
    handleLogin = () => {
        // const token = 'ABCDEFGHIJK';
        // this.props.dispatch({
        //     type: 'SET_USER',
        //     payload: {
        //     token,
        //     username: 'LeonidasEsteban'
        //     }
        // })
        this.props.navigation.navigate('Primary');
    }
  render() {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
            <View>
                <Image
                source={require('../assets/header-logo-scroll.png')}
                style={styles.logo}
                />
                <TextInput
                style={styles.input}
                placeholder="USUARIO"
                placeholderTextColor="white"
                autoCapitalize = 'none'
                underlineColorAndroid='rgba(0, 0, 0, 0)'
                />
                <TextInput
                style={styles.input}
                placeholder="CONTRASEÑA"
                placeholderTextColor="white"
                autoCapitalize = 'none'
                secureTextEntry={true}
                underlineColorAndroid='rgba(0, 0, 0, 0)'
                />
                <TouchableOpacity 
                onPress={this.handleLogin}
                style={styles.button}
                >
                <Text style={styles.buttonLabel}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        </ScrollView>
    );
  } 
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    logo: {
      width: WIDTH*0.8,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 30,
      marginTop:HEIGHT/5
    },
    input: {
      marginBottom: 10,
      width: WIDTH*0.8,
      height: 50,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: '#838383',
      color: 'white',
    },
    button: {
      backgroundColor: '#4682B4',
      borderRadius: 5,
    },
    buttonLabel: {
      color: 'white',
      padding: 10,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });