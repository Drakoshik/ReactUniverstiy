import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchProducts} from "./redux/actions/ProductsActions";
import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header";
import {productsSlice} from "./redux/reducers/productsSlice";

function App() {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.productsSlice)
    const changeSortMethodHandler = e => {
        dispatch(e.currentTarget.value === 'asc' ? productsSlice.actions.SORT_PRODUCTS_BY_PRICE_ASC() : productsSlice.actions.SORT_PRODUCTS_BY_PRICE_DESC())
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [ ])
    return (
        <>
            <Header/>
            <div className={"container"}>
                <div className={"ms-5"}>
                    <label>
                        Сортувати за:
                        <select onChange={changeSortMethodHandler} className={"form-select form-select-sm"}>
                            <option value="asc">Спадання</option>
                            <option value="desc">Зростання</option>
                        </select>
                    </label>
                </div>

                <div className="row justify-content-center mt-4">
                    {isLoading ?
                        <h2 className={"text-center"}>Завантаження..</h2>
                        :
                        products.map(item => (
                            <ProductCard item={item}/>
                        ))}
                </div>
            </div>
        </>

    );
}

export default App;
