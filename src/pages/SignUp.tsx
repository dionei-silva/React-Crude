import { VerifiedUser } from "@mui/icons-material";
import { Grid, Box, Typography, Link } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

import Form from "../components/Form";
import HeaderForm from "../components/HeaderForm";

// CADASTRO
/*
 AO CLICAR NO BOTÃO "CRIAR CONTA" deve ser mostrado no console.log um objeto com as propriedades
 -email: string
 -password: string
 -repassword: string

 {
    email: 'teste@teste.com',
    password: '123456',
    repassword: '123456'
 }

*/

// ciclos de vida de um Componente - useEffect
// 1 - montado/renderizar -> neste time array de dependencias vazio []
// 2 - desmontado
// 3 - reatualiza/re-renderizar

const SignUp: React.FC = () => {
    // const [state, setState] = useState("");

    // useEffect(() => {
    //     // 1 - montado/renderizar
    //     console.log("Montou");

    //     return () => {
    //         // 2 - desmontado
    //         console.log("Desmontou");
    //     };
    // }, []);

    // useEffect(() => {
    //     // 3 - reatualiza/re-renderizar
    //     console.log("Atualizou o estado do componente");
    // }, [state]);

    return (
        <Grid container height="100vh">
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: "url(https://source.unsplash.com/random)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repete",
                }}
            />
            <Grid item xs={12} sm={8} md={5}>
                <Box
                    component="section"
                    marginY={8}
                    marginX={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <HeaderForm title="Cadastre-se" color={green[500]} icon={<VerifiedUser />} />

                    <Form textButton="Criar Conta" mode="signup" />

                    <Typography variant="body2" color="text.secondary" marginTop={5}>
                        Copyright &copy;{" "}
                        <Link
                            color="inherit"
                            href="www.growdev.com.br"
                            target="_blank"
                            variant="body2"
                        >
                            Your Website
                        </Link>{" "}
                        2023.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SignUp;
