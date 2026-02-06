import Layout from './components/Layout.tsx'
import {
  ChakraProvider,
  defaultSystem,
  Box,
} from '@chakra-ui/react'
import Login from './components/login/login'

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Layout>
          <Login />
        </Layout>
      </Box>
    </ChakraProvider >
  )
}

export default App