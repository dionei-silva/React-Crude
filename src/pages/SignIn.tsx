import { LockOpenOutlined } from "@mui/icons-material";
import { Grid, Box, Typography, Link } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";

import Form from "../components/Form";
import HeaderForm from "../components/HeaderForm";

// LOGIN
/*
 AO CLICAR NO BOTÃO "LOGAR" deve ser mostrado no console.log um objeto com as propriedades
 -email: string
 -password: string
 -remember: boolean

 {
    email: 'teste@teste.com',
    password: '123456',
    remember: false
 }

*/

const SignIn: React.FC = () => {
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
                    <HeaderForm title="Acessar App" color={pink[500]} icon={<LockOpenOutlined />} />

                    <Form textButton="Logar" mode="signin" />

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

export default SignIn;
