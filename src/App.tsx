import { Home } from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WishesPage } from "./components/wishes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<WishesPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
