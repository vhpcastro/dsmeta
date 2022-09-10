import Header from "./componentes/header";
import NotifyButton from "./componentes/notify-button";
import SalesCard from "./componentes/salescard";

function App() {

  return (
    <>
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
