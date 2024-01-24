import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"


const HomePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Typography variant="h1">Home Page</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/login')}>Go to Login</Button>
        </>
    )
}


export default HomePage