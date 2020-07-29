import React, { useState, useEffect, useCallback, SyntheticEvent, useRef, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';

import RNPickerSelect  from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { format } from 'date-fns';


import DateTimePicker from '@react-native-community/datetimepicker';

import api from '../../services/api';
import { 
    Container, 
    Header, 
    HeaderText, 
    SelectContainer, 
    TextInput, 
    InputContainer, 
    HeaderBottomContent, 
    Button, 
    TravelList,
    TripContainer, 
    CityContainer, 
    CityText, 
    MiddleContent, 
    TripInfo, 
    TripTopText, 
    TripBottomText, 
    AsideContent, 
    AsideTripInfo, 
    MiddleAsideContent, 
    Calendar, 
    OpenDatePickerButton, 
    OpenDatePickerButtonText, 
    SelectedDate  } from './styles'

const { ptBR } =  require('date-fns/locale/pt-BR');

interface TripsData {
    id: string;
    trip_type: string;
    uf: string;
    city: string;
    vehicle: string;
    date: number;
}

interface IBGEUFResponse {
    sigla: string
}

interface IBGECityResponse {
    nome: string;
}

const SearchTrips: React.FC = () => {
    const inputRef = useRef<any>();
    const navigation = useNavigation();
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [tripsData, setTripsData] = useState<TripsData[]>([]);

    const [selectedUf, setSelectedUf] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setisFilled] = useState(false);


    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
          const initialUfs = response.data.map((uf) => uf.sigla);
    
          setUfs(initialUfs);
        });

      }, []);
    
      useEffect(() => {
        if (selectedUf === '0') {
          return;
        }
    
        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
          .then((response) => {
            const initialCity = response.data.map((city) => city.nome);
    
            setCities(initialCity);
          });
      }, [selectedUf]);

      const formattedDate = useMemo(() => {
        return format(selectedDate, 'dd-MM-yyyy', { locale: ptBR })
    }, [selectedDate]);

    //   useEffect(() => {
    //       api.get('/trips', {
    //           params: {
    //               uf: selectedUf,
    //               city: selectedCity,
    //               date: formattedDate,
    //           }
    //       }).then(response => {
    //         console.log(response.data)
    //       })
    //   }, [selectedUf, selectedCity, formattedDate]);

      const handleInputFocus = useCallback(() => {
          setIsFocused(true);
      }, []);

      const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    
        setisFilled(!!inputRef.current.value);
    }, []);

    const handleToggleDatePicker = useCallback(() => {
        setShowDatePicker(state => !state);
    }, []);

    const handleDataChanged = useCallback((_, date: Date | undefined) => {
        if (Platform.OS === 'android') {
            setShowDatePicker(false);
          }

        if (date) {
            setSelectedDate(date);
        }

    }, []);

    const handleNavigateToTrip = useCallback((id: string) => {
        navigation.navigate('Trip', {id});
    }, [navigation]);

      const handleSearchTrip = useCallback(() => {
        try {
            api.get('/trips', {
                params: {
                    uf: selectedUf,
                    city: selectedCity,
                    date: formattedDate,
                }
            }).then(response => {
              const { trips } = response.data;
              setTripsData(trips);
            })
        } catch (err) {
            console.log(err)
        }
        

      }, [selectedUf, selectedCity, formattedDate]);

    return (
      <Container>

        <Icon onPress={() => navigation.goBack()} name="arrow-left" size={20} color="#4C42DB" />
        
        <Header>

          <HeaderText>Pesquisar viagens</HeaderText>

          <SelectContainer>
            <InputContainer isFilled={isFilled} isFocused={isFocused}>
              <RNPickerSelect  
                onValueChange={(value) => setSelectedUf(value)}
                items={
                ufs.map(item => ({
                label: item, value: item}))
            }
              >
                <TextInput 
                  ref={inputRef}
                  maxLength={2}
                  autoCorrect={false} 
                  autoCapitalize="characters" 
                  value={selectedUf}
                  onChangeText={setSelectedUf}
                  placeholder="Digite a UF"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </RNPickerSelect>
            </InputContainer>

            <InputContainer isFilled={isFilled} isFocused={isFocused}>

              <RNPickerSelect
                onValueChange={(value) => setSelectedCity(value)}
                items={
            cities.map(item => ({
            label: item, value: item,
            }))
            }
              >
                <TextInput 
                  ref={inputRef}
                  onFocus={handleInputFocus}
                  placeholder="Digite a cidade" 
                  value={selectedCity}
                  onChangeText={setSelectedCity}
                  onBlur={handleInputBlur}
                />


              </RNPickerSelect>
            </InputContainer>
          </SelectContainer>

          <HeaderBottomContent>

            <Calendar>

              <OpenDatePickerButton onPress={handleToggleDatePicker}>
                <SelectedDate>{formattedDate || 'Selecione uma data'}</SelectedDate>
                <Icon name="calendar" size={25} color="#6c63ef" />
              </OpenDatePickerButton>

              {showDatePicker && (
              <DateTimePicker
                mode="date"
                display="calendar"
                value={selectedDate}
                textColor="#6c63ef"
                onChange={handleDataChanged}
              />
            )}
            </Calendar>


            <Button>
              <Icon onPress={handleSearchTrip} name="search" size={20} color="#fff" />
            </Button>

          </HeaderBottomContent>
   
        </Header>
        
        <TravelList showsVerticalScrollIndicator={false}>
          {tripsData?.map(trip => (
                
            <TripContainer key={trip.id}>
              <CityContainer>
                <CityText>{trip.city}</CityText>
              </CityContainer>

              <MiddleContent>

                <MiddleAsideContent>
                  <TripInfo>
                    <TripTopText>Estado</TripTopText>
                    <TripBottomText>{trip.uf}</TripBottomText>
                  </TripInfo>

                  <TripInfo>
                    <TripTopText>Modo</TripTopText>
                    <TripBottomText>{trip.trip_type}</TripBottomText>
                  </TripInfo>
                </MiddleAsideContent>

                <MiddleAsideContent>
                  <TripInfo>
                    <TripTopText>Veiculo</TripTopText>
                    <TripBottomText>{trip.vehicle}</TripBottomText>
                  </TripInfo>


                  <TripInfo>
                    <TripTopText>Data</TripTopText>
                    <TripBottomText>{trip.date}</TripBottomText>
                  </TripInfo>
                </MiddleAsideContent>

              </MiddleContent>
                        
              <AsideContent>
                <AsideTripInfo>
                  <Icon onPress={() => handleNavigateToTrip(trip.id)} name="chevron-right" size={20} color="#6c63ef" />
                </AsideTripInfo>
              </AsideContent>

            </TripContainer>

          ))}
        </TravelList>
          
    

      </Container>
    );
};

export default SearchTrips;