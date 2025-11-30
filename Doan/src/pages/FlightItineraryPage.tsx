import { PageTransition } from "../Animation/PageTransition";
import FlightItinerary from "../components/FlightItinerary/FlightItinerary";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

function FlightItineraryPage() {
  return (
    <PageTransition>
      <Header />
      <FlightItinerary />
      <Footer />
    </PageTransition>
  );
}
export default FlightItineraryPage;
