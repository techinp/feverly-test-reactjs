import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';

import { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';

// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';

import MainPage from './pages/MainPage';
import Preferences from './pages/Preferences';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Header from './components/Header';
import Wrapper from './components/Wrapper';

// import { useSelector, useDispatch } from 'react-redux';
// import { toggleBackDrop } from './redux/reducer/app.slice';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem('accessToken');

  // const backdrop = useSelector((state) => state.app.backdrop);
  // const dispatch = useDispatch();

  // const handleClose = () => {
  //   dispatch(toggleBackDrop(false));
  // };

  useEffect(() => {
    if (!token) {
      if (location.pathname === '/signup') {
        console.log('if');
        navigate('/signup');
      } else {
        console.log('else');
        navigate('/signin');
      }
    }
  }, []);

  return (
    <div className='wrapper'>
      {token && <Header />}
      {/* <BrowserRouter> */}
      <Wrapper>
        <Routes>
          <Route path='/signin' Component={SignIn}></Route>
          <Route path='/signup' Component={SignUp}></Route>
          <Route path='/' Component={MainPage}></Route>
          <Route path='/preferences' Component={Preferences}></Route>
        </Routes>
      </Wrapper>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
