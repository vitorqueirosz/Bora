import React, {
  useState, useEffect, useCallback, FormEvent,
} from 'react';

import { FiNavigation, FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useHistory, Link } from 'react-router-dom';
import {
  TopContent, Container, Content, ProfileContent, Form, InputList
} from './styles';

import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';
import Input from '../../components/InputForm';

interface UserData {
    id: string;
    name: string;
    email: string;
    password: string;
    whatsapp: string;
    uf: string;
    city: string;
    user: UserData;
}

const Profile: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<File>();

  const [data, setData] = useState<UserData>({} as UserData);

  useEffect(() => {

    setData(user);
    console.log(user)
  }, [user]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        const formData = new FormData();

        if (selectedFile) {
          formData.append('avatar', selectedFile);
        }

        await api.patch('/users/avatar', formData);

        toast.success('Perfil salvo com sucesso!', { autoClose: 1400 });

        setTimeout(() => {
          history.push('/dashboard');
        }, 1400);
      } catch {
        toast.error('Ocorreu um erro ao salvar as informacoes de perfil');
      }

    }, [selectedFile, history],
  );

  return (
    <Container>

      <TopContent>
            <header />

             <h1>Editar meu perfil</h1>

              <div>
                <Link to="/dashboard">
                    <FiArrowLeft size={20} color="#6c63ef"/>
                    Voltar para o Dashboard
                </Link>
              </div>
        {/* <span>Preencha todas as suas informacoes para uma maior seguranca</span> */}
      </TopContent>

      <Content>
        <header>
            <h1>SOBRE VOCÊ</h1>
        </header>

        <ProfileContent>

          <Form onSubmit={handleSubmit}>

            <header>
              <label htmlFor="Foto de perfil">Foto de perfil</label>
              <Dropzone onFileUploaded={setSelectedFile} />
            </header>

            <InputList>

                    <div>
                        <label htmlFor="Foto de perfil">Nome</label>
                        <Input name="name" type="name" placeholder="Nome" value={data?.name} />
                    </div>

                    <div>
                        <label htmlFor="Foto de perfil">E-mail</label>
                        <Input name="email" type="email" placeholder="E-mail" value={data?.email} />
                    </div>

                    <div>
                        <label htmlFor="Foto de perfil">Whatsapp</label>
                        <Input name="whatsapp" type="number" placeholder="Whatsapp" value={data?.whatsapp} />
                    </div>

                    <div>
                        <label htmlFor="Foto de perfil">UF</label>
                        <Input name="uf" placeholder="UF" value={data?.uf} />
                    </div>

                    <div>
                        <label htmlFor="Foto de perfil">Cidade</label>
                        <Input name="city" placeholder="Cidade" value={data?.city} />
                    </div>

            </InputList>

          </Form>

        </ProfileContent>
                <aside>
                    <button onClick={handleSubmit} type="submit">
                        <span>
                            <FiNavigation size={20} color="#fff" />
                        </span>
                        <p>Salvar informacoes</p>
                    </button>
                </aside>
      </Content>

    </Container>
  );
};

export default Profile;
