import Imagen from "./Imagen";
const Navbar = () => {
    return (

        <ul className="d-flex justify-content-center navbar w-100">
            <li className="nav-item">
                <a className="nav-link active fw-semibold" aria-current="page">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-semibold">Productos</a>
            </li>
          <Imagen src="https://static.vecteezy.com/system/resources/previews/002/144/674/original/cannabis-in-lettering-style-with-leaf-and-gradient-logo-colourful-emblem-free-vector.jpg" />
            <li className="nav-item mx-5">
                <a className="nav-link fw-semibold">Clientes</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-semibold">Proveedores</a>
            </li>
        </ul>

    )
}

export default Navbar;