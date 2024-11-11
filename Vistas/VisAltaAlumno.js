import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import { ScrollView, State } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioButtonGroup,{RadioButtonItem} from 'expo-radio-button';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import VisFoto from './VisFoto';

const VisAltaAlumno = (props) => {
  const [state, setState] = useState({
    alunc: "",
    alunombre: "",
    aluApellidos: "",
    aluCorreo: "",
    aluTelefono: "",
    alufecha: "",
    alusexo: 'Femenino',
  });
  const [resetFoto, setResetFoto] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // Radio button
  const [sexo, setSexo] = useState('Femenino');

  const handlerChangeGenero = (value) => {
    setSexo(value);
  };

  const [carrera, setCarrera] = useState({
    aluCarrera: "seleccionar carrera...",
  });

  const handlerChangeCarrera = (aluCarrera, value) => {
    setCarrera({ ...carrera, [aluCarrera]: value });
  };

  const data = [
    { label: 'Ingenieria en sistemas', value: '1' },
    { label: 'Ingenieria en gestion', value: '2' },
    { label: 'Licenciatura en turismo', value: '3' },
    { label: 'Ingenieria en electromecanica', value: '4' },
    { label: 'Arquitectura', value: '5' },
    { label: 'Licenciatura en gastronomia', value: '6' },
  ];

  const guardarAlumno = async () => {
    if (state.alunc === '' || state.alunombre === '') {
      alert("Favor de llenar todos los datos");
    } else {
      await conexion
        .collection('tblAlumnos')
        .add({
          alunc: state.alunc,
          alunombre: state.alunombre,
          aluApellidos: state.aluApellidos,
          aluCorreo: state.aluCorreo,
          aluTelefono: state.aluTelefono,
          alufecha: date.toLocaleDateString([], { dateStyle: 'medium' }),
          alusexo: sexo,
          aluCarrera: carrera.aluCarrera,
        });
      alert('Alumno guardado exitosamente');
      
      // Limpiar campos después de guardar
      setState({
        alunc: "",
        alunombre: "",
        aluApellidos: "",
        aluCorreo: "",
        aluTelefono: "",
        alufecha: "",
        alusexo: 'Femenino',
      });
      setDate(new Date()); // Restablecer la fecha
      setCarrera({ aluCarrera: "seleccionar carrera..." }); // Restablecer la carrera
      setSexo('Femenino'); // Restablecer el sexo
      
      props.navigation.navigate('VisConsultaAlumnos');
    }
  };

  const handleChangeText = (alunc, value) => {
    setState({ ...state, [alunc]: value });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Número de control</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Escribe tu número de control'
            value={state.alunc}
            onChangeText={(value) => handleChangeText('alunc', value)}
          />
        </View>
        <View>
          <Text style={styles.text}>Nombre</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Escribe tu nombre'
            value={state.alunombre}
            onChangeText={(value) => handleChangeText('alunombre', value)}
          />
        </View>
        <View>
          <Text style={styles.text}>Apellidos</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Escribe tus apellidos'
            value={state.aluApellidos}
            onChangeText={(value) => handleChangeText('aluApellidos', value)}
          />
        </View>
        <View>
          <Text style={styles.text}>Correo</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Escribe tu correo'
            value={state.aluCorreo}
            onChangeText={(value) => handleChangeText('aluCorreo', value)}
          />
        </View>
        <View>
          <Text style={styles.text}>Número de teléfono</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Escribe tu número de teléfono'
            value={state.aluTelefono}
            onChangeText={(value) => handleChangeText('aluTelefono', value)}
          />
        </View>
        <View style={{ width: '80%' }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={carrera.aluCarrera}
            searchPlaceholder="Search..."
            onChange={(item) => handlerChangeCarrera('aluCarrera', item.label)}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />
        </View>
        <View>
          <Text style={styles.text}>Seleccione uno</Text>
          <RadioButtonGroup
            selected={sexo}
            onSelected={(value) => handlerChangeGenero(value)}
            radioBackground="black"
          >
            <RadioButtonItem value="Masculino" label={<Text style={styles.rb}>Masculino</Text>} />
            <RadioButtonItem value="Femenino" label={<Text style={styles.rb}>Femenino</Text>} />
          </RadioButtonGroup>
        </View>
        <SafeAreaView>
          <View>
            <Button title='Fecha de nacimiento' onPress={showDatepicker} />
          </View>
          <Text style={styles.fecha}>Fecha: {date.toLocaleString([], { dateStyle: 'medium' })}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </SafeAreaView>
        <View style={{ width: 360, height: 250 }}>
          <VisFoto nc={state.alunc} resetImage={resetFoto} />
        </View>
        <View>
          <Button style={{ margin: 80 }} title='Guardar alumno' onPress={guardarAlumno}></Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default VisAltaAlumno;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Fondo claro y neutro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Texto oscuro para mayor contraste
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8, // Bordes más redondeados
    backgroundColor: '#fff', // Fondo blanco limpio
    fontSize: 16,
  },
  fecha: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#e0e0e0', // Fondo gris suave
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#555', // Color de texto más suave
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  rb: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333', // Texto oscuro
  },
  dropdown: {
    backgroundColor: '#fff', // Fondo blanco para dropdown
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  icon: {
    marginRight: 5,
    color: '#555',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#888', // Color placeholder más suave
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#333', // Color más suave para los íconos
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
