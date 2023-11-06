import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginContextProvider from './contexts/LoginContext/LoginContext';
import Home from './pages/Home/Home';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginForm/LoginForm';



function App() {

  return (
    <Router>
    <LoginContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/register" element={<RegisterForm />} />  
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </LoginContextProvider>   
    </Router>

  );
}

export default App
