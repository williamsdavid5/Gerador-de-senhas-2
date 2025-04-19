import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react';
import { Shadow } from 'react-native-shadow-2';

export default function HomeScreen() {

  const [caracteres, setCaracteres] = useState(10);

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Nova Senha</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../assets/images/cadeadoIcon.png')} style={{ width: '40%', height: '40%', resizeMode: 'contain' }}></Image>
        <Text style={[styles.text, { marginTop: 10 }]}>Escolha a quantidade de caracteres para a sua nova senha.</Text>
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
        <Pressable style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}>
          <Text style={[styles.text, { fontFamily: 'segoeUI-Bold' }]}>Gerar</Text>

        </Pressable>

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
    width: '80%',
    height: 80
  },
  button: {
    backgroundColor: '#F0EADC',
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    borderWidth: 6,
    borderColor: '#343331',
    elevation: 5
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }]
  }
});
