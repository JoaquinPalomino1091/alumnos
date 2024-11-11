import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (


    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.elementob}>
        <Text style={styles.textoelementob}>Joaquin </Text>
        </View>
      </View>

      <View style={styles.filas}> 
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>
      </View>

      <View style={styles.filas}>
        <View style={styles.elementos}></View>
        <View style={styles.elementos}></View>
        <View style={styles.elementos}></View>
      </View>
      
      <View style={styles.filas}>
      <View style={styles.elementos}></View>
      <View style={styles.elementos}></View>
      <View style={styles.elementos}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#9106aa',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
    margin:0,
  },

  banner:{
    flexDirection:'row',
    backgroundColor:'#068be1',
    alignItems:'center',
    justifyContent:'space-between',
    width:400,
    height:150,
  },

  elementob:{
    width:360,
    height:100,
    marginLeft:20,
    marginRight:20,
    borderWidth:5,
    borderColor:'white',
    borderStyle:'solid',
    opacity:0.8,
    borderRadius:10,
    backgroundColor:'#fff',
  },

  textoelementob:{
    color:'#000000',
    textAlign:'center',
    fontStyle:'italic',
    fontSize:30,
    fontWeight:'bold',
    margin:'auto',
    textShadowColor:'#ffffff',
    textShadowRadius:25,
  },

  filas:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:400,
    backgroundColor:'brown',
    height:150,
   
  },

  elementos:{
    width:110,
    height:130,
    marginLeft:10,
    marginRight: 10,
    borderWidth:5,
    borderColor:'white',
    borderStyle:'solid',
    opacity:0.7,
    borderRadius:11,
    backgroundColor:"grey",
  },
});