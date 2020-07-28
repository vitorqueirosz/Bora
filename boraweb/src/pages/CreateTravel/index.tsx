import React, {
  useEffect, useState, useCallback, ChangeEvent, FormEvent, SyntheticEvent,
} from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiNavigation, FiArrowLeft } from 'react-icons/fi';

import axios from 'axios';
import { format, parseISO } from 'date-fns';

import { toast } from 'react-toastify';
import logoapp from '../../assets/logoapp.svg';

import api from '../../services/api';
import userProfilePic from '../../assets/user2.svg';
import InputForm from '../../components/InputForm';

import {
  Header, Container, AsideContent, Content, ProfileContent, SelectList, EmptyProfileImage,
  TripTypeInput, DestinationInput, VehicleInput,
} from './styles';

const { pt } = require('date-fns/locale');

interface UserData {
    id: string;
    name: string;
    uf: string;
    city: string;
    avatar: string;
    user: UserData;
}

interface TripData {
    trip_type: string;
    vehicle: string;
    date: Date;
    uf: string;
    city: string;
}

interface IBGEUFResponse {
    sigla: string
}

interface IBGECityResponse {
    nome: string;
}

const CreateTravel: React.FC = () => {

  const history = useHistory();
  const [data, setData] = useState<UserData>({} as UserData);

  const [formData, setFormData] = useState<TripData>({} as TripData);

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {

    api.get('/users').then(response => {
        const { user } = response.data;
        setData(user);

    });

  }, []);

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

  const handleSelectedUf = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const uf = event.target.value;

    setSelectedUf(uf);
  }, []);

  const handleSelectedCity = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;

    setSelectedCity(city);
  }, []);

  const handleInputChange = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setFormData({ ...formData, [name]: value });
  }, [formData]);

  const handleSubmit = useCallback(

    async (event: FormEvent): Promise<void> => {
      event.preventDefault();

      try {
        const {
          trip_type, date, vehicle,
        } = formData;

        const uf = selectedUf;
        const city = selectedCity;

        const formattedDateIso = parseISO(String(date));

        const formattedDate = format(
          formattedDateIso, 'dd-MM-yyyy', { locale: pt },
        );

        const tripData = {
          trip_type, date: formattedDate, vehicle, uf, city,
        };

        await api.post('/trips', tripData);

        toast.success('Viagem criada com sucesso!', { autoClose: 2000 });

        setTimeout(() => {
          history.push('/dashboard');
        }, 2000);
      } catch {
        toast.error('Ocorreu um erro ao cadastrar a viagem', { autoClose: 2000 });
      }
    }, [formData, selectedUf, selectedCity, history],
  );

  return (
    <Container>

      <AsideContent>

        <ProfileContent>

          <header>
          <div>
              {data?.avatar === null ? <EmptyProfileImage><img src={userProfilePic} alt="logo" /></EmptyProfileImage>
              :
                <img src={`http://localhost:3333/files/${data?.avatar}`} alt="profile" />
            }
            </div>
          </header>

          <div>
            <strong>Nome</strong>
            <span>{data.name}</span>
          </div>

          <div>
            <strong>Estado</strong>
            <span>{data.uf}</span>
          </div>

          <div>
            <strong>Cidade</strong>
            <span>{data.city}</span>
          </div>

        </ProfileContent>
        <aside>
          <img src={logoapp} alt="logoapp" />
          <span>Baixe o App do Bora</span>
        </aside>
      </AsideContent>

      <Content>

        <Header>
          <h1>Crie a sua viagem</h1>

          <Link to="/dashboard">
            <FiArrowLeft />
            Voltar para o Dashboard
          </Link>
        </Header>

        <SelectList>

          <form onSubmit={handleSubmit}>
            <header>
              <TripTypeInput>
                <h1>Modo de viagem</h1>

                <div>
                  <InputForm name="trip_type" onClick={handleInputChange} type="button" value="Acompanhante" />
                  <InputForm name="trip_type" onClick={handleInputChange} type="button" value="Motorista" />
                </div>

              </TripTypeInput>

              <div>
                <h1>Periodo</h1>
                <InputForm name="date" onChange={handleInputChange} type="date" />
              </div>
            </header>

            <VehicleInput>
              <h1>Veiculo</h1>

              <div>

                <InputForm type="button" onClick={handleInputChange} value="Carro" name="vehicle" />
                <InputForm type="button" onClick={handleInputChange} value="Moto" name="vehicle" />
                <InputForm type="button" onClick={handleInputChange} value="Outros" name="vehicle" />

              </div>

            </VehicleInput>

            <DestinationInput>
              <h1>Destino</h1>

              <div>
                <select
                  name="uf"
                  onChange={handleSelectedUf}
                  id="uf"
                  value={selectedUf}
                >
                  <option value="0">Selecione uma UF</option>
                  {ufs.map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>

                <select
                  name="uf"
                  onChange={handleSelectedCity}
                  id="uf"
                  value={selectedCity}
                >
                  <option value="0">Selecione uma Cidade</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </DestinationInput>
          </form>

        </SelectList>
        <button onClick={handleSubmit} type="submit">
          <span>
            <FiNavigation size={20} color="#fff" />
          </span>
          <p>Salvar viagem</p>
        </button>

      </Content>
    </Container>
  );
};

export default CreateTravel;
