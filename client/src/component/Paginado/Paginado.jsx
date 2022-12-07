import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { geTAllProducts } from "../../redux/actions/actions";
import { getAllRecipes } from "../../redux/actions/recipesActions";

const Paginado = ({ product, recipes }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const pageNumbers = [];
  let [cur, setCur] = useState();

  // console.log(pageNumbers);
  let pepe = null;

  if (product && !recipes) {
    pepe = product;
  } else if (!product && recipes) {
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
    <div className="flex bg-white rounded-lg font-[Poppins]">
      <button
        onClick={handleClickPrev}
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
      {pageNumbers.map((el) => (
        <div key={el}>
          <button
            onClick={() => dispatch(geTAllProducts(el))}
            className={`h-12 border-2 border-r-0 border-indigo-600
            w-12 ${cur === el && "bg-indigo-600 text-white"} `}
          >
            {el}
          </button>
        </div>
      ))}
      <button
        onClick={handleClickNext}
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
