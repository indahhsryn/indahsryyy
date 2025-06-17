import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Frontend from './components/frontend';
import Fullstack from './components/fullstack';
import Mobile from './components/mobile';
import Python from './components/python';



const App = () => {
  return (
    <Router>
      <div className="w-100">
        <Routes>
          <Route path="/" element={<Hero />} />
          
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/python" element={<Python />} />



        </Routes>
      </div>
    </Router>
  );
};

export default App;
