import React from "react";

function HeadlineCards (){


    return(
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
        {/*Card*/}
            <div className='rounded-xl relative '>
                <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
                {/* Card Text  */}
                    <p className='text-2xl font-bold px-2 pt-4'>Sun's Out, BOGO's Out </p>
                    <p className='px-2 '>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
            {/*  Card Img  */}
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src='https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />


            </div>
            {/*Card*/}
            <div className='rounded-xl relative '>
                <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
                    {/* Card Text  */}
                    <p className='text-2xl font-bold px-2 pt-4'>New Resturants </p>
                    <p className='px-2 '>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                {/*  Card Img  */}
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src='https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />

            </div>
            {/*Card*/}
            <div className='rounded-xl relative '>
                <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
                    {/* Card Text  */}
                    <p className='text-2xl font-bold px-2 pt-4'>We Deliver Deserts Too!</p>
                    <p className='px-2 '>Tasty Treats !</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                {/*  Card Img  */}
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />

            </div>

        </div>
    )
}
export default HeadlineCards