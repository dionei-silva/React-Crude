import { Avatar, Typography } from "@mui/material";
import React from "react";

interface HeaderFormProps {
    title: string;
    icon: React.ReactNode;
    color: string;
}

const HeaderForm: React.FC<HeaderFormProps> = ({ title, color, icon }) => {
    return (
        <>
            <Avatar sx={{ bgcolor: color }}>{icon}</Avatar>
            <Typography variant="h4">{title}</Typography>
        </>
    );
};

export default HeaderForm;
