import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

import image from '../../assets/logo.png';

import { 
    Container, 
    Header, 
    TripInfo,
    HeaderText,
    ProfileImage, 
    TravelerProfile, 
    ProfileContent, 
    Info, 
    TextInfo, 
    SubTextInfo, 
    TripText,
    TripContainer,
    CityContainer,
    CityText,
    Infos,
    AsideTripInfo,
    MiddleContent,
    TripBottomText,
    TripTopText,
    AsideContent,
    AsideTopText, 
    AsideBottomText } from './styles';

interface Params {
    id: string;
}

interface Trip {
    id: string;
    trip_type: string;
    uf: string;
    city: string;
    vehicle: string;
    date: number;
}

interface User {
    id: string;
    name: string;
    uf: string;
    city: string;
    avatar: string;
}

const Trip: React.FC = () => {
    
    const navigation = useNavigation();
    const routes = useRoute();

    const [userData, setUserData] = useState<User>({} as User);
    const [tripData, setTripData] = useState<Trip>({} as Trip);

    const routeParams = routes.params as Params;

    useEffect(() => {

        api.get(`/trips/${routeParams.id}`).then(response => {
            const { user } = response.data;
            const { trip } = response.data;

            console.log(response.data)

            setUserData(user);
            setTripData(trip);

        })

    }, [routeParams.id]);

    return (
      <Container>


        <Header>
          <Icon onPress={() => navigation.goBack()} name="arrow-left" color="#f0f0f5" size={20} />
          <HeaderText>Viajante</HeaderText>

          <TravelerProfile>
            <ProfileImage 
              source={{ uri: `http://192.168.0.102:3333/files/${userData.avatar}` }}
            />

            <ProfileContent>
              <Info>
                <TextInfo>Nome</TextInfo>
                <SubTextInfo>{userData.name}</SubTextInfo>
              </Info>

              <Info>
                <TextInfo>Estado</TextInfo>
                <SubTextInfo>{userData.uf}</SubTextInfo>
              </Info>

              <Info>
                <TextInfo>Cidade</TextInfo>
                <SubTextInfo>{userData.city}</SubTextInfo>
              </Info>
            </ProfileContent>
          </TravelerProfile>
        </Header>

        <TripInfo>

          <TripText>Viagem</TripText>

          <TripContainer>
            <CityContainer>
              <CityText>{tripData.city}</CityText>
            </CityContainer>

            <MiddleContent>
              <Infos>
                <TripTopText>Estado</TripTopText>
                <TripBottomText>{tripData.uf}</TripBottomText>
              </Infos>

              <Infos>
                <TripTopText>Modo</TripTopText>
                <TripBottomText>{tripData.trip_type}</TripBottomText>
              </Infos>

              <Infos>
                <TripTopText>Veiculo</TripTopText>
                <TripBottomText>{tripData.vehicle}</TripBottomText>
              </Infos>    
            </MiddleContent>
                        
            <AsideContent>
              <AsideTripInfo>
                <AsideTopText>Data</AsideTopText>
                <AsideBottomText>{tripData.date}</AsideBottomText>
              </AsideTripInfo>
            </AsideContent>

          </TripContainer>
        </TripInfo>

      </Container>
    );
};

export default Trip;