import React from '../client/node_modules/@types/react';

const SearchArea = (props) => {
    return (
       <div className="search-area">
           <form onSubmit={props.searchBook} action="">
               <input onChange={props.handleSearch} required="true" type="text"/>
               <button type="submit">Search</button>
           </form>
       </div>
    )
}

export default SearchArea;