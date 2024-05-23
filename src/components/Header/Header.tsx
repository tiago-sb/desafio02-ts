import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';

export const Header  = () => {
  const { logado, setLogado } = useContext(AppContext)
  const navigate = useNavigate()

  const sairPagina = () => {
    changeLocalStorage({ login: false})
    setLogado(false)
    navigate('/')
  }

  return(
    <ChakraProvider>
      <Flex padding={1} justifyContent="space-between">
        <Box backgroundColor='#fff' minHeight='5rem' paddingTop='.5rem'>
          <Text fontSize="30pt" color="#0000ff" textAlign='center'>
            DIO Bank
          </Text>
        </Box>
        { 
          logado && (
            <Button onClick={() => sairPagina()}>
              Sair
            </Button>
        )}
      </Flex>
    </ChakraProvider>
  );
}
