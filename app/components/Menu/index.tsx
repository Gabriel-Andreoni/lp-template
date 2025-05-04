import './menu.css';
import Link from 'next/link';

export function Menu() {
    return (
        <header className="menu--container">
            <nav className="menu--nav">
                <ul className="menu--list">
                    <li className="menu--item">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="menu--item">
                        <Link href="#">Sobre Nós</Link>
                    </li>
                    <li className="menu--item">
                        <Link href="/playgrounds">Playgrounds</Link>
                    </li>
                    <li className="menu--item">
                        <Link href="#">Faça um Orçamento</Link>
                    </li>
                    <li className="menu--item">
                        <Link href="#">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}