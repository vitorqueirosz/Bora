import React, { useEffect, useState } from 'react';
// import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Button from '../../components/Button';

import api from '../../services/api';

import { 
    Container, 
    Header, 
    ProfileContent, 
    Infos, 
    MainText,
    SubText, 
    MainContent, 
    TravelContainer,
    TravelText,
    TravelList,
    TripContainer, 
    CityContainer, 
    CityText, 
    MiddleContent, 
    TripInfo, 
    TripTopText, 
    TripBottomText, 
    AsideContent, AsideTripInfo, AsideTopText, AsideBottomText } from './styles';

interface User {
    id: string;
    name: string;
    uf: string;
    city: string;
    avatar: string;
}

interface TripData {
    id: string;
    trip_type: string;
    uf: string;
    city: string;
    vehicle: string;
    date: number;
}

const Dashboard: React.FC = () => {
    const navigation = useNavigation();

    const [data, setData] = useState<User>({} as User);
    const [tripsData, setTripsData] = useState<TripData[]>([]);

    // const { user } = useAuth();

    useEffect(() => {
    
        api.get('/users').then(response => {
            const { user } = response.data;
            const { trip } = response.data;

            setData(user);
            setTripsData(trip)

        })

    }, []);

    return (
      <Container>

        <Header>
          {/* <Image style={{ flex: 1, justifyContent: 'center', width: '100%', resizeMode: 'cover'}} source={{ uri: `http://10.0.2.2:3333/files/3f0c0207a29de8532dfe-photo.png` }} /> */}

          <ProfileContent>

            <Infos>
              <MainText>Nome</MainText>
              <SubText>{data.name}</SubText>
            </Infos>

            <Infos>
              <MainText>Estado</MainText>
              <SubText>{data.uf}</SubText>
            </Infos>

            <Infos>
              <MainText>Cidade</MainText>
              <SubText>{data.city}</SubText>
            </Infos>


          </ProfileContent>
        </Header>

        <MainContent>

          <Button icon="navigation" onPress={() => navigation.navigate('SearchTrips')}>Pesquisar viagens</Button>

          <TravelContainer>

            <TravelText>Minhas viagens</TravelText>

            <TravelList showsVerticalScrollIndicator={false}>
              {tripsData.map(trip => (
                <TripContainer key={trip.id}>
                  <CityContainer>
                    <CityText>{trip.city}</CityText>
                  </CityContainer>

                  <MiddleContent>
                    <TripInfo>
                      <TripTopText>Estado</TripTopText>
                      <TripBottomText>{trip.uf}</TripBottomText>
                    </TripInfo>

                    <TripInfo>
                      <TripTopText>Modo</TripTopText>
                      <TripBottomText>{trip.trip_type}</TripBottomText>
                    </TripInfo>

                    <TripInfo>
                      <TripTopText>Veiculo</TripTopText>
                      <TripBottomText>{trip.vehicle}</TripBottomText>
                    </TripInfo>    
                  </MiddleContent>
                        
                  <AsideContent>
                    <AsideTripInfo>
                      <AsideTopText>Data</AsideTopText>
                      <AsideBottomText>{trip.date}</AsideBottomText>
                    </AsideTripInfo>
                  </AsideContent>

                </TripContainer>
                ))}
            </TravelList>
          </TravelContainer>
        </MainContent>
      </Container>
    );
};

export default Dashboard;