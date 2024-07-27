import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import Read from "./Pages/Read";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />}/>
        <Route path="update" element={<Update />}/>
        <Route path="read" element={<Read />}/>


          {/* 
          <Route path="/" element={<Landing />} /> 
          <Route index element={<Home />} />          
          <Route path="blogs" element={<Blogs />} />          
          <Route path="*" element={<NoPage />} /> 
          */}
        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
