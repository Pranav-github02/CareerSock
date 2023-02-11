import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Jobs from './Components/Jobs/Jobs'
import Recruiters from './Components/Recruiters/Recruiters'
import Register from './Components/Register/Register';
import Signin from './Components/Register/Signin';
import Footer from './Components/Footer/Footer';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';
import Dashboard from './Components/User Dashboard/Dashboard';

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
