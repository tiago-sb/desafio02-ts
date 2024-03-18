import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Conta } from './pages/Conta/Conta';
import { Header } from './components/Header/Header';
import { ContaInfo } from './pages/ContaInfo/ContaInfo';

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider >
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/conta/:id' element={<Conta/>} />
          <Route path='/conta-info' element={<ContaInfo/>}/>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
    
  );
}