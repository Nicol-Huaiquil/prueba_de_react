import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/page1" element={<Page1/>}/>
        <Route exact path="/page2" element={<Page2/>}/>
        <Route exact path="/page3" element={<Page3/>} />
        </Routes>
    </Router>
  );
}

export default App;
