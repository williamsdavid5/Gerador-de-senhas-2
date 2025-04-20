import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useSenhas } from '../../hooks/useSenhas';
import { cores } from '../../hooks/cores';
import SenhaComponent from '../../components/ui/SenhaComponent';

export default function Passwords() {

    const { senhas } = useSenhas();

    if (!senhas || senhas.length === 0) {
        return (
            <View style={styles.content}>
                <Text style={styles.title}>Nenhuma senha ainda</Text>
            </View>

        )
    }

    return (
        <SafeAreaView style={styles.safeAera}>
            <ScrollView style={styles.content}>
                <Text style={[styles.title, { marginBottom: 10, marginTop: 20 }]}>Senhas salvas</Text>
                {senhas.map((senha, index) => (
                    <SenhaComponent
                        key={index}
                        etiqueta={senha.etiqueta}
                        senha={senha.senha}
                        index={index}
                    ></SenhaComponent>
                ))}
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: cores.corBranco,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'monospace',
        color: cores.corPreto
    },
    textBold: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'monospace',
        color: cores.corPreto,
        fontWeight: 'bold'
    },
    safeAera: {
        flex: 1,
        backgroundColor: cores.corBranco
    }
})