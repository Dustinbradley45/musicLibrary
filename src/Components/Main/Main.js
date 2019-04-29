import React from "react";
import Axios from "axios";
import MainHeader from "./MainHeader";
import MainAlbumsContainer from "./MainAlbumsContainer";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            api_key: "9c97e8b13f4625f5cb4cfe9fee37b336",
            artistQuery: null,
            artists: [],
            albums:[],
            artistAlbumQuery: null,
            artistAlbumAll: [],
            userListItem:[]

        }
    }

    
    artistSearch = () => {
        
    }

    onSearchSubmit = (e) => {
        e.preventDefault()
        Axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.search", {
                params: {
                    api_key: this.state.api_key,
                    artist: this.state.artistQuery,
                    format: "json"
                }
            })
            .then(res => {
                const artists = res.data.results.artistmatches.artist;
                
                this.setState({
                    artists: artists
                })
            })

    }

     onChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     };
    
    artistSelect = (e) => {
       
        this.setState({
            artistAlbumQuery: e.target.value
        }, () => {
                this.getAlbums();
           
            
        });
    }

    getAlbums = () => {
        Axios.get("http://ws.audioscrobbler.com/2.0/?method=album.search", {
            params: {
                api_key: this.state.api_key,
                album: this.state.artistAlbumQuery,
                format: "json"
            }
        })
        .then(res => {
            const albums = res.data.results.albummatches.album;

            const albumsWithImage = albums.filter(withImages => {
                return withImages.image[0]["#text"].length > 0;
            })
            this.setState({
                albums: albumsWithImage
            })

        })
    }

    addToList = (e) => {
        
        const albumChoice = this.state.albums.filter(album => {
            console.log(album)
            const albumName = album.name;
            const albumImage = album.image[3]["#text"];
            const albumArtist = album.artist;
            return album.name === this.state.artistAlbumQuery
          
                
        });

        this.setState({
            userListItem: albumChoice
        }, () => {
                // console.log(this.state.userListItem)
             
                this.state.userListItem.push(this.state.userListItem);
                console.log(this.state.userListItem)
        });
        
        

    }

    render() {
        const { artists, allAlbums, albums } = this.state;
        const { onChange, onSearchSubmit, artistSelect, addToList } = this;
        return (
            <div>
                <header>
                    <MainHeader
                        artists={artists}
                        onChange={onChange}
                        onSearchSubmit={onSearchSubmit}
                        artistSelect={artistSelect}
                    />
                </header>
                <main>
                    <MainAlbumsContainer
                        albums={albums}
                        addToList={addToList}
                        
                />

                </main>
            </div>
        )
    }
}

export default Main;