import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { View, Text, ActivityIndicator, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import email from 'react-native-email';
import api from '../../services/api';



import whatsappIcon from '../../assets/Whatsapp.png';

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
    AsideBottomText,
    ContactContainer,
    Content,
    ButtonContact,
    TextContact,
    IconContact } from './styles';

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
    email: string;
    avatar: string;
    whatsapp: string;
}

const Trip: React.FC = () => {
    
    const navigation = useNavigation();
    const routes = useRoute();

    const [userData, setUserData] = useState<User>({} as User);
    const [tripData, setTripData] = useState<Trip>({} as Trip);
    const [loading, setLoading] = useState(true);

    const routeParams = routes.params as Params;

    useEffect(() => {

        api.get(`/trips/${routeParams.id}`).then(response => {
            const { user } = response.data;
            const { trip } = response.data;

            setUserData(user);
            setTripData(trip);

        });

        setLoading(false);

    }, [routeParams.id, loading]);


    const handleWhatsapp = useCallback(() => {
        Linking.openURL(
            `whatsapp://send?phone=55${userData.whatsapp}&text=Ola ${userData.name}, vi que voce vai para ${tripData.city} dia ${tripData.date}, podemos acertar de irmos juntos?`)
    }, [tripData.city, tripData.date, userData.whatsapp, userData.name]);

    const handleComposeMail = useCallback(() => {
        const sendTo = userData.email;
        email(sendTo, {
            subject: 'Interesse em viagem compartilhada',
            body: `Ola ${userData.name}, vi que voce vai para ${tripData.city} dia ${tripData.date}, podemos acertar de irmos juntos?`
        })
    }, [tripData.city, tripData.date, userData.email, userData.name]);

    if (loading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#9a9a9a" />
            <Text style={{ fontSize: 11, color: '#9a9a9a'}}>Carregando...</Text>
          </View>
        ) 
    }

    return (
      <>

        <Container>


          <Header>
            <Icon onPress={() => navigation.goBack()} name="arrow-left" color="#f0f0f5" size={20} />
            <HeaderText>Viajante</HeaderText>

            <TravelerProfile>
              <ProfileImage 
                source={{ uri: `http://192.168.0.100:3333/files/${userData.avatar}` }}
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

        <ContactContainer>
          <Content>
            <ButtonContact onPress={handleWhatsapp}>
              <IconContact source={whatsappIcon} />
              <TextContact>Whatsapp</TextContact>
            </ButtonContact>

            <ButtonContact onPress={handleComposeMail}>
              <Icon name="mail" size={20} color="#FFF" />
              <TextContact>E-mail</TextContact>
            </ButtonContact>
          </Content>
        </ContactContainer>

      </>
    );
};

export default Trip;