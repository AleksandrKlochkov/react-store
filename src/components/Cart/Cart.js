import React, {Component} from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Cart extends Component {

render() {
    return (
        <div className="cart">
            <Link to="/">
                <div className="cart__icon">
                    <span>{this.props.count}</span>
                </div>
                <p>Корзина<br/><span>{this.props.totalPrice} руб</span></p> 
            </Link>
        </div>
    )
}
}

function mapStateToProps(state) {    
    return {
        count: state.cart.items.length, 
        totalPrice: state.cart.items.reduce((total, item) => total + item.price, 0),
    }
}

export default connect(mapStateToProps)(Cart)