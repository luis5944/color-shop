import { CartProvider } from "./context/cartContext";

const { default: Nav } = require("./components/Nav");
const { default: Shop } = require("./Pages/Shop");

function App() {
  return (
    <CartProvider>
      <Nav />
      <Shop />
    </CartProvider>
  );
}

export default App;
