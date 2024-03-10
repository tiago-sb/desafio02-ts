import {
  ChakraProvider,
  Box,
  Center,
  Input,
  Text
} from '@chakra-ui/react';
import { ButtonForm } from '../Button/Button';
import { useEffect, useState } from 'react';
import { login } from '../../../services/login';
import { api } from '../../../api';
import { IData } from './types';

export const Form = () => {
  const [email, setEmail] = useState<string>('')
  const [userData, setUserData] = useState<null | IData>()

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
                <Text>Loading...</Text> 
              ) : ( 
                <Text>Faça o Login</Text> 
              )}
            </Text>
            </Center>
              <Input placeholder='Insira seu email' marginBottom='1rem' onChange={(e) => setEmail(e.target.value)}/>
              <Input placeholder='Insira sua senha' marginBottom='1rem' />
            <Center>
              <ButtonForm onClick={() => login(email)}/>  
            </Center>
            
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  )
}