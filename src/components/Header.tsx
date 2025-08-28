interface HeaderProps {
  setPage: (page: "home" | "cart") => void;
  cartCount: number;
}

export default function Header({ setPage, cartCount }: HeaderProps) {
  return (
    <nav>
      <div id="homeId" onClick={() => setPage("home")}>
        <img id="logoSite" src="./public/Logo.png" />
      </div>

      <div id="cartId" onClick={() => setPage("cart")}>
        <button id="cartButton">Carrinho ({cartCount})</button>
        <div id="cartIdCelular" onClick={() => setPage("cart")}>
          <img id="cartLogoCelular" src="./public/Oval.png"></img>
          <button id="cartBtnCelular">{cartCount}</button>
        </div>
        <img id="cartLogo" src="./public/Carrinho.png" />
      </div>
    </nav>
  );
}
