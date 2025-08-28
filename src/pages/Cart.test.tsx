import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import type { Product } from "../App";

const items: Product[] = [
  { id: 1, image: "/tenis1.png", name: "Tênis 1", price: 100 },
  { id: 1, image: "/tenis1.png", name: "Tênis 1", price: 100 },
  { id: 2, image: "/tenis2.png", name: "Tênis 2", price: 200 },
];

describe("Cart", () => {
  it("mostra mensagem de carrinho vazio", () => {
    render(<Cart items={[]} />);
    expect(screen.getByText(/carrinho está vazio/i)).toBeInTheDocument();
  });

  it("agrupa produtos iguais e mostra total", () => {
    render(<Cart items={items} />);
    expect(screen.getByText(/Tênis 1/)).toBeInTheDocument();
    expect(screen.getByText(/Tênis 2/)).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();

    expect(
      screen.getByText(
        (content, element) =>
          element?.tagName.toLowerCase() === "span" &&
          content.replace(/\s/g, "") === "R$400,00"
      )
    ).toBeInTheDocument();
  });
});
