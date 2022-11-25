import Imagen from "./Imagen"

const Galeria = () => {
    return (
        <section  className="carousel slide" data-bs-ride="false">
            <section className="carousel-inner">
                <section className="carousel-item active">
                    <Imagen src="https://www.mensjournal.com/wp-content/uploads/2017/10/Weed.jpg?quality=86&strip=all" className="d-block w-100" alt="..." />
                    <section className="carousel-caption d-none d-md-block">
                        <p className="fw-semibold fst-italic ">LEGAL MARIJUANA ONLINE SHOP</p>
                        <h1 className="fw-semibold">MARIA SUCULENTAS</h1>
                        <p className="fst-italic fw-semibold fs-6">Buy marijuana high quality from ilegal marijuana online shop. we deliver 
                        recreational with express delivery and standard delivery, shealth and private for your medical needs.</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Galeria;