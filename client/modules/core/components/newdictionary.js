import React from 'react';

class NewDictionary extends React.Component {
  render() {
    const {error} = this.props;

    return (
      <form className="new-dictionary" onSubmit={this.createDictionary.bind(this)}>
        <h2>Add New Dictionary</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="langOrigin" type="text" placeholder="Dictionary langOrigin" /> <br/>
        <input ref="langLearn" type="text" placeholder="Dictionary langLearn" /> <br/>
        <button type="submit">Add New Dictionary</button>
      </form>
    );
  }

  createDictionary(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;
    const {langOrigin, langLearn} = this.refs;

    create(langOrigin.value, langLearn.value);
  }
}

export default NewDictionary;
