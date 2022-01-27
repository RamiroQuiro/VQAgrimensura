import Header from "./component/Header";
import Services from "./component/Services";
import ContenedorTrabajos from "./component/ContenedorTrabajos"
import Contacto from "./component/Contacto"
import Footer from "./component/Footer"
import Carrusel from "./component/Carrusel2";



function App() {

  return (
    <div className="App" >
      <Header />
      <Services/>
      <ContenedorTrabajos />
      <Carrusel/>
      <Contacto />
      <Footer />
    </div>
  );
}


export default App;