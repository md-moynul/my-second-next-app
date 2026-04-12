import Image from "next/image";


const FoodDetailsPage = async ({ params }) => {
    const { foodId } = await params

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json()
    const food = data.data;
    const { dish_name, category, alternative_names, rating,image_link } = food;

    console.log(food);





    return (
        <div className="my-15 hero">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div className='flex justify-center items-center rounded-2xl  '>
                    <Image src={image_link} alt={dish_name} width={500} height={500} ></Image>
                    {/* <img className="shadow-2xl  h-100"
                        src={image} /> */}
                </div>

                <div className='space-y-4'>
                    <div className='space-y-3'>
                        <h1 className="font-bold text-5xl">{dish_name}</h1>
                        {/* <p className='font-medium text-xl'>By : {author}</p> */}
                    </div>
                    <hr className='text-gray-300' />
                    <p className='font-medium text-xl'>{category}</p>
                    <hr className='text-gray-300' />
                    <div className='space-y-6'>
                        <p className="leading-relaxed flex ">
                            <span className="font-bold">Rating : </span>
                            <span className="line-clamp-5 text-justify">
                                {rating}
                            </span>
                        </p>

                    </div>



                </div>


            </div>
        </div>
    );
};

export default FoodDetailsPage;