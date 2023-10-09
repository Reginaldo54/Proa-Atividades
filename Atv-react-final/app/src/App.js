import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Paginas/Home';
import LoginForm from './Paginas/Login';
import "./Paginas/login.css";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<LoginForm />} /> /*Página inicial*/
            <Route path="/bemvindo" element={<Home/>}/>  /*Página de login */
          </Routes>  
      </div>
    </Router>
    
  );
}

export default App;
