import { Box, Button, IconButton, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

const SideButton = styled.div`
  position: absolute;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);
`

const Dot = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;
  height: 10px;
  margin-right: 7.5px;
  margin-left: 7.5px;
  display: flex;
  align-items: center;
`

export const PrevButton = ({ enabled, onClick }) => (
  <Box as={SideButton} left={1}>
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
  <Box as={SideButton} right={1}>
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
      as={Dot}
      h={1}
      w="20px"
      variant="solid"
      colorScheme={selected ? 'blue' : inActiveColor}
      onClick={onClick}
    />
  )
}
