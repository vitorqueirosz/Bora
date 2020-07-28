import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex: 1;
  padding: 84px 24px ${Platform.OS === 'android' ? 150 : 40}px 24px;
  justify-content: center;
  
`;
export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: 52px;
    color: #6c63ef;
    margin-right: 32px;
    font-weight: bold;
`;

export const MiddleTitle = styled.Text`
    font-size: 38px;
    color: #3B455F;
    max-width: 150px;
    margin: 0px 4px 0 0px;
`;
export const MiddleTitleDown = styled.Text`
    font-size: 38px;
    color: #3B455F;
    max-width: 210px;
    margin-bottom: 16px;
`;
export const MiddleContainer = styled.View`
    justify-content: center;

`;
export const BottomTitle = styled.Text`
    font-size: 16px;
    color: #6E7892;
    margin: 16px 0 24px 0;
`;

export const AlignContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 32px;
`;
export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 16px;
    justify-content: center;

`;

export const ForgotPasswordText = styled.Text`
    color: #838BA0;
    font-size: 16px;
`;

export const CreateAccontButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f0f0f5;

    border-top-width: 2px;
    border-color: #C4C4C4;
    padding: 16px 0px ${16 + getBottomSpace()}px;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    flex-direction: row;

`;
export const CreateAccontButtonText = styled.Text`
    color: #6c63ef;
    font-size: 18px;
    margin-left: 16px;
`;