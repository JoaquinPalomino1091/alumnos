import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,useNavigation,DrawerActions} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon  from 'react-native-vector-icons/Entypo';

import VisInicio from './VisInicio';
import VisConsultaAlumno from './VisConsultaAlumno';
import VisGPS from './VisGPS';
import VisFoto from './VisFoto';
import VIsMapa from './VIsMapa';
import VisGrafica from './VisGrafica';
import VisAltaAlumno from './VisAltaAlumno';
import VisEditarAlumno from './VisEditarAlumno';
import VisDireccion from './VisDireccion';



const DrawerApp = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        statusBarColor: '#0163d2',
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitle: 'App de Alumnos',
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="VisInicio"
        component={VisInicio}
        options={{
          title: 'Home',
          drawerIcon: config => <Icon size={23} name="home" />,
        }}
      />
      <Drawer.Screen
        name="VisConsultaAlumnos"
        component={VisConsultaAlumno}
        options={{
          title: 'Consulta Alumnos',
          drawerIcon: config => <Icon size={23} name="man" />,
        }}
      />
      <Drawer.Screen
        name="VisAltaAlumno"
        component={VisAltaAlumno}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="VisEditarAlumno"
        component={VisEditarAlumno}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="VisGPS"
        component={VisGPS}
        options={{
          title: 'GPS',
          drawerIcon: config => <Icon size={23} name="compass" />,
        }}
      />
      <Drawer.Screen
        name="VisGrafica"
        component={VisGrafica}
        options={{
          title: 'Gráfica',
          drawerIcon: config => <Icon size={23} name="bar-graph" />,
        }}
      />
      <Drawer.Screen
        name="VisFoto"
        component={VisFoto}
        options={{
          title: 'Foto',
          drawerIcon: config => <Icon size={23} name="camera" />,
        }}
      />
      <Drawer.Screen
        name="VIsMapa"
        component={VIsMapa}
        options={{
          title: 'Mapa',
          drawerIcon: config => <Icon size={23} name="map" />,
        }}
      />
      <Drawer.Screen
        name="VisDireccion"
        component={VisDireccion}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer.Navigator>
    
  )
}

function VisMenuDrawer() {
        return(
            <DrawerApp/>
        );
}


export default VisMenuDrawer;