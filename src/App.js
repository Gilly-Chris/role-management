import './App.scss';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EventEmitter } from './Utils/Events';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainer } from 'react-notifications';
import { BeatLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { showSpinner } from './Utils/Helper';
import { AuthRoutes, LandingRoutes } from './Routes';
import { getUsersAction, setUserAction } from './Redux/Actions';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const override = {
  position: 'absolute',
  top: '50%',
  left: '50%',
};

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  EventEmitter.subscribe('isLoading', (event) => setLoading(event));

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='App'>
        <div className='content' id='main'>
          <Routes>
              <Route exact path='/*' element={<LandingRoutes />}/>
              <Route exact path='/auth/*' element={<AuthRoutes />}/>
          </Routes>
        </div>
        <div className={loading ? "overlay-loader" : "d-none"}>
          <BeatLoader
            cssOverride={override}
            size={30}
            color={"#1BD0A5"}
            loading={loading}
          />
        </div>
        <ToastContainer />
        <NotificationContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
