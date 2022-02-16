import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import ThisProject from "./components/pages/ThisProject";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/company" element={<Company />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/newproject" element={<NewProject />}/>
          <Route path="/thisproject/:id" element={<ThisProject />}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  ); // i can use /thisproject/:id to get my datas in the database 
}

export default App;
