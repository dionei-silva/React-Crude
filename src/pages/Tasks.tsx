import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Tasks: React.FC = () => {
    const navigate = useNavigate();
    const verificarLog = JSON.parse(localStorage.getItem("usuarioLogado") || "[]");
    if (!verificarLog.e) {
        navigate("/");
    }
    return (
        <>
            <h1>Recados</h1>
        </>
    );
};

export default Tasks;
