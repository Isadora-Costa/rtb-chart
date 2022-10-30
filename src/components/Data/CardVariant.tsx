import { GridItem, Container, Flex, Box, Img } from "@chakra-ui/react";

interface CardProps {
  name: string;
  value: string;
}

export function CardVariant({name, value, ...rest}: CardProps) {
  return (
    <GridItem
      w='100%'
      h={48}
      bg='white'
      boxShadow='xl'
      borderRadius='5px'
    >
      <Container w='100%' h='100%'>
        <Flex direction='row'>
          <Box
            w='80%'
            fontSize='md'
            fontWeight='regular'
            lineHeight='6'
            mt={9}
            ml={6}
            color='red.300'
          >
            {name}
          </Box>
        </Flex>

        <Box
          fontSize='4xl'
          fontWeight='medium'
          lineHeight='9'
          mt={10}
          ml={6}
        >
          {value}
        </Box>
      </Container>
    </GridItem>
  )
}