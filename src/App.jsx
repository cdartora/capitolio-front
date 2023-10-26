import NavBar from "./components/NavBar";
import CallToAction from "./components/CallToAction";
import MovieList from "./components/MovieList";
import GoogleCalendar from "./components/GoogleCalendar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <CallToAction />
        <MovieList />
        <GoogleCalendar />
      </main>
      <Footer />
    </>
  );
}

export default App;
