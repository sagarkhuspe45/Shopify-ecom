import React from 'react'
import imgbanner from '../Images/banner.jpg'

export default function Banner() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 p-0">
                                <img src={imgbanner} className="img-fluid" alt="..." />
                            </div>
                            <div className="col-md-6 col-lg-6 p-0">
                                <div className="card-body banner">
                                    <h2 className="card-title banner">Don't miss the offer <br /> Grab it Now</h2>
                                    <button>Show Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
