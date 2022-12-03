import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geTAllProducts } from "../../redux/actions/actions";
const Paginado = () => {
  const product = useSelector((state) => state.products);
  // console.log(product);
  const dispatch = useDispatch();

  const pageNumbers = [];
  for (let i = 1; i <= product.totalPages; i++) {
    pageNumbers.push(i);
  }


let count = 1;

  const handleClickNext = () => {
    if (product.hasNextPage === true) {
      count++;
      dispatch(geTAllProducts(count));
    }
  };

  const handleClickPrev = () => {
    if (product.hasPrevPage === true) {
      count--;
      dispatch(geTAllProducts(count));
    }
  };

  return (
    <>
      <button onClick={handleClickPrev}>Prev Page</button>
      {pageNumbers.map((el) => (
        <div key={el}>
          <button onClick={() => dispatch(geTAllProducts(el))}> {el}</button>
        </div>
      ))}
      {/* <h1>{count}</h1> */}
      <button onClick={handleClickNext}>Next Page</button>
    </>
  );
};

export default Paginado;
