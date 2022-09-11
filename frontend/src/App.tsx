import Header from "./componentes/header";
import NotifyButton from "./componentes/notify-button";
import SalesCard from "./componentes/salescard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer />
      <main>
        <Header />
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
