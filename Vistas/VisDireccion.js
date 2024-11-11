import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet,alert,Dimensions,Polyline } from 'react-native';
import MapView, { Marker } from "react-native-maps";

import MapViewDirections from 'react-native-maps-directions';


const VisDireccion = (props) =>{ 

  const [coordinates] = useState([
    {
      latitude: 20.656374,
      longitude: -105.239351,
    },
    {
      latitude: props.route.params.lat,
      longitude: props.route.params.lon,
    },
  ]);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={"AIzaSyAETmEfZZxca9qAMKWenL0A7Q9mA5F3csc"}
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
      </MapView>
    </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    maps: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    },
  });

  
  export default VisDireccion;