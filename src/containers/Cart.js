import React, { Component } from 'react';
import { getCart, removeItemFromCart } from '../redux/actions/cart';
import { connect } from 'react-redux';
import CartList from '../components/CartList';

class Cart extends Component {

  componentDidMount() {
    let id = this.props.user_id
    //let id = this.props.match.params.id
    this.props.getCart(id)
  }

  handleLoading = () => {
      if (this.props.loading) {
        return <div>Loading...</div>
      } else {
        return <CartList cart={this.props.cart} user_id={this.props.user_id} removeItem={this.props.removeItemFromCart} />
      }
  }

  itemsInCart = () => {
    let num = this.props.cart.filter(item => {
      return item.shelf_id !== this.props.user_id
    })
    return num.length
  }

  render() {
    return (
      <div id='cart'>
        {<h2>{this.itemsInCart()} item(s) in cart</h2>}
        {this.handleLoading()}
      </div>
    )}
}

const mapStateToProps = state => {
  return {
    cart: state.cart.items,
    loading: state.cart.loading
  }
}



export default connect(mapStateToProps, { getCart, removeItemFromCart })(Cart);