import Link from "next/link";
import { HeaderButton } from "./HeaderButton";
import { Flex, Grid, GridItem, Stack, Img } from "@chakra-ui/react";

export function HeaderBody() {
  return (
    <Flex
      w='100%'
      h='17.1rem'
      bgGradient='linear(to-r, red.300, purple)'
    >
      <Grid
        w='100%'
        maxWidth='80rem'
        h={12}
        templateColumns='repeat(2, 1fr)'
        gap='27.5rem'
        m='2.5rem auto'
      >
        <GridItem w='10.5rem' h={10}>
          <Img src='/logo.svg' alt='logo' />
        </GridItem>

        <GridItem w='26.375rem' h={12}>
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
  );
}