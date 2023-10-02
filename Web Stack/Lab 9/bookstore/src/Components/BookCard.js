import React, { useState } from 'react';
import "./BookCard.css";
import BookReview from './Bookreview';

export default function BookCard(props) {

    const [showReviews, setShowReviews] = useState(false);

    const toggleReviews = () => {
        setShowReviews(!showReviews);
    };

    return (
        <>
            <div className='book container-fluid row border border-primary mt-3 rounded'>
                <div className='col-4 p-3'>
                    <img src={props.book.imageLinks?.thumbnail || "no-image-available.jpg"}
                        className="cards"
                        alt={props.book.title} />
                </div>
                <div className='col-8 p-3'>
                    <div className='row fw-bold'>{props.book.title}</div><br></br>
                    <div className='row'><p id="desc" >{props.book.description || "No description available."}</p></div>
                    <br></br>
                    <div className='row'>
                        
                        <button className="btn btn-primary" onClick={toggleReviews}>
                            {showReviews ? "Hide Reviews" : "Show Reviews"}
                        </button>
                        {showReviews && <BookReview book={props.book} />}
                    </div>
                </div>
            </div>

        </>
    )

}