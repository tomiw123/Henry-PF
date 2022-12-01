// import React, { useState } from "react";
// import style from "./Contacto.module.css";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FaWhatsapp } from "react-icons/fa";

// const Contacto = () => {
//   return (
//     <Formik
//       initialValues={{
//         client: "",
//         comments: "",
//         name: "",
//       }}
//       validationSchema={Yup.object({
//         name: Yup.string()
//           .max(15, "Must be 20 characters or less")
//           .required("Name is required"),
//         client: Yup.string()
//           .email("Invalid email address")
//           .max(40, "Must be 20 characters or less")
//           .required("Client is required"),
//         comments: Yup.string().required("Comments is required"),
//       })}
//       onSubmit={(values, actions) => {
//         // console.log(values);
//         alert(JSON.stringify(values, null, 2));
//         actions.setSubmitting(false);
//         actions.resetForm();
//       }}
//     >
//       <div className={style.principal}>
//         <div className={style.card}>
//           <h1>Contactenos</h1>
//           <Form>
//             <label>Ingresa tu Nombre</label>
//             <Field type="text" name="name" />
//             <ErrorMessage name="name" />
//             <label>Ingresa tu Email</label>
//             <Field type="email" name="client" />
//             <ErrorMessage name="client" />
//             <label>Deja tus comentarios</label>
//             <Field rows="3" cols="3" name="comments" as="textarea" />
//             <ErrorMessage name="comments" />
//             <button type="submit">enviar</button>
//           </Form>
//         </div>
//       </div>
//     </Formik>
//   );
// };

// export default Contacto;
