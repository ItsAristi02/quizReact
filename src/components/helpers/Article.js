const Article = () => {
    return (
        <article className="contenedor m-2 mx-3 ">
            <form className="" id="contact" action="" method="post">
                <h3 className="fw-semibold text-center">CLIENTES</h3>
                <fieldset>
                    <input placeholder="Nombre" type="text" tabindex="1" required autofocus />
                </fieldset>
                <fieldset>
                    <input placeholder="Documento" type="text" tabindex="2" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Correo" type="text" tabindex="3" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Dirección" type="text" tabindex="4" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Barrio" type="text" tabindex="4" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Telefono" type="text" tabindex="4" required />
                </fieldset>
                <fieldset>
                    <button className="my-3 fw-semibold " type="submit" id="contact-submit" data-submit="...Sending">Guardar</button>
                </fieldset>
            </form>

        </article>
    )
}

export default Article;