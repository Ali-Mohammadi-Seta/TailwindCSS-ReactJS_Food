import React from "react";
import { useState } from "react";
import { data } from "../data/Data.js";

function Food() {
  const[foods,setFoods]=useState(data)

    //Filter Category

    function FilterType (category){
      setFoods(data.filter((item)=>{
          return item.category === category}))}

    //Filter Price

    function FilterPrice (price){
      setFoods(data.filter((item)=>{
          return item.price === price}))}


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items...</h1>

      {/*  Filter  */}

      <div className='flex flex-col lg:flex-row justify-between '>

        {/*  Filter Type  */}

        <div className='font-bold text-gray-700'>
            <p>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">All</button>
                <button onClick={()=> FilterType('burger')} className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">Burgers</button>
                <button onClick={()=> FilterType('chicken')} className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">Chicken</button>
                <button onClick={()=> FilterType('pizza')} className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">Pizza</button>
                <button onClick={()=> FilterType('salad')} className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">Salad</button>
            </div>
        </div>

          {/*  Filter Price  */}
          <div className='font-bold text-gray-700'>
              <p>Filter Price</p>
              <div className='flex justify-between max-w-[390px] w-full'>
                  <button onClick={()=> FilterPrice('$')}  className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">$</button>
                  <button onClick={()=> FilterPrice('$$')}  className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">$$</button>
                  <button onClick={()=> FilterPrice('$$$')} className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">$$$</button>
                  <button onClick={()=> FilterPrice('$$$$')}  className="text-oramge-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1">$$$$</button>
              </div>
          </div>
        </div>

        {/*Display Food*/}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {foods.map((item , index )=> (
                <div key={index} className='rounded-lg border shadow-lg hover:scale-105 duration-300'>
                     <img src={item.image} alt={item.name}
                     className='w-full h-[200px] object-cover rounded-t-lg'
                     />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-600 text-white rounded-full p-1 '>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}

        </div>

      </div>

  );
}
export default Food;
