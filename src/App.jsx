import NavbarComponent from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <Container>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/success" element={<Store />} />
          <Route path="/Cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );

}

export default App
