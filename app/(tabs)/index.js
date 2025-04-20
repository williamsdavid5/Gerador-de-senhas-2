import { Image, StyleSheet, View, Text, Pressable, Modal, TextInput, Alert } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react';
import { cores } from '../../hooks/cores';
import { useSenhas } from '../../hooks/useSenhas';

export default function HomeScreen() {

  const [caracteres, setCaracteres] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);
  const [etiqueta, setEtiqueta] = useState('');
  const [senha, setSenha] = useState('');

  const { senhas, adicionarSenha } = useSenhas();

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
      <Text style={[styles.title, { width: '100%', borderBottomWidth: 2, padding: 20 }]}>Nova Senha</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../assets/images/cadeadoIcon.png')} style={{ width: '50%', height: '40%', resizeMode: 'contain' }}></Image>
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
          <Text style={[styles.text, { fontWeight: 'bold' }]}>Gerar</Text>
        </Pressable>

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <Text style={[styles.text, { width: '90%', textAlign: 'left' }]}>Senha Gerada:</Text>
            <View style={{ width: '90%', alignItems: 'center', marginVertical: 20, paddingVertical: 10, paddingBottom: 20, borderTopWidth: 2, borderBottomWidth: 2 }}>

              <Text
                style={[styles.title,
                {
                  fontSize: 25,
                  width: '100%',
                  textAlign: 'center',
                  height: '40',
                  marginVertical: 10
                }]}>
                {senha}
              </Text>

              <TextInput
                placeholder='Etiqueta'
                placeholderTextColor={cores.corBrancoEscuro}
                value={etiqueta}
                onChangeText={text => setEtiqueta(text)}
                style={styles.input}
              >
              </TextInput>
            </View>
            <Pressable
              style={[styles.button, { width: '90%', marginTop: 15 }]}
              onPress={async () => {
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

                await adicionarSenha(novaSenha);
                setEtiqueta('');
                setSenha('');
                setModalVisible(false);
              }}
            >
              <Text style={[styles.text]}>Salvar Senha</Text>
            </Pressable>
            <Pressable
              style={[styles.button, { marginTop: 10, backgroundColor: cores.corPreto, width: '90%' }]}
              onPress={() => setModalVisible(false)}>
              <Text
                style={[styles.text, { color: cores.corBranco }]}
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
    backgroundColor: cores.corBranco
  },
  title: {
    fontSize: 30,
    fontFamily: 'monospace',
    fontWeight: '900'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'monospace',
    color: cores.corPreto,
    paddingHorizontal: 10
  },
  slider: {
    width: '90%',
    height: 80
  },
  button: {
    backgroundColor: cores.corLaranja,
    width: '90%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: cores.corPreto,
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
    width: '100%',
    backgroundColor: cores.corBranco,
    margin: 10,
    padding: 10,
    height: 60,
    fontSize: 20,
    borderBlockColor: cores.corPreto,
    borderWidth: 2
  }
});
