import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import User from "../types/users";

interface FormProps {
    mode: "signin" | "signup";
    textButton: string;
}

// SÓ HABILITAR O BOTÃO DE CADASTRO QUANDO:
// 1 - For preenchido um e-mail válido - formato e-mail (tem que ter @ e .com)
// 2 - A senha deve conter pelo menos 6 caracteres
// 3 - O campo de repetir senha deve ser igual ao campo de senha

// REGRA: só pode ser validado na página de cadastro

// TAREFA
// 1 - Criar uma nova página de Recados - Não se preocupar com o layout dela no momento, pode retornar <h1>Recados</h1>
// 2 - Criar a lógica de logar um usuario na aplicação
// 3 - Se o campo de "Permanecer conectado" tiver true -> salvar o usuarioLogado no localStorage
// caso contrario, salvar os dados do usuario Logado no sessionStorage
// 4 - A página de Recados só poderá ser acessada se existir usuario Logado ou no localStorage ou no sessionStorage
// caso contrario, redirecionar para a página de Login

const Form: React.FC<FormProps> = ({ mode, textButton }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorRepassword, setErrorRepassword] = useState(false);
    const [users, setUsers] = useState<User[]>(
        JSON.parse(localStorage.getItem("listaUsuarios") || "[]"),
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (mode === "signup") {
            // método string - endsWith() - boolean
            const emailValid =
                (email.endsWith(".com") || email.endsWith(".com.br")) && email.includes("@");

            if (email.length > 0) {
                setErrorEmail(!emailValid);
            }

            const passwordValid = password.length >= 6;
            if (password.length > 0) {
                setErrorPassword(!passwordValid);
            }

            const repasswordValid = password === repassword;

            if (repassword.length > 0) {
                setErrorRepassword(!repasswordValid);
            }

            setDisabled(!(emailValid && passwordValid && repasswordValid));
        }
    }, [email, password, repassword, mode]);

    // log
    useEffect(() => {
        localStorage.setItem("listaUsuarios", JSON.stringify(users));
    }, [users]);

    function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        if (mode === "signup") {
            const newUser = {
                email,
                password,
                tasks: [],
            };
            // o que precisa pra cadastrar um novo usuario?
            // 1 - Precisa validar alguma coisa?
            const retorno = users.some((value) => value.email === newUser.email);
            if (retorno) {
                alert("Email ja cadastrado");
                return;
            }
            // logica de cadastro
            setUsers([newUser, ...users]);

            setEmail("");
            setPassword("");
            setRepassword("");
        } else {
            const usuarioEncontrado = users.find(
                (valor) => valor.email === email && valor.password === password,
            );
            if (usuarioEncontrado) {
                navigate("/tasks");
            } else {
                alert("email e senha errado");
            }
            if (remember === true) {
                localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
            } else {
                sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
            }
        }
    }

    return (
        <Box component="form" marginTop={1} onSubmit={(ev) => handleSubmit(ev)}>
            <TextField
                error={errorEmail}
                helperText={errorEmail ? "E-mail inválido" : ""}
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                margin="normal"
                variant="outlined"
                type="email"
                required
                id="email"
                label="E-mail"
                fullWidth
            />
            <TextField
                error={errorPassword}
                helperText={errorPassword ? "Senha deve conter ao menos 6 caracteres" : ""}
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                margin="normal"
                variant="outlined"
                type="password"
                required
                id="password"
                label="Senha"
                fullWidth
            />

            {mode === "signup" ? (
                <TextField
                    error={errorRepassword}
                    helperText={errorRepassword ? "As senhas não coincidem" : ""}
                    value={repassword}
                    onChange={(ev) => setRepassword(ev.target.value)}
                    margin="normal"
                    variant="outlined"
                    type="password"
                    required
                    id="repassword"
                    label="Repetir Senha"
                    fullWidth
                />
            ) : (
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={remember}
                            onChange={(ev) => setRemember(ev.target.checked)}
                        />
                    }
                    label="Permanecer conectado"
                />
            )}

            <Button
                disabled={disabled}
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
            >
                {textButton}
            </Button>
            <Grid container>
                {mode === "signin" && (
                    <Grid item xs={4}>
                        <Typography variant="body2">
                            <Link style={{ color: "inherit" }} to="/">
                                Esqueceu sua senha?
                            </Link>
                        </Typography>
                    </Grid>
                )}
                <Grid item xs={8} textAlign="end">
                    {mode === "signin" ? (
                        <Typography variant="body2">
                            <Link style={{ color: "inherit" }} to="/signup">
                                Não tem uma conta? Cadastre-se
                            </Link>
                        </Typography>
                    ) : (
                        <Typography variant="body2">
                            <Link style={{ color: "inherit" }} to="/">
                                Já possui conta? Vá para Login
                            </Link>
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
