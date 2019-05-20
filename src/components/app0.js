import React from "react";
/* importing axios */

import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  /* Callback method 
  Async keyword allows to use async or await syntax inside func.*/
  async onSearchsubmit(term) {
    console.log(term);
    /*First arg is API url and second arg. is object for custoizing api request . Refer documentation of UNsplash API for complete details.
    Await keyword helps to wait until network reqst gets completed ! */
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID 8a2b9e616eb97bd86c2bb9c83e3d118db587a2adccedb4b0713c4ff2b3b78e10"
      }
    });

    console.log(this);
    this.setstate({ images: response.data.results });
  }

  render() {
    return <SearchBar onSubmit={this.onSearchsubmit} g="h" />;
  }
}

export default App;

/*Axios is a third party lib. used for making network requests .
We need to make GET request for getting photos ! */

/*DUMPROB :- LINE 26 WALA THIS IS GIVING OUT PROPS onsubit , g ! why ? How does this contain those properties */
