import Link from "next/link";
import { HeaderButton } from "./HeaderButton";
import { Hide, Flex, Grid, GridItem, Stack, Img, useBreakpointValue } from "@chakra-ui/react";

export function HeaderBody() {
  return (
    <Flex
      w='100%'
      h='17.1rem'
      bgGradient='linear(to-r, red.300, purple)'
    >
      <Flex width='100%' justify='center'>
        <Grid
          w='100%'
          maxWidth='80rem'
          h={12}
          templateColumns='repeat(2, 1fr)'
          gap='27.5rem'
          m='2.5rem auto'
        >
          
          <Hide below="lg" >
            <GridItem w='10.5rem' h={10}>
              <Img src='/logo.svg' alt='logo' />
            </GridItem>
          </Hide>

          <GridItem w='26.375rem' h={12} ml={10}>
            <Stack direction='row' spacing={8}>
              <Link href='/'>
                <HeaderButton name='Orders' />
              </Link>

              <Link href='/info'>
                <HeaderButton name='Info' />
              </Link>
            </Stack>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}