import './App.css'
import BookingForm from './components/booking-form/BookingForm';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <BookingForm />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App
