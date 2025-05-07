import './clients.css';
import Image from 'next/image';

import logo1 from './images/mv.png';
import logo2 from './images/rm.png';
import logo3 from './images/valverde.png';

const clients = [
    { id: 1, src: logo1, alt: 'Logo MV' },
    { id: 2, src: logo2, alt: 'Logo RM' },
    { id: 3, src: logo3, alt: 'Logo Valverde' },
];

export function Clients() {
    return (
        <section className="clients--container">
            <div className="clients--header">
                <h2 className={`clients--title`}>Nossos Clientes</h2>
                <p>Onde Nossos Playgrounds Fazem a Diferença.</p>
            </div>
            <div className="clients--list">
                <ul className="clients--logos">
                    {clients.map((client) => (
                        <li key={client.id} className="client--logo">
                            <Image src={client.src} alt={client.alt} width={350} height={110} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}