import React from "react";
import style from "./Contacto.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
import {FaWhatsapp} from 'react-icons/fa'

const Contacto = () => {


  return (
    <Formik
      initialValues={{
        owner: "",
        client: "",
        comments: "",
        cellphone: "",
      }}
      validationSchema={Yup.object({
        owner: Yup.string()
        .email("Invalid email address")
        .max(20, 'Must be 20 characters or less')
        .required("Owner is required"),
        client: Yup.string()
        .email("Invalid email address")
        .max(20, 'Must be 20 characters or less')
        .required("Client is required"),
        comments: Yup.string().required("Comments is required"),
        cellphone: Yup.number()
        .required("Cellphone is required")
        .integer(), 
      })}
      onSubmit={(values,{setSubmiting}) => {
        console.log(values);
      }}
    >
        <div className={style.principal}>
          <div className={style.card}>
            <h1>Contactenos</h1>
            <Form>
              <label>Nuestro Email</label>
              <Field type="email" name="owner"/>
              <ErrorMessage name="owner"/>
              <label>Ingresa tu Email</label>
              <Field type="email" name="client" />
              <ErrorMessage name="client"/>
              <label>Deja tus comentarios</label>
              <Field
                rows="3"
                cols="3"
                name="comments"
                as="textarea"
                />
                <ErrorMessage name="comments"/>
              <button type="submit">Contactar</button>
            </Form>
          </div>
        </div>
    </Formik>
  );
};

export default Contacto;
