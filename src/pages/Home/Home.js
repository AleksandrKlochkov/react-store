import React, {Component} from 'react'
import './Home.css'
import CardsTable from '../../components/Cards/CardsTable/CardsTable'
import CardsLine from '../../components/Cards/CardsLine/CardsLine'
import Sorting from '../../components/Sorting/Sorting'
import Spinner from '../../components/Spinner/Spinner'
import {fetchProducts} from '../../store/actions/home'
import { Error404 } from '../Error404/Error404'

import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'



class Home extends Component{

    componentDidMount() {
        this.props.fetchProducts()
    }

    render(){
        return(
            <div>
                 <div className="conent-product-b">   
                
                    <Switch>        
                        <Route path="/home/tables">
                        { !this.props.loading ?
                            <React.Fragment>
                                <Sorting />
                                <CardsTable products={this.props.products} />
                            </React.Fragment>
                        : <Spinner /> }
                        
                        </Route>
                        <Route path="/home/lines">
                        { !this.props.loading ?
                            <React.Fragment>
                                <Sorting />
                                <CardsLine products={this.props.products} />
                            </React.Fragment>
                        : <Spinner />}
                        </Route>
                        <Route component={Error404}/>
                    </Switch>
                </div>
            </div>  
        )
    }
}



function mapStateToProps(state) {
    return {
        products: state.home.products,
        loading: state.home.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: ()=> dispatch(fetchProducts()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)