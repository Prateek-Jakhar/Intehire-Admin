import "./App.css";
import Admin from "./components/Admin";
import { BrowserRouter, Routes, Route, ProtectedRoute } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
