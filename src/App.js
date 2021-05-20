import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/newmeetups">
          <NewMeetups />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
