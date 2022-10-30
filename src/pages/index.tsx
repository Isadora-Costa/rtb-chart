import {
  Center,
  Box,
  Grid,
  Stack,
  Flex,
  TableContainer,
  IconButton
} from '@chakra-ui/react'
import { Card } from '../components/Data/Card';
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { HeaderBody } from '../components/Header/HeaderBody';
import { Chart } from '../components/Data/Chart';
import { FilterChips } from '../components/Data/FilterChips';
import { GetStaticProps } from 'next';

export default function Home({ rows }) {
  return (
    <>
      <HeaderBody />

      <Center>
        <Box w='80rem' ml={10} mr={10} mt={-20}>
          <Grid templateColumns='repeat(3, 1fr)' gap={8}>
            <Card name='Seller 01' value='$200.000,00' />

            <Card name='Seller 02' value='$100.000,00' />
            
            <Card name='Seller 03' value='$150.000,00' />
          </Grid>
        </Box>
      </Center>

      <Center>
        <Flex w='80rem' justify='right' mt={8}>
          <FilterChips />
        </Flex>
      </Center>

      <Center>
        <TableContainer w='80rem' mt={16}>
          <Chart rows={rows}/>
        </TableContainer>
      </Center>

      <Center>
        <Flex w='80rem' justify='right' mt={8}>
          <Stack direction='row' spacing={4}>
            <IconButton
              w='65px'
              h='35px'
              aria-label='Next Page'
              variant='outline'
              borderColor='gray.100'
              borderRadius='2rem'
              border='2px'
              _hover={{ bg: 'white', borderColor: 'red.300' }}
              icon={<ArrowLeft />}
            />
            <IconButton
              w='65px'
              h='35px'
              aria-label='Next Page'
              variant='outline'
              borderColor='gray.100'
              borderRadius='2rem'
              border='2px'
              _hover={{ bg: 'white', borderColor: 'red.300' }}
              icon={<ArrowRight />}
            />
          </Stack>
        </Flex>
      </Center>
    </>
  )
}
