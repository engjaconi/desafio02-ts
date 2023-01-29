import { Box } from "@chakra-ui/react";

import { Header } from "../components/header/Header";
import { FormLogin } from "../components/form-login/FormLogin";

export const Login = () => {
    return (
        <Box h={'100vh'} w={'100vw'} overflow={'hidden'}> 
            <Header></Header>
            <FormLogin />
        </Box>
    );
}