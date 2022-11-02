import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useRef } from "react";

type Chart = {
  orderId: number;
  product: string;
  seller: number;
  country: string;
  price: number;
}

interface ChartProps {
  rows: Chart[]
}

export function Chart({ rows }: ChartProps) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th color='black' fontWeight='normal' fontSize='1rem'>Order Id</Th>
          <Th color='black' fontWeight='normal' fontSize='1rem'>Product</Th>
          <Th color='black' fontWeight='normal' fontSize='1rem'>Price</Th>
          <Th color='black' fontWeight='normal' fontSize='1rem'>Seller</Th>
          <Th color='black' fontWeight='normal' fontSize='1rem'>Country</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map(row => (
          <Tr key={row.orderId} >
            <Td color='red.300'>{row.orderId}</Td>
            <Td color='gray.300'>{row.product}</Td>
            <Td color='gray.300'>{row.price}</Td>
            <Td color='gray.300'>{row.seller}</Td>
            <Td color='gray.300'>{row.country}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}