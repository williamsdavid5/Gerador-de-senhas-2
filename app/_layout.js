import { Tabs } from 'expo-router';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

export default function TabLayout() {

    const router = useRouter();
    const [fontsLoaded] = useFonts({
        'segoeUI': require('../assets/fonts/Segoe UI.ttf'),
        'segoeUI-Bold': require('../assets/fonts/Segoe UI Bold.ttf')
    })

    if (!fontsLoaded) return null;

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.style = { fontFamily: 'segoeUI' };

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false
                }}>

            </Tabs>


            <View style={{ alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: '#F0EADC' }}>
                <View style={styles.tabBar}>
                    <Pressable style={styles.button}
                        onPress={() => router.replace('/')}
                    >
                        <Image source={require('../assets/images/tabBarCadeado.png')} style={styles.tabBarIcons}></Image>
                    </Pressable>
                    <Pressable style={styles.button}
                        onPress={() => router.replace('/(tabs)/passwords')}
                    >
                        <Image source={require('../assets/images/tabBarLista.png')} style={styles.tabBarIcons}></Image>
                    </Pressable>
                </View>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        width: '90%',
        height: '60%',
        backgroundColor: '#343331',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 10
    },
    button: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 15
    },
    tabBarIcons: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    }
})