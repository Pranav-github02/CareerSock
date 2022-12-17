import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Jobs from './Components/Jobs/Jobs'
import Recruiters from './Components/Recruiters/Recruiters'
import Contact from './Components/Contact/Contact'
import Register from './Components/Register/Register';
import Signin from './Components/Register/Signin';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/support" element={<Contact />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
