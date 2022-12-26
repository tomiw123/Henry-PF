import React, { useEffect } from 'react';
import style from '../AdminProducts/AdminProducts.module.css'
import AdminProduct from '../AdminProduct/AdminProduct'
// import Products from '../../Products/Products.json'
import { useDispatch, useSelector } from 'react-redux';
import { geTAllProducts } from "../../../redux/actions/actions"
import Paginado from "../../Paginado/Paginado";
import { Link } from 'react-router-dom';

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
            <Link to='/HAdmin'>
            <button className="group bg-green-600
            relative flex-items-center w-48 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  mb-4 ">Volver</button></Link>

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