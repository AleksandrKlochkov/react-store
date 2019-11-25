import React, {Component} from 'react'
import './ProductsCart.css'

import {fetchCart, removeItemCart} from '../../store/actions/cart'
import {connect} from 'react-redux'
import uniqBy from 'lodash/uniqBy'

class ProductCart extends Component {

    componentDidMount() {
        this.props.fetchCart()
    }

    renderCart(cart) {
        return  cart.map((item, index) => {
            return (
                <tr key={index}>
                    <td data-label="#">{index + 1}</td>
                    <td>{item.title}</td>
                    <td data-label="Цена">{item.price} руб</td>
                    <td><button onClick={this.props.removeItemCart.bind(this,item.id)} type="button" className="btn btn-danger btn-sm">Удалить</button></td>
                </tr>
            )
        })
    }

    render(){
        return (
            <div className="product-cart">
                <div className="product-cart__title">
                    <h2>Корзина</h2>
                </div>
                {this.props.cart.length>0
                ?
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Название</th>
                                <th>Количество</th>
                                <th>Стоимость</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Итого">{this.props.totalPrice} руб.</td>
                                <td data-label="Товаров">{this.props.count}</td>
                            </tr>
                            {this.renderCart(this.props.cart)}
                        </tbody>
                        </table>
                    <button type="button" className="btn btn-primary btn-sm">Оформить заказ</button>
                </div>
                :
                <p>Корзина пуста</p>
            }
            </div>
        )
    }
}

function mapStateToProps(state) {    
    return {
        cart: uniqBy(state.cart.items, o => o.id), 
        count: state.cart.items.length, 
        totalPrice: state.cart.items.reduce((total, item) => total + item.price, 0),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCart()),
        removeItemCart: (id) => dispatch(removeItemCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCart)