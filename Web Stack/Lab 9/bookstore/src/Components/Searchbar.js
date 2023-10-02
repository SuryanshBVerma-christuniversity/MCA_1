import React from 'react'

export default function Searchbar(props) {
    return (
        <div className='bg-dark'>
            <form className="d-flex p-3" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="searchbar"
                    onChange={(event) => {
                        const searchValue = event.target.value; // Capture the search value
                        // Optionally update a state or do something with the search value
                    }}
                />
                <button className="btn btn-outline-success" type="submit" onClick={(event) => {
                    event.preventDefault();
                    const searchValue = document.getElementById('searchbar').value; // Capture the search value
                    props.search(searchValue)
                    // console.log(searchValue);
                }}>
                    Search
                </button>
            </form>
        </div>
    )
}