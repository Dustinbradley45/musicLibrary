import React from "react";

const SearchForm = ({onChange, onSearchSubmit}) => {
    return (
        <form type="submit" onSubmit={onSearchSubmit}>
            <input type="text" name="artistQuery"
                onChange={onChange}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;