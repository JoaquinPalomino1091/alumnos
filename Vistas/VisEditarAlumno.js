import {View, TextInput, ScrollView,Button,StyleSheet,Alert,Text,SafeAreaView} from 'react-native'
import {useEffect ,useState} from 'react'
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import VisFoto from './VisFoto';


const ViseditarAlumno = (props) => {

  const [alumno,setAlumno] = useState({
    alunc: '',
    alunombre: '',
    aluApellidos: '',
    aluCorreo: '',
    aluTelefono: '',
    alusexo: '',
    aluCarrera: '',
    alufecha: '', // Campo para la fecha de nacimiento
    
  });

  const [showDatePicker, setShowDatePicker] = useState(false); // Controlar la visibilidad del calendario
  const [date, setDate] = useState(new Date()); // Estado para la fecha seleccionada


  const handlerChangeText = (field, value) => {
    setAlumno({ ...alumno, [field]: value });
  }
  const data = [
    {label: 'Ingeneria en sistemas',value:'1'},
      {label: 'Ingeneria en Gestion',value:'2'},
      {label: 'Licenciatura en Turismo',value:'3'},
      {label: 'Ingeneria en Electromecanica',value:'4'},
      {label: 'Arquitectura',value:'5'},
      {label: 'Licenciatura en Gastronomia',value:'6'},
  ];
  const actualizarAlumno = async (Id) => {
    try {
      await conexion
      .collection('tblAlumnos') 
      .doc(Id)
      .update({
        alunc: alumno.alunc,
        alunombre: alumno.alunombre,
        aluApellidos: alumno.aluApellidos,
        aluCorreo: alumno.aluCorreo,
        aluTelefono: alumno.aluTelefono,
        aluCarrera:alumno.aluCarrera,
        alusexo:alumno.alusexo,
        alufecha: alumno.alufecha, // Actualizar fecha de nacimiento
      })
      .then(() => {
            console.log('Alumno actualizado!');
        });
      } catch (e) {
        alert(e);
      }
      props.navigation.navigate('VisConsultaAlumnos');
  };
  const [resetFoto, setResetFoto] = useState(false);

useEffect(()=>{
  obtenerAlumnoporId(props.route.params.id);
},[props])


const obtenerAlumnoporId = async(Id)=>{
  try{
    await conexion
    .collection('tblAlumnos')
    .doc(Id)
    .get()
    .then((documentSnapshot)=>{
      if(documentSnapshot.exists){
        setAlumno({...alumno,
          alunc:documentSnapshot.data().alunc,
          alunombre:documentSnapshot.data().alunombre,
          aluApellidos:documentSnapshot.data().aluApellidos,
          aluCorreo:documentSnapshot.data().aluCorreo,
          aluTelefono:documentSnapshot.data().aluTelefono,
          alusexo:documentSnapshot.data().alusexo,
          aluCarrera:documentSnapshot.data().aluCarrera,
          alufecha: documentSnapshot.data().alufecha, // Cargar fecha de nacimiento
        })
        
        
        if (data.alufecha) {
          setDate(new Date(data.alufecha));
        }
        
      }
      
    })
  }catch(e){
    alert(e)
  }
}
 // Manejar el cambio de fecha
 const onDateChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShowDatePicker(false); // Ocultar el calendario
  setDate(currentDate); // Actualizar la fecha seleccionada
  setAlumno({ ...alumno, alufecha: currentDate.toLocaleDateString() }); // Guardar la fecha seleccionada
};

return(
  <ScrollView style={styles.container}>
    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Número de Control</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu NC'
      value={alumno.alunc}
      onChangeText={(Val)=> handlerChangeText('alunc',Val)}/>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Nombre</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu Nombre'
      value={alumno.alunombre}
      onChangeText={(Val)=> handlerChangeText('alunombre',Val)}/>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Apellido</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu apellido'
      value={alumno.aluApellidos}
      onChangeText={(Val)=> handlerChangeText('aluApellidos',Val)}/>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Correo</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu Correo'
      value={alumno.aluCorreo}
      onChangeText={(Val)=> handlerChangeText('aluCorreo',Val)}/>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Telefono</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu Telefono'
      value={alumno.aluTelefono}
      onChangeText={(Val)=> handlerChangeText('aluTelefono',Val)}/>
    </View>

        {/* RadioButton para seleccionar el género */}
        <View style={styles.inputGroup}>
        <Text style={styles.textos}>Género</Text>
        <RadioButtonGroup
          containerStyle={{ flexDirection: "row" }}
          selected={alumno.alusexo}  // Muestra el valor seleccionado que viene de la base de datos
          onSelected={(value) => handlerChangeText('alusexo', value)}  // Actualiza el valor en el estado
          radioBackground="blue"   // Color del radio button seleccionado
        >
          <RadioButtonItem value="Masculino" label="Masculino" />
          <RadioButtonItem value="Femenino" label="Femenino" />
          
        </RadioButtonGroup>
      </View>

      <View style={styles.inputGroup}>
  <Text style={styles.textos}>Carrera</Text>
  <Dropdown
    style={styles.entradas} // Asegúrate de que las propiedades sean las adecuadas para Dropdown
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    data={data}
    search
    maxHeight={400}
    labelField="label"
    valueField="value"
    placeholder={alumno.aluCarrera} // Similar a como se hace con TextInput
    searchPlaceholder="Selecciona tu Carrera"
    onChange={(item) => handlerChangeText('aluCarrera', item.label)}
    renderLeftIcon={() => (
      <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
    )}
  />
</View>

 {/* Campo para mostrar y seleccionar la fecha de nacimiento */}
 <View style={styles.inputGroup}>
        <Text style={styles.textos}>Fecha de Nacimiento</Text>
        <TextInput
          style={styles.entradas}
          placeholder="Selecciona tu fecha de nacimiento"
          value={alumno.alufecha}
          onFocus={() => setShowDatePicker(true)} // Mostrar el calendario al hacer clic en el campo
        />
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>
          <View style={{ width: 360, height: 250 }}>
              <VisFoto nc={alumno.alunc} resetImage={resetFoto} />
        </View>
      <View style={{marginBottom:10}}>
                <Button  title="Actualizar" color="#348D68" 
                onPress= {()=> actualizarAlumno(props.route.params.id) }
                />
        </View>
    
  </ScrollView>


)

}


export default ViseditarAlumno

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  inputGroup: {
    marginBottom: 20,
  },
  textos: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  entradas: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  inputSearchStyle: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});