import React, {Component} from 'react';

import './add-item.css'

export default class AddItem extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label:''
    })
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        
        <input type="text"
          className="form-control search-input"
          placeholder = "item"
          onChange={this.onLabelChange}
          value={this.state.label}/>
        <button 
          type="submit" 
          className="btn btn-primary btn-width">
          Add
        </button> 
      </form>
    )
  }
}

