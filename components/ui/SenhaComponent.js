import { View, Text, StyleSheet, Pressable, Image, Alert } from 'react-native';
import { cores } from '../../hooks/cores';
import { useEffect, useState } from 'react';
import { useSenhas } from '../../hooks/useSenhas';

export default function SenhaComponent({ etiqueta, senha, index }) {

    const [id, seiId] = useState(0);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const { senhas, removerSenha } = useSenhas();

    useEffect(() => {
        seiId(index);
    }, [index])

    return (
        <View style={styles.content}>
            <View style={{ flex: 0.7 }}>
                <Text style={styles.textBold}>{etiqueta}</Text>
                <Text style={styles.text}>{mostrarSenha ? senha : '••••••••••••••••'}</Text>
            </View>
            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Pressable onPress={() => {
                    setMostrarSenha(!mostrarSenha)
                }}>
                    <Image style={styles.icon} source={mostrarSenha ? require('../../assets/images/mostrandoIcon.png') : require('../../assets/images/ocultoIcon.png')}></Image>
                </Pressable>
                <Pressable onPress={async () => {

                    Alert.alert(
                        "Apagar senha?",
                        "Você tem certeza que quer apagar essa senha?",
                        [
                            {
                                text: "Sim",
                                onPress: () => removerSenha(id)
                            },
                            {
                                text: "Não"
                            }
                        ]
                    )


                }}>
                    <Image style={[styles.icon, { width: 27 }]} source={require('../../assets/images/lixeiraIcon.png')}></Image>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: cores.corBranco,
        width: '100%',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
        paddingBottom: 15
    },
    text: {
        fontSize: 20,
        fontFamily: 'segoeUI',
        color: cores.corPreto
    },
    textBold: {
        fontSize: 20,
        fontFamily: 'segoeUI-Bold',
        color: cores.corPreto
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginLeft: 10
    }
})