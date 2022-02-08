import { useState, useEffect } from "react";
import Card from "./Card";

const Books = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/book")
      .then((response) => response.json())
      .then((data) => setbooks(data.book))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {books.map((data, index) => {
        return (
          <Card
            key={index}
            id={data.id}
            image={data.image}
            title={data.title}
            pages={data.pages}
            author={data.author}
            country={data.country}
            language={data.language}
          />
        );
      })}
    </>
  );
};

export default Books;
