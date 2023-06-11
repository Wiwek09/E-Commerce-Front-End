import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
    // const user = false; 
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/products" element={<ProductList/>} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Routes>
        <Route path="/login" element={  <Login/> } />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register/>} />
      </Routes>
      </BrowserRouter>
    )
  };
  

 export default App;