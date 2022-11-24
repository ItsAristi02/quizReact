import Article from "../helpers/Article";
import Aside from "../helpers/Aside";
import Galeria from "../helpers/Galeria";
import Section from "../helpers/Section";

const Main = () =>{
    return(
        <main className="w-100 main">
          <Aside />
          <Article />
          <Section />

        </main>
    )
}

export default Main;