import React, {Component} from 'react'
import './Header.css'
import Search from '../UI/Search/Search'
import {withRouter,Link}from 'react-router-dom'
import Cart from '../Cart/Cart'
import {connect} from 'react-redux'
import { searchFilter } from '../../store/actions/filter'

class Header extends Component {

    filterHandler(e) {
        this.props.searchFilter(this.props.products,e.target.value)
    }
    render() {
        return (
            <div className="header">
                    <div className="header-box bg-light">
                        <div className="container">
                            <div className="header-box__container">
                                <div className="header-box__logo-box">
                                    <Link to="/">
                                        <img className="header-box__logo-img" src="/images/shop_header.png" alt="Shop logo" />
                                    </Link>
                                </div>
                                <div className="header-box__search">
                                    <Search onChange={(e)=>this.filterHandler(e)}/>
                                </div>
                                <div className="header-box__cart">
                                    <Cart />
                                </div>
                            </div>
                        </div>        
                </div> 
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.home.products,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        searchFilter: (products,value)=>dispatch(searchFilter(products,value, ownProps))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))