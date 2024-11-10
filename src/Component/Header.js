import React from 'react'
import img1 from "../Images/hero.png"

export default function Header() {
    return (
        <>
            <div className='container-fluid main-header'>
                <div className='container'>
                    <div class="d-flex header">
                        <div class="p-2 flex-fill info" style={{ textAlign: 'left' }}>
                            <p>Starting At $999</p>

                            <h1>The Best NoteBook<br /> Collection 2024</h1>
                            <h4>Exclusive offer <span>-10%</span> off this week</h4>
                            <button className='header-button'>Shop Now</button>
                        </div>

                        <div class="p-2 flex-fill image">
                            <img class="img-fluid img1" src={img1} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
