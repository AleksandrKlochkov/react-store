import React from 'react'
import './Sorting.css'

import {NavLink} from 'react-router-dom'

const Sorting  = () => {
    return (
           <div className="view-product-page-b">
               <ul className="ul-view-product-page">
                   <li><NavLink to="/home/tables"><img src="/images/table-t.png" alt="Tables product icon" /></NavLink></li>
                   <li><NavLink to="/home/lines"><img src="/images/line-t.png" alt="Lines product icon" /></NavLink></li>
               </ul>
           </div>
    )
}

export default Sorting 