import Navigation from "../components/FindFlight/Navigation";
import { FlightList } from "../components/FlightList/FlightList";
import { Header } from "../components/Header/Header";
function FlightListPage() {
  return (
    <>
      <Header />
      <Navigation />
      <FlightList />
    </>
  );
}
export default FlightListPage;
