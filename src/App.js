
import { Route, Routes } from 'react-router-dom';
import NavBar from "./pages/SharedItems/NavBar/NavBar";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer";
import React from "react"
import Footer from './pages/Footer/Footer'
import Home from "./pages/HomePage/Home"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/projectlibrary" element = {<ProjectLibrary/>}/>
        <Route path="/studentprofile" element = {<StudentProfileViewer/>}/>
      </Routes>

   
      
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
