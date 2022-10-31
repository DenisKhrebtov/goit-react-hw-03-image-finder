import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetch } from '../API/api';
// import { Loader } from '../Loader/Loader';
// import { Button } from '../Button/Button';
// import { Modal } from '../Modal/Modal';
import { Wrapper } from './App.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    total: 0,
    loading: false,
  };

  handleFormSubmit = queryNew => {
    this.setState({ query: queryNew });
  };

  createGallery = async (query, page) => {
    try {
      this.setState({ loading: true });
      const data = await fetch(query, page);
      if (!data.totalHits) {
        return toast.error('Ничего не найдено');
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.createGallery(this.state.query, this.state.page);
    }
  }

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {/* <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader />
        <Button />
        {showModal && <Modal />} */}
        <ImageGallery images={this.state.images} />
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Wrapper>
    );
  }
}
