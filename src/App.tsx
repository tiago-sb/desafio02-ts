import { useState } from 'react';

import { 
  ChakraProvider,
  Box,
} from '@chakra-ui/react';

import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form/Form';

export const App = () => {
  
  return (
    <ChakraProvider >
      <Box height='100vh' backgroundColor='#000aa0'>
        <Header />
        <Form />
      </Box>
    </ChakraProvider>
  );
}