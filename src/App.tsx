import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { AppContextProvider } from './components/AppContext/AppContext';
import { RotasPrincipais } from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';


export const App = () => {
  !getAllLocalStorage() && createLocalStorage()
  
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider >
          <Header />
          <RotasPrincipais />
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}