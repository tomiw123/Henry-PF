import React, { useEffect } from 'react';
import style from '../AdminProducts/AdminProducts.module.css'
import AdminProduct from '../AdminProduct/AdminProduct'
// import Products from '../../Products/Products.json'
import { useDispatch, useSelector } from 'react-redux';
import { geTAllProducts } from "../../../redux/actions/actions"
import Paginado from "../../Paginado/Paginado";

const AdminProducts = () => {

    const dispatch = useDispatch();
    const AllProducts = useSelector((state) => state.products.docs)
    const products = useSelector((state) => state.products)

    console.log(AllProducts)

    useEffect(() => {
        dispatch(geTAllProducts())
    }, [dispatch])


    return (
        <div className={style.container}>
            {
                AllProducts?.map((p) => (
                        <AdminProduct id={p._id} key={p._id} name={p.name} image={p.image} />
                ))
            }
            <div className={style.paginado}>
            <Paginado product={products} />
            </div>
        </div>
    );
};

export default AdminProducts;