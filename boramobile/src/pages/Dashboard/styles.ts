import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #6c63ef;
`;

export const Header = styled.View`
    /* flex: 1; */
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 32px;

`;


export const ProfileContent = styled.View``;


export const Infos = styled.View`
    flex-direction: row;
    align-items: center;
    
`;
export const MainText = styled.Text`
    color: #B6C1DD;
    margin-right: 16px;

`;
export const SubText = styled.Text`
    color: #fff;
`;

export const MainContent= styled.View`
    /* position: absolute; */
    flex: 1;

    background: #f0f0f5;
    border-top-left-radius: 29px;
    border-top-right-radius: 29px;

    padding: 32px 16px;
`;

export const TravelContainer = styled.View`
    margin-top: 32px;
`;

export const TravelText = styled.Text`
    font-weight: bold;
    color: #3B455F;
`;

export const TravelList = styled.ScrollView`
    width: 100%;
    /* background: #c6d0ec;
    padding: 16px; */
    
`;

export const TripContainer = styled.View`
    flex-direction: row;
    border-radius: 10px;
    background: #fff;
    margin-top: 16px;
    height: 80px;
    
`;
export const CityContainer = styled.View`
    background: #6c63ef;
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
    /* margin-left: 6px; */
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