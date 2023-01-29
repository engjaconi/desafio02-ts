import { Button } from "@chakra-ui/react";

interface IButton {
    message: string,
    action: () => {} | void
}

export const ButtonComponent = ({ message, action }: IButton) => {
    return (
        <Button
            onClick={action}
            colorScheme='blue'
            size='sm'
            width='100%'
            marginTop='5px'
            fontWeight={'bold'}
        >
            {message}
        </Button>
    );
}