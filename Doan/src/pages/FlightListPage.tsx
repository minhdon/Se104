import { PageTransition } from "../Animation/PageTransition";

import { FlightList } from "../components/FlightList/FlightList";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
function FlightListPage() {
  return (
    <PageTransition>
      <Header />

      <FlightList />
      <Footer />
    </PageTransition>
  );
}
export default FlightListPage;
