import React from "react";

const MainAlbums = ({ albums, addToList }) => {

    return (
        <div className="albumContainer" style={{
            "width": "100%",
            "display": "flex",
            "flexWrap": "wrap",
            "borderLeft": "2px solid black",
            "borderRight": "2px solid black"
        }}>
            {
                albums.length !== 0 ?
                    albums.map((album, i) => {
                    return(
                        <div key={i} style={{
                            "width": "calc(33.3% - 4rem)",
                            "padding": "2rem",
                            "position": "relative"
                        }}>
                            <img src={album.image[3]["#text"]} alt="" style={{ "width": "100%" }} />
                            <button className="addAlbum" style={{
                                "position": "absolute",
                                "bottom": "0",
                                "left": "0",
                                "zIndex": "1"
                            }} onClick={addToList}>Add Album</button>
                            {/* <h3>{album.name}</h3> */}
                         </div>
                        )
                    })
                    :
                   console.log("drake")
            }
        </div>
    )
}

export default MainAlbums;