import React from "react";

class SearchBar extends React.Component {
  /* Adding state for handling/storing user input makes it controlled element */

  state = { term: "" };

  /*  WHY THIS DOESN'T WORK?
  onFormSubmit(event) {
    event.preventDefault();
    console.log(SearchBar.state.term); 
  } */

  onFormSubmit = event => {
    event.preventDefault();
    /* console.log(this.state.term);
    WHEN PASSING PROPS TO CLASS COMP WE USE THIS.PROPS..... */
    /* When this.props.onSubmit is called with this.state.term as arg. 
    then the onSubit in App comp is called which in turn calls OnSearchSubmit (refer app js) wala function!
    This is how we are passing term from child to parent comp. via callback funcs.*/
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label for="search">Enter</label>
          <input
            type="text"
            id="Search"
            /* value wali property overrides jo bhi hum likte hain */
            value={this.state.term}
            /* This is eventlistener , here we have initialized func here only , we can iitialize it separately as well , touppercase to force value in capital*/
            onChange={
              event => this.setState({ term: event.target.value.toUpperCase() })
              /*event.target.value gets the text of search bar | onChange func can be declared in beginning and given a reference here! This is a controlled comp. */
            }
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
