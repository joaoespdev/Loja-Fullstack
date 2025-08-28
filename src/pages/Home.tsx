import type { Product } from "../App";

interface HomeProps {
  addToCart: (product: Product) => void;
}

export default function Home({ addToCart }: HomeProps) {
  const products: Product[] = [
    {
      id: 1,
      image: "/tenis1.png",
      name: "Tênis de Caminhada Leve Confortável",
      price: 179.9,
    },
    {
      id: 2,
      image: "/tenis2.png",
      name: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      price: 179.9,
    },
    {
      id: 3,
      image: "/public/tenis3.png",
      name: "Tênis Adidas Duramo Lite 2.0",
      price: 179.9,
    },
    {
      id: 4,
      image: "/tenis1.png",
      name: "Tênis de Caminhada Leve Confortável",
      price: 179.9,
    },
    {
      id: 5,
      image: "/tenis2.png",
      name: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      price: 179.9,
    },
    {
      id: 6,
      image: "/tenis3.png",
      name: "Tênis Adidas Duramo Lite 2.0",
      price: 179.9,
    },
  ];

  // Função para formatar o preço no padrão brasileiro
  const formatPrice = (price: number): string => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  return (
    <div id="produtosDiv">
      <ul id="produtos">
        {products.map((p) => (
          <li key={p.id} className={`product-${p.id}`}>
            <img src={p.image} />
            <br />
            {p.name}
            <br />
            <br />
            {formatPrice(p.price)} {/* Formatação aplicada aqui */}
            <br />
            <br />
            <button onClick={() => addToCart(p)}>
              <img src="/Carrinho.png" id="iconCart" />
              <span id="btn-texto">ADICIONAR AO CARRINHO</span>
              <span id="btn-texto-celular">ADICIONAR</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
