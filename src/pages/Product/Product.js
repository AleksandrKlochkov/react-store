import React, {Component} from 'react'
import './Product.css'
import {fetchProduct} from '../../store/actions/product'
import {addToCart} from '../../store/actions/cart'
import {connect} from 'react-redux'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Spinner from '../../components/Spinner/Spinner'
import Button from '../../components/UI/Button/Button'

import {withRouter,Link} from 'react-router-dom'


class Product extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        if(id){
            this.props.fetchProduct(id)
        }else{
            this.props.history.push('/')
        }
    }


    render(){
        return(
            <React.Fragment>
            {!this.props.loading ? 
            <div>
                <Breadcrumb title={this.props.product.title}/>
                 <div className="product-page-content">
                            <div className="product-page-text-cont-b">
                                <div className="product-page-b">
                                    <div className="img-picture-product-line">
                                            <div className="product-pictures-line">
                                                <img src={`/images/${this.props.product.imgSrc}`} alt="Product images"/>
                                            </div>
                                    </div>  
                                    <div className="text-product-line">
                                        <div className="product-category-names-line">
                                            <ul className="ul-product-category-names-line">
                                                <li>{this.props.product.category}</li>
                                            </ul>
                                                <h3>{this.props.product.title}</h3>
                                        </div>
                                        <div className="product-item number">
                                                <p>Артикул: <span>{this.props.product.article}</span></p>
                                        </div>
                                        <div className="product-text-short-description">
                                            <p>{this.props.product.shortDiscription}</p>
                                        </div>
                                    </div>

                                    <div className="text-product-line-two">
                                        <div className="produc-price-sale-b-line">
                                            <div className="product-price-b-line">
                                                {this.props.product.discont>0 ?<p className="old-price-p-line"><span>{+this.props.product.price + ((+this.props.product.price * +this.props.product.discont)/100)} руб.</span> -{((+this.props.product.price * +this.props.product.discont)/100)}</p>: null}
                                                <p className="price-p-line">{this.props.product.price} руб.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-pay-default-btn-b-line">
                                        <Button onClick={this.props.addToCart.bind(this, this.props.product.id)} className="add-cart">В корзину</Button>
                                    </div>
                                </div>
                            </div>
                      </div>

                        <div className="product-page-menu-b">
                            <ul className="ul-product-menu-description">
                                <li><Link className="a-product-description-activ" to="#">ОПИСАНИЕ</Link></li>
                            </ul>
                        </div>

                       <div className="product-page-menu-text-b">
                            <ul className="ul-product-menu-description">
                                <li>
                                    <div>
                                        <p>{this.props.product.description}</p>
                                     </div>
                                </li>
                            </ul>
                       </div>
            </div>
            : 
            <Spinner/> }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.product.product,
        loading: state.product.loading
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id, ownProps)),
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Product))
