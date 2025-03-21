'use client';

import { useState } from "react";
import './menu.css'
import Image from "next/image";
import MenuIcon from './img/menu.png';
import CloseIcon from './img/close.png';


export function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen);

    return (
        <header className="menu--container">
            <Image
                src={isOpen ? CloseIcon : MenuIcon}
                alt={isOpen ? 'ícone de fechar o menu' : 'ícone de abrir o menu'}
                onClick={() => setIsOpen(prevState => !prevState)}
            />

            <nav className={`menu--nav ${isOpen ? 'menu--nav-open' : 'menu--nav-close'}`}>
                <ul className="menu--list">
                    <li className="menu--item">Home</li>
                    <li className="menu--item">Sobre Nós</li>
                    <li className="menu--item">Playground</li>
                    <li className="menu--item">Faça um Orçamento</li>
                    <li className="menu--item">Contato</li>
                </ul>
            </nav>
        </header>
    )
}