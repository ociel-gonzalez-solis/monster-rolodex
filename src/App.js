import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/serach-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // string: 'Hola, es mi primer curso de react'
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search for monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
