import "./App.css";
import {v4 as uuidv4} from "uuid";
import React, {useState} from 'react';
import {ProductList} from "./ProductList";


export const App = () => {
  const cart = [
    {id:"1", title: "Notebook", count:10, price:250000},
    {id:"2", title: "Smartphone", count:5, price:150000},
    {id:"3", title: "Ipad", count:3, price:50000}
];
const [products, setProducts] = useState(cart);

  const handleDeleteItem = (id) => {
    setProducts((prevState) => {
    const idx = prevState.findIndex(item => item.id === id);
    return [...prevState.slice(0,idx), ...prevState.slice(idx + 1)];
  });
};

const handleAddItem = (title,count,price) => {
  const newItem = {
    id: uuidv4(),
    title,
    count,
    price
  };
  setProducts(prevState => [...prevState, newItem]);
};

  return (
    <div>
      <ProductList products={products} onDeleted={handleDeleteItem} />
      <button onClick={() => handleAddItem("Watch",1,2000)}>Add Item</button>
    </div>
  );


}
export default App;
