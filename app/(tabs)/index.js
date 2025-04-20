import { Image, StyleSheet, View, Text, Pressable, Modal, TextInput, Alert } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react';
import { cores } from '../../hooks/cores';

export default function HomeScreen() {

  const [caracteres, setCaracteres] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);
  const [etiqueta, setEtiqueta] = useState('');
  const [senha, setSenha] = useState('');
  const [senhas, setSenhas] = useState([]);

  function gerarSenha() {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%&*()_+{}[]';
    const tudo = letras + numeros + simbolos;

    let novaSenha = '';
    for (let i = 0; i < caracteres; i++) {
      const randIndex = Math.floor(Math.random() * tudo.length);
      novaSenha += tudo[randIndex];
    }

    setSenha(novaSenha);
  }

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
          minimumTrackTintColor={cores.corPreto}
          maximumTrackTintColor={cores.corPreto}
          onValueChange={(value) => {
            setCaracteres(value)
          }}
          value={10}
        ></Slider>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={() => {
            gerarSenha();
            setModalVisible(true)
          }}
        >
          <Text style={[styles.text, { fontFamily: 'segoeUI-Bold' }]}>Gerar</Text>
        </Pressable>

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <Text style={styles.text}>Senha Gerada:</Text>

            <Text
              style={[styles.title,
              {
                fontSize: 25,
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: cores.corAzul,
                width: '100%',
                textAlign: 'center',
                height: '40'
              }]}>
              {senha}
            </Text>

            <TextInput
              placeholder='Etiqueta'
              placeholderTextColor={cores.corBranco}
              value={etiqueta}
              onChangeText={text => setEtiqueta(text)}
              style={styles.input}
            >
            </TextInput>
            <Pressable
              style={styles.button}
              onPress={() => {
                if (etiqueta.trim() === '') {
                  Alert.alert(
                    'Atenção', 'Adicione uma etiqueta à senha!'
                  )
                  return;
                }

                const novaSenha = {
                  'etiqueta': etiqueta,
                  'senha': senha
                }

                setSenhas([...senhas, novaSenha]);
                setEtiqueta('');
                setSenha('');
                setModalVisible(false);
              }}
            >
              <Text style={[styles.text, { fontFamily: 'segoeUI-Bold' }]}>Salvar Senha</Text>
            </Pressable>
            <Pressable style={[styles.button, { marginTop: 10, backgroundColor: cores.corPreto }]}>
              <Text
                onPress={() => setModalVisible(false)}
                style={[styles.text, { fontFamily: 'segoeUI-Bold', color: cores.corBranco }]}
              >Cancelar</Text>
            </Pressable>
          </View>

        </Modal>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: cores.corBranco
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'segoeUI',
    color: cores.corPreto
  },
  slider: {
    width: '80%',
    height: 80
  },
  button: {
    backgroundColor: cores.corBranco,
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    borderWidth: 6,
    borderColor: cores.corPreto,
    elevation: 5
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }]
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.corBranco
  },
  input: {
    width: '80%',
    backgroundColor: cores.corPreto,
    margin: 10,
    padding: 10,
    borderRadius: 14,
    height: 60,
    color: cores.corBranco,
    fontSize: 20
  }
});
