import React, { useState, useEffect } from "react";
import Style from "./CardDetailProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import {
  addToCart,
  changeFromCart,
  getIdProducts,
  cleanProduct,
  createProductReview

  
} from "../../redux/actions/actions";
import { Oval } from "react-loader-spinner";
import CarrouselProduct from './Carrousel/CarrouselProduct'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth"




const CardDetailProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const paramsId = useParams();
  const auth = useAuth()
  const Product = useSelector((state) => state.product);
  // console.log(Product)

  const [userOn, setUserOn] = useState(false);
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 800);
  useEffect(() => {
    if (Product.length === 0) {
      dispatch(getIdProducts(paramsId.id));
    } else {
      if (Product.id !== paramsId.id) {
        dispatch(cleanProduct());
        dispatch(getIdProducts(paramsId.id));
      }
    }
  }, [dispatch, paramsId.id]);

  useEffect(() => {
    if (auth.user) {
      setUserOn(true);
    }
  });

  const [counter, setCounter] = useState(1);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviewname, setReviewname] = useState("");

  function handleMax() {
    setCounter(counter + 1);
  }

  function handleMin() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }
  const cart = useSelector((state) => state.cart);
  // const [cart, setCart] = useState([]);

  const addProd = (id, name, image, price, counter) => {
    let yaEsta = cart.find((p) => p.name === name);
    if (!yaEsta) {
      const obj = { id, name, image, price, quantity: counter };
      setTimeout(() => {
        dispatch(addToCart(obj));
      }, 50);
      alert(`${name} agregado al carrito`);
    } else {
      yaEsta = {
        ...yaEsta,
        quantity: yaEsta.quantity + counter,
      };
      setTimeout(() => {
        dispatch(changeFromCart(yaEsta));
      }, 50);
    }
  };

  const userAuth = auth.user;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createProductReview(paramsId.id, {
        reviewname,
        rating,
        comment,
        user: userAuth,
      })
    );
    navigate("/products");
  }

  return (
    <div className={Style.CardProduct}>
      <div className={Style.Container2}>
        <div className={Style.ImgCont}>
          <div className={Style.Image}>
            
            {/* <img className={Style.img} src={Product.image}  alt="" /> */}
           
          {loader? (
              <Oval
                height={100}
                width={300}
                color="black"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="black"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />

              ): (
                <CarrouselProduct 
                image = {Product.image}
                />
               // <img className={Style.img} src={Product.image}  alt="" />
              )}

          </div>
          
          <div className={Style.Container}>
            {/********** */}
            <div className={Style.Title}>
              <h1>{Product.name}</h1>
            </div>
            <div className={Style.Title}>
              <h1>Categoria: {Product.category}</h1>
            </div>
            <div className={Style.Starts}>
              <IconContext.Provider value={{ color: "yellow" }}>
                <div className={Style.starsIcons}>
                  {Product.rating >= 1 ? <AiFillStar /> : null}
                  {Product.rating > 1 ? <AiFillStar /> : null}
                  {Product.rating > 2 ? <AiFillStar /> : null}
                  {Product.rating > 3 ? <AiFillStar /> : null}
                  {Product.rating > 4 ? <AiFillStar /> : null}
                  {Product.rating > 5 ? <AiFillStar /> : null}
                </div>
              </IconContext.Provider>
            </div>
            <Link to={`/reviews/${paramsId.id}`}>
              <div className={Style.numReview}>
                Opiniones de nuestros clientes: {Product.numReviews}
              </div>
            </Link>
            <div className={Style.Price}>${Product.price},00</div>
            <div className={Style.ContButtom}>
              <div className={Style.Cont}>
                <button className={Style.btnmaxmin} onClick={handleMin}>
                  -
                </button>
                <div className={Style.Num}>{counter}</div>
                <button className={Style.btnmaxmin} onClick={handleMax}>
                  +
                </button>
              </div>
              <div className={Style.Compra}>
                <button
                  className={counter === 0 ? Style.btnDis : Style.btn}
                  onClick={() => {
                    addProd(
                      Product._id,
                      Product.name,
                      Product.image,
                      Product.price,
                      counter
                    );
                  }}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.Description}>
          <p className="description">{Product.description}</p>
        </div>
        <div className={Style.line}></div>
        <div className={userOn ? Style.reviewContainer : Style.nodisplay}>
          <h1 className={Style.titleReview}>Deja una reseña de <span>{Product.name}</span></h1>
          <form className={Style.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={Style.titleReview}>Nombre: </h1>
            <input value={reviewname} onChange={(e) => setReviewname(e.target.value)} type="text" placeholder='tu nombre aca' />
            <h1 className={Style.titleReview}>Evalua del 1 al 5</h1>
            <select className={Style.select} onChange={(e) => setRating(e.target.value)}>
              <option value="5">5 - excelente</option>
              <option value="4">4 - muy bueno</option>
              <option value="3">3 - aceptable</option>
              <option value="2">2 - malo</option>
              <option value="1">1 -muy malo</option>
            </select>
            <div className={Style.Starts}>
              <IconContext.Provider value={{ color: "yellow" }}>
                <div className={Style.starsIcons}>
                  {
                    rating >= 1 ? <AiFillStar /> : null
                  }
                  {
                    rating > 1 ? <AiFillStar /> : null
                  }
                  {
                    rating > 2 ? <AiFillStar /> : null
                  }
                  {
                    rating > 3 ? <AiFillStar /> : null
                  }
                  {
                    rating > 4 ? <AiFillStar /> : null
                  }
                  {
                    rating > 5 ? <AiFillStar /> : null
                  }
                </div>
              </IconContext.Provider>
            </div>
            <p className={Style.titleReview}>Dejanos un comentario: </p>
            <textarea className={Style.textarea} value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder='tu comentario aca' />
            <button style={{ background: 'green' }} className={Style.btn1} type='submit'>Enviar</button>
          </form>
        </div>
        {/* dejar un apartado para poner abajo las recetas que se pueden hacer con el producto*/}
      </div>
    </div>
  );
};

export default CardDetailProduct;
