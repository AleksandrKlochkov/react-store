import React from 'react'
import './Search.css'

const Search = props => {
    return (
        <div className="search">
            <input onChange={props.onChange} className="search__input" placeholder="Поиск..." type="text" />
        </div>
    )
}

export default Search