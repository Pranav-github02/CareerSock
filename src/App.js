import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Jobs from './Components/Jobs/Jobs'
import Recruiters from './Components/Recruiters/Recruiters'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Jobs />
      <Recruiters />
      <Contact /> */}
    </div>
  );
}

export default App;
