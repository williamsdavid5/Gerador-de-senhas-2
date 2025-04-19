import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react';


export default function HomeScreen() {

  const [caracteres, setCaracteres] = useState(10);

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Nova Senha</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../assets/images/cadeadoIcon.png')} style={{ width: '40%', height: '40%', resizeMode: 'contain' }}></Image>
        <Text style={styles.text}>Escolha a quantidade de caracteres para a sua nova senha.</Text>
        <Text style={[styles.title, { marginTop: 15 }]}>{caracteres} Caracteres</Text>
        <Slider
          style={styles.slider}
          thumbImage={require('../../assets/images/sliderBola.png')}
          step={1}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor='#343331'
          maximumTrackTintColor='#343331'
          onValueChange={(value) => {
            setCaracteres(value)
          }}
          value={10}
        ></Slider>

        <View style={styles.shadowWrapper}>
          <View style={styles.shadow} />
          <Pressable style={styles.buttom}>
            <Text style={[styles.text, { fontFamily: 'segoeUI-Bold' }]}>Salvar senha</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0EADC'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'segoeUI'
  },
  slider: {
    width: '100%',
    height: 80
  },
  buttom: {
    backgroundColor: '#F0EADC',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 5,
    borderColor: '#343331',
  },
  shadowWrapper: {
    position: 'relative',
    width: '100%',
    height: 50,
    alignItems: 'center'
  },
  shadow: {
    position: 'absolute',
    top: 5,   // deslocamento vertical
    right: 30,
    width: '80%',
    height: '100%',
    backgroundColor: '#343331', // sombra sólida
    borderRadius: 8,
    zIndex: 0,
  },

});
