import React from "react";
// import Books from "./Components/books/Books";
import FrontPage from "./Components/UI/FrontPage";
import NavBar from "./Components/UI/NavBar";
import { useSelector } from "react-redux";
import CartItem from "./Components/UI/CartItem";
import Cart from "./Components/UI/Cart";
import Footer from "./Components/Footer/Footer";
import Books from "./Components/books/Books";

function App() {
  const ShowCart = useSelector((state) => state.ShowCart);
  const Item = useSelector((state) => state.Item);

  return (
    <>
      {ShowCart && <Cart />}
      {ShowCart &&
        Item.map((value, index) => (
          <CartItem
            key={index}
            image={value.imageLink}
            author={value.author}
            title={value.title}
            pages={value.pages}
            lan={value.language}
          />
        ))}
      {!ShowCart && <NavBar />}
      {!ShowCart && <FrontPage />}
      {!ShowCart && <Books />}
      <Footer />
    </>
  );
}

export default App;
