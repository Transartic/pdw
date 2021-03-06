import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  TextArea,
  Rating,
} from 'semantic-ui-react';
import axios from 'axios'

class ReviewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstName: '',
      // lastName: '',
      review: '',
      rating: '',
      recommended: null,
      // date: '',
      // email: ''
      date: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleStar = this.handleStar.bind(this);
  }


  handlePost(e) {
    this.props.onClose();

    //axios request to get current person logged in id
    var date = new Date().getTime()
    var stateDate = new Date(date)
    this.setState({
      date: stateDate
    },() => {
      if(this.state.recommended === 'true'){


      const send = {

        rating: this.state.rating,
        review: this.state.review,
        recommend: true,
        createdAt: this.state.date
      }
      console.log(JSON.stringify(send))
    } else if(this.state.recommended === 'false'){
      const send = {
        rating: this.state.rating,
        review: this.state.review,
        recommend: false,
        createdAt: this.state.date
      }
      console.log(JSON.stringify(send))
    }

      ///axios post review
      // axios.post('/api/review/', send)
      // .then()
    console.log(this.state)
    })
  }
  handleStar = (e, { rating, maxRating }) =>
  this.setState({ rating, maxRating })

  handleChange(e) {

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Form>
          {/* <Form.Group widths="equal">
            <Form.Field
              control={Input}
              onChange={this.handleChange}
              label="First name"
              name="firstName"
              placeholder="First name"
            />
            <Form.Field
              control={Input}
              onChange={this.handleChange}
              label="Last name"
              name="lastName"
              placeholder="Last name"
            />
             <Form.Field
            control={Input}
            onChange={this.handleChange}
            label="Email"
            name="email"
            placeholder="Email"
          />
          </Form.Group> */}
          <Form.Field
            control={TextArea}
            onChange={this.handleChange}
            label="Review"
            name="review"
            placeholder="Leave A Review..."
          />

          <h5>Rating</h5>
           <div>
          <Rating   maxRating={5} defaultRating={0} icon='star' size='huge' onRate={this.handleStar} />
          </div>
          <h5>Recommended</h5>
          <Form.Group>

<input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="true" name="recommended" onChange={this.handleChange} />
{' '}
Yes
<input style={{ marginRight: '5px', marginLeft: '15px' }} type="radio" value="false" name="recommended" onChange={this.handleChange} />
{' '}
No


</Form.Group>
          <br/>
          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />


          <Form.Field control={Button} onClick={this.handlePost}>Submit</Form.Field>
        </Form>
      </div>
    );
  }
}

export default ReviewsForm;
