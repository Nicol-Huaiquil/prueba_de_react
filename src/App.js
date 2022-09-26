import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./home";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

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
