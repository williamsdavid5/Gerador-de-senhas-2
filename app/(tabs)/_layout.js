import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: '#000',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#fff' },
            }}
        >
            <Tabs.Screen name="index" options={{ title: 'Início' }} />
            <Tabs.Screen name="passwords" options={{ title: 'Senhas' }} />
        </Tabs>
    )
}