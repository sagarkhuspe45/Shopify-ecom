import React from 'react'
import Card from './Card'
import img8 from "../../Images/newarr7.png";

export default function Groceries() {
  return (
    <>
    <div className='container'>
        <div className='row'>
        <Card image={img8} category={'Groceries'} title={'Apple'} price={'$10.00'} oldPrice={'$12.0'}discount={'-2.00%'}/> 
                          
        </div>
    </div>
    </>
  )
}
