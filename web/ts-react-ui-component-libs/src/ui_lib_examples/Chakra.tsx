import {
  extendTheme,
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Text,
  Image,
  Link,
  chakra,
  Container,
} from "@chakra-ui/react";
import type { ThemeOverride } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const overrides: ThemeOverride = {
  style: { global: { ".App-header": { color: "red.100" } } },
  colors,
  semanticTokens: { colors: { "error.100": "red.500" } },
};

const theme = extendTheme(overrides);

const ChakraExample = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Grid templateRows="1fr 1fr 1fr" templateColumns="auto">
      {/* m={2} refers to the value of `theme.space[2]` */}
      <Box m={2}>Margin of theme.space[2]</Box>
      {/* You can also use custom values */}
      <Box maxW="100px" mx="auto">
        Margin auto
      </Box>
      {/* sets margin `8px` on all viewports and `12px` 
        from the first breakpoint and up */}
      <Box ml={[2, 10, 24, 32, 44]}>Margin from breakpoints</Box>
    </Grid>
    <Flex direction="column" alignItems="center" gap={8}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
      <chakra.button
        px="3"
        py="2"
        bg="error.100"
        rounded="md"
        color="grey.500"
        _hover={{ bg: "green.300" }}
      >
        Click me
      </chakra.button>
      <Box p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 32 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Breakpoints
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="./chakra"
          >
            Breakpoints Shrink Example
          </Link>
          <Text mt={2} color="gray.500">
            This turns into a Flex row at large screen
          </Text>
        </Box>
      </Box>
    </Flex>
    <Grid placeItems="center" w="100%">
      <Container
        borderColor="teal.600"
        borderWidth={1}
        rounded="md"
        whiteSpace="pre-line"
      >
        {/* Chakra factory function allows to use Chakra variables */}
        <chakra.span color="gray.400">
          This text width is contained with the current breakpoint.
        </chakra.span>
        {"\n"}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        deserunt quae iste dolorem praesentium. Porro autem, quia minima maiores
        quisquam rerum eum esse accusantium optio veritatis quam at ex tenetur?
      </Container>
    </Grid>
  </ChakraProvider>
);

export { ChakraExample };
