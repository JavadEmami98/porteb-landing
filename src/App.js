import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page/Home";
import Hero from "./page/Hero";
import Login from "./page/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
