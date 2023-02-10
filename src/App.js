import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinsDetails from "./components/CoinDetails";
import Home from "./components/Home";
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/exchanges" element={<Exchanges />}/>
        <Route path="/coin/:id" element={<CoinsDetails />}/>
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
