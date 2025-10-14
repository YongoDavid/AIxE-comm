import { Route, Routes} from 'react-router-dom';
import FloatingShape from './components/FloatingShape.js';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import EmailVerificationPage from './pages/EmailVerificationPage.js';

import {Toaster} from 'react-hot-toast';
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/verify-email' element={<EmailVerificationPage/>}/>
        </Routes>
        <Toaster/>
      </div>
  );
};
export default App;