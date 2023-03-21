import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://cdn-icons-png.flaticon.com/512/5904/5904059.png'}}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'https://i.pinimg.com/474x/23/8f/ca/238fca6f55ff301e99a01c7b97be82ff.jpg',
          }}
        />
      </View>
    );
  }
}

export default DisplayAnImage;