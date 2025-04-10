import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
