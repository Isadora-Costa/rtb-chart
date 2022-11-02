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
  const [selectedSeller, setselectedSeller] = useState("")
  const [selectedCountry, setselectedCountry] = useState("")

  const handleChangeSeller = (event: { target: { value: any; }; }) => {

    if (selectedCountry) {
      setselectedCountry("")
    }
    setselectedSeller(event.target.value);
  };

  const handleChangeCountry = (event: { target: { value: any; }; }) => {
    console.log(event.target.value)
    setselectedCountry(event.target.value);
  };

  return (
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
        {sellers.map(({ value }) => <option key={value} value={value} >{value}</option>)}
      </Select>

      <Select
        placeholder='Select option'
        value={selectedCountry}
        borderColor='gray.100'
        focusBorderColor='black'
        fontWeight='semibold'
        color='gray.300'
        border='2px'
        onChange={handleChangeCountry}
      >
        {countries.map(({ value }) => <option key={value} value={value} >{value}</option>)}
      </Select>
    </Stack>
  )
}