import Imagen from "./Imagen"

const Galeria = () => {
    return (
        <section  className="carousel slide" data-bs-ride="false">
            <section className="carousel-inner">
                <section className="carousel-item active">
                    <Imagen src="https://www.mensjournal.com/wp-content/uploads/2017/10/Weed.jpg?quality=86&strip=all" className="d-block w-100" alt="..." />
                    <section className="carousel-caption d-none d-md-block">
                        <h5>Maria Suculentas</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Galeria;