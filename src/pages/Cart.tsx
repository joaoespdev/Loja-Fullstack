import type { Product } from "../App";

interface CartProps {
  items: Product[];
}

// Agrupa produtos iguais e soma a quantidade
function groupCartItems(items: Product[]) {
  const map = new Map<number, { product: Product; quantity: number }>();
  for (const item of items) {
    if (map.has(item.id)) {
      map.get(item.id)!.quantity += 1;
    } else {
      map.set(item.id, { product: item, quantity: 1 });
    }
  }
  return Array.from(map.values());
}

export default function Cart({ items }: CartProps) {
  const cartItems = groupCartItems(items);

  const formatPrice = (price: number): string =>
    price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div id="produtosCartDiv">
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="cart-box">
          <ul id="produtosCart">
            <li className="cart-header">
              <span>PRODUTO</span>
              <span></span>
              <span>QTD</span>
              <span>PREÇO</span>
            </li>
            {cartItems.map(({ product, quantity }) => (
              <li key={product.id}>
                <img
                  src={product.image.replace("/public", "")}
                  alt={product.name}
                  className="cart-img"
                />
                <div>
                  <div className="cart-nome">{product.name}</div>
                  <div className="cart-preco-unit">
                    {formatPrice(product.price)}
                  </div>
                </div>
                <div className="cart-qtd">
                  <button className="cart-btn-qtd">-</button>
                  <input type="text" value={quantity} readOnly />
                  <button className="cart-btn-qtd">+</button>
                </div>
                <div className="cart-preco">
                  {formatPrice(product.price * quantity)}
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <button className="cart-finalizar">FINALIZAR PEDIDO</button>
            <div className="cart-total">
              TOTAL <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
