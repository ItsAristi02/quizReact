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
          <Imagen src="https://o.remove.bg/downloads/07945ed9-b21b-4948-8cfb-4dd52a14ade3/eee-removebg-preview.png" />
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