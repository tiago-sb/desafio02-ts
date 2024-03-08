import { login } from "../../../services/login";
import {
    ChakraProvider,
    Button
} from '@chakra-ui/react';

export const ButtonForm = () => {
    return(
        <ChakraProvider>
            <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px' backgroundColor='#0000ff'>
                Enviar
            </Button>
        </ChakraProvider>
    )
}