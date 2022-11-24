import Imagen from "./Imagen";

const Footer = () => {
    return (
        <footer className="footer  text-align-center mt-5 w-100">
            <ul className="list-inline">
                <li className="list-inline-item p-2 footer-menu text-white fst-italic fw-semibold" >Inicio</li>
                <li className="list-inline-item p-2 footer-menu text-white fst-italic" >Servicios</li>
                <li className="list-inline-item p-2 footer-menu text-white fst-italic" >Sobre Nosotros</li>
                <li className="list-inline-item p-2 footer-menu text-white fst-italic" >Contacto</li>
            </ul>

            <ul className="list-inline icons">
                <li className="list-inline-item p-2 iconsRedes"><a href="#"><Imagen src="https://arquitecturadecoraciones.com/wp-content/uploads/2019/12/Instagram-Logo-0.png" /></a></li>
                <li className="list-inline-item p-2 iconsRedes"><a href="#"><Imagen src="https://www.unipile.com/wp-content/uploads/2022/06/logo-facebook-blanc.png" /></a></li>
                <li className="list-inline-item p-2 iconsRedes"><a href="#"><Imagen src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/10/whatsapp-logo-png-white.png?fit=512%2C512&ssl=1" /></a></li>
                <li className="list-inline-item p-2 iconsRedes"><a href="#"><Imagen src="https://pngimg.com/uploads/twitter/twitter_PNG15.png" /></a></li>
            </ul>

            <p className="fst-italic text-white copy ">&copy; Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer;