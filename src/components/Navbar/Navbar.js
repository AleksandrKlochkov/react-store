import React, {Component} from 'react'
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom'

class Navbar extends Component{

    toggleLinks(event){  
        event.preventDefault()
        const $el = this.toggleLinksRef
        $el.style.display = ($el.style.display === 'none') ? 'block' : 'none'
    }

    renderLinks(links){
        return links.map((link, index)=> {
            return (
                 <li 
                    key={index}
                    className="nav-item"
                 >
                    <NavLink exact={link.exact} className="nav-link text-light" to={link.to}>{link.title}</NavLink>
               </li>
            )
        })
    }

    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand text-light" to="/">SHOP</Link>
                        <button onClick={(event)=>this.toggleLinks(event)} className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" ref={(toggleLinksRef) => this.toggleLinksRef = toggleLinksRef}>
                            <ul className="navbar-nav ml-auto">
                                {this.props.navLinks ? this.renderLinks(this.props.navLinks) : null}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}



export default Navbar