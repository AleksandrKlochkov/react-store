import React, {Component} from 'react'
import './CardsLine.css'

import {Link} from 'react-router-dom'
import Button from '../../../components/UI/Button/Button'
import {connect} from 'react-redux'
import {addToCart} from '../../../store/actions/cart'
class CardsLine extends Component {

    renderCardsLines(products) {
        if(products.length > 0) {
            return products.map((item, index) => {
                return (
                    <li key={index}>
                        <div>
                            <div className="img-picture-product-line">
                                <div className="product-pictures-line">
                                    <Link to={`/product/${item.id}`} >
                                        <img src={`/images/${item.imgSrc}`} alt="Product images"/>
                                    </Link>
                                </div>
                            </div>	
                
                            <div className="text-product-line">
                                <div className="product-category-names-line">
                                    <ul className="ul-product-category-names-line">
                                        <li>{item.category}</li>
                                        <li><i className="fa fa-chevron-right icon"></i></li>
                                    </ul>
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="product-item number">
                                    <p>Артикул: <span>{item.article}</span></p>
                                </div>
                                <div className="product-text-short-description">
                                    <p>{item.shortDiscription}<Link to={`/product/${item.id}`} > подробнее...</Link></p>
                                </div>  
                            </div>
                
                            <div className="text-product-line-two">
                                <div className="produc-price-sale-b-line">
                                    <div className="product-price-b-line">
                                        {item.discont>0 ? <p className="old-price-p-line"><span>{+item.price + ((+item.price * +item.discont)/100)} руб.</span> -{((+item.price * +item.discont)/100)}</p>: null}
                                        <p className="price-p-line">{item.price} руб.</p>
                                    </div>
                                </div>
                            </div>
                
                            <div className="product-pay-default-btn-b-line">
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
            <ul className="ul-content-product-line">
                { this.renderCardsLines(this.props.products) }
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(CardsLine)