import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renderiza todos os produtos", () => {
    render(<Home addToCart={() => {}} />);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/Tênis de Caminhada Leve Confortável/i).length
    ).toBeGreaterThan(0);
  });

  it("mostra o botão 'ADICIONAR AO CARRINHO' no desktop", () => {
    render(<Home addToCart={() => {}} />);
    expect(
      screen.getAllByText(/ADICIONAR AO CARRINHO/i).length
    ).toBeGreaterThan(0);
  });
});
