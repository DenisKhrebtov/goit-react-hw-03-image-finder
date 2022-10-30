// import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { Header, Form, Button, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.error('Введите название поиска.');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <span>Search</span>
          </Button>
          <Input
            // type="text"
            // autocomplete="off"
            // autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </Form>
      </Header>
    );
  }
}
