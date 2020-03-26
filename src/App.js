import React, {useState, useEffect} from 'react';

import './App.css';
import ReactDom from "react-dom"
import Form from "./Form";
import Buddies from "./Buddies";


function App() {



  const [buddies, setBuddies] = useState ([

    {
      name: "Nba Cancelled",
      email: "Nbacancelled@gmail.com",
      role:  "Basketball"
    },
    {
      name: "Nfl Cancelled",
      email: "Nflcancelled@gmail.com",
      role: "Football"


    },

    {
      name: "Mlb Cancelled",
      email: "Mlbcancelled@gmail.com",
      role: "Baseball"

    }
  ])

  const addNewBuddie = buddie => {
    setBuddies ([...buddies, buddie])
  }
  const buddieToEdit = () => {


  }


  return (



    <div className="App">
      <h1> Sports Buddies</h1>
      <Form addNewBuddie={addNewBuddie} />
      <Buddies buddiesList={buddies} />

    </div>
  );
}

export default App;
