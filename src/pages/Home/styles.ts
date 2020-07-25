import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 0 ${Platform.OS === 'android' ? 80 : 40}px ;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 10px 0 24px;
`;

export const Header = styled.View`
    justify-content:space-between;
    flex-direction:row;
    background-color:rgba(196, 196, 196, 0.3);
    width:100%;
    height: 143px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const UserText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  margin: 10px 0 24px;
  width: 180px;
  height: 21px;
  left: 50px;
  top: 84px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`;

export const IconContainer = styled.View`
  position:absolute;
  width: 24px;
  height: 24px;
  left: 340px;
  top: 90px;
`;

export const ImagePerfil = styled.Image`
  position: absolute;
  width: 75px;
  height: 75px;
  left: 48px;
  top: 170px;
  border-radius: 170.5px;
`;

export const ImageIcon = styled.Image`
  width: 27px;
  height: 27px;
  margin-right: 16px;
`;

export const ValorSaldo = styled.Text`
  position: absolute;
  width: 200px;
  height: 35px;
  left: 136px;
  top: 205px;

  font-family: 'RobotoSlab-Medium';
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;

  color: #FFFFFF;
`;

export const SaldoAtual = styled.Text`
    position: absolute;
    width: 95px;
    height: 21px;
    left: 136px;
    top: 177px;

    font-family: 'RobotoSlab-Medium';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`;

export const ButtonSair = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  top: 150px;
  left:43px;
  background: #2893C1;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction:row;
`;

export const ButtonSairText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #FFFFFF;
`;

export const ButtonRecarga = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  top: 150px;
  left:43px;
  background: #28C14A;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  flex-direction:row;

`;

export const ButtonRecargaText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #FFFFFF;
`;

export const ButtonHistorico = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  top: 150px;
  left:43px;
  background: #AB58EC;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  flex-direction:row;

`;

export const ButtonHistoricoText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #FFFFFF;
`;

export const ContainerButtons = styled.View``;