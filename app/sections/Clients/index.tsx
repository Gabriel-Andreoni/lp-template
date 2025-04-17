import './clients.css';

export function Clients() {
    return (
        <section className="clients--container">
            <div className="clients--header">
                <h2 className="clients--title">Our Clients</h2>
                <p>We have worked with a variety of clients, from startups to Fortune 500 companies.</p>
            </div>
            <div className="clients--logos">
                <img src="/assets/logos/client1.png" alt="Client 1" />
                <img src="/assets/logos/client2.png" alt="Client 2" />
                <img src="/assets/logos/client3.png" alt="Client 3" />
                <img src="/assets/logos/client4.png" alt="Client 4" />
            </div>
        </section>
    );
}