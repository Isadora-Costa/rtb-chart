import { GridItem, Container, Flex, Box, Link } from "@chakra-ui/react";

interface CardProps {
  name: string;
  value: string;
}

export function CardVariant({ name, value }: CardProps) {
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
            <Link href='https://github.com/Isadora-Costa' isExternal>
              {name}
            </Link>
          </Box>
        </Flex>

        <Box
          fontSize='4xl'
          fontWeight='medium'
          lineHeight='9'
          mt={10}
          ml={6}
          mr={8}
        >
          <Link href='https://www.linkedin.com/in/isadora-costa-97354a244/' isExternal>
            {value}
          </Link>
        </Box>
      </Container>
    </GridItem>
  )
}