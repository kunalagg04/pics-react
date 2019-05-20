import React from "react";

class SearchBar extends React.Component {
  /* Event Listensers ALT SYNTAX */
  onInputChange(event) {
    CONSOLE.LOG(
      event.target.value
    ); /* It prints out value of inpit everytime it changes */
  }

  render() {
    <div>
      <form>
        <label for="search">Enter</label>
        <input type="text" id="Search" /*onChange={this.onInputChange} */ />
      </form>
    </div>;
  }
}

export default SearchBar;
