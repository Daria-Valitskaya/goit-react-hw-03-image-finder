import "./App.css";
import { Component } from "react";
import ApiServise from "./Components/API";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Modal from "./Components/Modal/Modal";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    imageName: "",
    page: 1,
    error: null,
    showModal: false,
    largeImageURL: "",
    tags: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;
    if (prevState.imageName !== imageName) {
      this.fetchApiService(imageName, page);
    }
  }

  fetchApiService = () => {
    const { imageName, page } = this.state;
    this.setState({ isLoading: true });
    ApiServise(imageName, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error: "Ooops, something went wrong" }))

      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  // onOpenModal = () => {
  //   console.log(this.state);
  // };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  onSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className="App">
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImageURL} alt={this.state.tags} />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSubmit} state={this.state} />
        <ImageGallery images={this.state.images} onClick={this.toggleModal} />
      </div>
    );
  }
}
