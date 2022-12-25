import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../store/actions/productsActions";
import ProductCard from "../components/ProductCard/ProductCard";
import {useParams} from "react-router-dom";

const Products = () => {
    const {category, search} = useParams()
    const dispatch = useDispatch()
    const {products, isLoading, error} = useSelector(state => state.productsSlice)

    useEffect(() => {
        if (category !== null){
            dispatch(fetchProducts({category: category}))
            return
        }else if(search != null){
            console.log(search)
            dispatch(fetchProducts({search: search}))
            return
        }else{
            dispatch(fetchProducts())
        }

    }, [ ])

    useEffect(() => {
       if (search !== undefined){
           dispatch(fetchProducts({search: search}))
       }
    }, [search])
    return (
        <div className={"row justify-content-center mt-4"}>
            {isLoading ?
                <h2 className={"text-center"}>Завантаження..</h2>
                :
                products.map(item => (
                    <ProductCard key={item.id} item={item}/>
                ))}
        </div>
    );
};

export default Products;