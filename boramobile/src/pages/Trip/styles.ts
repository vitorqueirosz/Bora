import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #6c63ef;
  

  
`;

export const Header = styled.View`
    padding: 32px 32px 64px 32px;
`;

export const HeaderText = styled.Text`
    margin-top: 16px;
    font-weight: bold;
    color: #f0f0f5;
    font-size: 22px;
`;
export const TravelerProfile = styled.View`
    flex-direction: row;
    margin-top: 24px;
`;
export const ProfileContent = styled.View`
    justify-content: center;
    margin-left: 64px;
    
`;
export const Info = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 180px;
`;
export const TextInfo = styled.Text`
    color: #B6C1DD;
`;
export const SubTextInfo = styled.Text`
    color: #fff;
    
`;



export const TripInfo = styled.View`
    flex: 1;
    background: #f0f0f5;
    border-top-left-radius: 29px;
    border-top-right-radius: 29px;

`;
export const TripText = styled.Text`
    color: #4e4e4e;
    font-size: 22px;

    padding: 32px 16px;
`;