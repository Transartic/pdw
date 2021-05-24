import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react';


import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const options2 = [
  { text: '30 Min', value: '30' },
  { text: '1 Hour', value: '1' },
  { text: '1 Hr 30 Min', value: '130' },
  { text: '2 Hour', value: '2' },
];
const options3 = [
  { text: 'Califonia', value: 'California' },
];
const options4 = [
  { text: 'Los Angeles', value: 'Los Angeles' },
];
const options5 = [
  { text: '7:00am', value: '7:00am' },
  { text: '7:30am', value: '7:30am' },
  { text: '8:00am', value: '8:00am' },
  { text: '8:30am', value: '8:30am' },
  { text: '9:00am', value: '9:00am' },
  { text: '9:30am', value: '9:30am' },
  { text: '10:00am', value: '10:00am' },
  { text: '10:30am', value: '10:30am' },
  { text: '11:00am', value: '11:00am' },
  { text: '11:30am', value: '11:30am' },
  { text: '12:00pm', value: '12:00pm' },
  { text: '12:30pm', value: '12:30pm' },
  { text: '1:00pm', value: '1:00pm' },
  { text: '1:30pm', value: '1:30pm' },
  { text: '2:00pm', value: '2:00pm' },
  { text: '2:30pm', value: '2:30pm' },
  { text: '3:00pm', value: '3:00pm' },
  { text: '3:30pm', value: '3:30pm' },
  { text: '4:00pm', value: '4:00pm' },
  { text: '4:30pm', value: '4:30pm' },
  { text: '5:00pm', value: '5:00pm' },
  { text: '5:30pm', value: '5:30pm' },
  { text: '6:00pm', value: '6:00pm' },
  { text: '6:30pm', value: '6:30pm' },
  { text: '7:00pm', value: '7:00pm' },
  { text: '7:30pm', value: '7:30pm' },
  { text: '8:00pm', value: '8:00pm' },
  { text: '8:30pm', value: '8:30pm' },
  { text: '9:00pm', value: '9:00pm' },
  { text: '9:30pm', value: '9:30pm' },
  { text: '10:00pm', value: '10:00pm' },

];

class PostBidForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dogName: '',
      duration: '',
      streetAddress: '',
      apt: '',
      zipeCode: '',
      dogMassage: false,
      dogAccupuncture: false,
      teethBrushing: false,
      dogSpa: false,
      date: '',
      price: '',
      city: '',
      state: '',
      time: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleWalkChange = this.handleWalkChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost() {
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleWalkChange(e, { value }) {
    this.setState({
      duration: value,
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

  handleTimeChange(e, { value }) {
    this.setState({
      time: value,
    });
  }

  render() {
    // console.log('formState', this.state);
    // const { value } = this.state;

    return (
      <Form>

        <Form.Group>
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="firstName"
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="lastName"
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            onChange={this.handleChange}
            control={Input}
            name="dogName"
            label="Dog Name"
            placeholder="Dog Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Field
            onChange={this.handleWalkChange}
            control={Select}
            name="duration"
            label="Walk"
            options={options2}
            placeholder="Duration Of Walk"
          />
        </Form.Group>
        <Form.Group>

          <Form.Field
            onChange={this.handleChange}
            name="streetAddress"
            control={Input}
            label="Street Address"
            placeholder="Street Address"
          />
          <Form.Field
            onChange={this.handleChange}
            name="apt"
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
            name="zipeCode"
            control={Input}
            label="Zip Code"
            placeholder="Zipe Code"
          />
        </Form.Group>

        <h4>Services</h4>


        <Form.Group>

          <input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="dogMassage" onChange={this.handleChange} />
          {' '}
          Dog Massage
          <input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="dogAccupuncture" onChange={this.handleChange} />
          {' '}
          Dog Accupuncture
          <input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="teethBrushing" onChange={this.handleChange} />
          {' '}
          Teeth Brushing
          <input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="dogSpa" onChange={this.handleChange} />
          {' '}
          Dog Spa

        </Form.Group>
        <Form.Group>
          <Form.Field


            onChange={this.handleChange}
            name="date"
            control={Input}
            label="Date"
            placeholder="MM/DD"
          />

          <Form.Field
            onChange={this.handleTimeChange}
            control={Select}
            label="Time"
            options={options5}
            placeholder="Time"
          />
        </Form.Group>
        <Form.Group>

          <Form.Field
            onChange={this.handleChange}
            name="price"
            control={Input}
            label="Price"
            placeholder="Initial Price"
          />
        </Form.Group>

        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button} onClick={this.handlePost}>Submit</Form.Field>
      </Form>
    );
  }
}

export default PostBidForm;
