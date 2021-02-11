import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import StorePage from "./Pages/StorePage";
import DetailsPage from "./Pages/DetailsPage";
import CartPage from "./Pages/CartPage";
import { PhoneProvider } from "./Context";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <PhoneProvider>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/store" component={StorePage} />
          <Route exact path="/store/:id" component={DetailsPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </BrowserRouter>
    </PhoneProvider>
  );
}

export default App;
