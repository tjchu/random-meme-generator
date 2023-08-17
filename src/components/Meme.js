import React from "react"
import memesData from "../data/memesData.js"

function Meme() {
    /*     
    constructor(props) {
      super(props);
      this.state = {
        img_url: ""
      };
    } 
    */

    function generateRandomMemeURL(max) {
        const memesList = memesData.data.memes
        const randomNum = Math.floor(Math.random() * max)
        const url = memesList[randomNum].url
        console.log(url)
        return url
    }

    const defaultImgURL = "https://i.imgflip.com/3si4.jpg"
    const [imgURL, setImgURL] = React.useState(defaultImgURL)

    function handleClick() {
        setImgURL(generateRandomMemeURL(100))
    }

    return (
        <div className="App-hero">
            <div className="inputs">
                <input type="text" className="input-box" placeholder="Shut up" />
                <input type="text" className="input-box" placeholder="and take my money" />
            </div>
            <button className="generate-button">
                <div className="generate-button-text" onClick={handleClick}>Get a new meme image  🖼</div>
            </button>
            <img className="meme-image" src={imgURL} alt="randomly generated meme"/>
        </div>
    )
}

export default Meme
