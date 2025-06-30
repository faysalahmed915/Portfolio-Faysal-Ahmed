import React from 'react';
import BurgerMenu from './BurgerMenu';
import MyPlanet from './MyPlanet';
// import BurgerMenu from 'react-burger-menu';
// import { MyPlanet } from './MyPlanet';

const Banner = () => {
    return (
        <div>
            Banner

            <div className="relative w-[200px] h-[200px]">
                <div className="absolute top-0 left-1/2 w-12 h-12 bg-pink-500 rounded-full animate-spin-slow origin-bottom">wow</div>
                <div className="w-24 h-24 bg-cyan-500 rounded-full mx-auto mt-8">No</div>
            </div>
            {/* <MyPlanet></MyPlanet> */}

            {/* <BurgerMenu></BurgerMenu> */}
        </div>
    );
};

export default Banner;