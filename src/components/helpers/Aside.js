const Aside = () => {
    return (
        <aside>
            
            <form id="formulario" action="">
                    <h1 className="titulo">PRODUCTOS</h1>
                <input className="form_item" type="text" placeholder="Nombre" />
                <input className="form_item" type="text" placeholder="Apellido" />         
                <input className="form_item" type="text" placeholder="Documento" />
                <input className="form_item" type="text" placeholder="Nota Uno" />
                <input className="form_item" type="text" placeholder="Nota Dos" />
                <input id="btnCalcular" type="submit" value="Guardar"/>
            
             </form>
        </aside>
    )
}

export default Aside;