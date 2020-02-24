import React from 'react';
import BookCard from './BookCard';
// Really helpful video: https://www.youtube.com/watch?v=l7ANPZkiWBo
const BookList = (props) => {
    console.log(JSON.stringify(props, null, 2))
    return (
        <div className="list">
            {
                // Mapping over the array of book data and for every book create a book card component.
                props.books.map((book, index) => {
                    // We need to pass all these props down to our BookCard component so we can render the info we want.
                    return <BookCard 
                                key={index}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                                description={book.volumeInfo.description}
                            />
                })
            }
        </div>
    )
}

export default BookList;