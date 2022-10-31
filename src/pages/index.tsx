import {
  Center,
  Box,
  Grid,
  Stack,
  Flex,
  TableContainer,
  IconButton,
} from '@chakra-ui/react'
import { Card } from '../components/Body/Card';
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { HeaderBody } from '../components/Header/HeaderBody';
import { Chart } from '../components/Body/Chart';
import { FilterChips } from '../components/Body/FilterChips';
import { GetServerSideProps } from 'next';
import { sellerService } from '../services/seller.service';
import { useState } from 'react';

export default function Home({dataGrid, sellers, selectSellers, selectCountries}) {
  let [gridData, setgridData] = useState({
    records: dataGrid.records,
    meta: dataGrid.meta
  });

  return (
    <>
      <HeaderBody />

      <Center>
        <Box w='80rem' ml={10} mr={10} mt={-20}>
          <Grid templateColumns='repeat(3, 1fr)' gap={8}>
            <Card name={sellers[0].name} value={sellers[0].value} />

            <Card name={sellers[1].name} value={sellers[1].value} />

            <Card name={sellers[2].name} value={sellers[2].value} />
          </Grid>
        </Box>
      </Center>

      <Center>
        <Flex w='80rem' justify='right' mt={8}>
          <FilterChips sellers={selectSellers} countries={selectCountries}/>
        </Flex>
      </Center>

      <Center>
        <TableContainer w='80rem' mt={16}>
          <Chart rows={gridData.records} />
        </TableContainer>
      </Center>


      <Center>

        <Flex w='80rem' justify='right' mt={8}>
          <Stack direction='row' spacing={4}>
            <IconButton
              w='65px'
              h='35px'
              mb={8}
              aria-label='Previeous Page'
              variant='outline'
              onClick={async () => { setgridData(await getPage('previousPage', gridData.meta)) }}
              borderColor='gray.100'
              borderRadius='2rem'
              border='2px'
              isDisabled={gridData.meta.previous === 0 ? true : false}
              _hover={{ bg: 'white', borderColor: 'red.300' }}
              icon={<ArrowLeft />}
            />
            <IconButton
              w='65px'
              h='35px'
              mb={8}
              onClick={async () => { setgridData(await getPage('nextPage', gridData.meta)) }}
              aria-label='Next Page'
              variant='outline'
              borderColor='gray.100'
              borderRadius='2rem'
              border='2px'
              isDisabled={gridData.meta.next === 0 ? true : false}
              _hover={{ bg: 'white', borderColor: 'red.300' }}
              icon={<ArrowRight />}
            />
          </Stack>
        </Flex>
      </Center>
    </>
  )
}

export async function getPage(page: string, meta: any) {
  let dataGrid = {
    records: [],
    meta: {}
  }

  switch (page) {
    case 'previousPage':
      dataGrid = await sellerService.getPage(meta.previous as number)
      break;

    case 'nextPage':
      dataGrid = await sellerService.getPage(meta.next as number)
      break;

    default:
      dataGrid = await sellerService.getPage(1);
  }

  return dataGrid
}

export const getServerSideProps: GetServerSideProps = async () => {
  const dataGrid = await sellerService.getPage(1)
  const sellers = await sellerService.getSellers()
  const selectCountries = await sellerService.getSellectCountries()
  const selectSellers = await sellerService.getSellectSeller()

  return {
    props: {
      dataGrid,
      sellers,
      selectSellers,
      selectCountries
    }
  };
};
