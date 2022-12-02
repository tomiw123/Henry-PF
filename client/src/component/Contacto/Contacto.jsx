import React, { useState } from "react";
import style from "./Contacto.module.css";
import emailjs from "@emailjs/browser";
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;


const Validate = (input)=>{
let errors = {}
if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.user_name)){
    errors.user_name = "El nombre no debe tener caracteres especiales"
  }
  if(!input.user_email){
    errors.user_email = "ingresa el email putito"
  }
  if(!input.user_comments){
    errors.user_comments = "ingresa el comments putito"
  }
  return errors
}

 const Contacto = () => {
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_comments: "",
  });
 


  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      Validate({
    [e.target.name]: e.target.value
    }))
  };


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, e.target, VITE_PUBLIC_KEY)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
      
  };


  return (
    <div className={style.principal}>
      <div className={style.card}>
        <h1>Contactenos</h1>
        <form onSubmit={sendEmail}>
          <label>Ingresa tu Nombre</label>
          <input
            type="text"
            name="user_name"
            value={input.user_name}
            onChange={handleChange}
          />
          <label>Ingresa tu Email</label>
          <input
            type="text"
            name="user_email"
            value={input.user_email}
            onChange={handleChange}
          />
          <label>Deja tus comentarios</label>
          <textarea
            cols="3"
            rows="3"
            name="user_comments"
            value={input.user_comments}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto