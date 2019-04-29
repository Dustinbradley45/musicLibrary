import React from "react";
import SearchForm from "./SearchForm";

const MainHeader = ({ artists, allAlbums, onChange, onSearchSubmit, artistSelect }) => {

    return (
        
        <React.Fragment>
        {
                artists.length === 0 ?
                    <SearchForm
                        onChange={onChange}
                        onSearchSubmit={onSearchSubmit}
                    />
                    :
                    <div>
                     <SearchForm
                        onChange={onChange}
                        onSearchSubmit={onSearchSubmit}
                    />
                    <select>
                        <option value="chooseAlbum">--- Choose Album ---</option>
                    {               
                        artists.map((eachArtist, i) => {               
                            return (
                                <option key={i} onClick={artistSelect}>
                                    {eachArtist.name}
                                </option>
                            )
                        })
                    }
                    </select>
                </div>
                   
            }
        </React.Fragment>
    )
}

export default MainHeader;