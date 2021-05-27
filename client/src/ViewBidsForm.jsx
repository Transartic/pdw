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

class ViewBidsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      bid: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost() {
    const { handleClose } = this.props;
    console.log(this.state);
    handleClose();
  }

  handleChange(e, { name, value }) {
    this.setState({
      user: name,
      bid: value,
    });
  }

  render() {
    return (
      <Form>

        <h4>Current Bids</h4>
        <h5>Select one and submit to accept your walker!</h5>
        <div>
          {
            this.props.bids.map((bid) => {
            return (<Form.Field key={bid.username}>
              <Checkbox
                radio
                label={`${bid.bidder_id} has placed a bid of ${bid.bid}`}
                name={bid.bidder_id}
                value={bid.bid}
                checked={this.state.user === bid.bidder_id}
                onChange={this.handleChange}/>
            </Form.Field>)
          })
        }
        </div>
        <Form.Field control={Button} onClick={this.handlePost}>Submit</Form.Field>
      </Form>
    );
  }
}

export default ViewBidsForm;
