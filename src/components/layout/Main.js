import Article from "../helpers/Article";
import Aside from "../helpers/Aside";
import Section from "../helpers/Section";
import Cards from "../helpers/Cards";
import Jumbo from "../helpers/Jumbo";


const Main = () => {
  return (
    <main className="w-100 main ">

      <section className="d-flex">
        <Cards />
      </section>
      <section className="bg bg-success ">
        <Jumbo />
      </section>
      <section className="d-flex mt-2 justify-content-around mt-5">
        <Aside />
        <Article />
        <Section />
      </section>


    </main>
  )
}

export default Main;