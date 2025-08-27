interface HeaderProps {
  setPage: (page: "home" | "cart") => void;
  cartCount: number;
}

export default function Header({ setPage, cartCount }: HeaderProps) {
  return (
    <nav>
      <div id="homeId" onClick={() => setPage("home")}>
        <img src="./public/Logo.png" />
      </div>

      <div id="cartId" onClick={() => setPage("cart")}>
        <button id="cartButton">Carrinho ({cartCount})</button>
        <img id="cartLogo" src="./public/Carrinho.png" />
      </div>
    </nav>
  );
}
