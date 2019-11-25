import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import {connect} from 'react-redux'
import {addToCart} from '../../store/actions/cart'
import {fetchProducts} from '../../store/actions/home'

class Search extends Component {

    componentDidMount(){
        this.props.fetchProducts()
    }

    renderSearch(products){
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
                    <p>Ничего не найдено</p>
                )
            }
    }
       
        render(){
            return(
                <ul className="ul-content-product-table">
                    { this.renderSearch(this.props.filterResults || this.props.products) }
                </ul>
            )
        }
    
}

function mapStateToProps(state) {
    return {
        filterResults: state.filter.filterResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)