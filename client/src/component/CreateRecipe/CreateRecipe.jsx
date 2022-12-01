import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';



function CreateRecipe(){

    const crear = (values) =>{
        alert(JSON.stringify(values))
    }


    const validar= (values) =>{
        const errors={}
            if(values.description.length < 5) errors.description = 'Debe ingresar la descripcion de la receta'
            return errors
       }
    
    return(
        <div>
            <Formik

            initialValues={{
                name:"",
                image:"",
                Utensilios:"",
                ingredients:"",
                description:"",
            }}
            onSubmit={crear}
            validate={validar}
              >

            <div className="flex h-screen w-6/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{background:"#292626"}}>

            <Form >

                <h1 className="text-5xl text-white m-2 justify-center items-center ">Crear Receta</h1>

                <h1 className="text-s text-white m-2">Nombre de Receta</h1>
            <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
                placeholder="Ingrese el nombre de la receta" name="name" type="text"/>

            <h1 className="text-s text-white m-2">Nombre de Receta</h1>
            <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-50 0 sm:text-sm m-2"
                placeholder="Ingrese la foto de la receta" name="image" type="text"/>

            <h1 className="text-s text-white m-2">Utensilios que utiliza</h1>
            <select className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
            
                placeholder="Ingrese los utensilios que va a utilizar" name="Utensilios" type="text"> 

                <option selected>Seleccione utensilios que va a utlizar</option>
                <option value="da">disco de arado</option>
                <option value="pa">parrilla</option>
                <option value="cr">cruz/estaca</option>
                <option value="ca">cazuela</option>
                </select>   

            <h1 className="text-s text-white m-2">Ingredientes de Receta</h1>
            <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
                placeholder="Ingrese los ingredientes" name="ingredients" type="text"/>
            
            <h1 className="text-s text-white m-2">Descripción de la Receta</h1>
            <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 h-24 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
                placeholder="Ingrese la descripcion" name="description" type="text"/>

            
            <ErrorMessage name= 'description'> 
            {msg => <div style={{
                color: 'white'
            }}>{
                msg
                }</div>}
            </ErrorMessage>
            

            <button  type='submit'
            className="group bg-red-600
         mb-3 relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2" >Crear Receta</button>
            
            </Form>
            </div>
            
            
            </Formik> 
        </div>
    )

}
export default CreateRecipe;