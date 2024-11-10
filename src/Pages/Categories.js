import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
    return (
        <>
            <div className='container'>
                <div className='row categories'>
                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Beauty</h5>
                            <Link className="card-link" to='/Beauty'>View Products </Link>
                        </div>
                    </div>

                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Fragrances</h5>
                            <Link className="card-link" to='/Fragrances'>View Products</Link>
                        </div>
                    </div>

                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Furniture</h5>
                            <Link className="card-link" to='/Furniture'>View Products</Link>
                        </div>
                    </div>

                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Groceries</h5>
                            <Link className="card-link" to='/Groceries'>View Products</Link>
                        </div>
                    </div>

                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Laptops</h5>
                            <Link className="card-link" to='/Laptop'>View Products</Link>
                        </div>
                    </div>

                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Watches</h5>
                            <Link className="card-link" to='/Watch'>View Products</Link>
                        </div>
                    </div>

                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Smart Phones</h5>
                            <Link className="card-link" to='/Mobile'>View Products</Link>  </div>
                    </div>

                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">TV</h5>
                            <Link className="card-link" to='/Mobile'>View Products</Link>  </div>
                    </div>

                    <div className="card categories" style={{ width: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Earphones</h5>
                            <Link className="card-link" to='/Mobile'>View Products</Link>  </div>
                    </div>

                </div>
            </div>
        </>
    )
}
