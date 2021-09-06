import "./App.css";
import { Component } from "react";
import ApiServise from "./Components/API";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Modal from "./Components/Modal/Modal";
import LoadMoreBtn from "./Components/Button/Button";

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
        if (page !== 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => this.setState({ error: "Ooops, something went wrong" }))

      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  onLoadMoreClick = () => {
    this.fetchApiService();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  onSubmit = (imageName) => {
    this.setState({
      imageName,
      page: 1,
      images: [],
    });
  };

  openBigImage = (event) => {
    this.setState({
      largeImageURL: event.target.dataset.url,
      tags: event.target.alt,
    });
    this.toggleModal();
  };

  render() {
    const { showModal, largeImageURL, tags, images } = this.state;
    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSubmit} state={this.state} />
        <ImageGallery images={images} onClick={this.openBigImage} />
        {images.length !== 0 && images.length >= 12 && (
          <LoadMoreBtn onBtnClick={this.onLoadMoreClick} />
        )}
      </div>
    );
  }
}
