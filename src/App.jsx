import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/LoginForm/LoginForm';



function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/register" element={<Register />} />  
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
=======
        <Route path="/login" element={<LoginForm />} /> 
>>>>>>> origin/master
      </Routes>
      <Footer />  
    </Router>

  );
}

export default App
