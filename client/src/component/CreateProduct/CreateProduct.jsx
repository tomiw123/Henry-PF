import React, { useState } from "react";
import { addProducts } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { Navigate } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from "formik";
import { uploadFile } from "../../firebase/firebase.config";

const CreateProduct = () => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState([])

  const [input, setInput] = useState({
    categoria: ""
  })

  const dispatch = useDispatch();

  function deleteImg(e){
    setImg(img.filter(img=>img!==e))
  }

  function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value.toLowerCase() 
    })
  }


  const hola = async (file) =>{
    var resultado
    const result =  await uploadFile(file);
    // img = result;
    resultado = result;
     setImg([...img, resultado])
     console.log(img);
    return img;
  }
  console.log(img);

  const submit = async (values) => {
    try {
      if (window.confirm("Desea agregar los cambios?")) {
       // const result = await uploadFile(file);
        values.image = img;
        values.category = input.categoria
        console.log(values);
        dispatch(addProducts(values));
        alert("Producto creado existosamente");
       window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("Error interno. Intente mas tarde");
    }
  };

  const validations = (values) => {
    const errors = {};
    if (values.name.length > 40)
      errors.name = "El nombre no puede ser tan largo ";
      if(!values.name)
        errors.name = "Debe ingresar el nombre de la Producto!"
      if (!values.description)
      errors.description = "Debe ingresar la descripcion del producto";
      if (!values.price)
      errors.description = "Debe ingresar el precio del producto";
    return errors;
  };
  // const user = localStorage.getItem("role")
  // if(user !== "admin" ){
  //     return <Navigate to="/"/>
  // }
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          price: "",
          image: "",
          category: "",
          description: "",
        }}
        onSubmit={submit}
        validate={validations}
      >
        <div
          className="flex h-screen w-6/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 "
          style={{ background: "#292626" }}
        >

<div className="flex  h-6/6 w-5/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{ background: "#a1a1aa"}}>


          <Form className=" flex flex-col justify-center items-center">
          <Link to='/HAdmin'>
          <button className="group bg-green-600
          relative flex-items-center w-48 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  mb-4 ">Volver</button></Link>

            <h1 className="text-5xl text-black m-2 justify-center items-center ">
              Crear Producto
            </h1>
            <h1 className="text-lg font-semibold text-black  text-black  m-2">Nombre de Producto</h1>
            <Field
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
              placeholder="Ingrese el nombre del producto"
              name="name"
              type="text"
            />
            <ErrorMessage name="name">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <h1 className="text-lg font-semibold text-black  text-black  m-2">Precio del Producto</h1>
            <Field
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-50 0 sm:text-sm m-2"
              placeholder="Ingrese el precio del producto"
              name="price"
              type="number"
            />

              <ErrorMessage name="price">
              {(msg) => (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {msg}
                </div>
              )}
            </ErrorMessage>

                <div >
                        <label className="text-lg font-semibold text-black  text-black  m-2">Seleccione la Categoria:</label>
                        <select
                        name = "categoria"
                        id= "categoria"
                        value= {input.categoria}
                        className="text-lg font-semibold text-black  text-black  m-2"
                        onChange={(e)=>handleChange(e)}
                        >
                            <option value="seleccionar">Seleccionar...</option>
                            <option value="parrillas">Parrillas</option>
                            <option value="fogoneros">Fogoneros</option>
                            <option value="accesorios">Accesorios</option>
                            <option value="articulos">Articulos Varios</option>
                        </select>
                       
                </div>


            <h1 className="text-lg font-semibold text-black  text-black  m-2">Descripción del Producto</h1>
            <Field
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 h-24 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
              placeholder="Ingrese la descripcion"
              name="description"
              type="text"
            />

            <ErrorMessage name="description">
              {(msg) => (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {msg}
                </div>
              )}
            </ErrorMessage>

            <h1 className="text-lg font-semibold text-white m-2" style={{ color: "black" }}>
              Seleccione la imagen del producto:{" "}
            </h1>
            {/* <Field
              className="bg-white relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
              name="image"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            /> */}

              <div className="flex justify-center">
                <div className="mb-3 w-96">
                  {/* <label for="formFile" className="form-label inline-block mb-2 text-gray-700"></label> */}
                  <input className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  m-2" 
                  name="image"
                  type="file" id="formFile"
                  onChange={(e) => hola(e.target.files[0])}/>
                </div>
              </div>
                    <div className=" flex px-2 w-30 h-20 "> 
                      {
                            img == "" ? ( (<h1>Ingrese una imagen</h1>)):(
                              (
                                img.map((e) => (
                                  
                                  <img src={e} alt="" className="w-20 h-30 px-1" onClick={()=>deleteImg(e)}/>
                                  
                                )
                                )
                              )
                            )
                          }
                        </div>

            <button
              type="submit"
              style={{ backgroundColor: "red" }}
              className="group bg-red-600mb-3 relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2"
            >
              Crear Producto
            </button>
          </Form>
        </div>
        </div>
      </Formik>
    </div>
  );
};

export default CreateProduct;
