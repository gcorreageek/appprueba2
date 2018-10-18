import React from 'react';
import {
  Animated,
  Linking,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Asset, LinearGradient, WebBrowser, Video } from 'expo';
import { NavigationActions } from 'react-navigation';
import { View as AnimatableView } from 'react-native-animatable';
import { withNavigation } from 'react-navigation';

import AnimatedScrollView from '../components/AnimatedScrollView';
import NavigationBar from '../components/NavigationBar';
import MenuButton from '../components/MenuButton';
import VideoBackground from '../components/VideoBackground';
import { BoldText, SemiBoldText } from '../components/StyledText';
import { Colors, FontSizes, Layout } from '../constants';

class Home extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    const { scrollY } = this.state;
    const headerOpacity = scrollY.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={{ flex: 1 }}>
        <AnimatedScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 + Layout.notchHeight / 2 }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollY } },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          <View
            style={{
              backgroundColor: '#4682B4',
              padding: 10,
              paddingTop: Layout.headerHeight - 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={styles.headerVideoLayer}>
              <VideoBackground />
              <View style={styles.headerVideoOverlay} />
              <LinearGradient
                colors={[Colors.azul, 'transparent']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              />
            </View>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 220, height: 60, resizeMode: 'contain' }} 
            />
            <View style={styles.headerContent}>
                <SemiBoldText style={styles.headerText}>
                  @gcorreageek
                </SemiBoldText>
            </View>
          </View>

          <DeferredHomeContent />
          <OverscrollView />
        </AnimatedScrollView>

        <NavigationBar
          renderLeftButton={() => <MenuButton />}
          animatedBackgroundOpacity={headerOpacity}
        />
      </View>
    );
  } 

}

@withNavigation
class DeferredHomeContent extends React.Component {
  state = {
    ready: Platform.OS === 'android' ? false : true,
  };

  componentDidMount() {
    if (this.state.ready) {
      return;
    }

    setTimeout(() => {
      this.setState({ ready: true });
    }, 200);
  }

  render() {
    if (!this.state.ready) {
      return null;
    }
    return (
      <AnimatableView animation="fadeIn" useNativeDriver duration={40000}> 
        <View style={{ marginHorizontal: 15, marginBottom: 20 }}>
        </View> 
      </AnimatableView>
    );
  }

  _handlePressAllTalks = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'Schedule',
      })
    );
  };
}

const OverscrollView = () => (
  <View
    style={{
      position: 'absolute',
      top: -400,
      height: 400,
      left: 0,
      right: 0,
      backgroundColor: '#4682B4',
    }}
  />
);

const ClipBorderRadius = ({ children, style }) => {
  return (
    <View
      style={[
        { borderRadius: BORDER_RADIUS, overflow: 'hidden', marginTop: 10 },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const BORDER_RADIUS = 3;

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 10,
  },
  headerVideoLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  headerVideoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.azul,
    opacity: 0.8,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 17 * 1.5,
  },
  buyButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS,
  },
  buyButtonText: {
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0,0.9)',
    fontSize: FontSizes.normalButton,
  },
  bigButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bigButtonText: {
    fontSize: FontSizes.normalButton,
    color: '#fff',
    textAlign: 'center',
  },
  seeAllTalks: {
    fontSize: FontSizes.normalButton,
    color: Colors.azul,
  },
});

export default Home;
