import React from 'react'
import Card from './Card'
import img1 from "../../Images/newarr1.png";
import img2 from "../../Images/newarr2.png";
import img6 from "../../Images/trendingImg6.png";
import img7 from "../../Images/trendingImg7.png";
import img8 from "../../Images/trendingImg8.png";

export default function Fragrances() {
  return (
    <>
    <div className='container'>
        <div className='row'>
        <Card image={img1} category={'Fragrance'} title={'Dolce Shine Eau de'} price={'$9.27'} oldPrice={'$9.99'}discount={'-7.17%'}/>

        <Card image={img2} category={'Fragrance'} title={'Gucci Bloom Eau de'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%'}/> 

        <Card image={img6} category={'Fragrance'} title={'Calvin Klein CK One'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%'}/>

        <Card image={img7} category={'Fragrance'} title={'Chanel Coco Noir Eau De'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%'}/> 

        <Card image={img8} category={'Fragrance'} title={'Dior J adore'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%'}/> 
                          
        </div>
    </div>
    </>
  )
}
