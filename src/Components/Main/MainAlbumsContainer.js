import React from "react";
import MainAlbums from "./MainAlbums";

const MainAlbumsContainer = ({ albums, addToList }) => {
    
    return (
        <div style={{"width": "80%", "margin": "0 auto"}} className="mainAlbumsContainer">
            {albums.length === 0 ? null :
              <React.Fragment>
                <h2>Choose an album to add to your list</h2>
                <MainAlbums
                        albums={albums}
                        addToList={addToList}
                    />
            </React.Fragment>
            }
        </div>
    )
}

export default MainAlbumsContainer;