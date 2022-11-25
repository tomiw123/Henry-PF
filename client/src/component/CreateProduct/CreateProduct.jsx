import React, { useState, useEffect } from 'react';

const CreateProduct = () => {

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
        //aca hago el dispatch del post
        alert('Producto creado con exito');
    }
    return (
        <div>
            <h1>Crear Producto</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                    <label>nombre:</label>
                    <input
                        type="text"
                        name='name'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>precio:</label>
                    <input
                        type="number"
                        name='price'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>imagen:</label>
                    <input
                        type="text"
                        name='image'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>descripcion:</label>
                    <input
                        type="text"
                        name='descripcion'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <button type='submit'>CREAR</button>
            </form>
        </div>
    );
};

export default CreateProduct;