import './App.css'
import { ThemeProvider } from '@emotion/react';
import { StandardTheme } from './themes/StandardTheme';
import BookingForm from './components/booking-form/BookingForm';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import PainelRide from './components/painel-ride/PainelRide';
import Form from './components/form/Form';

function App() {
  return (
    <ThemeProvider theme={StandardTheme}>
      <header>
        <Navbar />
      </header>
      <section>
        <BookingForm />
        <PainelRide />
        <Form />
      </section>
      <footer>
        <Footer />
      </footer>
      </ThemeProvider>
  );
}

export default App
