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

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import Banner from './pages/Banner';

import Header from './components/Header';
import Wrapper from './components/Wrapper';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!token) {
      if (location.pathname === '/signup') {
        navigate('/signup');
      } else {
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
          <Route path='/' Component={Home}></Route>
          <Route path='/signin' Component={SignIn}></Route>
          <Route path='/signup' Component={SignUp}></Route>
          <Route path='/shop' Component={Shop}></Route>
          <Route path='/banner' Component={Banner}></Route>
        </Routes>
      </Wrapper>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
