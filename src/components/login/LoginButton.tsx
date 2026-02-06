import { Button } from "@chakra-ui/react"

interface LoginButtonProps {
    onClick: () => void
}

export const LoginButton = ({ onClick }: LoginButtonProps) => {
    return (
        <Button
            onClick={onClick}
            w="100%"
            bg="black"
            color="white"
            size="xl"
            borderRadius="full"
            fontSize="lg"
            h="60px"
            _hover={{ bg: "gray.800" }}
        >
            Entrar
        </Button>
    )
}
