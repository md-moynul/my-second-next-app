
import Image from 'next/image';
import React from 'react';

const FoodCard = ({ food }) => {
  const { dish_name ,image_link,category} = food;
  return (
    <div className="card bg-base-100 shadow-sm p-6 relative">
      <figure className='h-50'>
      <Image src={image_link} alt={dish_name} width={200} height={200}></Image>
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">
          {dish_name}
          {
            category ?<div className="badge badge-primary absolute top-15 right-[25%]">{category}</div> : ''
          }
          
          
        </h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;