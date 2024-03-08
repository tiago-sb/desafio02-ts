import {
  ChakraProvider,
  Box,
  Text
} from '@chakra-ui/react';

export const Header  = () => {
  return(
    <ChakraProvider>
      <Box backgroundColor='#fff' minHeight='5rem' paddingTop='.5rem'>
        <Text fontSize="30pt" color="#0000ff" textAlign='center'>
          DIO Bank
        </Text>
      </Box>
    </ChakraProvider>
  );
}
