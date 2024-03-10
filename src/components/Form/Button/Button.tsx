import {
    ChakraProvider,
    Button
} from '@chakra-ui/react';
import { IButton } from "./types";

export const ButtonForm = ({onClick}: IButton) => {
    
    return(
        <ChakraProvider>
            <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px' backgroundColor='#0000ff'>
                Enviar
            </Button>
        </ChakraProvider>
    )
}