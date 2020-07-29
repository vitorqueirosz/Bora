import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #4C42DB;
  border-radius: 10px;
  margin-top: 8px;
  align-items: center;
  flex-direction: row;
  

`;

export const IconContainer = styled.View`
    background: rgba(0, 0,0, 0.1);
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 10px;
`;
export const Icon = styled(FeatherIcon)`
    
`;
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    text-align: center;
    flex: 1;
    padding-right: 32px;
    font-weight: bold;
`;
