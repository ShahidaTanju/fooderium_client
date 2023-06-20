import React from 'react';

const MealsCard = ({ category }) => {

    const { strCategory, strCategoryDescription, strCategoryThumb, _id } = category;

    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={strCategoryThumb} alt="Shoes" /></figure>
            <div className="card-body justify-between">
                <h2 className="card-title">{strCategory}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Buy Now</button>
                    <button className="btn btn-sm">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default MealsCard;