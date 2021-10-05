import React, { Component } from "react";
import { getShelves } from "../redux/actions/shelf";
import { connect } from "react-redux";
import ShelfList from "../components/ShelfList";
import "../css/Shelf.css";

class Shelf extends Component {
  componentDidMount() {
    this.props.getShelves();
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <ShelfList shelves={this.props.shelves} user_id={this.props.user_id} />
      );
    }
  };

  render() {
    return (
      <>
        <div id="main-content">
    
        </div>
        <div id="shelf">
          <h3>Shelves</h3>
          {this.handleLoading()}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    shelves: state.shelf.shelves,
    loading: state.shelf.loading
  };
};

export default connect(mapStateToProps, { getShelves })(Shelf);
