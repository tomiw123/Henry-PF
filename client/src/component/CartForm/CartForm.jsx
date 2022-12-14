import React from "react";
import style from "./CartForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import s from "../../component/Carrito/Carrito.module.css";
import { deleteFromCart, addCount, payment, addToCart, userPayments } from "../../redux/actions/actions";
import { useFormik } from "formik";
import * as Yup from "yup";

const CartForm = () => {
  const dispatch = useDispatch();


  let cart = useSelector((state)=> state.cart);
  // let carritoStorageArray
  // let carritoStorage = window.localStorage.getItem("carrito");
    // if (carritoStorage !== "vacio") {
      //   carritoStorageArray = JSON.parse(window.localStorage.getItem("carrito"));
    //   if(carritoStorageArray.length){
    //     for (let i = 0; i < carritoStorageArray.length; i++) {
    //             dispatch(addToCart(carritoStorageArray[i]))
    //         }
    //     }
    // }
    const deleteProd = (id) => {
      setTimeout(() => {
        dispatch(deleteFromCart(id));
      }, 50);
      if(cart.length === 1){
        window.localStorage.setItem('carrito', 'vacio')
        }
    };

    const sumarCantProd = (id)=> {
      let obj = cart.find(p => p.id === id)
      let lugar = cart.indexOf(obj)
      let cantidad= obj.quantity + 1
      setTimeout(()=> {
          dispatch(addCount({cantidad, lugar}))
      },30)
      console.log(cart)
  }
  const restarCantProd = (id)=> {
      let obj = cart.find(p => p.id === id)
      let lugar = cart.indexOf(obj)
      if(obj.quantity > 1){
          obj= {
                  ...obj,
                  quantity: obj.quantity - 1
              }
      }
      let cantidad= obj.quantity
      setTimeout(()=> {
          dispatch(addCount({cantidad, lugar}))
      },30)
  }
  

  const Formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
      user_address: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(15, "Debe tener 15 o menos caracteres")
        .required("Este campo es requerido"),
      user_email: Yup.string()
        .email("Email ingresado invalido debe tener un @")
        .required("Este campo es requerido"),
      user_phone: Yup.number().typeError("Solo se permiten ingresar numeros")
      .test('len', 'El numero ingresado no debe ser mayor a 14 digitos', val => val && val.toString().length <= 14 )
      ,
      user_address: Yup.string()
      .required("Este campo es requerido")
    }), 
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" })
      alert(JSON.stringify(values, null, 2));
    },
  });
 
  let compra =[]
  cart.map((c)=>{
    compra.push({ name:c.name, 
                  cantidad:c.quantity, 
                  precioUnitario:c.price
    })
  })

  const userProduct = {
    name:Formik.values.user_name,
    direccion: Formik.values.user_address,
    contacto:Formik.values.user_email,
    products: compra
  }
  
  console.log(userProduct);

   const finalizar = (newCart) => {
    if(userProduct.name.length < 1){
      console.log('falta nombre');
    }
    if(userProduct.contacto.length < 1){
      console.log('falta contacto');
    }
    if(userProduct.direccion.length < 1){
      console.log('falta direccion');
    }
    else{
      let carritoFinal = [];
      for (let i = 0; i < newCart.length; i++) {
        let obj = {
          name: newCart[i].name,
          precioUnitario: newCart[i].price,
          id: newCart[i].id, 
          cantidad: newCart[i].quantity,
       };
       carritoFinal.push(obj);
     }
     window.localStorage.setItem('userProduct', JSON.stringify(userProduct))
     dispatch(payment(carritoFinal)).then((e) => window.location.replace(e));
    }};
  return (
    <div className={style.principal}>
      <div className={style.form}>
        <form onSubmit={Formik.onSubmit}>
          <label htmlFor="">Ingresa tu nombre</label>
          <input
            type="text"
            name="user_name"
            value={Formik.values.user_name}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
          {Formik.touched.user_name && Formik.errors.user_name ? (
              <div>{Formik.errors.user_name}</div>
            ) : null}
          <label htmlFor="">Ingresa tu Email</label>
          <input
            type="text"
            name="user_email"
            value={Formik.values.user_email}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
           {Formik.touched.user_email && Formik.errors.user_email ? (
              <div>{Formik.errors.user_email}</div>
            ) : null}
          <label htmlFor="">Numero de telefono</label>
          <input
            type="text"
            name="user_phone"
            value={Formik.values.user_phone}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
          {Formik.touched.user_phone && Formik.errors.user_phone ? (
              <div>{Formik.errors.user_phone}</div>
            ) : null}
          <label htmlFor="">Direccion</label>
          <input
            type="text"
            name="user_address"
            value={Formik.values.user_address}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
           {Formik.touched.user_address && Formik.errors.user_address ? (
              <div>{Formik.errors.user_address}</div>
            ) : null}
             
           
        </form>
          <div>
            <button
              className={s.button}
                onClick={() => {
                  finalizar(cart);
                }}>
              Finalizar compra
            </button>
          </div>
        </div>
        <div className={style.products}>
          <div>
            <h2 className={style.title}>Productos en carrito</h2>
          </div>
          {cart?.map((p) => {
            if (p.name) {
              return (
                <div className={s.miniProd} key={p.id}>
                  <img src={p.image} alt="" className={s.image} />
                  <div className={s.prod}>{p.name}</div>
                  <div className={s.counter}>
                    <button
                      className={s.contador}
                      onClick={() => restarCantProd(p.id)}
                    >
                      -
                    </button>
                    <div className={s.prod}>{p.quantity}u</div>
                    <button
                      className={s.contador}
                      onClick={() => sumarCantProd(p.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className={s.prod}>${p.price * p.quantity},00</div>
                  <button className={s.boton} onClick={() => deleteProd(p.id)}>
                    X
                  </button>
                </div>
              );
            }
          })}
         
        </div>
    </div>
  );
};

export default CartForm;
