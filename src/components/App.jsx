import React from "react";
import Card from "./Card";
import contacts from "../contacts"; //to get access to the contacts constant

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={
          contacts[0].name
        } /*access contacts list using {} because JS code*/
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={
          contacts[1].name
        } /*access contacts list using {} because JS code*/
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={
          contacts[2].name
        } /*access contacts list using {} because JS code*/
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
