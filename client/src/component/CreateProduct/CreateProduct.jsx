import React, { useState } from 'react';
import {addProducts} from '../../redux/actions/actions'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../../component/CreateProduct/Create.module.css'
import { Navigate } from 'react-router-dom';

const CreateProduct = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        price: '',
        image: '',
        description: ''
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault(e)
        dispatch(addProducts(input))
        alert('Producto creado con exito');
        setInput({
            name: '',
            price: '',
            image: '',
            description: ''
        })
    }
    const user = localStorage.getItem("role")
    if(user !== "admin" ){
        return <Navigate to="/"/>
    } 
    return (
        <div className={style.container}>
            <Link to='/'><button className={style.btn}>VOLVER</button></Link>
            <h1 className={style.title}>Crear Producto</h1>
            <form className={style.form} onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                    <label className={style.label}>nombre:</label>
                    <input
                        type="text"
                        name='name'
                        value={input.name}
                        onChange={(e) => { handleChange(e) }}
                        className={style.input}
                    />
                </div>
                <div>
                    <label className={style.label}>precio:</label>
                    <input
                        type="number"
                        name='price'
                        value={input.price}
                        onChange={(e) => { handleChange(e) }}
                        className={style.input}
                    />
                </div>
                <div>
                    <label className={style.label}>imagen:</label>
                    <input
                        type="text"
                        name='image'
                        value={input.image}
                        onChange={(e) => { handleChange(e) }}
                        className={style.input}
                    />
                </div>
                <div>
                    <label className={style.label}>descripcion:</label>
                    <input
                        type="text"
                        name='description'
                        value={input.description}
                        onChange={(e) => { handleChange(e) }}
                        className={style.input}
                    />
                </div>
                <button id={style.btn2} type='submit'>CREAR</button>
            </form>
        </div>
    );
};

export default CreateProduct;