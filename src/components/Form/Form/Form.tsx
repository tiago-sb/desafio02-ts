import {
  ChakraProvider,
  Box,
  Center,
  Input,
  Text
} from '@chakra-ui/react';
import { ButtonForm } from '../Button/Button';

export const Form = () => {
  return(
    <ChakraProvider>
      <Center>
        <Box marginTop='4rem' width='35rem'>
          <Box backgroundColor='#FFFFFF' borderRadius='1rem' padding='15px' >
            <Center>
              <Text fontSize='18pt' marginBottom='1rem' color='#0000ff'>
                Fazer o Login
              </Text>
            </Center>
            <Input placeholder="email" marginBottom='1rem'/>
            <Input placeholder="password" marginBottom='1rem'/>
            <Center>
              <ButtonForm />  
            </Center>
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  )
}