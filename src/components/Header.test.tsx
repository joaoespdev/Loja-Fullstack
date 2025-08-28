import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renderiza logo e contador do carrinho", () => {
    render(<Header setPage={() => {}} cartCount={5} />);
    const logo = document.getElementById("logoSite");
    expect(logo).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Carrinho/i })
    ).toBeInTheDocument();

    expect(screen.getAllByText("5").length).toBeGreaterThan(0);
  });

  it("renderiza o logo com o src correto", () => {
    render(<Header setPage={() => {}} cartCount={2} />);
    const logo = screen.getByAltText("logoSite") as HTMLImageElement;
    expect(logo).toHaveAttribute("src", "./public/Logo.png");
  });

  it("renderiza o botão do carrinho com o texto correto", () => {
    render(<Header setPage={() => {}} cartCount={3} />);
    expect(
      screen.getByRole("button", { name: /Carrinho \(3\)/i })
    ).toBeInTheDocument();
  });

  it("renderiza o ícone do carrinho desktop", () => {
    render(<Header setPage={() => {}} cartCount={1} />);
    const imgs = screen.getAllByRole("img");
    const cartLogo = imgs.find((img) => img.getAttribute("id") === "cartLogo");
    expect(cartLogo).toBeInTheDocument();
    expect(cartLogo).toHaveAttribute("src", "./public/Carrinho.png");
  });

  it("renderiza o ícone do carrinho mobile", () => {
    render(<Header setPage={() => {}} cartCount={7} />);
    const imgs = screen.getAllByRole("img");
    const cartLogoCelular = imgs.find(
      (img) => img.getAttribute("id") === "cartLogoCelular"
    );
    expect(cartLogoCelular).toBeInTheDocument();
    expect(cartLogoCelular).toHaveAttribute("src", "./public/Oval.png");
  });

  it("renderiza o botão do carrinho mobile com o número correto", () => {
    render(<Header setPage={() => {}} cartCount={9} />);
    const btns = screen.getAllByRole("button");
    const cartBtnCelular = btns.find(
      (btn) => btn.getAttribute("id") === "cartBtnCelular"
    );
    expect(cartBtnCelular).toBeInTheDocument();
    expect(cartBtnCelular).toHaveTextContent("9");
  });
});
