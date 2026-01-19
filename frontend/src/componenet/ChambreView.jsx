import "./css/chmbre.css";

const ChambreView = ({
                         pageAcceuil,
                     }) => {
    return <div style={{
    }}>



        <main className="page">
            <div style={{
                height: '700px',
            }}>&nbsp;</div>
            <h2><span className="count">5</span> chambres disponibles</h2>

            <div className="cards">
                {pageAcceuil?.rooms?.map((room, index) => (
                    <div className="card" key={index}>
                        <img src="https://picsum.photos/400/250" alt="Chambre"/>

                        <div className="card-content">
                            <h3>CHAMBRE ÉTUDIANTE ({room.type})</h3>

                            <p className="location">
                                {room.capacity} Pérsonnes<br/>

                            </p>

                            <p className="available">{room?.status}</p>

                            <p className="price-label">À partir de</p>
                            <p className="price">{room?.pricePerNight}€ <span>/ mois</span></p>
                        </div>
                    </div>
                ))}


            </div>
        </main>

    </div>
}

export default ChambreView;