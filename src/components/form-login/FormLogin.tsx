import { Input } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';

import { login } from "../../services/login";
import { ButtonComponent } from "../shared/button/ButtonComponent";

export const FormLogin = () => {
    return (
        <Card
            align={'center'}
            direction={'column'}
            justify={'center'}
            marginTop={'20vh'}
        >
            <CardHeader
                fontFamily={'sans-serif'}
                fontSize={'1.5rem'}
                marginBottom={'10px'}
                color={'blue.800'}
            >
                Faça o Login
            </CardHeader>

            <CardBody
            >
                <Input
                    placeholder="email"
                    marginBottom={'10px'}
                    bgColor={'gray.100'}
                />
                <Input
                    placeholder="password"
                    marginBottom={'10px'}
                    bgColor={'gray.100'}
                />
            </CardBody>

            <CardFooter>
                <ButtonComponent
                    action={login}
                    message="Login"
                />
            </CardFooter>
        </Card>
    );
}