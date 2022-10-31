// import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { Header, Form, Button, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    queryNew: '',
  };

  handleNameChange = event => {
    this.setState({ queryNew: event.currentTarget.value.toLowerCase() });
  };
  reset = () => {
    this.setState({ queryNew: '' });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.queryNew) {
      return toast.error('Введите ключевое слово поиска.');
    }
    this.props.onSubmit(this.state.queryNew);
    this.reset();
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <span>Search</span>
          </Button>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.queryNew}
            onChange={this.handleNameChange}
          />
        </Form>
      </Header>
    );
  }
}
