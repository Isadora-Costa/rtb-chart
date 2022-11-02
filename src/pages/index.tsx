import {
  Center,
  Box,
  Grid,
  Stack,
  Flex,
  TableContainer,
  IconButton,
  Select,
  Show,
  Hide
} from '@chakra-ui/react'
import { Card } from '../components/Body/Card';
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { HeaderBody } from '../components/Header/HeaderBody';
import { Chart } from '../components/Body/Chart';
import { GetStaticProps } from 'next';
import { sellerService } from '../services/seller.service';
import { useState } from 'react';

export default function Home({ dataGrid, sellers, selectSellers, selectCountries }) {
  let [gridData, setgridData] = useState({
    records: dataGrid.records,
    meta: dataGrid.meta
  });

  const [selectedSeller, setselectedSeller] = useState("")
  const [selectedCountry, setselectedCountry] = useState("")

  const handleChangeSeller = async (event: { target: { value: string; }; }) => {
    if (selectedCountry) {
      setselectedCountry("")
    }
    setselectedSeller(event.target.value);
    setgridData(await sellerService.getPage(null, null, { seller: event.target.value }))
    setselectedCountry(event.target.value);
  };

  const handleChangeCountry = async (event: { target: { value: string; }; }) => {
    setselectedCountry(event.target.value);

    if (!selectedSeller) {
      setgridData(await sellerService.getPage(null, null, { country: event.target.value }))
    } else {
      setgridData(await sellerService.getPage(null, null, { seller: selectedSeller, country: event.target.value }))
    }
  };

  return (
    <>
      <HeaderBody />

      <Center>
        <Box w='80rem' ml={10} mr={10} mt={-20}>
          <Hide below='md'>
            <Grid templateColumns='repeat(3, 1fr)' gap={8}>
              <Card name={sellers[0].name} value={sellers[0].value} />

              <Card name={sellers[1].name} value={sellers[1].value} />

              <Card name={sellers[2].name} value={sellers[2].value} />
            </Grid>
          </Hide>
          <Show below='md'>
            <Grid templateRows='repeat(3, 1fr)' gap={8}>
              <Card name={sellers[0].name} value={sellers[0].value} />

              <Card name={sellers[1].name} value={sellers[1].value} />

              <Card name={sellers[2].name} value={sellers[2].value} />
            </Grid>
          </Show>
        </Box>
      </Center>

      <Center>
        <Flex w='80rem' justify='right' mt={8}>
          <Stack direction='row' spacing={8}>
            <Select
              placeholder='Select option'
              borderColor='gray.100'
              focusBorderColor='black'
              fontWeight='semibold'
              color='gray.300'
              border='2px'
              onChange={handleChangeSeller}
            >
              {selectSellers.map(({ value, id }) => <option key={value} value={id} >{value}</option>)}
            </Select>

            <Select
              placeholder='Select option'
              value={selectedCountry}
              borderColor='gray.100'
              focusBorderColor='black'
              fontWeight='semibold'
              color='gray.300'
              border='2px'
              onClick={async () => { setgridData(await getPage('', gridData.meta)) }}
              onChange={handleChangeCountry}
            >
              {selectCountries.map(({ value, id }) => <option key={value} value={id} >{value}</option>)}
            </Select>
          </Stack>
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
              isDisabled={!gridData.meta.beforeCursor ? true : false}
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
              isDisabled={!gridData.meta.afterCursor ? true : false}
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
      if (meta.beforeCursor) {
        dataGrid = await sellerService.getPage(null, meta.beforeCursor)
      }
      break;

    case 'nextPage':
      if (meta.afterCursor) {
        dataGrid = await sellerService.getPage(meta.afterCursor, null)
      }
      break;

    default:
      dataGrid = await sellerService.getPage();
  }

  return dataGrid
}

export const getStaticProps: GetStaticProps = async () => {
  const dataGrid = await sellerService.getPage()
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
