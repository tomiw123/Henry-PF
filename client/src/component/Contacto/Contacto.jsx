import React, { useRef, useState } from "react";
import style from "./Contacto.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

const Contacto = () => {
  const form = useRef()
  console.log(form);
  const sendEmail = (e) => {

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

  return (
    // <div>
    //   <form ref={form} onSubmit={sendEmail}>
        
    //   </form>
    // </div>
    
    <Formik
      initialValues={{
        user_email: "",
        user_comments: "",
        user_name: "",
      }}
      validationSchema={Yup.object({
        user_name: Yup.string()
          .max(15, "Must be 20 characters or less")
          .required("Name is required"),
        user_email: Yup.string()
          .email("Invalid email address")
          .max(40, "Must be 20 characters or less")
          .required("Email is required"),
        user_comments: Yup.string().required("Comments is required"),
      })}

      onSubmit={(values, actions) => {
        // console.log(values);
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(true);
        actions.resetForm();
        actions.submitForm()
        sendEmail()
      }}

      // onSubmit={sendEmail}
      innerRef={form}
    >
      <div className={style.principal}>
        <div className={style.card}>
          <h1>Contactenos</h1>
          <Form >
            <label>Ingresa tu Nombre</label>
            <Field type="text" name="user_name" />
            <ErrorMessage name="user_name" />
            <label>Ingresa tu Email</label>
            <Field type="email" name="user_email" />
            <ErrorMessage name="user_email" />
            <label>Deja tus comentarios</label>
            <Field rows="3" cols="3" name="user_comments" as="textarea" />
            <ErrorMessage name="user_comments" />
            <button type="submit">enviar</button>
          </Form>
        </div>
      </div>
    </Formik>
  
  );
};

export default Contacto;
