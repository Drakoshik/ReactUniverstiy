import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import styles from "./ProductCard.module.css"
import SuperPortalModal from "../SuperPortalModal";

const ProductCard = (props) => {
    const [show, setShow] = useState(false)
    const addToFavoriteHandler = () => {
        let json = JSON.parse(localStorage.getItem("favorites"))
        let storedProducts = json ? json : [];
        if (storedProducts.includes(props.item.id)) {
            storedProducts = storedProducts.filter(i => i !== props.item.id)
            alert("Успішно видалено з списку улюблениз товарів.")
        } else {
            storedProducts.push(props.item.id)
            alert("Успішно додано до списку улюблениз товарів.")
        }
        localStorage.setItem("favorites", JSON.stringify(storedProducts));
    }
    return (
        <>
            <SuperPortalModal onClose={() => setShow(false)} open={show}/>
            <Card onClick={e => setShow(true)} className={styles.MyCard} style={{width: '18rem'}}>
                <Button onClick={addToFavoriteHandler}
                        className={`${styles.showOnHover} btn btn-danger position-absolute top-0 end-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </Button>
                <Card.Img variant="top" src={props.item.image}/>
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text className={'text-danger'}>{props.item.price} $</Card.Text>
                    <Button className={`${styles.showOnHover} position-absolute bottom-0 start-0 `} variant="primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path
                                d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path
                                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        Сравнить
                    </Button>
                    <Button className={`${styles.showOnHover} position-absolute bottom-0 end-0`} variant="primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path
                                d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path
                                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        Buy
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductCard;