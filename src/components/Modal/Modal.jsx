// import PropTypes from 'prop-types';
import { Component } from 'react';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onClickEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickEscape);
  }

  onClickEscape = event => {
    if (event.target === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.onBackdropClick}>
          <img src={this.props.img} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
