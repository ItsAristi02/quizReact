import Imagen from "./Imagen"

const Cards = ()=>{
    return(
        <section class="container">
       
        <section class="card">
            <Imagen src="img/img1.jpg" />
            <h4>Naturaleza</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
            <a href="#">Leer más</a>
        </section>
        
        <section class="card">
            <Imagen src="img/img1.jpg" />
            <h4>Comida</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
            <a href="#">Leer más</a>
        </section>
        
        <section class="card">
        <Imagen src="img/img1.jpg" />
            <h4>Tecnología</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
            <a href="#">Leer más</a>
        </section>
        
    </section>
    )
}

export default Cards;