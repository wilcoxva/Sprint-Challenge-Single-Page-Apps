import React from "react";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage"
import { Route } from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characterlist" component={CharacterList} />
    </main>
  );
}
