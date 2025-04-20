import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSenhas } from '../../hooks/useSenhas';
import { cores } from '../../hooks/cores';
import SenhaComponent from '../../components/ui/SenhaComponent';

export default function Passwords() {

    const { senhas, removerSenha } = useSenhas();

    if (!senhas || senhas.length === 0) {
        return <Text style={styles.title}>Nenhuma senha ainda</Text>
    }

    return (
        <View style={styles.content}>
            <Text style={[styles.title, { marginBottom: 10 }]}>Senhas salvas</Text>
            {senhas.map((senha, index) => (
                <SenhaComponent
                    key={index}
                    etiqueta={senha.etiqueta}
                    senha={senha.senha}
                    index={index}
                ></SenhaComponent>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: cores.corBranco,
        padding: 20
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
    textBold: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'segoeUI-Bold',
        color: cores.corPreto
    }
})