import Imagen from "./Imagen"

const Cards = () => {
    return (

        <section class="container  border-top border-success mt-5">
            <section class="card">
                <Imagen src="https://imagenes.elpais.com/resizer/yLiW-Zh_App5GC3mXmnETOpQPUc=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/CX3ARYU2BHTYHK3O5K3R7GS45U.jpg" />
                <h4>Esencia</h4>
                <p>El aceite de cannabidiol recetado se considera un medicamento anticonvulsivo eficaz.</p>
                <a className="text-success">Leer más</a>
            </section>

            <section class="card">
                <Imagen src="https://d2go4np9frzvva.cloudfront.net/s3fs-public/WhatsApp-Image-2021-10-01-at-11.38.37-AM.jpeg" />
                <h4>Gomas de CBD</h4>
                <p>El CBD se deriva del cáñamo, que contiene una cantidad muy pequeña de THC.</p>
                <a className="text-success">Leer más</a>
            </section>

            <section class="card">
                <Imagen src="https://catacoa.com/uploads/posts/53/es/img-Primera-semilla-de-marihuana.jpg" />
                <h4>Semillas</h4>
                <p>Las semillas de marihuana regulares fotodependientes, desarrollan plantas de marihuana que pueden ser macho o hembra.</p>
                <a className="text-success">Leer más</a>
            </section>

            <section class="card">
                <Imagen src="https://www.infobae.com/new-resizer/NVEQ-3hTQWLYElRyC3kte9gWxDs=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/08155013/cerveza-marihuana.jpg" />
                <h4>Cerveza</h4>
                <p>La cerveza de marihuana es una mezcla entre cervezas sin alcohol y THC o CBD de la cannabis.</p>
                <a className="text-success">Leer más</a>
            </section>

        </section>
    )
}

export default Cards;