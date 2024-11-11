import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()
import VisMenuDrawer from './Vistas/VisMenuDrawer';
import VisFlexUno from './Vistas/VisFlexUno';
import VisGrafica from './Vistas/VisGrafica';
import VisLogin from './Vistas/VisLogin';
import VisConsultaAlumno from './Vistas/VisConsultaAlumno';
import VisDireccion from './Vistas/VisDireccion';



function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='VisLogin' component={VisLogin} options={{title:'Vista del login'}} />
      <Stack.Screen name='VisMenuDrawer' component={VisMenuDrawer} options={{headerShown:false}} />
      <Stack.Screen name='VisConsultaAlmunos' component={VisConsultaAlumno} options={{title:'Consulta alumnos'}} />
      <Stack.Screen name='VisFlex1' component={VisFlexUno} options={{title:'Practica Flex 1'}} />
      <Stack.Screen name='VGrafica' component={VisGrafica} options={{title:'Grafica'}} />
      <Stack.Screen name='VisDireccion' component={VisDireccion} options={{title:'Direccion'}} />
    </Stack.Navigator>
  )
}

function App(){
  return(
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  )
}

export default App;