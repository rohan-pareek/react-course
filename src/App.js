import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element = { <AllMeetupsPage /> } />
        <Route path="/new-meetup" element = { <NewMeetupPage /> } />
        <Route path="/favorites" element = { <FavoritesPage /> } />
      </Routes>
    </div>
  );
}

export default App;
