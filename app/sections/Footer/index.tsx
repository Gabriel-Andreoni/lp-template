import './footer.css';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="footer--container">
            <div className="footer--content">
                <div className="footer-content-left">
                    <h4>Nosso Endereço</h4>
                    <p className="footer-address">Av Rebolças 499 - Jardim Monte Negro - SP</p>

                    <h4>Horário de Atendimento</h4>
                    <p className="footer-address">Segunda à Sexta 07:30 às 12:30 - 13:30 às 17:30</p>

                    <ul className="footer--menu-list">
                        <li className="menu-item">
                            <Link href="/playgrounds">Playgrounds</Link>
                        </li>
                        <li className="menu-item">
                            <Link href="#">Orçamento</Link>
                        </li>
                        <li className="menu-item">
                            <Link href="#">Contato</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer--content-right">
                    <h4>Fale Conosco</h4>
                    <span className="footer-phones">
                        <h5>Telefone:</h5>
                        <h5>(19) 34225567</h5>
                    </span>
                    <span className="footer-phones">
                        <h5>WhatsApp:</h5>
                        <h5>(19) 999876578</h5>
                    </span>
                    <span className="footer-phones">
                        <h5>E-mail:</h5>
                        <h5>contato@mvplaygrounds.com</h5>
                    </span>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.3953541629!2d-46.92494058902858!3d-23.681434667112956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-PT!2sbr!4v1745540156242!5m2!1spt-PT!2sbr" allowFullScreen
                    style={{
                        width: "400px",
                        border: 0,
                        borderRadius: ".8em",
                    }}
                    ></iframe>
            </div>

        </footer>
    )
}