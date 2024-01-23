import './App.css'
import BookingForm from './components/booking-form/BookingForm';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import PainelRide from './components/painel-ride/PainelRide';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <BookingForm />
        <PainelRide />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App
