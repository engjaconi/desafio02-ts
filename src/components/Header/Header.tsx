import { Box, Flex, Heading } from "@chakra-ui/react"
import { LogoDio } from "../shared/svg/LogoDio"

export const Header = () => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      bgColor={'black'}
    >
      <Box width={'10vw'}>
        <LogoDio />
      </Box>
      <Heading
        bgGradient={'linear(to-r,  #DF4D68, #6948D0, #4E67DE)'}
        bgClip={'text'}
        fontSize={'4.5vw'}
        fontWeight={'extrabold'}
      >
        Bank
      </Heading>
    </Flex>
  )
}
