import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../Images/newarr1.png";
import img2 from "../Images/newarr2.png";
import img3 from "../Images/newarr3.png";
import img4 from "../Images/furniture1.png";
import img5 from "../Images/newarr4.png";
import img6 from "../Images/newarr5.png";
import img7 from "../Images/newarr6.png";
import img8 from "../Images/newarr7.png";
// import Card from '../Pages/Category/Card';

export default function Newarrivals() {
    return (
        <>
            <div className="container">
                <div className="row trending d-flex justify-content-center">
                    <div className="card trendingProducts" style={{ width: "18rem" }}>
                        <a href="#">
                            <img src={img1} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Fragrance</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Dolce Shine Eau de</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $8.00
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $10.00</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-2.0%</p>
                                <a href="#" className="btn btn-primary trending">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card trendingProducts" style={{ width: "18rem" }}>
                        <a href="#">
                            <img src={img2} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Fragrance</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Gucci Bloom Eau de</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $10.00
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $12.0</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-2.0%</p>
                                <a href="#" className="btn btn-primary trending">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card trendingProducts" style={{ width: "18rem" }}>
                        <a href="#">
                            <img src={img3} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Furniture</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Annibale Colombo Bed</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $1899.99
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $12.0</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-2.0%</p>
                                <a href="#" className="btn btn-primary trending">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card trendingProducts" style={{ width: "18rem" }}>
                        <a href="#">
                            <img src={img4} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Furniture</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Annibale Colombo Sofa</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $2036.49
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $12.0</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-2%</p>
                                <a href="#" className="btn btn-primary trending">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card trendingProducts" style={{ width: "18rem" }}>
                        <a href="#">
                            <img src={img5} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Furniture</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Bedside Table African Cherry</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $271.25
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $29.9</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-9.58%</p>
                                <a href="#" className="btn btn-primary trending">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card trendingProducts" style={{ width: "18rem" }}>
                        <a href="#">
                            <img src={img6} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Furniture</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Knoll Saarinen Executive Conference Chair</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $423.84
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $499.9</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-15%</p>
                                <a href="#" className="btn btn-primary trending">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card trendingProducts" style={{ width: "18rem" }}>
                        <a href="#">
                            <img src={img7} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Furniture</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Wooden Bathroom Sink With Mirror</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $710.23
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $799</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-11.2%</p>
                                <a href="#" className="btn btn-primary trending">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card trendingProducts" style={{ width: "18rem" }}>
                        <a href="#">
                            <img src={img8} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Groceries</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Apple</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $10.00
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $12.00</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-2.00%</p>
                                <a href="#" className="btn btn-primary trending">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
