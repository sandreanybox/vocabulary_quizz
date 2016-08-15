import React from 'react';
import ReactDOM from 'react-dom';
import {Input, Button, FormGroup, FormControl} from 'react-bootstrap';

class NewDictionary extends React.Component {
  render() {
    const {error} = this.props;

    return (
      <form className="new-dictionary" onSubmit={this.createDictionary.bind(this)}>
        <h2>Add New Dictionary</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <FormGroup controlId="FormName">
          <FormControl
              ref="name"
              type="text"
              placeholder="Enter name"
          />
        </FormGroup>
        <FormGroup controlId="FormlangOrigin">
          <FormControl
              ref="langOrigin"
              type="text"
              placeholder="Enter langOrigin"
          />
        </FormGroup>
        <FormGroup controlId="FormlangLearn">
          <FormControl
              ref="langLearn"
              type="text"
              placeholder="Enter langLearn"
          />
        </FormGroup>
        <FormGroup>
        <Button type="submit">Add New Dictionary</Button>
        </FormGroup>
      </form>
    );
  }

  createDictionary(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;

    const langOrigin = ReactDOM.findDOMNode(this.refs.langOrigin).value.trim();
    const langLearn = ReactDOM.findDOMNode(this.refs.langLearn).value.trim();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    create(name, langOrigin, langLearn);
  }
}

export default NewDictionary;
