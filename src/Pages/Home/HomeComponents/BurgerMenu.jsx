// components/BurgerMenu.jsx
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const BurgerMenu = () => {
    return (
        <Menu
            right
            className="text-white"
            burgerButtonClassName="bm-burger-button"
            burgerBarClassName="bm-burger-bars"
            crossButtonClassName="bm-cross-button"
            menuClassName="bg-base-200 p-6 text-lg"
            itemListClassName="flex flex-col gap-4"
            overlayClassName="bg-black/50"
        >
            <a href="#home" className="btn btn-ghost">Home</a>
            <a href="#projects" className="btn btn-ghost">Projects</a>
            <a href="#about" className="btn btn-ghost">About</a>
            <a href="#skills" className="btn btn-ghost">Skills</a>
            <a href="#contact" className="btn btn-ghost">Contact</a>
        </Menu>
    );
};

export default BurgerMenu;
