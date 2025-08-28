# 👟 Minha Loja - Loja de Tênis

Uma loja moderna e responsiva especializada em tênis, desenvolvida com React e TypeScript. O projeto apresenta um design minimalista e uma experiência de usuário fluida em todos os dispositivos.

## 🚀 Sobre o Projeto

Este é um projeto front-end de e-commerce focado na venda de tênis, com layout responsivo e dinâmico baseado em design do Figma. O projeto está em desenvolvimento ativo e em breve será expandido para uma aplicação fullstack completa.

### ✨ Funcionalidades

- **Catálogo de Produtos**: Visualização de tênis com imagens, nomes e preços
- **Carrinho de Compras**: Adicionar produtos, visualizar itens e calcular totais
- **Design Responsivo**: Layout otimizado para desktop e mobile
- **Interface Intuitiva**: Navegação simples entre páginas principais
- **Agrupamento Inteligente**: Produtos iguais são agrupados automaticamente no carrinho

### 📱 Páginas

1. **Home**: Página principal com catálogo de produtos
2. **Carrinho**: Visualização e valores dos itens selecionados

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para maior robustez
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização com Flexbox e Grid Layout

### Testes
- **Vitest** - Framework de testes unitários
- **Testing Library** - Utilitários para testes de componentes React
- **Jest DOM** - Matchers customizados para testes DOM

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e padronização de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd minha-loja
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🧪 Testes

O projeto inclui uma suíte completa de testes para garantir a qualidade e confiabilidade do código.

### Executar todos os testes
```bash
npm run test
```

### Cobertura de Testes
- **Componentes**: Testes unitários para Header, Home e Cart
- **Funcionalidades**: Validação de adição ao carrinho, agrupamento de produtos
- **Interface**: Verificação de renderização e interações do usuário
- **Responsividade**: Testes para diferentes breakpoints

### Estrutura de Testes
```
src/
├── components/
│   └── Header.test.tsx
├── pages/
│   ├── Home.test.tsx
│   └── Cart.test.tsx
└── setupTests.ts
```

## 📁 Estrutura do Projeto

```
minha-loja/
├── public/                 # Assets estáticos
│   ├── Logo.png           # Logo da loja
│   ├── Carrinho.png       # Ícone do carrinho
│   ├── Oval.png           # Ícone mobile
│   └── tenis*.png         # Imagens dos produtos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   └── Header.test.tsx
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.tsx       # Página principal
│   │   ├── Home.test.tsx
│   │   ├── Cart.tsx       # Página do carrinho
│   │   └── Cart.test.tsx
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
│   ├── styles.css         # Estilos globais
│   └── setupTests.ts      # Configuração dos testes
├── README.md
├── package.json
└── vite.config.ts
```

## 🎯 Funcionalidades Implementadas

### ✅ Concluído
- [x] Layout responsivo para todos os dispositivos
- [x] Catálogo de produtos com grid dinâmico
- [x] Sistema de carrinho funcional
- [x] Agrupamento automático de produtos iguais
- [x] Cálculo automático de totais
- [x] Navegação entre páginas
- [x] Testes unitários abrangentes
- [x] Design baseado em Figma

### 🔄 Em Desenvolvimento
- [ ] Integração com backend
- [ ] Banco em memória não relacional (MongoDB)
- [ ] Gestão de estoque

<!--## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🔮 Próximos Passos

- **Backend Integration**: Implementação de API REST
- **Database**: Integração com banco de dados
- **Authentication**: Sistema de login e registro
- **Payment Gateway**: Integração com gateway de pagamento
- **Admin Panel**: Painel para gestão de produtos e pedidos
- **SEO Optimization**: Melhorias para otimização em motores de busca

-->
</br>

**Status**: 🚧 Em desenvolvimento ativo

Desenvolvido com ❤️ usando React + TypeScript + Vite
