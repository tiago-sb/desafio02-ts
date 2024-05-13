import { Box, Text } from "@chakra-ui/react";
import { ICard } from "./types";

export const Card = ({text_principal, valor, data}: ICard) => {
    return(
        <Box marginTop='2rem' backgroundColor='#fff' padding='1rem' borderRadius='.5rem' boxShadow='0 0 3rem black'>
            <Text fontSize={25} fontWeight='bold'>
                {text_principal}
            </Text>
            <Text fontSize={15}>
                {valor}
            </Text>
            <Text fontSize={15}>
                {data}
            </Text>
        </Box>
    )
}