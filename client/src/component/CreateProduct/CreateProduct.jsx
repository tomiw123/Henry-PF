import React, { useState } from 'react';
import { addProducts } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import style from '../../component/CreateProduct/Create.module.css'
import { Navigate } from 'react-router-dom';
=======
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { uploadFile } from '../../firebase/firebase.config'
>>>>>>> 5a5c6ce17354263acbb963a6e223e17e6b5297c5

const CreateProduct = () => {

    const [file, setFile] = useState(null)

    const dispatch = useDispatch();

    const submit = async (values) => {
        try {
            const result = await uploadFile(file);
            values.image = result;
            console.log(values)
            dispatch(addProducts(values));
            alert('Producto creado existosamente')
        } catch (error) {
            console.log(error)
            alert('Error interno. Intente mas tarde')
        }
    }

    const validations = (values) => {
        const errors = {};
        if (values.name.length > 40) errors.name = 'El nombre no puede ser tan largo ';
        return errors;
    }
    const user = localStorage.getItem("role")
    if(user !== "admin" ){
        return <Navigate to="/"/>
    } 
    return (
        <div>
            <Formik initialValues={{
                name: '',
                price: '',
                image: '',
                description: ''
            }}
                onSubmit={submit}
                validate={validations}
            >
                <div className="flex h-screen w-6/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{ background: "#292626" }}>
                    <Form className=" flex flex-col justify-center items-center">
                        <h1 className="text-5xl text-white m-2 justify-center items-center ">Crear Producto</h1>
                        <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
                            placeholder="Ingrese el nombre del producto" name="name" type="text" />
                        <ErrorMessage name='name'>
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                        <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-50 0 sm:text-sm m-2"
                            placeholder="Ingrese el precio del producto" name="price" type="number" />
                        <Field className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 h-24 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
                            placeholder="Ingrese la descripcion" name="description" type="text" />
                        <h1 style={{ color: 'gray' }}>Seleccione la imagen del producto: </h1>
                        <Field className="bg-white relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-2"
                            name="image" type="file" onChange={(e) => setFile(e.target.files[0])} />
                        <button type='submit' style={{ backgroundColor: 'red' }}
                            className="group bg-red-600mb-3 relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2" >Crear Producto</button>
                    </Form>
                </div>
            </Formik>
        </div>
    );
};

export default CreateProduct;