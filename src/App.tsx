import './App.css'
import { ThemeProvider } from '@emotion/react'
import { StandardTheme } from './themes/StandardTheme'
import BookingForm from './components/booking-form/BookingForm'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import PainelRide from './components/painel-ride/PainelRide'
import Forms from './components/form/Forms'

function App() {
  return (
    <ThemeProvider theme={StandardTheme}>
      <header>
        <Navbar />
      </header>
      <section>
        <BookingForm />
        <PainelRide />
        <Forms />
      </section>
      <footer>
        <Footer />
      </footer>
      </ThemeProvider>
  );
}

export default App
