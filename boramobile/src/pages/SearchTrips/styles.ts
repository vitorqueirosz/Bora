import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface InputProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;


export const Header = styled.View`
    margin-top: 32px;
    
`;
export const HeaderText = styled.Text`
    color: #4e4e4e;
    font-weight: bold;
    font-size: 18px;
`;
export const SelectContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
`;

export const InputContainer = styled.View<InputProps>`
    background: #fff;
    width: 50%;
    border-width: 2px;
    border-color: #f0f0f5;
    
    border-radius: 10px;
    padding: 0 16px;
    

    ${props => props.isFocused && css `
    border-color: #4C42DB;
    ` }

    ${props => props.isFilled && css `
        color: #4C42DB;
    ` }


`;
export const TextInput = styled.TextInput`
    height: 50px;
    color: #4C42DB;
`;


export const HeaderBottomContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    
    
`;
export const InputBottomContainer = styled.View`
    width: 70%;
    background: #fff;
    border-radius: 10px;
`;
export const Calendar = styled.View`
    width: 70%;
`;

export const OpenDatePickerButton  = styled(RectButton)`
    color: #4C42DB;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 16px;
    background: #fff;
    flex-direction: row;
    
`;

export const OpenDatePickerButtonText = styled.Text`
    font-size: 16px;
    color: #4C42DB;
`;
export const SelectedDate = styled.Text`
    color: #4C42DB;
`;
export const Button = styled.TouchableHighlight`
    background: #4C42DB;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    border-radius: 10px;
    margin-left: 16px;
    width: 80px;
`;

export const TravelList = styled.ScrollView`
    margin-top: 32px;
`;
export const TripContainer = styled.View`
    flex-direction: row;
    height: 120px;
    background: #fff;
    border-radius: 10px;
    margin-top: 24px;

    
`;
export const CityContainer = styled.View`
    background: #4C42DB;
    width: 80px;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;
export const CityText = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const MiddleContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    width: 210px;
`;

export const MiddleAsideContent = styled.View``;

export const TripInfo = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;
export const TripTopText = styled.Text`
    color: #4E4E4E;
`;
export const TripBottomText = styled.Text`
    color: #4C42DB;
`;
export const AsideContent = styled.View`
    justify-content: center;
    align-items: center;

    border-left-width: 2px;
    border-left-color: #c4c4c4;
    
`;
export const AsideTripInfo = styled.View`
    padding: 8px;
`;

