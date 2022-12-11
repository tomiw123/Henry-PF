import React, { useRef, useState } from "react";
import style from "./Contacto.module.css";
import emailjs from "@emailjs/browser";
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiMailSendFill } from "react-icons/ri";
import swal from 'sweetalert';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi"
import { SlLocationPin } from "react-icons/sl"
import { BsTelephone } from "react-icons/bs"




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
        .max(15, "Debe tener 15 o menos caracteres")
        .required("Este campo es requerido"),
      user_comments: Yup.string()
        .max(150, "Debe tener 150 o menos caracteres")
        .required("Este campo es requerido"),
      user_email: Yup.string()
        .email("Email ingresado invalido debe tener un @")
        .required("Este campo es requerido"),
    }),
    onSubmit: (values, { resetForm }) => {
      swal("Correo enviado exitosamente!!!");
      sendEmail(values);
      resetForm({ values: "" })
    },
  });

  return (
    <div className={style.principal}>


      <div className={style.titulo}> <h1>Contactenos</h1>
      </div>

      <div className={style.cardform}>

        <div className={style.cuadro1} >
          <div className={style.cuadro1a}>
            <div className={style.cuadro1titulo}>
              <h1>Seguinos...</h1>
            </div>

            <div>
              <a className={style.aa}>
                <FiMail className={style.aa1} />
                <h2>dosdagashenry@gmail.com</h2></a>

              <a className={style.aa}>
                <SlLocationPin className={style.aa1} />
                <h2>Salta, Argentina</h2></a>

              <a className={style.aa}>
                <BsTelephone className={style.aa1} />
                <h2>+54-387-4587646</h2></a>
            </div>

            <div className={style.redes}>
              <a href="https://www.facebook.com/DosDagas" target="_blanc">
                <div className="rs">
                  <FaFacebookF className="icon" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/dosdagas/?fbclid=IwAR3Oy50LrpjFB0-0Dko0t34hyQD6IKfYbUdfHmZs-OMSZILqUErbv5UMHDY"
                target="_blanc"
              >
                <div className="rs">
                  <FaInstagram className="icon" />
                </div>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=%2B5493874587646&text=%C2%BFComo+estas+en+que+podemos+asesorarte+en+el+dia+de+hoy%3F"
                target="_blanc"
              >
                <div className="rs">
                  <FaWhatsapp className="icon" style={{ width: "80px" }} />
                </div>
              </a>

            </div>
          </div>
        
          <div className={style.frontera}></div>

        <div className={style.card}>
          <h1>Hace tu consulta</h1>
          <form ref={form} onSubmit={formik.handleSubmit}>
            <label>Ingresa tu Nombre</label>
            <input
              type="text"
              name="user_name"
              value={formik.values.user_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ingresa tu nombre"
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
              placeholder= "Ingresa tu em@il"
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
              placeholder="Ingresa tus comentarios"
            />
            {formik.touched.user_comments && formik.errors.user_comments ? (
              <div className={style.errors}>{formik.errors.user_comments}</div>
            ) : null}
            <button type="submit"
              className="group bg-blue-600
          mb-3 relative flex w-48 h-12 text-2xl justify-center rounded-md border border-transparent  py-2 px-4 -font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2"
            >Enviar <RiMailSendFill className={style.icon} /></button>
          </form>
        </div>
        
        </div>
      </div>

    </div>
  );
};

export default Contacto;
