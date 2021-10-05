import React, { Component } from "react";
import "../css/AddItemForm.css";
import DatetimeRangePicker from "react-datetime-range-picker";

class AddItemForm extends Component {
  state = {
    name: "",
    category: "",
    price: "",
    rented: true,
    date: new Date()
  };

  handleChange = event => {
    if (event.target) {
      this.setState({
        [event.target.name]: event.target.value
      });
    } else {
      this.setState({
        date: event
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    let user_id = this.props.user_id;
    let shelf_id = user_id;
    this.props.addItem(user_id, shelf_id, this.state);
    this.setState({
      name: "",
      category: "",
      price: "",
      date: new Date()
    });
  };

  render() {
    return (
      <div id="addItemForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            type="text"
            name="category"
            placeholder="category"
            value={this.state.category}
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            type="text"
            name="price"
            placeholder="price"
            value={this.state.price}
            onChange={this.handleChange}
          ></input>
          <br />
          Rental Range:
          <DatetimeRangePicker
            input={true}
            onChange={this.handleChange}
            value={this.state.date}
          />
          <br />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;