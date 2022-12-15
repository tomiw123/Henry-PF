import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geTAllProducts, getAllFilters } from "../../redux/actions/actions";
import { getAllRecipes } from "../../redux/actions/recipesActions";

const Paginado = ({ product, recipes }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const pageNumbers = [];
  let [cur, setCur] = useState(pageNumbers);
  let [count, setCount] = useState(1);
  const filtros = useSelector((state) => state.aplyFilter);

  let pepe = null;

  if (product && !recipes) {
    pepe = product;
    // console.log(pepe);
  }
  if (recipes && !product) {
    pepe = recipes;
    // console.log(pepe);
  }

  // console.log(pepe);

  for (let i = 1; i <= pepe.totalPages; i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);

  const handleClickNext = () => {
    if (product && !recipes && pepe.hasNextPage === true) {
      count++;

      if (filtros.page) {
        dispatch(getAllFilters(filtros.filter, filtros.valor, count));
      } else {
        dispatch(geTAllProducts(count));
      }
    } else if (!product && recipes && pepe.hasNextPage === true) {
      count++;
      dispatch(getAllRecipes(count));
    }
  };

  const handleClickPrev = () => {
    if (product && !recipes && pepe.hasPrevPage === true) {
      count--;
      if (filtros.page) {
        dispatch(getAllFilters(filtros.filter, filtros.valor, count));
      } else {
        dispatch(geTAllProducts(count));
      }
    } else if (!product && recipes && pepe.hasPrevPage === true) {
      count--;
      dispatch(getAllRecipes(count));
    }
  };

  return (
    <div className="flex bg-white rounded-lg font-[Poppins]">
      <button
        onClick={() => handleClickPrev()}
        className="h-12 border-2 border-r-0 border-indigo-600
        px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
        {/* <GrLinkPrevious /> */}
      </button>
      {pageNumbers?.map((el) => (
        <div key={el}>
          {!product && recipes ? (
            <button
              onClick={() => dispatch(getAllRecipes(el))}
              className={`h-12 border-2 border-r-0 border-indigo-600
            w-12  hover:bg-indigo-600 hover:text-white`}
            >
              {el}
            </button>
          ) : filtros.page ? (
            <button
              onClick={() =>
                dispatch(getAllFilters(filtros.filter, filtros.valor, el))
              }
              className={`h-12 border-2 border-r-0 border-indigo-600
            w-12`}
            >
              {el}
            </button>
          ) : (
            <button
              onClick={() => dispatch(geTAllProducts(el))}
              className={`h-12 border-2 border-r-0 border-indigo-600
            w-12 hover:bg-indigo-600 hover:text-white`}
            >
              {el}
            </button>
          )}
        </div>
      ))}
      <button
        onClick={() => handleClickNext()}
        className="h-12 border-2  border-indigo-600
              px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
      >
        {/* <GrLinkNext /> */}
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Paginado;
