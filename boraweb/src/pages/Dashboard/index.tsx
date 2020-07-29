import React, { useEffect, useState, useCallback } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';

import { useAuth } from '../../hooks/AuthContext';
import logoapp from '../../assets/logoapp.svg';
import api from '../../services/api';

import logo from '../../assets/logotrip.svg';
import userProfilePic from '../../assets/user2.svg';

import {
  Container, AsideContent, Content, ProfileContent, TravelList, EmptyTravelList, EmptyProfileImage
} from './styles';

interface UserData {
    id: string;
    name: string;
    avatar: string;
    uf: string;
    city: string;
    user: UserData;
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
  const { signOut } = useAuth();
  const history = useHistory();

  const [data, setData] = useState<UserData>({} as UserData);
  const [tripsData, setTripsData] = useState<TripData[]>([]);

  useEffect(() => {

    // ( async function handleUserData() {

    api.get('/users').then((response: any) => {
        const { user } = response.data;
        const { trip } = response.data;

        setData(user);
        setTripsData(trip);

    });

    // })();

  }, []);

  const handleGoOut = useCallback(() => {


    signOut();
    history.push('/');
  }, [signOut, history]);

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


              <Link to="/profile">Editar meu perfil</Link>
            </div>

          </header>

          <div>
            <strong>Nome</strong>
            <span>{data?.name}</span>
          </div>

          <div>
            <strong>Estado</strong>
            <span>{data?.uf}</span>
          </div>

          <div>
            <strong>Cidade</strong>
            <span>{data?.city}</span>
          </div>

        </ProfileContent>

        <aside>
          <img src={logoapp} alt="logoapp" />
          <span>Baixe o App do Bora</span>
        </aside>
      </AsideContent>

      <Content>

        <header>
            <h1>Minhas viagens</h1>

            <button onClick={handleGoOut}>

            <FiArrowLeft size={20}/>
                Sair
            </button>
        </header>

        {tripsData.length === 0  ?

        <EmptyTravelList>
            <span>Voce ainda não possui viagens
                <img src={logo} alt="logo"/>
            </span>
        </EmptyTravelList>

        : (
            <TravelList>

            <ul>
                {tripsData?.map((trip) => (
                <li key={trip.id}>
                    <header>
                    <span>{trip.city}</span>
                    </header>

                    <div>
                        <div>
                            <strong>Estado</strong>
                            <span>{trip.uf}</span>
                        </div>

                        <div>
                            <strong>Modo de viagem</strong>
                            <span>{trip.trip_type}</span>
                        </div>

                        <div>
                            <strong>Veiculo</strong>
                            <span>{trip.vehicle}</span>
                        </div>

                    </div>

                    <aside>
                        <strong>Periodo</strong>
                        <span>{trip.date}</span>
                    </aside>
                </li>
                ))}

            </ul>
            </TravelList>
)}


        <Link to="/create-travel">
          <span>
            <FiPlus size={20} color="#fff" />
          </span>
          <p>Comecar uma viagem</p>
        </Link>
      </Content>
    </Container>
  );
};

export default Dashboard;
