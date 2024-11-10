import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../Images/trendingImg1.png";
import img2 from "../Images/trendingImg2.png";
import img3 from "../Images/trendingImg3.png";
import img4 from "../Images/trendingImg4.png";
import img5 from "../Images/trendingImg5.png";
import img6 from "../Images/trendingImg6.png";
import img7 from "../Images/trendingImg7.png";
import img8 from "../Images/trendingImg8.png";

export default function Trending() {
    return (
        <>
            <div className="container">
                <div className="row trending d-flex justify-content-center">
                    <div className="card trendingProducts" style={{ width: "18rem"}}>
                        <a href="#">
                            <img src={img1} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h6>Beauty</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Essence Mascara Lash Princess</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $9.27
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $9.99</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-7.17%</p>
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
                            <h6>Beauty</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Eyeshadow Palette with Mirror</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $9.27
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $9.99</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-7.17%</p>
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
                            <h6>Beauty</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Powder Canister</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $9.27{" "}
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $9.99</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-7.17%</p>
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
                            <h6>Beauty</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Red Lipstick</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $9.27
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $9.99</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-7.17%</p>
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
                            <h6>Beauty</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Red Nail Polish</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $9.27
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $9.99</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-7.17%</p>
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
                            <h6>Fragrances</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Calvin Klein CK One</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $9.27
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $9.99</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-7.17%</p>
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
                            <h6>Fragrances</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Chanel Coco Noir Eau De</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $9.27
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $9.99</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-7.17%</p>
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
                            <h6>Fragrances</h6>
                            <a href="#" style={{ textDecoration: "none", color: "black" }}>
                                <h5 className="card-title">Dior J'adore</h5>
                            </a>
                            <div className="icon trending">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="card-text trending" style={{ margin: "0px" }}>
                                $9.27{" "}
                            </p>
                            <p className="card-text" style={{ margin: "0px" }}>
                                <del> $9.99</del>
                            </p>
                            <div className="card-text price-button d-flex">
                                <p className="card-text price">-7.17%</p>
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
