import React, { useState } from 'react';
import {addProducts} from '../../redux/actions/actions'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
    return (
        <div>
            <Link to='/home'><button>VOLVER</button></Link>
            <h1>Crear Producto</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                    <label>nombre:</label>
                    <input
                        type="text"
                        name='name'
                        value={input.name}
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>precio:</label>
                    <input
                        type="number"
                        name='price'
                        value={input.price}
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>imagen:</label>
                    <input
                        type="text"
                        name='image'
                        value={input.image}
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>descripcion:</label>
                    <input
                        type="text"
                        name='description'
                        value={input.description}
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <button type='submit'>CREAR</button>
            </form>
        </div>
    );
};

export default CreateProduct;