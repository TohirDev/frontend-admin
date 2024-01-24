
import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <>
        <Typography variant="h1">LoginPage</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/register')}>Go to Register</Button>
        </>
    )
}

export default LoginPage