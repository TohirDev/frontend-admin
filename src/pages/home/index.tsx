import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import HomePage from "./HomePage"


const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <HomePage />
            <Button variant="contained" color="primary" onClick={() => navigate('/login')}>Go to Login</Button>
        </>
    )
}


export default Home