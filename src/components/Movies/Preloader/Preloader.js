import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    const preloader = `preloader${props.load ? '_loaded' : ''}`   
    return (
        <div className={preloader}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
