import Navigation from "../components/FindFlight/Navigation";
import { Footer } from "../components/Footer/Footer";
import { PassengerForm } from "../components/FormPassenger/FormPasseger";
import { Header } from "../components/Header/Header";
function PassengerFormPage() {
  return (
    <>
      <Header />
      <Navigation />
      <PassengerForm />
      <Footer />
    </>
  );
}
export default PassengerFormPage;
