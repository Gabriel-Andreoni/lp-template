import './menu.css'

export function Menu() {
    return (
        <header className="menu--container">
            <nav className="menu--nav">
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