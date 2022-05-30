import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import ContactUs from './Components/ContactUs/ContactUs';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
