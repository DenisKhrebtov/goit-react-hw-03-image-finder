import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetch } from '../API/api';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
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
      this.setState({ loading: true, images: [] });
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

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      this.createGallery(query, page);
    }
  }

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <Loader />}

        {/* <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        

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
        {this.state.total > this.state.images.length && (
          <Button onLoadMore={this.loadMore} />
        )}
      </Wrapper>
    );
  }
}
