import React from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imagelist";

class App extends React.Component {
  state = { images: [] };

  /* Callback method 
  Async keyword allows to use async or await syntax inside func.*/
  onSearchsubmit = async term => {
    console.log(term);
    /*First arg is API url and second arg. is object for custoizing api request . Refer documentation of UNsplash API for complete details.
    Await keyword helps to wait until network reqst gets completed ! */
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchsubmit} g="h" />
        Found {this.state.images.length} images  
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

/*Axios is a third party lib. used for making network requests .
We need to make GET request for getting photos ! */
