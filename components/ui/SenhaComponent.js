import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { cores } from '../../hooks/cores';
import { useEffect, useState } from 'react';

export default function SenhaComponent({ etiqueta, senha, index }) {

    const [id, seiId] = useState(0);

    useEffect(() => {
        seiId(index);
    }, [index])

    return (
        <View style={styles.content}>
            <View style={{ flex: 0.7 }}>
                <Text style={styles.textBold}>{etiqueta}</Text>
                <Text style={styles.text}>{senha}</Text>
            </View>
            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Pressable>
                    <Image style={styles.icon} source={require('../../assets/images/mostrandoIcon.png')}></Image>
                </Pressable>
                <Pressable>
                    <Image style={styles.icon} source={require('../../assets/images/lixeiraIcon.png')}></Image>
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
        marginTop: 10
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
        resizeMode: 'contain'
    }
})