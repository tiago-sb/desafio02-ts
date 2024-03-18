import {
    Text,
    Box
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ContaInfo = () => {
    
    return(
        <Box height='100vh' backgroundColor='#000aa0' padding={3}>
            <Text fontSize={25} fontWeight='bold'>
                Informações da Conta
            </Text>
            <Link to='/conta/1'>
                <Text fontSize={25}>
                    Conta
                </Text>
            </Link>
        </Box>
    )
}