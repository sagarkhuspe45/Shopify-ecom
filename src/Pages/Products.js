import React, { useEffect, useState } from 'react'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Products() {
  const [data, setdata] = useState([])

  const getData = async () => {
    const response = await fetch('https://shivraj-chavan.github.io/api/electronics.json')
    const result = await response.json()
    setdata(result)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <h3>Products</h3>
      <div className='container'>
        <div className='row m-2'>
          {
            data.map((value) => {
              return (
                <div className='card m-3 mx-auto' style={{ width: '18rem' }}>
                  <img src={value.thumbnail} className='photo card-img-top' alt={value.title} />
                  <div className='card-body'>
                    <h5 className='re card-title'>{value.title}</h5>
                    <div>
                      <FontAwesomeIcon icon={faStar} color='gold' />
                      <FontAwesomeIcon icon={faStar} color='gold' />
                      <FontAwesomeIcon icon={faStar} color='gold' />
                      <FontAwesomeIcon icon={faStar} color='gold' />
                    </div>

                    <div className='d-flex'>
                      <p className='card-text'>{value.price}</p>
                      <a className='a btn btn-primary'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        &nbsp; Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
