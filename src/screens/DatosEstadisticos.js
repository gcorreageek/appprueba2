import React from 'react';
import { Image, SectionList, StyleSheet, View, Text } from 'react-native';

import { Layout, Colors } from '../constants';
import MenuButton from '../components/MenuButton';
import { BoldText, SemiBoldText, RegularText } from '../components/StyledText';
import LoadingPlaceholder from '../components/LoadingPlaceholder';

import _ from 'lodash';


export default class DatosEstadisticos extends React.Component {
  static navigationOptions = {
    title: 'Datos Estadisticos',
    headerStyle: { backgroundColor: Colors.azul },
    headerTintColor: 'white',
    headerLeft: <MenuButton />,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
  };

  render() {
    return (
      <LoadingPlaceholder>
        <View> 
          <Text>Prueba!</Text>
        </View>
      </LoadingPlaceholder>
    );
  } 
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 0,
  },
  rowData: {
    flex: 1,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 5,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#eee',
  },
});
