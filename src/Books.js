import React, { Component } from '../client/node_modules/@types/react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    // We want to pass this into the Search Area component so we can use it.
    searchBook = (event) => {
        // Prevent the form from acting up
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
        
                // Debugging
                // console.log(JSON.stringify(data.body.items, null, 2));

                // Using the spread operator to spread all items into new array
                this.setState({books: [...data.body.items]})
            })
    }

    // Sets our state every time we type into the input box.
    // We want to pass this method in as a prop to our SearchArea component.
    handleSearch = (event) => {

        // Debugging
        // console.log(event.target.value);

        this.setState({searchField: event.target.value })
    }
    render(){
        return(
        <div>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
        <BookList books={this.state.books}/>
        </div>
        );  
    } 
}

export default Books;
