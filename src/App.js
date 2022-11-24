import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/helpers/Header';
import Main from './components/layout/Main';
import Footer from './components/helpers/Footer';


function App() {
  return (
    <section className="App">
    <Header />

    <Main />
    <Footer />
    </section>
  );
}

export default App;
