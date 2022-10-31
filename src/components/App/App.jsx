import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
// import { Loader } from '../Loader/Loader';
// import { Button } from '../Button/Button';
// import { Modal } from '../Modal/Modal';
import { Wrapper } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

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
        <ImageGallery imageName={this.state.imageName} />
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
