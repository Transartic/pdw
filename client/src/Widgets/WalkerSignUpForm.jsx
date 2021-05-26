import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Radio,
  TextArea,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const options3 = [
  { text: 'California', value: 'CA' },
];
const options4 = [
  { text: 'Los Angeles', value: 'Los Angeles' },
];

class OwnerSignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      dog_name: '',
      address1: '',
      address2: '',
      zipcode: '',
      city: '',
      state: '',
      description: '',
      user_type: true,
      services: {
        massage: false,
        dental_cleaning: false,
        accupuncture: false,
        spa: false,
      },
      certifications: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleSpaChange = this.handleSpaChange.bind(this);
    this.handleTeethChange = this.handleTeethChange.bind(this);
    this.handleAccChange = this.handleAccChange.bind(this);
    this.handleMassageChange = this.handleMassageChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handlePost() {
    axios.post('/api/user/signup', {
      data: (this.state),
    })
      .then((response) => {
        console.log(response);
        this.props.updateToken(response.data);
      }, (error) => {
        console.log(error);
      });
  }

  handleSpaChange(e) {
    this.setState({
      services: {
        massage: this.state.services.massage,
        dental_cleaning: this.state.services.dental_cleaning,
        accupuncture: this.state.services.accupuncture,
        spa: Boolean(e.target.value),
      },
    });
  }

  handleTeethChange(e) {
    this.setState({
      services: {
        massage: this.state.services.massage,
        dental_cleaning: Boolean(e.target.value),
        accupuncture: this.state.services.accupuncture,
        spa: this.state.services.spa,
      },
    });
  }

  handleAccChange(e) {
    this.setState({
      services: {
        massage: this.state.services.massage,
        dental_cleaning: this.state.services.dental_cleaning,
        accupuncture: Boolean(e.target.value),
        spa: this.state.services.spa,
      },
    });
  }

  handleMassageChange(e) {
    this.setState({
      services: {
        massage: Boolean(e.target.value),
        dental_cleaning: this.state.services.dental_cleaning,
        accupuncture: this.state.services.accupuncture,
        spa: this.state.services.spa,
      },
    });
  }

  handleCityChange(e, { value }) {
    this.setState({
      city: value,
    });
  }

  handleStateChange(e, { value }) {
    this.setState({
      state: value,
    });
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="first_name"
            label="First Name"
            placeholder="First name"
          />
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="last_name"
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="username"
            label="Create Username"
            placeholder="Create Username"
          />
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="password"
            label="Choose Password"
            placeholder="Choose Password"
          />
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="email"
            label="email"
            placeholder="email"
          />
        </Form.Group>

        <Form.Group>

          <Form.Field
            onChange={this.handleChange}
            name="address1"
            control={Input}
            label="Street Address"
            placeholder="Street Address"
          />
          <Form.Field
            onChange={this.handleChange}
            name="address2"
            control={Input}
            label="Apt"
            placeholder="Apt."
          />
        </Form.Group>
        <Form.Group>

          <Form.Field
            onChange={this.handleStateChange}
            name="location"
            control={Select}
            label="State"
            options={options3}
            placeholder="State"
          />
          <Form.Field
            onChange={this.handleCityChange}
            control={Select}
            label="City"
            options={options4}
            placeholder="City"
          />
          <Form.Field
            onChange={this.handleChange}
            name="zipcode"
            control={Input}
            label="Zip Code"
            placeholder="Zipe Code"
          />
        </Form.Group>
        <h4>Services Offered</h4>

        <Form.Group>
          <input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="massage" onChange={this.handleMassageChange} />
          {' '}
          Dog Massage
          <input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="accupuncture" onChange={this.handleAccChange} />
          {' '}
          Dog Accupuncture
          <input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="dental_cleaning" onChange={this.handleTeethChange} />
          {' '}
          Teeth Brushing
          <input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="spa" onChange={this.handleSpaChange} />
          {' '}
          Dog Spa
        </Form.Group>

        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Link className="users" to="/UserProfile">
          <Form.Field control={Button} onClick={this.handlePost}>Submit</Form.Field>
        </Link>
      </Form>
    );
  }
}

export default OwnerSignUpForm;
