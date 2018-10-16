import React from 'react';
import { Asset, AppLoading, Font } from 'expo';
import { Platform,StyleSheet,Text, TextInput, View  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loadSavedTalksAsync } from './src/utils/storage';
import { createStackNavigator,SafeAreaView } from 'react-navigation';

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}
import Navigation from './src/Navigation';

class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  _loadResourcesAsync = () => {
    console.log('prueba de un console');
    return Promise.all([
      this._loadAssetsAsync(),
      this._loadDataAsync(),
    ])
  }
  _loadDataAsync = () => {
    return loadSavedTalksAsync();
  }
  _loadAssetsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'open-sans-bold': require('./src/assets/OpenSans-Bold.ttf'),
        'open-sans': require('./src/assets/OpenSans-Regular.ttf'),
        'open-sans-semibold': require('./src/assets/OpenSans-SemiBold.ttf'),
        ...Ionicons.font,
      }),
      Asset.fromModule(require('./src/assets/logo.png')).downloadAsync(),
      Asset.fromModule(
        require('react-navigation/src/views/assets/back-icon.png')
      ).downloadAsync(),
    ]);
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={console.error}
          onFinish={() => {
            this.setState({ fontLoaded: true });
          }}
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}

export default App;