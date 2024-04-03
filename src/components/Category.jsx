import React , {useState} from "react";
import {categories} from "../data/Data.js";

function Category (){

    return (

        <div className='max-w-[1640px] m-auto py-12 px-4'>
       <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/*Category*/}

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((item , index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg flex justify-between items-center'>
                    <h2 className='px-4 font-bold sm:text-xl'>
                        {item.name}
                    </h2>
                    <img className='object-cover w-20' src={item.image} alt={item.name}/>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Category