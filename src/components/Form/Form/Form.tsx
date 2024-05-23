import { ChakraProvider, Box, Center, Input, Text, Spinner } from '@chakra-ui/react';

import { ButtonForm } from '../Button/Button';
import { useContext, useEffect, useState } from 'react';
import { login } from '../../../services/login';
import { api } from '../../../api';
import { IData } from './types';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext/AppContext';
import { changeLocalStorage } from '../../../services/storage';

export const Form = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [userData, setUserData] = useState<null | IData>()
  const { setLogado } = useContext(AppContext)

  const validarUsuario = async (email: string) => {
    const usuarioLogado = await login(email)

    if(!usuarioLogado){
      alert('email inválido')
      return
    }

    setLogado(true)
    changeLocalStorage({login: true})
    navigate(`/conta/1`)
  }

  useEffect(() => {
    (async () => {
      const data: IData = await api
      setUserData(data)
    })()
  }, [])
  
  return(
    <ChakraProvider>
      <Center>
        <Box marginTop='4rem' width='35rem'>
          <Box backgroundColor='#FFFFFF' borderRadius='1rem' padding='15px' >
          <Center>
            <Text fontSize='18pt' marginBottom='1rem' color='#0000ff'>
              {userData === null || userData === undefined ? ( 
                <Spinner />
              ) : ( 
                <Text>Faça o Login</Text> 
              )}
            </Text>
            </Center>
              <Input placeholder='Insira seu email' marginBottom='1rem' onChange={(e) => setEmail(e.target.value)}/>
              <Input placeholder='Insira sua senha' marginBottom='1rem' />
            <Center>
              <ButtonForm onClick={() => validarUsuario(email)}/>  
            </Center>
            
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  )
}