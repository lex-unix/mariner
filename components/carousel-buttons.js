import { Box, Button, IconButton } from '@chakra-ui/react'
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
  return (
    <Button
      w="32px"
      height="4px"
      pos="relative"
      padding={0}
      marginX="4px"
      variant="solid"
      background={selected ? 'whiteAlpha.800' : 'whiteAlpha.500'}
      onClick={onClick}
      _hover={{
        background: selected
          ? 'rgba(255, 255, 255, 0.80)'
          : 'rgba(255, 255, 255, 0.80)'
      }}
    />
  )
}
