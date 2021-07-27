import './card-style.css';
import React from 'react';
export const CardComponent = ({ images, title }) => {
    return (
        <>
            <div className="card">
                <div className="img-card">
                    <img src={images.downsized_medium.url} alt={title} />
                </div>
                <p>{title}</p>
            </div>
        </>
    )
}
