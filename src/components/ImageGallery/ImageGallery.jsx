import { Component } from 'react';
import { Item } from './ImageGallery.styled';

const API_KEY = '30053223-4606077d2ff36cbc858d0fd80';
export class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.image !== this.props.imageName) {
      // this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(image => this.setState({ image }));
      // .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <Item>
        <li></li>
      </Item>
    );
  }
}
