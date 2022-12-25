import React, {useEffect} from 'react';
import {Button, Card} from "react-bootstrap";
import styles from "./ProductCard.module.css"
import {Link, useNavigate} from "react-router-dom";

const ProductCard = (props) => {
    const navigate = useNavigate()
    // const addToFavoriteHandler = () => {
    //     let json = JSON.parse(localStorage.getItem("favorites"))
    //     let storedProducts = json ? json : [];
    //     if (storedProducts.includes(props.item.id)){
    //         storedProducts = storedProducts.filter(i => i !== props.item.id)
    //         alert("Успішно видалено з списку улюблениз товарів.")
    //     }else{
    //         storedProducts.push(props.item.id)
    //         alert("Успішно додано до списку улюблениз товарів.")
    //     }
    //     localStorage.setItem("favorites", JSON.stringify(storedProducts));
    // }

    return (
        <Card className={styles.MyCard} style={{width: '18rem'}}>
            {/*<Button onClick={addToFavoriteHandler} className={`${styles.showOnHover} btn btn-danger position-absolute top-0 end-0`}>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
            {/*         className="bi bi-heart" viewBox="0 0 16 16">*/}
            {/*        <path*/}
            {/*            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>*/}
            {/*    </svg>*/}
            {/*</Button>*/}
            <Card.Img variant="top" src={props.item.thumbnail}/>
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text className={'text-danger'}>{props.item.price} $</Card.Text>
                <Link to={`products/${props.item.id}`} className={`${styles.showOnHover} position-absolute bottom-0 end-0 btn btn-primary`} >
                    More
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;