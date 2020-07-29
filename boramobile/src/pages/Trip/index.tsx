import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import image from '../../assets/logo.png';

import { 
    Container, 
    Header, 
    TripInfo,
    HeaderText, 
    TravelerProfile, 
    ProfileContent, 
    Info, 
    TextInfo, 
    SubTextInfo, 
    TripText } from './styles';

const Trip: React.FC = () => {
    return (
      <Container>


        <Header>
          <Icon name="arrow-left" color="#f0f0f5" size={20} />
          <HeaderText>Viajante</HeaderText>

          <TravelerProfile>
            <Image source={image} />

            <ProfileContent>
              <Info>
                <TextInfo>Nome</TextInfo>
                <SubTextInfo>Nome</SubTextInfo>
              </Info>

              <Info>
                <TextInfo>Estado</TextInfo>
                <SubTextInfo>BA</SubTextInfo>
              </Info>

              <Info>
                <TextInfo>Cidade</TextInfo>
                <SubTextInfo>Lauro de Freitas</SubTextInfo>
              </Info>
            </ProfileContent>
          </TravelerProfile>
        </Header>

        <TripInfo>

          <TripText>Viagem</TripText>


          {/* {tripsData.map(trip => ( */}
          <TripContainer>
            <CityContainer>
              <CityText>Salvador</CityText>
            </CityContainer>

            <MiddleContent>
              <TripInfo>
                <TripTopText>Estado</TripTopText>
                <TripBottomText>BA</TripBottomText>
              </TripInfo>

              <TripInfo>
                <TripTopText>Modo</TripTopText>
                <TripBottomText>Acompanhante</TripBottomText>
              </TripInfo>

              <TripInfo>
                <TripTopText>Veiculo</TripTopText>
                <TripBottomText>Carro</TripBottomText>
              </TripInfo>    
            </MiddleContent>
                        
            <AsideContent>
              <AsideTripInfo>
                <AsideTopText>Data</AsideTopText>
                <AsideBottomText>28-07-2020</AsideBottomText>
              </AsideTripInfo>
            </AsideContent>

          </TripContainer>
          {/* ))}
            </TravelList> */}
        </TripInfo>

      </Container>
    );
};

export default Trip;