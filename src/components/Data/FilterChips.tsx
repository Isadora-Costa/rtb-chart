import { Select, Stack } from "@chakra-ui/react";

export function FilterChips() {
  return (
    <Stack direction='row' spacing={8}>
      <Select
        placeholder='Select option'
        borderColor='gray.100'
        focusBorderColor='black'
        fontWeight='semibold'
        color='gray.300'
        border='2px'
      >
        <option value='all_sellers'>All sellers</option>
        <option value='seller1'>Seller 01</option>
        <option value='seller2'>Seller 02</option>
        <option value='seller3'>Seller 03</option>
      </Select>

      <Select
        placeholder='Select option'
        borderColor='gray.100'
        focusBorderColor='black'
        fontWeight='semibold'
        color='gray.300'
        border='2px'
      >
        <option value='all_sellers'>All countries</option>
        <option value='seller1'>ARG</option>
        <option value='seller2'>BRA</option>
        <option value='seller3'>SPA</option>
      </Select>
    </Stack>
  )
}