import {
    Center,
    VStack,
    Input,
    Text,
    Box,
    Heading,
    Field
} from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";
import { login } from "../../services/calculadora/login";


export const Login = () => {

    return (
        <Center flex="1" bg="#fff">
            <VStack width="100%" maxW="480px" spacing={8} p={8} align="stretch">
                <Box>
                    <Heading as="h1" size="3xl" mb={4}>Bem-vindo!</Heading>
                    <Text fontSize="md" color="gray.600">
                        Faça login para continuar
                    </Text>
                </Box>

                <VStack spacing={6} as="form" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
                    <Field.Root>
                        <Field.Label fontWeight="medium" mb={2}>Email</Field.Label>
                        <Input
                            placeholder="email@exemplo.com"
                            type="email"
                            size="lg"
                            variant="flushed"
                            fontSize="2xl"
                            py={2}
                        />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label fontWeight="medium" mb={2}>Senha</Field.Label>
                        <Input
                            placeholder="********"
                            type="password"
                            size="lg"
                            variant="flushed"
                            fontSize="2xl"
                            py={2}
                        />
                    </Field.Root>

                    <VStack spacing={4} w="100%" pt={4}>
                        <LoginButton onClick={login} />
                    </VStack>
                </VStack>
            </VStack>
        </Center>
    )
}

export default Login
