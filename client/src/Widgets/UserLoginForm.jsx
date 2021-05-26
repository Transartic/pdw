import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class OwnerSignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost() {
    axios.post('/api/login/', {
      data: (this.state),
    })
      .then((response) => {
        console.log(response)
        this.props.updateToken(response.data.accessToken);
      }, (error) => {
        console.log(error);
      })
      .catch(() => {});
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="username"
            label="Enter Username"
            placeholder="Enter Username"
          />
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="password"
            label="Enter Password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Form.Field control={Button} onClick={this.handlePost}>Submit</Form.Field>
      </Form>
    );
  }
}

export default OwnerSignUpForm;
