import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geTAllProducts } from "../../redux/actions/actions";
import { getAllRecipes } from "../../redux/actions/recipesActions";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"

const Paginado = ({ product, recipes }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const pageNumbers = [];

  let pepe = null;

  if (product && !recipes) {
    pepe = product;
  } else if (recipes && !product) {
    pepe = recipes;
  }

  let count = 1;

  for (let i = 1; i <= pepe.totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClickNext = () => {
    if (pepe.hasNextPage === true) {
      count++;
      dispatch(geTAllProducts(count));
    } else if (pepe.hasNextPage === true) {
      count++;
      dispatch(getAllRecipes(count));
    }
  };

  const handleClickPrev = () => {
    if (pepe.hasPrevPage === true) {
      count--;
      dispatch(geTAllProducts(count));
    } else if (pepe.hasPrevPage === true) {
      count--;
      dispatch(getAllRecipes(count));
    }
  };

  return (
    <>
      <button onClick={handleClickPrev}> <GrLinkPrevious/></button>
      {pageNumbers.map((el) => (
        <div key={el}>
          <button onClick={() => dispatch(geTAllProducts(el))}> {el}</button>
        </div>
      ))}
      <button onClick={handleClickNext}>< GrLinkNext /></button>
    </>
  );
};

export default Paginado;
