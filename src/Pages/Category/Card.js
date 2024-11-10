import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Card( {image,category,title,price,oldPrice,discount} ) {
    return (
        <>
            <div className="card trendingProducts" style={{ width: "18rem" }}>
                <a href="#">
                    <img src={image} className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                    <h6 className='category'>{category}</h6>
                    <a href="#" style={{ textDecoration: "none", color: "black" }}>
                        <h5 className="card-title trending">{title}</h5>
                    </a>
                    <div className="icon trending">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className="card-text trending" style={{ margin: "0px" }}>
                        {price}
                    </p>
                    <p className="card-text" style={{ margin: "0px" }}>
                        <del> {oldPrice}</del> <span className='card-text price'>{discount}</span>
                    </p>
                    <div className="card-text price-button d-flex ">

                        <a href="#" className="btn btn-primary trending">
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to <br />Cart
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
