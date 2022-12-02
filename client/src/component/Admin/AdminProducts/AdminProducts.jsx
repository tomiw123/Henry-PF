import React from 'react';
import style from '../AdminProducts/AdminProducts.module.css'
import AdminProduct from '../AdminProduct/AdminProduct'
import Products from '../../Products/Products.json'

const AdminProducts = () => {
    return (
        <div className={style.container}>
            {
                Products.map((p) => (
                    <AdminProduct name ={p.name} image={p.image} />
                ))
            }
        </div>
    );
};

export default AdminProducts;