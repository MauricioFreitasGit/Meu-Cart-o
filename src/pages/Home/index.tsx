import React, { useEffect, useState } from 'react';

import {
    Container,
    Header,
    UserText,
    IconContainer,
    ImagePerfil,
    SaldoAtual,
    ValorSaldo,
    ButtonSair,
    ButtonRecarga,
    ButtonHistorico,
    ContainerButtons,
    ButtonSairText,
    ButtonRecargaText,
    ButtonHistoricoText,
    ImageIcon
} from './styles';

import perfil from '../../assets/boy.png';
import saindo from '../../assets/pin.png';
import recarga from '../../assets/more.png';
import historico from '../../assets/list.png';
import FormatedValues from '../../utils/formatValue';

import { StatusBar } from 'react-native';
import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';


const Home: React.FC = () => {
    const [saldo, setSaldo] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        async function loadStorageData() {
            const user = await AsyncStorage.getItem('@GoBarber:nome');
            setUser(user);

            const response =  await api.get('/cartoes',{
                headers:{
                    authorization:57
                }
            });
            const [res] = (response.data);
            setSaldo(FormatedValues(res.saldo));
        }
        loadStorageData();
    }, [user,saldo]);

    async function SignOut() {
        const usuario = await AsyncStorage.removeItem('user')
        //navigation.navigate('SignIn');

    }
    return (

        <Container>
            <StatusBar backgroundColor="rgba(196, 196, 196, 0.3);"></StatusBar>
            <Header>
                <UserText>Olá, {user}</UserText>
                <IconContainer>
                    <Icon name="power" size={24} color="#FFF" onPress={() => signOut()} />
                </IconContainer>
            </Header>
            <ImagePerfil source={perfil} />
            <SaldoAtual>saldo atual</SaldoAtual>
            <ValorSaldo>{saldo}</ValorSaldo>
            <ContainerButtons>
                <ButtonSair>
                    <ImageIcon source={saindo} ></ImageIcon>
                    <ButtonSairText>ESTOU SAINDO</ButtonSairText>
                </ButtonSair>
                <ButtonRecarga>
                    <ImageIcon source={recarga} ></ImageIcon>
                    <ButtonRecargaText>NOVA RECARGA</ButtonRecargaText>
                </ButtonRecarga>
                <ButtonHistorico>
                    <ImageIcon source={historico} ></ImageIcon>

                    <ButtonHistoricoText>MEU HISTÓRICO</ButtonHistoricoText>
                </ButtonHistorico>
            </ContainerButtons>
        </Container>
    );
}

export default Home;