import React from 'react';

function Hero (){



    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>

                {/*{Middle Banner}*/}

                <div className='text-right absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    بهترین <span className='text-orange-500'>غذا ها</span>
                </h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    <span className='text-orange-500'> همراه با </span>ارسال
                </h1>
            </div>

            <img className='w-full max-h-[500px] object-cover ' src='https://images.pexels.com/photos/1563045/pexels-photo-1563045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>

        </div>
        </div>
    )
}


export default Hero