import React, { useEffect } from 'react';
import s from '../Reviews/Reviews.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getIdProducts, cleanProduct } from '../../redux/actions/actions'
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from 'react-icons'





const Reviews = () => {

  const dispatch = useDispatch();
  const paramsId = useParams()
  const product = useSelector(state => state.product);

  useEffect(() => {
    if (product.length === 0) {
      dispatch(getIdProducts(paramsId.id))
    }
    else {
      if (product.id !== paramsId.id) {
        dispatch(cleanProduct())
        dispatch(getIdProducts(paramsId.id))
      }
    }
  }, [dispatch, paramsId.id])

  return (
    <div className={s.container}>
      <div className={s.title}>Opiniones de nuestros clientes sobre <span>{product.name}</span></div>
      <div>
        <div className={s.reviewContainer}>{product.reviews?.map((p) => (
          <div className={s.rcontainer}>
            <h1 className={s.user}>{p.reviewname}</h1>
            <IconContext.Provider value={{color: 'yellow'}}>
           <div className={s.stars}>
            {p.rating >= 1 ? <AiFillStar /> : null}
            {p.rating >= 2 ? <AiFillStar /> : null}
            {p.rating >= 3 ? <AiFillStar /> : null}
            {p.rating  >= 4 ? <AiFillStar /> : null}
            {p.rating >= 5 ? <AiFillStar /> : null}
           </div>
            </IconContext.Provider>
            <p className={s.comment}>{p.comment}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;