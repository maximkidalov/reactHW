
import React from "react";

export const ProductListItem = ({product, onDeleted}) => {
  const {id, title} = product;
  return(
    <>
    <h2>{title}</h2>
    <button onClick={() => onDeleted(id)}>Delete</button>
    </>
  );
};
