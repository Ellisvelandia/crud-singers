import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSingers from "./Pages/AddSingers";
import Singers from "./Pages/Singers";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/singers" element={<Singers />} />
        <Route path="/addSingers" element={<AddSingers />} />
      </Routes>
    </Router>
  );
}

export default App;
