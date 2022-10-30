import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  name: string;
}

export function HeaderButton({ name }: ButtonProps) {
  return (
    <Button
      w={48}
      h={12}
      borderRadius='5px'
      variant='outline'
      color='white'
      fontWeight='semibold'
      border='2px'
      borderColor='white'
      _hover={{ bg: 'white', color: 'purple' }}
    >
      {name}
    </Button>

  );
}