import { List as ChakraList, ListItem, ListIcon, Flex, Text } from "@chakra-ui/react";
import { CheckCircle } from "phosphor-react";

export function List() {
  return (
    <ChakraList spacing={6}>
      <Text mb={8} fontSize='xl' color='red.300'>
        Tecnologias utilizadas no desenvolvimento deste projeto:
      </Text>
      <ListItem>
        <ListIcon as={CheckCircle} color='purple' />
        Chakra UI - Biblioteca de Componentes
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircle} color='purple' />
        Next.js - Framework React
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircle} color='purple' />
        Typescript
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircle} color='purple' />
        Node.js
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircle} color='purple' />
        Express
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircle} color='purple' />
        SQLite 3
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircle} color='purple' />
        TypeORM
      </ListItem>
    </ChakraList>
  )
}

