import { Route, Routes} from 'react-router-dom';
import FloatingShape from './components/FloatingShape.js';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-tr 
     from-gray-900 via-green-900 to-emerald-900 flex-center justify-center relative overflow-hidden'
    >
      <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' deply={0} />
      <FloatingShape color='bg-emerald-500' size='w-48 h-48' top='-5%' left='80%' deply={5} />
      <FloatingShape color='bg-line-500' size='w-32 h-32' top='-5%' left='-10%' deply={2} />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </div>
  );
};
export default App;