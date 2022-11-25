const Aside = () => {
    return (
        <aside className="contenedor m-2 mx-3">
            <form className="" id="contact" action="" method="post">
                <h3 className="fw-semibold text-center">PRODUCTOS</h3>
                <fieldset>
                    <input placeholder="Nombre" type="text" tabindex="1" required autofocus />
                </fieldset>
                <fieldset>
                    <input placeholder="Sexo" type="text" tabindex="2" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Referencia" type="text" abindex="3" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Tamaño" type="text" abindex="4" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Cantidad" type="text" abindex="5" required />
                </fieldset>
                <fieldset>
                    <textarea placeholder="Descripción...." tabindex="6" required></textarea>
                </fieldset>
                <fieldset>
                        <button className="my-3 fw-semibold " type="submit" id="contact-submit" data-submit="...Sending">Guardar</button>
                </fieldset>
            </form>
        </aside>
    )
}

export default Aside;