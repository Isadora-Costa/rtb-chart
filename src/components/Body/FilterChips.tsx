import { Select, Stack } from "@chakra-ui/react";
import { useState } from "react";

type SellerSelect = {
  value: string;
}

type CountrySelect = {
  value: string;
}

interface SelectProps {
  sellers: SellerSelect[],
  countries: CountrySelect[]
}

export function FilterChips({ sellers, countries }: SelectProps) {
  // const [ state, setState ] = useState()

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
        { sellers.map(({ value }) => <option value={value} >{value}</option>) }
      </Select>

      <Select
        placeholder='Select option'
        borderColor='gray.100'
        focusBorderColor='black'
        fontWeight='semibold'
        color='gray.300'
        border='2px'
      >
        { countries.map(({ value }) => <option value={value} >{value}</option>) }
      </Select>
    </Stack>
  )
}


export async function renewSeletcs(): Promise<void> {
}