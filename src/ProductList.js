import React from "react";
import {ProductListItem} from "./ProductListItem";


export const ProductList = ({products, onDeleted}) => {
  return <ul>{products.map(product => {
    return(
      <li key={product.id}>
        <ProductListItem product={product} onDeleted={onDeleted} />
      </li>
    )
  })}</ul>;
};
