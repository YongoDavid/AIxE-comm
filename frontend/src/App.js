import { Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import EmailVerificationPage from './pages/EmailVerificationPage.js';

import LoadingSpinner from './components/LoadingSpinner.js';

import {Toaster} from 'react-hot-toast';
import { useAuthStore } from './store/authStore.js';
import { useEffect } from 'react';

// protect routes that require authentication 
const ProtectedRoute = ({ children }) => {
  const {isAuthenticated, user} = useAuthStore();

  if(!isAuthenticated){
    return <Navigate to="/login" replace />;
  }

  if(!user.isVerified){
    return <Navigate to="/verify-email" replace />;
  }
  return children;
}

// redirect authenticated users to home page 
const RedirectAuthenticatedUser = ({children}) => {
  const {isAuthenticated, user} = useAuthStore();

  if(isAuthenticated && user.isVerified){
    return <Navigate to="/" replace/>
  }
  return children; 
}


const App = () => {

  const {isCheckingAuth, checkAuth, isAuthenticated, user} = useAuthStore();
  
  useEffect(()=>{
    checkAuth();
  }, [checkAuth]);

  if(isCheckingAuth) return <LoadingSpinner/>
  return (
    <div>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
            }/>
          <Route path='/signup' element={
            <RedirectAuthenticatedUser>
              <SignupPage/>
            </RedirectAuthenticatedUser>
          }/>
          <Route path='/login' element={
            <RedirectAuthenticatedUser>
              <LoginPage/>
            </RedirectAuthenticatedUser>
            }/>
          <Route path='/verify-email' element={<EmailVerificationPage/>}/>
        </Routes>
        <Toaster/>
      </div>
  );
};
export default App;