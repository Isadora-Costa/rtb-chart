import { Center, Box, Grid, Flex } from "@chakra-ui/react";
import { CardVariant } from "../components/Body/CardVariant";
import { List } from "../components/Body/List";
import { HeaderBody } from "../components/Header/HeaderBody";


export default function Info() {
  return (
    <>
      <HeaderBody />

      <Center>
        <Box w='80rem' ml={10} mr={10} mt={-20}>
          <Grid templateColumns='repeat(3, 1fr)' gap={8}>
            <CardVariant name='Developer' value='Isadora Costa' />
          </Grid>
        </Box>
      </Center>

      <Center>
        <Flex w='80rem' justify='left' mt={14} ml={10}>
          <List />
        </Flex>
      </Center>
    </>
  );
}