import React from 'react'
import img1 from '../../Images/trendingImg1.png'
import img2 from '../../Images/trendingImg2.png'
import img3 from '../../Images/trendingImg3.png'
import img4 from '../../Images/trendingImg4.png'
import img5 from '../../Images/trendingImg5.png'
import Card from './Card'

export default function Beauty() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <Card image={img1} category={'Beauty'} title={'Essence Mascara Lash Princess'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%'} />

                    <Card image={img2} category={'Beauty'} title={'Eyeshadow Palette with Mirror'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%'} />

                    <Card image={img3} category={'Beauty'} title={'Powder Canister'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%'} />

                    <Card image={img4} category={'Beauty'} title={'Red Lipstick'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%%'} />

                    <Card image={img5} category={'Beauty'} title={'Red Nail Polish'} price={'$9.27'} oldPrice={'$9.99'} discount={'-7.17%%'} />

                </div>

            </div>
        </>
    )
}
