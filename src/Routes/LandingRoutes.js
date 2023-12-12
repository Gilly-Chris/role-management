import { useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { Header } from 'src/Components';
import {
    HomePage
} from 'src/Pages';


export default function LandingRoutes() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/auth/login')
        }
    }, [])

    return (
        <div>
            <Header />
            <div className='main-content'>
                <Routes>
                    <Route exact path="/" element={<HomePage />}/>
                </Routes>
            </div>
        </div>
    )
}