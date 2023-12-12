import { Routes, Route} from 'react-router-dom';
import { Header } from 'src/Components';
import { LoginPage } from 'src/Pages';

export default function AuthRoutes() {

    return (
        <div>
            <Header />
            <div className='main-content'>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />}/>
                </Routes>
            </div>
        </div>
    )
}