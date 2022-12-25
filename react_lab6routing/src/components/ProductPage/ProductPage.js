import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../store/actions/productsActions";
import {Carousel} from "react-bootstrap";

const ProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoading, error, product} = useSelector(state => state.productsSlice.product)

    useEffect(() => {
        const numberCheck = /^(\d+)$/gm
        if (numberCheck.test(id)) {
            dispatch(fetchProduct(id))
        } else {
            alert("Помилка! Товар не знайдено!")
            navigate("/")
        }

    }, [])
    useEffect(() => {
        console.log(product)
    }, [product])
    return (
        <div className={"container"}>
            <Carousel>
                {product?.images.map((item, index) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={item}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={'mt-4'}>
                <p>Brand:{product?.brand}</p>
                <p>Category:{product?.category}</p>
                <p>Description:{product?.description}</p>
                <p>Price:{product?.price}</p>
            </div>

        </div>
    );
};

export default ProductPage;