import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./page/Home";
import Hero from "./page/Hero";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
