import React, { Component } from "react";
import { getShelfItems } from "../redux/actions/shelf";
import { connect } from "react-redux";
import ItemList from "../components/ItemList";
import "../css/Item.css";

class Item extends Component {
  componentDidMount() {
    console.log(this.props, "Item");
    let shelf_id = this.props.match.params.shelf_id;
    this.props.getShelfItems(shelf_id);
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return <ItemList items={this.props.items} />;
    }
  };

  render() {
    return (
      <>
        <div id="main-content">
          <Ad />
        </div>
        <div id="shelf">
          <h3>Items</h3>
          {this.handleLoading()}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.shelf.items,
    loading: state.shelf.loading
  };
};

export default connect(mapStateToProps, { getShelfItems })(Item);
