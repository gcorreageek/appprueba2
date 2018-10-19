import React from 'react';
import { Image, Platform, StyleSheet, View,Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import FadeIn from 'react-native-fade-in-image';
import { withNavigation } from 'react-navigation';

import SaveIconWhenSaved from './SaveIconWhenSaved';
import { BoldText, RegularText, SemiBoldText } from './StyledText';
import { conferenceHasEnded, getSpeakerAvatarURL } from '../utils';
import { Colors, FontSizes, Layout } from '../constants';
import { findSpeakerData } from '../data';

const folder = require('./../assets/totales/folder.png');
const cd = require('./../assets/totales/cd.png');
const pdf = require('./../assets/totales/pdf.png');
const users = require('./../assets/totales/users.png');

const images = [folder, cd, pdf, users];

@withNavigation
export default class CardTotal extends React.Component {
  
  render() {
    const { totales } = this.props;
    if(!totales){
      return <Text>Cargando..</Text>
    }
    return (
      <RectButton
        onPress={this._handlePress}
        style={[styles.button, this.props.style]}
        activeOpacity={0.05}
      >
        <View style={styles.row}>
          <View
              style={[
                {
                  flex:8,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <FadeIn placeholderStyle={{borderRadius: 3}}>
                <Image
                  source={images[totales.image]}
                  style={{
                    width: Layout.window.width / 2,
                    height: 60,
                    borderRadius: 0,
                    resizeMode: 'contain',
                  }}
                />
              </FadeIn>
          </View>
          <View style={{flex:2, paddingTop:15,paddingBottom:10,alignItems: 'center'}}>
            <BoldText style={styles.speakerName} numberOfLines={1}>
                {totales.titulo}
            </BoldText>
            <SemiBoldText style={styles.organizationName} numberOfLines={1}>
                 {totales.subtitulo}
            </SemiBoldText>
          </View>
        </View>
      </RectButton>
    );


  }
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'column',
  },
  headerRowAvatarContainer: {
    paddingRight: 2,
  },
  headerRowInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  speakerName: {
    fontSize: FontSizes.bodyTitle,
  },
  organizationName: {
    color: Colors.faint,
    fontSize: FontSizes.bodyLarge,
  },
  talkInfoRow: {
    paddingTop: 10,
  },
  talkTitle: {
    fontSize: FontSizes.bodyLarge,
  },
  talkLocation: {
    fontSize: FontSizes.bodyLarge,
    color: Colors.faint,
    marginTop: 10,
  },
  nextYear: {
    textAlign: 'center',
    fontSize: FontSizes.title,
    marginVertical: 10,
  },
  button: {
    flex:1,
    padding: 15,
    ...Platform.select({
      ios: {
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 2 },
      },
      android: {
        backgroundColor: '#fff',
        elevation: 2,
      },
    }),
  },
  row: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  rowData: {
    flex: 1,
  },
});
