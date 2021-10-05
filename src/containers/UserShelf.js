import React, { Component } from "react";
import { getUserShelfItems, addItemToShelf } from "../redux/actions/shelf";
import { connect } from "react-redux";
import UserShelfItemList from "../components/UserShelfItemList";
import AddItemForm from "../components/AddItemForm";
import "../css/UserShelf.css";

class UserShelf extends Component {
  componentDidMount() {
    // hard coded user_id, and shelf_id
    let user_id = this.props.user_id;
    let shelf_id = user_id;
    this.props.getUserShelfItems(user_id, shelf_id);
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return <UserShelfItemList items={this.props.items} />;
    }
  };

  render() {
    return (
      <div id="user-shelf">
        <AddItemForm
          addItem={this.props.addItemToShelf}
          user_id={this.props.user_id}
        />
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.shelf.items,
    loading: state.shelf.loading
  };
};

export default connect(mapStateToProps, { getUserShelfItems, addItemToShelf })(
  UserShelf
);