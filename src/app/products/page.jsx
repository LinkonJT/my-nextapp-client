import React from 'react';
import Wallpapers from '../components/Wallpapers';

const Products = () => {
    return (
        <div className="w-10/12 mx-auto">
            <h1 className='text-center text-amber-400 font-bold text-lg md:text-xl'>Wallpaper Collections</h1>
            <Wallpapers></Wallpapers>
        </div>
    );
};

export default Products;