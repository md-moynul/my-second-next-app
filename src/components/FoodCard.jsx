
import Image from 'next/image';

import CardButtons from './CardButtons';

const FoodCard = ({ food }) => {
  const {id, dish_name, image_link, category, rating, price } = food;
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-101  hover:opacity-100 hover:z-10 hover:shadow-blue-500 p-6">
      <figure>
        <Image src={image_link} alt={dish_name} width={200} height={200}></Image>
      </figure>
      <div className="space-y-5">
        <div className='space-x-4'>
          {/* {
            tags.map((tag, index) =>
              <div key={index} className="bg-green-100 text-green-500 badge">{tag}</div>)
          } */}
        </div>

        <h2 className="text-2xl card-title">
          {dish_name}

        </h2>
        <p className='font-medium text-xl'>Price : {price}</p>
        <div className='space-x-4'>
            <button className="btn btn-primary">Add to as Carts</button>
            <CardButtons id={id} ></CardButtons>
        </div>
        <div className="justify-between card-actions">
          <div className="font-medium text-xl">{category}</div>

          <div className="flex justify-center items-center gap-2 font-medium text-xl">{rating} </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;