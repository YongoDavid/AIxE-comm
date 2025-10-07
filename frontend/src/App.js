import { Route, Routes} from 'react-router-dom';
import FloatingShape from './components/FloatingShape.js';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
      </div>
  );
};
export default App;