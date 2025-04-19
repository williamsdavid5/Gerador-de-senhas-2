import { Tabs } from 'expo-router';
import { Text, View, Pressable, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabLayout() {

    const router = useRouter();
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarStyle: { display: 'none' },
                }} />

            <View style={{ alignItems: 'center', justifyContent: 'center', height: 80 }}>
                <View style={styles.tabBar}>
                    <Pressable style={styles.button}
                        onPress={() => router.replace('/')}
                    >
                        <Text style={styles.textButton}>início</Text>
                    </Pressable>
                    <Pressable style={styles.button}
                        onPress={() => router.replace('/(tabs)/passwords')}
                    >
                        <Text style={styles.textButton}>senhas</Text>
                    </Pressable>
                </View>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        width: '80%',
        height: 50,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    button: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 15
    }
})