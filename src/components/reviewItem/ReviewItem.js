import React from 'react';


const ReviewItem = (props) => {
    const {name, quantity, key} =props.product;
    const {HandleRemove} =props;
    return (
        <div className="product">
           <div>
           <h3>{name}</h3>
            <p>Quantity : {quantity}</p>
            <button onClick={()=>HandleRemove(key)}
             className='btn-regular'>Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;