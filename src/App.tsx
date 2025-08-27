import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import "./styles.css";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

export default function App() {
  const [page, setPage] = useState<"home" | "cart">("home");
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCartItems((prev) => [...prev, product]);
  }

  return (
    <div>
      <Header setPage={setPage} cartCount={cartItems.length} />

      {page === "home" && <Home addToCart={addToCart} />}
      {page === "cart" && <Cart items={cartItems} />}
    </div>
  );
}
