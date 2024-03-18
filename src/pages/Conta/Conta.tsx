import { 
    Box,
    Center,
    SimpleGrid,
    Spinner
} from '@chakra-ui/react';
import { Card } from '../../components/Card/Card';
import { IData } from '../../components/Form/Form/types';
import { api } from '../../api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Conta = () => {
    const [userData, setUserData] = useState<null | IData>()

    useEffect(() => {
        (async () => {
        const data: IData = await api
        setUserData(data)
        })()
    }, [])
 
    const dataAtual = new Date();

    const { id } = useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id) {
        navigate('/')
    }

    return(
        <Box height='100vh' backgroundColor='#0000ff'>
            <Center>
                <SimpleGrid columns={1} spacing={5}>
                    {
                        userData === undefined || userData === null ? (
                            <Center>
                                <Spinner marginTop={15} />
                            </Center>
                        ) : (
                            
                            <>
                                <Card valor={`Saldo R$ ${userData?.balance}`} text_principal={`Bem vindo(a) ${userData?.name}`} 
                                data={`
                                    ${dataAtual.getDay()} / ${dataAtual.getMonth()} / ${dataAtual.getFullYear()} -
                                    ${dataAtual.getHours()}h${dataAtual.getMinutes()}`} 
                                />
                            </>
                        )    
                    }
                </SimpleGrid>
            </Center>
        </Box>
    )
}