import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateItem } from "../redux/actions/shelf";
import "../css/EditItemForm.css";

class EditItemForm extends Component {
  state = {
    id: "",
    name: "",
    category: "",
    price: "",
    redirect: false
  };

  componentDidMount() {
    this.setState({
      id: this.props.location.state.id,
      name: this.props.location.state.name,
      category: this.props.location.state.category,
      price: this.props.location.state.price
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let user_id = this.props.user_id;
    let shelf_id = user_id;
    this.props.updateItem(user_id, shelf_id, this.state);
    setInterval(() => {
      this.setState({
        redirect: true
      });
    }, 1750);
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/shelf" />;
    }
  };

  render() {
    console.log(this.state, "edit form");
    return (
      <div>
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit} id="editItemForm">
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          ></input>
          <br />
          <button>Edit Item</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { updateItem })(EditItemForm);