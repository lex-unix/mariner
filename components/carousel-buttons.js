import { Box, Button, IconButton, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'

export const PrevButton = ({ enabled, onClick }) => (
  <Box
    pos="absolute"
    top="50%"
    transform="auto"
    translateY="-50%"
    zIndex={1}
    left={1}
  >
    <IconButton
      aria-label="Previous buttom"
      color="whiteAlpha.700"
      variant="unstyled"
      icon={<ChevronLeftIcon h={10} w={10} />}
      onClick={onClick}
      isDisabled={!enabled}
      _hover={{
        color: 'white'
      }}
    />
  </Box>
)

export const NextButton = ({ enabled, onClick }) => (
  <Box
    pos="absolute"
    top="50%"
    transform="auto"
    translateY="-50%"
    zIndex={1}
    right={1}
  >
    <IconButton
      aria-label="Previous buttom"
      color="whiteAlpha.700"
      variant="unstyled"
      icon={<ChevronRightIcon h={10} w={10} />}
      onClick={onClick}
      isDisabled={!enabled}
      _hover={{
        color: 'white'
      }}
    />
  </Box>
)

export const DotButton = ({ selected, onClick }) => {
  const inActiveColor = useColorModeValue('blackAlpha', 'whiteAlpha')
  return (
    <Button
      w="20px"
      height="4px"
      pos="relative"
      padding={0}
      marginX="4px"
      variant="solid"
      colorScheme={selected ? 'blue' : inActiveColor}
      onClick={onClick}
    />
  )
}
