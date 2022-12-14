import React, {useState} from "react";
import {updateRecipe} from '../../redux/actions/recipesActions'
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { uploadFile } from '../../firebase/firebase.config'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


const EditRecipe = () => {


    const [file, setFile] = useState(null);
    const { id } = useParams()
    const dispatch = useDispatch();
    const history = useNavigate()

  const [ingrediente, setIngrediente] = useState("");
  const [lista, setLista] = useState([]);
  const [img, setImg] = useState([])



    const [modificar, setModificar] = useState({
        name: '',
        image: '',
        ingredients: '',
        description: ''
    });

    function handleName(e) {
        e.preventDefault();
        setModificar({
            ...modificar,
            name: e.target.value.toLowerCase()
        })
        console.log(e.target.value);
    }

    function handleDesc(e) {
        e.preventDefault();
        setModificar({
            ...modificar,
            description: e.target.value
        })
        console.log(e.target.value);

    }

    function deleteImg(e){
      setImg(img.filter(img=>img!==e))
    }


    function actualizarIngrediente(event){
        setIngrediente(event.target.value)
      }

      function agregarIngrediente(){
        if(ingrediente.length > 0){
          setLista([...lista, ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)]);
          setIngrediente("");
        }
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

    
      function deleteIngrediente(e){
        setLista(lista.filter(ing=>ing!==e))
      }
    

      const actualizar = async () =>  {
        // if (!modificar.name) {
        //     alert('No hay nada que modificar')
        // }
        
        try {
            if (window.confirm("Se va a modificar la receta, desea continuar?")) {
        if (modificar) {
                 
                    //const result = await uploadFile(file);
                    modificar.image = img;
                    modificar.ingredients = lista;
                    console.log(modificar);
                   dispatch(updateRecipe(modificar, id));
                   alert("Receta Actualizada!")
                   history('/HAdmin/AdminRecipes')
              }
             }
    
        } catch (err) {
            console.log(err)
        }
    }

    
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
        
        
        onSubmit={actualizar}
        validate={validar}
      >

        <div className="flex h-screen w-6/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{ background: "#292626" }}>

        <div className="flex  h-6/6 w-5/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{ background: "#a1a1aa"}}> 

          <Form >
          <Link to='/HAdmin'>
          <button className="group bg-green-600
          relative flex-items-center w-48 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-24 mb-4 ">Volver</button></Link>

            <h1 className="text-5xl text-black mx-12 justify-center items-center">Editar Receta</h1>

            <h1 className="text-lg font-semibold text-black  text-black  m-2">Nombre de Receta</h1>
            <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
              placeholder="Ingrese el nombre de la receta" name="name" type="text" 
              onChange={handleName} value={modificar.name} />


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
              Seleccione la nueva imagen {" "}
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
         mb-3 relative flex w-10px  rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2" onClick={agregarIngrediente} type="button">Agregar</button>

            <ul className="text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2">
              {lista.length == 0?(
                <li className="text-black m-2">Agrega tus ingredientes</li>
              ):(
                lista.map((e)=>(
                  <li key={e}>
                    {e}
                    <button className="text-white m-2" onClick={()=>deleteIngrediente(e)}>X</button>
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
              onChange={handleDesc} value={modificar.description}
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
              type="actualizar"
              
              className="group bg-red-600
              mb-3 relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2"
            >
              Editar Receta
            </button>
            
          </Form>
        </div>
        </div>
      </Formik>
    </div>
  )
}

export default EditRecipe