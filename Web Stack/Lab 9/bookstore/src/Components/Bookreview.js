import React, { useState } from 'react'

export default function BookReview() {
    const [reviewText, setReviewText] = useState("");
    const [reviews, setReviews] = useState([]);

    const handleReviewSubmit = () => {
        if (reviewText.trim() !== "") {
            setReviews([...reviews, reviewText]);
            setReviewText("");
        }
    };

    return (
        <div className="book-reviews">
            <h3 className='display-6'>Book Reviews</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
            <textarea
                rows="3"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review..."
                className='form-control'
            />
            <button className= "mt-3 btn btn-success" onClick={handleReviewSubmit}>Submit Review</button>
        </div>
    )
}