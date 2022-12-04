import React, { useRef, useState } from "react";
import style from "./Contacto.module.css";
import emailjs from "@emailjs/browser";
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiMailSendFill } from "react-icons/ri";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current,
        VITE_PUBLIC_KEY
      )
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_comments: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(15,"Debe tener 15 o menos caracteres")
        .required("Este campo es requerido"),
      user_comments: Yup.string()
        .max(150, "Debe tener 150 o menos caracteres")
        .required("Este campo es requerido"),
      user_email: Yup.string()
        .email("Email ingresado invalido debe tener un @")
        .required("Este campo es requerido"),
    }),
    onSubmit: (values,{resetForm}) => {
      alert(JSON.stringify(values, null, 2));
      sendEmail(values);
      resetForm({values:""})
    },
  });

  return (
    <div className={style.principal}>
      <div className={style.card}>
        <h1>Contactenos</h1>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <label>Ingresa tu Nombre</label>
          <input
            type="text"
            name="user_name"
            value={formik.values.user_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.user_name && formik.errors.user_name ? (
            <div className={style.errors}>{formik.errors.user_name}</div>
          ) : null}
          <label>Ingresa tu Email</label>
          <input
            type="text"
            name="user_email"
            value={formik.values.user_email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.user_email && formik.errors.user_email ? (
            <div className={style.errors}>{formik.errors.user_email}</div>
          ) : null}
          <label>Deja tus comentarios</label>
          <textarea
            cols="3"
            rows="3"
            name="user_comments"
            value={formik.values.user_comments}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.user_comments && formik.errors.user_comments ? (
            <div className={style.errors}>{formik.errors.user_comments}</div>
          ) : null}
          <button type="submit"><RiMailSendFill/> Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
