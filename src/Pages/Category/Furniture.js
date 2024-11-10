import React from 'react'
import Card from './Card'
import img3 from "../../Images/newarr3.png";
import img4 from "../../Images/furniture1.png";
import img5 from "../../Images/newarr4.png";
import img6 from "../../Images/newarr5.png";
import img7 from "../../Images/newarr6.png";

export default function Furniture() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <Card image={img3} category={'Furniture'} title={'Annibale Colombo Bed'} price={'$1899.99'} oldPrice={'$12.0'} discount={'-2.0%'} />

                    <Card image={img4} category={'Furniture'} title={'Annibale Colombo Sofa'} price={'$2036.49'} oldPrice={'$12.0'} discount={'-2%'} />

                    <Card image={img5} category={'Furniture'} title={'Bedside Table African Cherry'} price={'$271.25'} oldPrice={'$29.9'} discount={'-9.58%'} />

                    <Card image={img6} category={'Furniture'} title={'Knoll Saarinen Executive Conference Chair'} price={'$423.84'} oldPrice={'$499.9'} discount={'-15%'} />

                    <Card image={img7} category={'Furniture'} title={'Wooden Bathroom Sink With Mirror'} price={'$710.23'} oldPrice={'$799'} discount={'-11.2%'} />

                </div>

            </div>
        </>
    )
}
