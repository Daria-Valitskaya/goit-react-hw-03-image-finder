import "./App.css";
import { Component } from "react";
import ApiServise from "./Components/API";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    ApiServise("cat", 1)
      .then((images) => this.setState({ images }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    return (
      <div className="App">
        {this.state.loading && <div>Zagruzhaem</div>}
        {this.state.images && <div> krasivoe </div>}
      </div>
    );
  }
}
