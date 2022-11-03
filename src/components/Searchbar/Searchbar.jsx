import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { Header, Form, Button, Input, SpanSearch } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';
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
      return toast.error('Write keyword for search 🧐');
    }
    this.props.onSubmit(this.state.queryNew);
    this.reset();
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <SpanSearch>
              <ImSearch />
            </SpanSearch>
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
