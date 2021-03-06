import React from 'react'
import './Breadcrumb.css'
import {withRouter,Link} from 'react-router-dom'

const Breadcrumb = props => {
    return (
        <div className="pagination-links-tags-b">
            <div className="pagination-links-tags-cont">
                <ul className="ul-pagination-links-tags">
                    <li><Link to="/">Главная</Link></li>
                    <li><i className="fa fa-chevron-right icon"></i></li>
                    <li><Link className="activ-pagination-links-tags" to={props.match.url}>{props.title}</Link></li>
                    <li><i className="fa fa-chevron-right icon"></i></li>
                </ul>
            </div>   
        </div>
    )
}

export default withRouter(Breadcrumb)