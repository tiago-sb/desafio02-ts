import {
    Box,
    Center,
    SimpleGrid,
    Spinner
} from '@chakra-ui/react';
import { Card } from '../../components/Card/Card';
import { IData } from '../../components/Form/Form/types';
import { api } from '../../api';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../components/AppContext/AppContext';


export const Conta = () => {
    const [userData, setUserData] = useState<null | IData>()
    const navigate = useNavigate()
    const { logado } = useContext(AppContext)

    !logado && navigate('/')

    useEffect(() => {
        (async () => {
            const data: IData = await api
            setUserData(data)
        })()
    }, [])

    const dataAtual = new Date();

    const { id } = useParams()

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
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