import "./App.css";
import { Component } from "react";
import ApiServise from "./Components/API";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    imageName: "",
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;
    if (prevState.imageName !== imageName) {
      this.setState({ isLoading: true });
      ApiServise(imageName, page)
        .then((images) => {
          this.setState((prevState) => ({
            images: [...prevState.images, ...images],
            page: prevState.page + 1,
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  onOpenModal = () => {
    console.log(this.state);
  };
  onSubmit = (imageName) => {
    this.setState({ imageName });
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} state={this.state} />
        <ImageGallery
          images={this.state.images}
          onOpenModal={this.onOpenModal}
        />
      </div>
    );
  }
}
