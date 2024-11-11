import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VisInicio = (props) => {
  return (
    <ImageBackground
      source={require('../Imagenes/ciudadlluviosa.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
          <Text>Vis inicio</Text>
      </View>
    </ImageBackground>
  );
};

export default VisInicio

const styles = StyleSheet.create({
background:{
    flex: 1,
    resizeMode:'cover',
    justifyContent:'center',
  },
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  }

})