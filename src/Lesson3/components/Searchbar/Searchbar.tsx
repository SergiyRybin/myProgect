import { Component } from "react";
import fetchDataImage from "../../servises/fetchRequaest";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import s from './Searchbar.module.css'

interface IPrevState {
  images: [];
  page: number;
  query?: string;
  showModal?: boolean;
  modalImage?: undefined | string;
  loader?: boolean;
  total?: number;
  errorMesege?: boolean;
}

class Searchbar extends Component {
  state: IPrevState = {
    images: [],
    page: 1,
    query: "",
    showModal: false,
    modalImage: "",
    loader: false,
    total: 0,
    errorMesege: false,
  };

  componentDidUpdate(prevProps: any, prevState: IPrevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ loader: true });

    fetchDataImage(query, page)
      .then((images) => {
        this.setState((prevState: IPrevState) => ({
          images: [...prevState.images, ...images.hits],
          page: prevState.page + 1,
          loader: false,
          total: images.total,
          errorMesege: false,
        }));
      })
      .catch(() => this.setState({ errorMesege: true, loader: false }));
  };

  fromData = (data: string | any[]) => {
    if (data.length === 0) {
      return;
    }
    this.setState({
      images: [],
      page: 1,
      query: data,
      loader: true,
    });
  };

  openModal = (largeImageURL: string) => {
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: false,
      modalImage: "",
    });
  };

  render() {
    const { images, showModal, modalImage, loader, total, errorMesege } =
      this.state;
    return (
      <>
        <Link to="/" className={s.Lin}>
          Go Back
        </Link>
        <SearchForm onSubmit={this.fromData} />
        <ImageGallery images={images} modalOpen={this.openModal} />
        {loader && <Loader />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
        {images.length > 0 && images.length < total! && !errorMesege && (
          <Button onClick={this.fetchImages} text="Load more" />
        )}
      </>
    );
  }
}

export default Searchbar;
