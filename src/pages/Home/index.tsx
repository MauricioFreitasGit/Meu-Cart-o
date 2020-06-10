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

import { ActivityIndicator, StatusBar } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


const Home: React.FC = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const user = await AsyncStorage.getItem('user');
            setLoading(false);
        }
        loadStorageData();
    }, []);

    function SignOut() {
        AsyncStorage.removeItem('user').then((response) => {
            navigation.navigate('SignIn');
        }
        ).catch((error) => {
            console.log(error)
        })
    }
    return loading ?
        <Container><ActivityIndicator color="#999" size="large" /></Container> :

        <Container>
            <StatusBar backgroundColor="rgba(196, 196, 196, 0.3);"></StatusBar>
            <Header>
                <UserText>Olá, Mauricio</UserText>
                <IconContainer>
                    <Icon name="power" size={24} color="#FFF" onPress={() => SignOut()} />
                </IconContainer>
            </Header>
            <ImagePerfil source={perfil} />
            <SaldoAtual>saldo atual</SaldoAtual>
            <ValorSaldo>R$ 500,00</ValorSaldo>
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
}

export default Home;