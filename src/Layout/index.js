import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";
import NotFound from "./Components/Shared/NotFound";
import Home from "./Components/Home/Home";
import Deck from "./Components/Deck/Deck";
import Study from "./Components/Study/Study";
import CreateDeck from "./Components/Deck/CreateDeck";
import EditDeck from "./Components/Deck/EditDeck";
import AddCard from "./Components/Card/AddCard";
import EditCard from "./Components/Card/EditCard";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route exact={true} path="/decks/:deckId">
            <Deck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
