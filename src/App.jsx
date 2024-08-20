import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact/Contact";
import Navbar from './component/Navbar';
import Students from './pages/students/Students';
import CarHire from './pages/contact/CarHire';
import CarRepair from './pages/contact/CarRepair';
import StudentPreview from './pages/students/StudentPreview';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <>
    <Navbar className=" flex justify content" />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />

      {/* Nested route */}
      <Route path='/contact' element={<Contact />} >
      <Route path='car-hire' element={<CarHire />} /> 
      <Route path='car-repair' element={<CarRepair />} /> 
      </Route>

      <Route path='/student' element={<Students />} >
      <Route path=':id' element={<StudentPreview />} />
      </Route>

      <Route path='/blog' element={<Blog />} />

      <Route path='*' element={<h1>404 Not Found</h1>} />
     </Routes>
    </>
  );
}

export default App;
