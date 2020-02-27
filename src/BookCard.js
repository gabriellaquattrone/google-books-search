import React from '../client/node_modules/@types/react';

const BookCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default BookCard;