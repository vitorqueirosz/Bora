import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #4C42DB;
`;
export const HeaderIcon = styled.View`
    padding: 32px 32px 8px 32px;
`;
export const Header = styled.View`
    justify-content: center;
    align-items: center;
    padding: 0 32px 24px 32px;

`;
export const ProfileImage = styled.Image`
    width: 100%;
    max-width: 125px;
    height: 130px;

    border-radius: 130px;
`;


export const ProfileContent = styled.View`
    margin-top: 16px;
`;


export const Infos = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;
export const MainText = styled.Text`
    color: #BBC0D0;
    font-weight: bold;
    margin-right: 24px;

`;
export const SubText = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const MainContent= styled.View`
    flex: 1;
    background: #f0f0f5;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;

    padding: 24px 16px;
`;

export const TravelText = styled.Text`
    font-weight: bold;
    color: #3B455F;
    margin-top: 32px;
`;

export const TravelList = styled.ScrollView`
`;

export const TripContainer = styled.View`
    flex-direction: row;
    border-radius: 10px;
    background: #fff;
    margin-top: 16px;
    height: 80px;
    
`;
export const CityContainer = styled.View`
    background: #5249F2;
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
    align-items: center;
    width: 200px;
    padding-left: 6px;
  
`;
export const TripInfo = styled.View`
    justify-content: center;
    align-items: center;
`;
export const TripTopText = styled.Text`
    color: #323232;
`;
export const TripBottomText = styled.Text`
    color: #6c63ef;
    
`;
export const AsideContent = styled.View`
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    border-left-width: 2px;
    border-left-color: #c4c4c4;
    padding: 4px;
    
`;

export const AsideTripInfo = styled.View`
    justify-content: center;
    align-items: center;
    
`;
export const AsideTopText = styled.Text`
    color: #323232;
`;
export const AsideBottomText = styled.Text`
    color: #6c63ef;
    font-size: 12px;
`;