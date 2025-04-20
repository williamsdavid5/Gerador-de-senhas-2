import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useSenhas() {
    const [senhas, setSenhas] = useState([]);

    useEffect(() => {
        async function carregarSenhas() {
            const json = await AsyncStorage.getItem('@senhas');
            if (json) setSenhas(JSON.parse(json));
        }

        carregarSenhas();
    })

    async function adicionarSenha(nova) {
        const novaLista = [...senhas, nova];
        setSenhas(novaLista);
        await AsyncStorage.setItem('@senhas', JSON.stringify(novaLista));
    }

    async function removerSenha(index) {
        const novaLista = [...senhas];
        novaLista.splice(index, 1);
        setSenhas(novaLista);
        await AsyncStorage.setItem('@senhas', JSON.stringify(novaLista))
    }

    return { senhas, adicionarSenha, removerSenha }
}