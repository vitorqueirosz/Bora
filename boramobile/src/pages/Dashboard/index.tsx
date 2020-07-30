import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/AuthContext';
import Button from '../../components/Button';

import api from '../../services/api';

import { 
    Container, 
    HeaderIcon,
    Header, 
    ProfileContent, 
    Infos,
    ProfileImage, 
    MainText,
    SubText, 
    MainContent, 
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
    const {  signOut } = useAuth();

    const [data, setData] = useState<User>({} as User);
    const [tripsData, setTripsData] = useState<TripData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        api.get('/users').then(response => {
            const { user } = response.data;
            const { trip } = response.data;

            setData(user);
            setTripsData(trip);
        })

        setLoading(false);
        

    }, [loading]);

    const handleSignOut = useCallback(() => {
        signOut();
    }, [signOut]);

    
    if (loading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#9a9a9a" />
            <Text style={{ fontSize: 11, color: '#9a9a9a'}}>Carregando...</Text>
          </View>
        ) 
    }

    return (
      <Container>

        <HeaderIcon>
          <Icon onPress={handleSignOut} name="arrow-left" size={20} color="#fff" />
        </HeaderIcon>

        <Header>
          <ProfileImage 
            source={{ uri: `http://192.168.0.100:3333/files/${data.avatar}` }}
          />

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
        </MainContent>
      </Container>
    );
};

export default Dashboard;