import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Jobs from './Components/Jobs/Jobs'
import Recruiters from './Components/Recruiters/Recruiters'
// import Contact from './Components/Contact/Contact'
import Register from './Components/Register/Register';
import Signin from './Components/Register/Signin';
import Footer from './Components/Footer/Footer';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';
// import Logout from './Components/Register/Logout';

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
          {/* <Route path="/support" element={<Contact />} /> */}
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Signin />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
