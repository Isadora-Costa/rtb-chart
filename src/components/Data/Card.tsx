import { GridItem, Container, Flex, Box, Img } from "@chakra-ui/react";

interface CardProps {
  name: string;
  value: string;
}

export function Card({name, value}: CardProps) {
  return (
    <GridItem
      w='100%'
      h={44}
      bg='white'
      border='2px'
      borderColor='gray.100'
      borderRadius='5px'
    >
      <Container w='100%' h='100%'>
        <Flex direction='row'>
          <Box
            w='80%'
            fontSize='md'
            fontWeight='regular'
            lineHeight='6'
            mt={8}
            ml={6}
            color='red.300'
          >
            {name}
          </Box>

          <Box mt={7}>
            <Img src='icon.svg' alt='icon' />
          </Box>
        </Flex>

        <Box
          fontSize='4xl'
          fontWeight='medium'
          lineHeight='9'
          mt={9}
          ml={6}
        >
          {value}
        </Box>
      </Container>
    </GridItem>
  )
}