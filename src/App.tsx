import React from "react";
import { Store } from "./Store";
import { Link } from '@reach/router'


export default function App(props:any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div style={{ background: "red" }}>
          <h1>Rick And Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favorite(s): {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}
