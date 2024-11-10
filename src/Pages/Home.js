import React from 'react'
import Header from '../Component/Header'
import Services from '../Component/Services'
import Trending from '../Component/Trending'
import Banner from '../Component/Banner'
import Newarrivals from '../Component/Newarrivals'

export default function Home() {
  return (
    <>
    <div className="container-fluid">
        <div className="row trending">
          <Header/>
        </div>
    </div>
    <Services/>
    <div className="container">
        <div className="row trending">
          <h1 className='fs-1'>Trending Products</h1>
          <Trending/> &nbsp;
          <Banner/> &nbsp;
          <h1 className='fs-1'>New Arrivals</h1>
          <Newarrivals/>
        </div>
      </div>

    </>
  )
}
