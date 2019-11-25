import React, {Component} from 'react'
import './CardsTable.css'

import {Link} from 'react-router-dom'
import Button from '../../../components/UI/Button/Button'
import {connect} from 'react-redux'
import {addToCart} from '../../../store/actions/cart'

class CardsTable extends Component {

renderCardsTables(products){
    if(products.length>0){
        return products.map((item, index) => {
            return (
                <li key={index}>
                        <div>
                            <Link to={`/product/${item.id}`} >
                                <div className="product-pictures">
                                    <img src={`/images/${item.imgSrc}`} alt="" />
                                </div>
                        
                                <div className="product-category-names">
                                    <ul className="ul-product-category-names">
                                        <li>{item.category}</li>
                                        <li><i className="fa fa-chevron-right icon"></i></li>
                                    </ul>
                                    <h3>{item.title}</h3>
                                </div>
                        
                                <div className="produc-price-sale-b">
                                    <div className="product-price-b">
                                    {item.discont>0 ? <p className="old-price-p"><span>{+item.price + ((+item.price * +item.discont)/100)} руб.</span> -{((+item.price * +item.discont)/100)}</p>: null}
                                        <p className="price-p">{item.price} руб.</p>
                                    </div>
                                </div>
                            </Link>

                            <div className="product-pay-default-btn-b">
                            <Button onClick={this.props.addToCart.bind(this, item.id)} className="add-cart">В корзину</Button>      
                            </div>
                        </div>
                    </li>
                )
            })
        }else{
            return (
                <p>Товаров пока нет</p>
            )
        }
}
   
    render(){
        return(
            <ul className="ul-content-product-table">
                { this.renderCardsTables(this.props.products) }
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(CardsTable)