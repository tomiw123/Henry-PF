import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addRecipes } from "../../redux/actions/recipesActions";
import { uploadFile } from "../../firebase/firebase.config";
import style from "./CreateRecipe.module.css";
import { Link } from "react-router-dom";
//import { error } from 'console';




function CreateRecipe() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const [ingrediente, setIngrediente] = useState("");
  const [lista, setLista] = useState([]);
("")
  const [img, setImg] = useState([])
  //console.log(ingrediente);

  function actualizarIngrediente(event){
    setIngrediente(event.target.value)
  }

  function agregarIngrediente(){
    if(ingrediente.length > 0){
      setLista([...lista, ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)]);
      setIngrediente("");
    }
  }

  function deleteIngrediente(e){
    setLista(lista.filter(ing=>ing!==e))
  }

  function deleteImg(e){
    setImg(img.filter(img=>img!==e))
  }

  
  //let img = ""
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
  
  


  const crear = async (values) => {
    //console.log(crear);

    try {

      if (window.confirm("Se va a crear una receta nueva, desea continuar?")) {
        if (lista) {
     // const result = img
      // await uploadFile(file);
      values.image = img;
      values.ingredients = lista;
      console.log(values);
      dispatch(addRecipes(values));
      alert("Receta creado existosamente");
      window.location.reload();
      }
     }
    } catch (error) {
      console.log(error);
      alert("Error interno. Intente mas tarde");
    }
  };

  

  const validar = (values) => {
    const errors = {};
    
    if (values.description.length < 5)
      errors.description = "Debe ingresar la descripcion de la receta";
    if(!values.name)
      errors.name = "Debe ingresar el nombre de la receta!"
    if (values.name.length > 40)
      errors.name = "El nombre no puede ser tan largo "
    
     
    return errors;
  };

  // const user = localStorage.getItem("role")
  //    if(user !== "admin" ){
  //        return <Navigate to="/"/>
  //    }



  return (
    <div>
      <Formik

        initialValues={{
          name: "",
          image: "",

          // Utensilios:"",

          ingredients: "",
          description: "",
        }}
        
        
        onSubmit={crear}
        validate={validar}
      //onClick={agregarIngrediente}
      >

        <div className="flex h-screen w-6/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{ background: "#292626" }}>

          <div className="flex  h-6/6 w-5/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{ background: "#a1a1aa"}}> 

          <Form >

          <Link to='/HAdmin'>
          <button className="group bg-green-600
          relative flex-items-center w-48 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-24 mb-4 ">Volver</button></Link>

            <h1 className="text-5xl text-black mx-12 justify-center items-center ">Crear Receta</h1>
            
            <h1 className="text-lg font-semibold text-black  text-black  m-2">Nombre de Receta</h1>
            <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
              placeholder="Ingrese el nombre de la receta" name="name" type="text" />


            <ErrorMessage name="name">
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
              Seleccione la imagen del producto{" "}
            </h1>
            
            {/* <Field
            
              className="bg-white relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
              name="image"
              type="file"
              onChange={(e) => hola(e.target.files[0])}
            />

            {
              result == "" ? ( (<h1>ingresa</h1>)):(
                (
                  (<h1>iaaaangresa</h1>)
                // <img src={`${img}`} alt="" className="w-full h-20" />
                )
              )
            } */}

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

            {/* <img src={`${img}`} alt="" className="w-full h-20" /> */}

            {/* <h1 className="text-s text-white m-2">Utensilios que utiliza</h1>
            <select className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"

                placeholder="Ingrese los utensilios que va a utilizar" name="Utensilios" type="text"> 

                <option selected>Seleccione utensilios que va a utlizar</option>
                <option value="da">disco de arado</option>
                <option value="pa">parrilla</option>
                <option value="cr">cruz/estaca</option>
                <option value="ca">cazuela</option>
                </select>    */}

            <h1 className="text-lg font-semibold  text-black m-2">Ingredientes de Receta</h1>
          
            <input
              type="text"
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
              value={ingrediente}
              placeholder="Ingrese los ingredientes"
              onChange={actualizarIngrediente}
             // name="ingredients"
            ></input>

            <button className="group bg-blue-600
         mb-3 relative flex w-10px  rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2" onClick={agregarIngrediente}>Agregar</button>

            <ul className="text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2">
              {lista.length == 0?(
                <li className="text-black">Agrega tus ingredientes</li>
              ):(
                lista.map((e)=>(
                  <li key={e}>
                    {e}
                    <button className="text-black m-2" onClick={()=>deleteIngrediente(e)}>X</button>
                  </li>
                ))
              )}
            </ul>

           

            <h1 className="text-lg font-semibold  text-black m-2">Descripción de la Receta</h1>
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

            <button
              type="crear"
              className="group bg-red-600
         mb-3 relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2"
            >
              Crear Receta
            </button>
          </Form>
          </div>
        </div>
      </Formik>
    </div>
  );
}
export default CreateRecipe;
