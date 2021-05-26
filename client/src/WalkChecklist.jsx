import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
} from 'semantic-ui-react';



class WalkChecklist extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.onClose()
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field
                        name="pee"
                        control={Checkbox} 
                        label="Peed"
                        />
                    <Form.Field
                        name="poop"
                        control={Checkbox} 
                        label="Pooped"
                        />
                    <Form.Field
                        name="squirrel"
                        control={Checkbox} 
                        label="Squirrel sighting"
                        />
                    <Form.Field
                        name="friends"
                        control={Checkbox} 
                        label="Met some dog friends"
                        />
                    <Form.Field
                        name="fun"
                        control={Checkbox} 
                        label="Had a doggone good time"
                        />
                    <Form.Field control={Button} onClick={this.handleClose}>Submit</Form.Field>
                </Form>
            </div>
        )
    }


}

export default WalkChecklist;