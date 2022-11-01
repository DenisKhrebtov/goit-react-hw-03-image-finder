import { Component } from 'react';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  changeModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;
    return (
      <>
        <li>
          <img src={webformatURL} alt={tags} onClick={this.changeModal} />
        </li>
        {this.state.showModal && (
          <Modal
            img={largeImageURL}
            alt={tags}
            onClose={() => this.changeModal()}
          />
        )}
      </>
    );
  }
}
